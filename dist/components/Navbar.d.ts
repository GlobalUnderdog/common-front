import { ReactNode } from 'react';
import { GUColorType, SerializedStyles } from '../style';
interface NavLinkProps {
    href?: string;
    label: string;
    button?: boolean;
    color?: GUColorType;
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
