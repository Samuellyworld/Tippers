export const ImageIcon = ({
	size = '24',
	className
}: {
	size?: string;
	className?: string;
}): JSX.Element => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		className={className}
		viewBox="0 0 24 24"
		fill="none"
		stroke="gray"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round">
		<rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
		<circle cx="8.5" cy="8.5" r="1.5" />
		<polyline points="21 15 16 10 5 21" />
	</svg>
);
