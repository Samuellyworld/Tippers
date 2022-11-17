// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

export const scrollToElement = (element: { current: { scrollIntoView: (arg0: { behavior: string; }) => void; }; }) => {
	element.current?.scrollIntoView({ behavior: 'smooth' });
};
