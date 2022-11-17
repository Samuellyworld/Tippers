export const ForwardIcon = ({
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
				d="M12 11.874v4.357l7-6.69l-7-6.572v3.983c-8.775 0-11 9.732-11 9.732c2.484-4.388 6.237-4.81 11-4.81z"
				fill="#acacac"
			/>
			<rect x="0" y="0" width="20" height="20" fill="rgba(0, 0, 0, 0)" />
		</svg>
	);
};
