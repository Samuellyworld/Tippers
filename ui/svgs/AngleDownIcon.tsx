export const AngleDownIcon = ({
	className,
	size = '1em',
	angle = 360
}: {
	className?: string;
	size?: string;
	angle?: number;
}): JSX.Element => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			aria-hidden="true"
			focusable="false"
			width={size}
			height={size}
			style={{ transform: `rotate(${angle}deg)` }}
			preserveAspectRatio="xMidYMid meet"
			viewBox="0 0 320 512">
			<path
				d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4l96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
				fill="#acacac"
			/>
			<rect x="0" y="0" width="320" height="512" fill="rgba(0, 0, 0, 0)" />
		</svg>
	);
};
