export const AngleRightIcon = ({
	className,
	size = '30'
}: {
	className?: string;
	size?: string;
}): JSX.Element => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			className={className}
			viewBox="0 0 24 20"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<polyline points="9 18 15 12 9 6"></polyline>
		</svg>
	);
};
