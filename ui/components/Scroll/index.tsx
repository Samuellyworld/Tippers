// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

// importing styles from styled-component
import { ScrollContainer, ScrollTextHolder, ScrollTextGroup, ScrollText } from "./index.styled";

interface wordsInterface {
    character : string,
    word : string
}
// JSX Component
const Scroll = () : JSX.Element=> {
    const words:wordsInterface[]= [
        {
            character: "🎲 ",
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
    ]
    return (
      <ScrollContainer>
       <ScrollTextHolder>
           {
              words.map((each, i) => (
                <ScrollTextGroup key={i}>
                 <ScrollText color={"ook"}>
                 {each?.word}
                 </ScrollText>
                <span>{each?.character}</span>
               </ScrollTextGroup>
              )) 
           }
       </ScrollTextHolder>
      </ScrollContainer>
    )
}

export default Scroll;