// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

//importing relevant module
import React from "react";
import { Typography } from "../../atoms/Typography";
import useSound from 'use-sound';

// const enterGameSound = require('../../../public/assets/sound/enter_game.mp3');

// import stylings
import { LandingpageContainer, LandingpageComponent1, StartButton, LandingpageComponent2} from "./index.styled";

const Landingpage = ():JSX.Element => {
    const [play]:any= useSound('/assets/sound/enter_game.mp3');
    const setRedirect:()=> void =  () => {
        play()
        setTimeout(() => {
            window.location.pathname = '/games'
        }, 1000)
        
    }
    return(
       <LandingpageContainer>
           <LandingpageComponent1>
               <Typography variant="h1">
                creating an incredible <span>gaming Experience </span>on the polygon chain
               </Typography>
               <StartButton 
                type="button"
                onClick={setRedirect}
                >
                 <span>Enter </span>        
               </StartButton>
              
           </LandingpageComponent1>
           <LandingpageComponent2>
               <img src="/assets/metaverse.png" alt="metaverse" />
           </LandingpageComponent2>
       </LandingpageContainer>
    )
}


export default Landingpage;