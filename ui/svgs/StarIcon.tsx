import { HTMLIcon, HTMLIconProps } from './HTMLIcon';

export const StarIcon = (props: Omit<HTMLIconProps, 'children'>): JSX.Element => {
	return (
		<HTMLIcon size="14px" top="-3px" left="-1px" noPointer={true} {...props}>
			*
		</HTMLIcon>
	);
};
