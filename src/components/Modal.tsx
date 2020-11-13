import React, { useEffect, useState } from 'react'
import ReactModal, { Props as _ModalProps } from 'react-modal'
import { wait } from '@globalunderdog/common'
import { CommonStyleProps, Container } from '../style'

// To keep the functionality of `@globalunderdog/common-front` modal simple
// we won't be exposing these props and instead use the doc-commented values
// for simplicity.
export type ModalProps = CommonStyleProps &
  Omit<
    _ModalProps,
    // Counter-intuitive and breaks accessibility usage when false, we're going
    // to force this to true.
    | 'shouldCloseOnEsc'
    // we're not going to change class names through props
    | 'overlayClassName'
    | 'portalClassName'
    | 'htmlOpenClassName'
    | 'bodyOpenClassName'
    // We don't export the default `onRequestClose` from ReactModal since
    // we overwrite it with a `onRequestClose` that takes the hiding animation in
    // account
    | 'onRequestClose'
    | 'set'
  > & {
    setOpen: (open: boolean) => void
    /**
     * If a boolean is returned the modal is only going to close in case
     * `boolean === true`
     *
     * Useful for cases like a login form embedded in the modal, where we
     * await for a response--and in case anything wrong happens the modal
     * will stay in the screen.
     */
    onRequestClose?: () => Promise<boolean | void> | boolean | void
    /**
     * How many milliseconds does it take for the modal to show/hide on the default
     * animation. If `animate < 1` it disables animations.
     *
     * Defaults to 350ms
     */
    animateMS?: number
  }

const commonModalProps = (
  hiding: boolean,
  className?: string | ReactModal.Classes
): Partial<_ModalProps> => ({
  shouldCloseOnEsc: true,
  shouldCloseOnOverlayClick: true,
  shouldFocusAfterRender: true,
  overlayClassName: `modalOverlay ${hiding ? 'hiding' : ''}`,
  className: `modalCard ${className ?? ''} ${hiding ? 'hiding' : ''}`,
})

export const Modal: React.FC<ModalProps> = ({
  children,
  setOpen,
  className,
  onRequestClose,
  isOpen,
  animateMS = 350,
  ...props
}) => {
  useEffect(() => {
    ReactModal.setAppElement('body')
  }, [])
  const [hiding, setHiding] = useState<boolean>(false)
  const animated = animateMS > 0

  const hideModal = async () => {
    if (animated) {
      setHiding(true)
      // + 30ms so very slow computers can have smooth animations (usually
      // in these cases the js timeout might finish about 10-20 ms earlier
      // than the CSS animation)
      await wait((animateMS ?? 350) + 30)
      setOpen(false)
      setHiding(false)
    }
  }

  return (
    <ReactModal
      {...commonModalProps(hiding, className)}
      isOpen={isOpen || hiding}
      onRequestClose={async () => {
        const shouldClose = onRequestClose
          ? (await onRequestClose()) ?? true
          : true
        if (shouldClose && animated) {
          await hideModal()
        } else {
          setOpen(true)
        }
      }}
      {...props}
    >
      <Container>{children}</Container>
    </ReactModal>
  )
}
