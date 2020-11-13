/** @jsx jsx */
import Link from 'next/link'
import { Fragment, ReactNode, useState } from 'react'
import {
  GUColorType,
  Container,
  css,
  Global,
  jsx,
  mediaQuery,
  SerializedStyles,
  styled,
  useTheme,
} from '../style'
import { GUButton } from './Button'

const globalVariables = (links: number) => css`
  /*
  Declaring these as CSS variables since they change according to devices'
  breakpoints.
  */
  :root {
    --navbarHeight: 56px;
    --navbarLinkHeight: 56px;
    --navbarExpandedHeight: calc(
      var(--navbarHeight) + (${links} * var(--navbarLinkHeight))
    );
  }
  ${mediaQuery.medium} {
    :root {
      --navbarHeight: 68px;
      --navbarExpandedHeight: var(--navbarHeight);
    }
  }
  body {
    margin-top: var(--navbarHeight);
  }
`

interface WrapperProps {
  expanded: boolean
  className?: string
}

const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  height: var(
    ${(p) => (p.expanded ? '--navbarExpandedHeight' : '--navbarHeight')}
  );
  position: absolute;
  top: 0;
  left: 0;

  color: ${(p) => p.theme.color.ink.light};
  background-color: ${(p) => p.theme.color.canvas.light};
  box-shadow: ${(p) =>
    p.expanded ? `0 2px 2px ${p.theme.color.ink.main}25` : 'none'};
  transition: ease 0.3s;

  /* Ensures it is on top of all content, but the Modal */
  z-index: 888;

  /* Container */
  & > div {
    display: flex;
    align-items: center;

    ${mediaQuery.small} {
      flex-flow: row wrap;
      justify-content: space-between;
    }
    height: 100%;

    & > img {
      width: 80px;
      object-fit: contain;
    }

    .toggleNavLinks {
      width: var(--navbarHeight);
      height: var(--navbarHeight);
      font-size: 18px;

      display: flex;
      justify-content: flex-end;
      align-items: center;
      &:focus {
        outline: none;
      }

      background: none;
      border: none;
      color: ${({ expanded, theme }) =>
        expanded ? theme.color.primary.main : theme.color.ink.light};
      transition: color ease 0.3s;
      ${mediaQuery.medium} {
        display: none;
      }
    }

    & > .links {
      display: flex;
      align-items: center;

      ${mediaQuery.small} {
        width: 100%;
        height: calc(var(--navbarExpandedHeight) - var(--navbarHeight));
        padding: 0;
        margin: 0;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        opacity: ${(p) => (p.expanded ? 1 : 0)};
        pointer-events: ${(p) => (p.expanded ? 'visible' : 'none')};
        /*
    The animation is faster when showing the menu in order for the text
    to render inside the wrapper.
    */
        transition: opacity ease ${(p) => (p.expanded ? '0.7s' : '0.15s')};
      }

      ${mediaQuery.medium} {
        flex: 4;
        justify-content: flex-end;
      }
    }
  }

  a {
    font-size: 16px;
    text-decoration: none;
    color: ${(p) => p.theme.color.ink.light};
    &:hover {
      color: ${(p) => p.theme.color.primary.main};
    }
    transition: color ease 0.2s;
    ${mediaQuery.small} {
      margin-bottom: 25px;
      display: flex;
      align-items: center;
      margin: 0;
    }
    ${mediaQuery.medium} {
      margin-right: 25px;
    }

    font-weight: 400;
    &.bold {
      font-weight: 700;
    }
  }
`

interface NavLinkProps {
  href?: string
  label: string
  button?: boolean
  color?: GUColorType
  onClick?: VoidFunction
}
const NavLink: React.FC<
  NavLinkProps & { setExpanded: (_: boolean) => void }
> = ({ href, label, button, color, setExpanded, onClick }) => {
  const theme = useTheme()

  const childOnClick = () => {
    if (onClick) onClick()
    setExpanded(false)
  }
  const Child: React.FC<{ href?: string }> = ({ href }) => {
    return button ? (
      <GUButton color={color} onClick={childOnClick}>
        {label}
      </GUButton>
    ) : (
      <a
        onClick={childOnClick}
        href={href}
        style={{ color: color ? theme.color[color].main : undefined }}
      >
        {label}
      </a>
    )
  }

  return href ? (
    <Link href={href} passHref={true}>
      <Child />
    </Link>
  ) : (
    <Child />
  )
}

interface Props {
  links: NavLinkProps[]
  css?: SerializedStyles | SerializedStyles[]
  className?: string
  logo?: ReactNode
  children?: never
}

/**
 * Navbar introduces 3 css variables which are available globally in the app:
 *
 *  * `var(--navbarHeight)`: actual height of the navbar;
 *  * `var(--navbarLinkHeight)`: height of each link in the navbar when expanded;
 *  * `var(--navbarExpandedHeight)`: total size of the expanded navbar;
 *
 * You can replace these values using Theme.global.css
 */
export const Navbar: React.FC<Props> = ({ links, logo, css, className }) => {
  const [expanded, setExpanded] = useState(false)

  // Declaring all links here so we can use Array.length for CSS heights,
  // note that in this case Preact doesn't need `key` prop in components.
  const mappedLinks = links.map(({ href, label, color, button, onClick }) => (
    <NavLink
      href={href}
      label={label}
      setExpanded={setExpanded}
      color={color}
      button={button}
      onClick={onClick}
    />
  ))

  return (
    <Fragment>
      <Global styles={globalVariables(links.length)} />
      <Wrapper expanded={expanded} css={css} className={className}>
        <Container>
          {/* Pass an empty div if there's no logo so NavLinks still work */}
          {/* (we need an element to expand the CSS Flex for .toggleNavLinks) */}
          <Link href='/'>{logo ?? <div />}</Link>

          <button
            className='toggleNavLinks'
            onClick={() => setExpanded(!expanded)}
          >
            <i className='fa fa-menu' />
          </button>

          <div className='links'>{mappedLinks}</div>
        </Container>
      </Wrapper>
    </Fragment>
  )
}
