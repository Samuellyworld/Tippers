// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

// importing relevant modules

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
// importing typography
import { Typography } from '../../../atoms/Typography';

// importing SVG image
import { WheelFrame } from '../../../svgs';

// importing styles components
import { SpinWrapper, WheelElement, WheelItem, WheelWrapper } from './index.styled';

// JSX Component with props
const SpinWheel = ({
	items,
	onSelectItem,
	spin,
	setResult
}: {
	items: string[];
	onSelectItem?: (arg: number) => void;
	setResult: (arg: string) => void;
	spin: boolean;
}): JSX.Element => {
	//selector
	const result = useSelector((state:RootState)=> state.result.result)
	// initial state
	const [selectedItem, setSelectedItem]: any = useState(null);
	const selectItem = () => {
		// if (selectedItem === null) {
		const selectedItem = result.randomWord
		if (onSelectItem) {
			onSelectItem(selectedItem);
		}
		setSelectedItem(selectedItem);
		setResult(items[selectedItem]);
		// } else {
		// 	setSelectedItem(null);
		// 	setTimeout(selectItem, 500);
		// }
	};
	useEffect(() => {
		if (spin) {
			selectItem();
		} else {
			setSelectedItem(null);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [spin]);
	const spinning = selectedItem !== null ? 'spinning' : '';

	return (
		<WheelWrapper>
			<SpinWrapper>
				<div className="wheel-container">
					<WheelFrame />
					<WheelElement
						className={`wheel ${spinning}`}
						items={items.length}
						selectedItem={selectedItem}
						// onClick={selectItem}
						>
						{items.length
							? items.map((item, index) => (
									<WheelItem className="wheel-item" key={index} index={index} item={item}>
										{item}
										<span>x</span>
									</WheelItem>
							  ))
							: null}
					</WheelElement>
				</div>
			</SpinWrapper>
			<Typography variant="p">Spin the wheel</Typography>
		</WheelWrapper>
	);
};

export default SpinWheel;
