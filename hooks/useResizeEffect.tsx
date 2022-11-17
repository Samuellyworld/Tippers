import { useEffect, useLayoutEffect } from 'react';

type UseResizeEffect = (
	effect: (heightWidth: { height: number; width: number }) => void,
	wait?: number
) => void;
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
const getWindowHeightWidth = (): { width: number; height: number } => {
	return { height: window.innerHeight, width: window.innerWidth };
};

export const useResizeEffect: UseResizeEffect = (effect, wait = 300) => {
	let throttleTimeout: NodeJS.Timeout | number | null = null;
	const callBack = () => {
		const { height, width } = getWindowHeightWidth();
		effect({ height, width });
		throttleTimeout = null;
	};
	useIsomorphicLayoutEffect(() => {
		callBack();
		const handleResize = () => {
			if (wait) {
				if (throttleTimeout === null) {
					throttleTimeout = setTimeout(callBack, wait);
				}
			} else {
				callBack();
			}
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);
};
