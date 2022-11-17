import React from 'react';

export const Arrow = ({
	point = 'right',
	size = '1.5rem',
	color = 'currentColor'
}: {
	point?: 'left' | 'right' | 'bottom' | 'top';
	size?: string;
	color?: string;
}): JSX.Element => (
	<svg
		fill={color}
		version="1.1"
		id="Capa_1"
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		x="0px"
		y="0px"
		viewBox="0 0 512.002 512.002"
		enableBackground="new 0 0 512.002 512.002;"
		xmlSpace="preserve"
		height={size}
		width={size}
		transform={
			{
				left: 'rotate(180)',
				top: 'rotate(270)',
				bottom: 'rotate(90)',
				right: 'rotate(0)'
			}[point]
		}>
		<g>
			<g>
				<path
					d="M388.425,241.951L151.609,5.79c-7.759-7.733-20.321-7.72-28.067,0.04c-7.74,7.759-7.72,20.328,0.04,28.067l222.72,222.105
			L123.574,478.106c-7.759,7.74-7.779,20.301-0.04,28.061c3.883,3.89,8.97,5.835,14.057,5.835c5.074,0,10.141-1.932,14.017-5.795
			l236.817-236.155c3.737-3.718,5.834-8.778,5.834-14.05S392.156,245.676,388.425,241.951z"
				/>
			</g>
		</g>
		<g />
		<g />
		<g />
		<g />
		<g />
		<g />
		<g />
		<g />
		<g />
		<g />
		<g />
		<g />
		<g />
		<g />
		<g />
	</svg>
);
