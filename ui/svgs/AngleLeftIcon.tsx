export const AngleLeftIcon = ({
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
			<polyline points="15 18 9 12 15 6"></polyline>
		</svg>
	);
};
