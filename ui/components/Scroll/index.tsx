// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

// importing styles from styled-component
import { ScrollContainer, ScrollTextHolder, ScrollTextGroup, ScrollText } from "./index.styled";
// JSX Component
const Scroll = () : JSX.Element=> {
    return (
      <ScrollContainer>
       <ScrollTextHolder>
        <ScrollTextGroup>
         <ScrollText color={"ook"}>

         </ScrollText>
        </ScrollTextGroup>
       </ScrollTextHolder>
      </ScrollContainer>
    )
}

export default Scroll;