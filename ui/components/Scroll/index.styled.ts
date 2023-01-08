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

// export const ScrollTextGroup = styled.div`
//     animation: 15s linear 0s infinite normal none running scrolling;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: row;


//     @keyframes scrolling {
//         0% {
//           transform: translate3d(30px, 0px, 0px);
//         }
//         100% {
//           transform: translate3d(-100%, 0px, 0px);
//         }
//       }

//       span {
//         display: inline-block;
//         font-size: 10px;
//         vertical-align: middle;
//         margin: 0px 25px;

//         @media screen and (max-width: 850px) {
//             // width: 4px;
//             // height: 4px;
//             // // margin-top: -4px;
//             margin-left: 18px;
//             margin-right: 18px;
//         }
//       }
// `

export const ScrollText = styled.p<{color: string}>`
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
`