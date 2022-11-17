import { HTMLIcon, HTMLIconProps } from './HTMLIcon';

export const MenuIcon = (props: Omit<HTMLIconProps, 'children'>): JSX.Element => {
	return <HTMLIcon {...props}>☰</HTMLIcon>;
};
