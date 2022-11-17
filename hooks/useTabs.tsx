import React, { ReactNode, useState } from 'react';

interface TabConfig {
	text: string;
	component: React.ReactNode;
}

interface UseTabReturn {
	activeComponent: ReactNode;
	handleClickTab: (index: number) => void;
	activeIndex: number;
}

export interface UseTabProps {
	tabs: TabConfig[];
	defaultActiveIndex?: number;
}

export const useTabs = (props: UseTabProps): UseTabReturn => {
	const { tabs, defaultActiveIndex = 0 } = props;
	const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
	const handleClickTab = (index: number) => setActiveIndex(index);
	return {
		activeComponent: tabs[activeIndex]?.component,
		handleClickTab,
		activeIndex
	};
};
