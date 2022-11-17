import { HTMLIcon, HTMLIconProps } from './HTMLIcon';

export const PlusIcon = (props: Omit<HTMLIconProps, 'children'>): JSX.Element => {
	return <HTMLIcon {...props}>+</HTMLIcon>;
};
