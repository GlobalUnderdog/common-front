import React from 'react';
import { Props as _ModalProps } from 'react-modal';
import { CommonStyleProps } from '../style';
export declare type ModalProps = CommonStyleProps & Omit<_ModalProps, 'shouldCloseOnEsc' | 'overlayClassName' | 'portalClassName' | 'htmlOpenClassName' | 'bodyOpenClassName' | 'onRequestClose' | 'set'> & {
    setOpen: (open: boolean) => void;
    /**
     * If a boolean is returned the modal is only going to close in case
     * `boolean === true`
     *
     * Useful for cases like a login form embedded in the modal, where we
     * await for a response--and in case anything wrong happens the modal
     * will stay in the screen.
     */
    onRequestClose?: () => Promise<boolean | void> | boolean | void;
    /**
     * How many milliseconds does it take for the modal to show/hide on the default
     * animation. If `animate < 1` it disables animations.
     *
     * Defaults to 350ms
     */
    animateMS?: number;
};
export declare const Modal: React.FC<ModalProps>;
