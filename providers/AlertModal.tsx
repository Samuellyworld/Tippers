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
    const modalAlert: any = useSelector(
        (state: RootState) => state.alert.alertModal.openModal
      );
      // getting modal content alert state
      const modalContent: any = useSelector(
        (state: RootState) => state.alert.alertModal.modalContent
      );
  // Starting React-dispatch to dispatch action in state in the component
  const dispatch = useDispatch();
    
   return (
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
      background :  "#4a4a4a",
      fontWeight: 500,
      textTransform: "uppercase",
    }}
    className="confirmation"
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
              opacity: 0.7,
              fontWeight: "500",
              margin: "0px 0px 20px",
              padding: "5px 11px 4px 2px",
              textTransform: "uppercase",
              borderBottom: `2px solid  "#eee"`,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <GridLoader    
               color="#eee"
                size={20}
                // width={20}
                speedMultiplier={0.4} 
                />

               <span style={{
                   marginLeft: "5px",
                   color:"#eee"
               }}> Alert </span>
          </p>

        
            <p style={{
            padding : "1px", 
            fontSize : "11px",
            fontWeight : "bold",
            color : "#ff4343" ,
            // color: darkTheme ? "#fff" : "black",
                }} 
            className="wallet_content" >
                {modalContent}
            </p>
            
        </div>

  </div>
   )
      }