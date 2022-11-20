import styled from "styled-components";

export const LandingpageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const LandingpageComponent1 =  styled.div`
  display : flex;
  flex-direction: column;
   align-items: center;
  h1 {
    font-family: ${({ theme }) => theme.fonts.Chopsic};
    font-weight: 400;
    font-size: 3rem;
	  color: #ffffff;
    line-height: 4.5rem;
    inline-size: 40rem;
    overflow-wrap: break-word;

    span {
        color: #E91CE5
    }
  }
`

export const StartButton = styled.button`
   
`

export const LandingpageComponent2 = styled.div`
   img {
   width: 35rem;
   height: 40rem;
   margin: -5rem 0rem 0rem -4rem;
   }
`