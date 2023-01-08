// importing styled from styled components
import styled from 'styled-components';

// scroll container
export const ScrollContainer = styled.div`
    z-index: 10;
    display: flex;
    margin-top: -22px;
    height: 24px;
    width: 100vw;
    flex-direction: row;
    overflow: hidden;
    white-space: nowrap;
    position: relative;
    margin-left: -29px;

    .overlay::before, .overlay::after {
        background: unset !important;
    }
`

export const ScrollTextHolder = styled.div`
   margin-top: -10px;
   display: flex;
   flex-direction: row;
`



export const ScrollText = styled.p`
//    width: 10%;
   font-size: 0.8rem;
   font-weight: 500;
   word-spacing: 4px;
   text-transform : uppercase;
   gap: 1rem;
   display: flex;
   flex-direction: row;
   padding : 0px 30px;
   font-family: ${({ theme }) => theme.fonts.Inter};
   color : white; 

   span:nth-child(2) {
    font-size: 0.6rem;
   }
   @media screen and (max-width: 400px) {
       font-size: 12px;
       span:nth-child(2) {
        font-size: 9px;
       }
   }

`