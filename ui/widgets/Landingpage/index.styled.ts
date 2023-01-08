import styled from "styled-components";

export const LandingpageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const LandingpageComponent1 =  styled.div`
  display : flex;
  flex-direction: column;
  //  align-items: center;
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

  }
  @media screen and (max-width: 1000px) {
    h1 {
      font-size: 2.5rem;
      inline-size: 35rem;
    }
  }
  @media screen and (max-width: 580px) and (min-width: 516px) {
     h1 {
       font-size: 2rem;
       inline-size: 30rem;
    
     
     }
  }
  @media screen and (max-width: 516px) and (min-width: 442px) {
        padding-left: 5rem !important;
        h1 {
          font-size: 2rem;
          inline-size: 30rem;
        
        }
      }
   @media screen and (max-width: 442px) and (min-width: 350px) {
           justify-content: center !important;
           align-items: center !important;
           h1 {
            font-size: 1.6rem;
            inline-size: 23rem;
            padding-left: 1rem;
            line-height: 4rem;
          
          }
        }
  }
  @media screen and (max-width: 350px) and (min-width: 0px) {
    justify-content: center !important;
    align-items: center !important;

    h1 {
      font-size: 1.3rem;
      inline-size: 20rem;
      padding-left: 1rem;
    
    }
  }
`

export const StartButton = styled.button`
    position: relative;
    width: 12rem;
    height: 3rem;
    margin-top: 1rem;
    // margin: 20px;
    background: none;
    border: none;
    cursor: pointer;
    color: white;
    padding: 0;
    box-sizing: content-box;
    border: 2px solid transparent;

    &::before, &::after, span::before, span::after {
      display: block;
      content: "";
      width: 20px;
      height: 20px;
      position: absolute;
  }
  
  &::before {
      top: -2px;
      left: -2px;
      width: 0.9rem;
      height: 0.5rem;
      border-top: 2px solid white !important;
      border-left: 2px solid white !important;
      transition: 0.5s all;
  }
  &::after {
      top: -2px;
      right: -2px;
      width: 0.9rem;
      height: 0.5rem;
      border-top: 2px solid white;
      border-right: 2px solid white;
      transition: 0.5s all;
  }
  span::before {
      bottom: -2px;
      left: -2px;
      width: 0.9rem;
      height: 0.5rem;
      border-bottom: 2px solid white;
      border-left: 2px solid white;
      transition: 0.5s all;
  }
  span::after {
      bottom: -2px;
      right: -2px;
      width: 0.9rem;
      height: 0.5rem;
      border-bottom: 2px solid white;
      border-right: 2px solid white;
      transition: 0.5s all;
  }
  
  &:hover::before, &:hover::after {
      width: 0px;
      height: 0px;
  }
  
  &:hover span::before, &:hover span::after {
      width: 0px;
      height: 0px;
  }

  span {
    font-family: ${({ theme }) => theme.fonts.Chopsic};
    border: 1px solid #FFFFFF;
    border-radius: 2px;
    padding: 0.8rem 4rem;
    background: rgba(217, 217, 217, 0.2)
  }
  @media screen and (max-width: 442px) and (min-width: 350px) {
    width: 85% !important;
    height: 4rem;
    span {
      padding: 1.3rem 7.7rem !important
    }
  }
  @media screen and (max-width: 350px) and (min-width: 0px) {
    width: 85% !important;
    height: 4rem;
    span {
      padding: 1.3rem 6.5rem !important
    }
  }
  

`

export const LandingpageComponent2 = styled.div`
   img {
   width: 35rem;
   height: 40rem;
   margin: -5rem 0rem 0rem -4rem;
   }
   @media screen and (max-width: 850px) {
     img{
      display: none;
     }
   }

`