export const RealStarIcon = ({
	className,
	size = '1em'
}: {
	className?: string;
	size?: string;
}): JSX.Element => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			aria-hidden="true"
			focusable="false"
			width={size}
			height={size}
			style={{ transform: 'rotate(360deg)' }}
			preserveAspectRatio="xMidYMid meet"
			viewBox="0 0 20 20">
			<path
				d="M18.8 8.022h-6.413L10 1.3L7.611 8.022H1.199l5.232 3.947l-1.871 6.929L10 14.744l5.438 4.154l-1.869-6.929L18.8 8.022zM10 12.783l-3.014 2.5l1.243-3.562l-2.851-2.3l3.522.101l1.1-4.04l1.099 4.04l3.521-.101l-2.851 2.3l1.243 3.562l-3.012-2.5z"
				fill=""
			/>
			<rect x="0" y="0" width="20" height="20" fill="rgba(0, 0, 0, 0)" />
		</svg>
	);
};
