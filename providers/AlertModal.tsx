// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

// importing relevant module
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import GridLoader from 'react-spinners/GridLoader';

// JSX Component AlertModal
const AlertModal = () => {
    
    /// getting modal alert state
    const modalAlert:boolean = useSelector(
        (state: RootState) => state.alert.alertModal.openModal
      );
      // getting modal content alert state
      const modalContent:string = useSelector(
        (state: RootState) => state.alert.alertModal.modalContent
      );
  // Starting React-dispatch to dispatch action in state in the component
  const dispatch = useDispatch();
    
   return (
     <>
     <style>
       {`
         @media screen and (max-width: 500px) {
           .p {
             font-size: 10px;
           }
         }
       `}
     </style>
   <div
    style={{
      position : "fixed",
      zIndex : "1000",
      bottom: "25px",
      right: "20px",
      display: `${!!modalAlert ? "flex" : "none"}`,
      border : "1px solid grey",
      borderRadius : "5px",
      padding : "3px",
      flexDirection: "column",
      background :  "linear-gradient(200.87deg,#7320ab 5.64%,#4a24aa 86.2%)",
      fontWeight: 500,
      transition: "all 1.4s ease-in-out",
      textTransform: "uppercase",
    }}
    className="di"
  >
    
    <div
      style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p
            style={{
              display: "flex",
              opacity: "0.9",
              fontWeight: "500",
              margin: "0px 0px 20px",
              padding: "5px 11px 4px 2px",
              textTransform: "uppercase",
              borderBottom: "2px solid #eee",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
            className="p"
          >
            <GridLoader    
                color="#eee"
                size={2.5}
                speedMultiplier={0.4} 
                />
            <span style={{
                   marginLeft: "7px",
                   color:"white",
                   fontFamily: "Chopsic, sans-serif"
               }}> Alert </span>
          </p>      
          <p style={{
            padding : "1px", 
            fontSize : "13px",
            fontWeight : "700",
            color : "#FE5F75",
            fontFamily: "Inter, sans-serif"
                }}  >
                {modalContent}
            </p>
            
        </div>

  </div>
     </>
   
   )
      }

export default AlertModal;