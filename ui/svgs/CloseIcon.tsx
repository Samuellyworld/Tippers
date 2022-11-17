import { HTMLIcon, HTMLIconProps } from './HTMLIcon';

export const CloseIcon = (props: Omit<HTMLIconProps, 'children'>): JSX.Element => {
	return <HTMLIcon {...props}>⨉</HTMLIcon>;
};
