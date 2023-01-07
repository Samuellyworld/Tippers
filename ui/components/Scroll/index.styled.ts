// importing styled from styled components
import styled from 'styled-components';

// scroll container
export const ScrollContainer = styled.div`
    z-index: 10;
    top: -3px;
    display: flex;
    height: 24px;
    width: 100%;
    padding: 10px 0px;
    flex-direction: row;
    overflow: hidden;
    white-space: nowrap;
    position: fixed;
`

export const ScrollTextHolder = styled.div`
   margin-top: -22px;
   display: flex;
   flex-direction: row;
`

export const ScrollTextGroup = styled.div`
    animation: 20s linear 0s infinite normal none running scrolling;
    display: inline-block;

    @keyframes scrolling {
        0% {
          transform: translate3d(0px, 0px, 0px);
        }
        100% {
          transform: translate3d(-100%, 0px, 0px);
        }
      }

      span {
        display: inline-block;
        width: 4px;
        height: 4px;
        border-radius: 100%;
        // background: var(--main-col);
        vertical-align: middle;
        margin: 0px 30px;

        @media screen and (max-width: 850px) {
            width: 4px;
            height: 4px;
            margin-top: -4px;
            margin-left: 18px;
            margin-right: 18px;
        }
      }
`

export const ScrollText = styled.p<{color: string}>`
   width: 100%;
   font-size: 1rem;
   font-weight: 500;
   word-spacing: 4px;
   text-transform : uppercase;
   padding : 20px 0px;
   font-family: ${({ theme }) => theme.fonts.Inter};
   color : ${({color}) => color ? "white" : "black"}; 
`