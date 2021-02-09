import { ReactNode } from 'react';
import { GUColorType, SerializedStyles } from '../style';
interface NavLinkProps {
    href?: string;
    child?: ReactNode;
    /** Compatibility leftover, you should be using child for customizing this instead. */
    label?: string;
    /** Compatibility leftover, you should be using child for customizing this instead. */
    button?: boolean;
    /** Compatibility leftover, you should be using child for customizing this instead. */
    color?: GUColorType;
    /** Compatibility leftover, you should be using child for customizing this instead. */
    onClick?: VoidFunction;
}
export interface GUNavbarProps {
    links: NavLinkProps[];
    css?: SerializedStyles | SerializedStyles[];
    className?: string;
    logo?: ReactNode;
    children?: never;
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
export declare const GUNavbar: React.FC<GUNavbarProps>;
export {};
