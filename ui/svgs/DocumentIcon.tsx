export const DocumentIcon = ({
	className,
	size = '24'
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
			viewBox="0 0 32 32">
			<g fill="none">
				<path
					d="M8 2a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V10.828a3 3 0 0 0-.879-2.12l-5.828-5.83A3 3 0 0 0 18.172 2H8zM7 5a1 1 0 0 1 1-1h9v5a3 3 0 0 0 3 3h5v15a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5zm17.586 5H20a1 1 0 0 1-1-1V4.414L24.586 10z"
					fill="#626262"
				/>
			</g>
			<rect x="0" y="0" width="32" height="32" fill="rgba(0, 0, 0, 0)" />
		</svg>
	);
};
