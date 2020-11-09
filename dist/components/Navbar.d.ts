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
export declare const Navbar: React.FC<Props>;
export {};
