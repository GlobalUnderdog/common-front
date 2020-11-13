/** @jsx jsx */
import React from 'react'
import { styled, jsx, css } from '../style/emotion'

/**
 * Automatically hides children when `loading === true`, also allows the
 * usage of `<Loading/>` Component inside it.
 */
export const GUForm = styled.form<{ loading?: boolean }>`
  position: relative;
  /*
  We don't want to mess any component opacity when loading === false,
  considering that there might be elements with opacity = 0.2 we only
  load the opacity rule when loading === true
  */
  ${(p) =>
    p.loading
      ? css`
          & > * {
            opacity: 0;
            transition: ease 0.2s;
          }
        `
      : ''}
`

const _GULoading = styled.div<{ loading: boolean }>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: ${(p) => (p.loading ? 1 : 0)} !important;
  transition: opacity ease 0.2s;
  pointer-events: ${(p) => (p.loading ? 'all' : 'none')};
  background-color: ${(p) => p.theme.color.canvas.light};

  i {
    color: ${(p) => p.theme.color.ink.main};
  }
`

/**
 * Can be used as the last child of a `<Form />` element to automatically
 * create a loading indicator.
 */
export const GULoading: React.FC<{ loading: boolean; className?: string }> = ({
  loading,
  className,
}) => {
  return (
    <_GULoading loading={loading} className={className}>
      <i className='fa fa-loading fa-spin' />
    </_GULoading>
  )
}
