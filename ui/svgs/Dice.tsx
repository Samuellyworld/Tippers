export const Dice = ({ size = '24px' }: { size?: string }): JSX.Element => (
	<svg width="150" height="95" viewBox="0 0 150 95" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g filter="url(#filter0_d_4_1760)">
			<rect x="4.00562" width="65.3733" height="65.3733" fill="url(#paint0_linear_4_1760)" />
			<circle cx="22.8004" cy="15.5262" r="4.08583" fill="white" />
			<circle cx="22.8004" cy="49.8472" r="4.08583" fill="white" />
			<circle cx="50.5841" cy="15.5262" r="4.08583" fill="white" />
			<circle cx="50.5841" cy="49.8472" r="4.08583" fill="white" />
			<circle cx="36.6923" cy="32.6867" r="4.08583" fill="white" />
			<rect
				x="80.8192"
				y="21.2463"
				width="65.3733"
				height="65.3733"
				fill="url(#paint1_linear_4_1760)"
			/>
			<circle cx="99.614" cy="36.7725" r="4.08583" fill="white" />
			<circle cx="127.398" cy="36.7725" r="4.08583" fill="white" />
			<circle cx="99.614" cy="71.0935" r="4.08583" fill="white" />
			<circle cx="127.398" cy="71.0935" r="4.08583" fill="white" />
			<circle cx="99.614" cy="53.933" r="4.08583" fill="white" />
			<circle cx="127.398" cy="53.933" r="4.08583" fill="white" />
		</g>
		<defs>
			<filter
				id="filter0_d_4_1760"
				x="0.312448"
				y="0"
				width="149.573"
				height="94.006"
				filterUnits="userSpaceOnUse"
				colorInterpolationFilters="sRGB">
				<feFlood floodOpacity="0" result="BackgroundImageFix" />
				<feColorMatrix
					in="SourceAlpha"
					type="matrix"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					result="hardAlpha"
				/>
				<feOffset dy="3.69317" />
				<feGaussianBlur stdDeviation="1.84658" />
				<feComposite in2="hardAlpha" operator="out" />
				<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
				<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_1760" />
				<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_1760" result="shape" />
			</filter>
			<linearGradient
				id="paint0_linear_4_1760"
				x1="36.6923"
				y1="0"
				x2="36.6923"
				y2="65.3733"
				gradientUnits="userSpaceOnUse">
				<stop />
				<stop offset="1" stopColor="#AF1AAC" />
			</linearGradient>
			<linearGradient
				id="paint1_linear_4_1760"
				x1="113.506"
				y1="21.2463"
				x2="113.506"
				y2="86.6196"
				gradientUnits="userSpaceOnUse">
				<stop />
				<stop offset="1" stopColor="#AF1AAC" />
			</linearGradient>
		</defs>
	</svg>
);

Dice.displayName = 'Dice';
