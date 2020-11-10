import { ReactNode } from 'react';
import { ColorType, SerializedStyles } from '../style';
interface NavLinkProps {
    href?: string;
    label: string;
    button?: boolean;
    color?: ColorType;
    onClick?: VoidFunction;
}
interface Props {
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
export declare const Navbar: React.FC<Props>;
export {};
