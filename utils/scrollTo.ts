export const scrollToElement = (element) => {
	element.current?.scrollIntoView({ behavior: 'smooth' });
};
