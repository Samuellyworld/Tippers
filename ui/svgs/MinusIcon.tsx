import { HTMLIcon, HTMLIconProps } from './HTMLIcon';

export const MinusIcon = (props: Omit<HTMLIconProps, 'children'>): JSX.Element => {
	return <HTMLIcon {...props}>−</HTMLIcon>;
};
