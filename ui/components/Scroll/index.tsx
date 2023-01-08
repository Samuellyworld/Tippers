// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

// importing styles from styled-component
import { ScrollContainer, ScrollTextHolder, ScrollText } from "./index.styled";
import Marquee from 'react-fast-marquee';

interface wordsInterface {
    character : string,
    word : string
}
// JSX Component
const Scroll = () : JSX.Element => {
    const words:wordsInterface[]= [
        {
            character: "💫",
            word : "Creating an incredible gaming experience on the polygon blockchain"
        },
        {
            character: "🔄",
            word : "Tippers is live on testnet"
        },
        {
            character: "🎈",
            word : "Play and earn"
        },
        {
            character: "🎲 ",
            word : "Tippers is live on testnet"
        },
        {
            character: "🎈",
            word : "Play and earn"
        },
        {
            character: "🎲 ",
            word : "Tippers is live on testnet"
        },
        {
            character: "🎈",
            word : "Play and earn"
        },
        {
            character: "🎲 ",
            word : "Tippers is live on testnet"
        },
        {
            character: "🎈",
            word : "Play and earn"
        },
        {
            character: "🎲 ",
            word : "Tippers is live on testnet"
        },  
        {
            character: "💫",
            word : "Creating An incredible gaming experience on the polygon blockchain"
        },   
        {
            character: "🎈",
            word : "Play and earn"
        },
        {
            character: "🎲 ",
            word : "Tippers is live on testnet"
        },  
        {
            character: "🎈",
            word : "Play and earn"
        },
        {
            character: "🎲 ",
            word : "Tippers is live on testnet"
        },     
        {
            character: "💫",
            word : "Creating An incredible gaming experience on the polygon blockchain"
        },
    ]
    return (
      <ScrollContainer>
       <ScrollTextHolder>
           <Marquee gradient={false} speed={25} pauseOnClick={true} pauseOnHover={true}>
          {
              words.map((each, i) => (
                 <ScrollText key={i}>
                 <span>{each?.word}</span>
                 <span>{each?.character}</span>
                 </ScrollText>
              )) 
           }
         </Marquee>
       </ScrollTextHolder>
      </ScrollContainer>
    )
}

export default Scroll;