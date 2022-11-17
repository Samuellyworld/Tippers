import { useRef } from 'react';
import { Typography } from '../../atoms/Typography';
import { CircleDownArrow, Coins, Dice, WheelIcon } from '../../svgs';
import { scrollToElement } from '../../../utils/scrollTo';

import { Bottom, GameCard, HomepageContainer, Top } from './index.styled';

const Homepage = (): JSX.Element => {
	const gamesRef: any= useRef(null);

	return (
		<HomepageContainer>
			<Top>
				<Typography variant="h3">Welcome to</Typography>
				<Typography variant="h1">Tippers</Typography>
				<CircleDownArrow onClick={() => scrollToElement(gamesRef)} />
			</Top>
			<Bottom ref={gamesRef}>
				<GameCard href="/dice">
					<Dice />
					<Typography variant="p">Roll Dice</Typography>
				</GameCard>
				<GameCard href="/coin">
					<Coins />
					<Typography variant="p">Coin toss</Typography>
				</GameCard>
				<GameCard href="/wheels">
					<WheelIcon />
					<Typography variant="p">
						Spin the <br /> wheel
					</Typography>
				</GameCard>
			</Bottom>
		</HomepageContainer>
	);
};

export default Homepage;
