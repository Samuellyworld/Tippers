// SPDX-License-Identifier: MIT
pragma solidity >=0.8.17;

import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";
import "@chainlink/contracts/src/v0.8/VRFV2WrapperConsumerBase.sol";
import {SafeMath} from "@openzeppelin/contracts/utils/math/SafeMath.sol";
// contract
contract Dice is VRFV2WrapperConsumerBase {
    // safe math
      using SafeMath for uint256;
    // what user request/bet
    event DiceRequest(uint256 requestId);
    // what the result is
    event DiceResult(uint256 requestId, bool didWin);
    // check each user status
    struct DiceStatus {
        uint stakedAmount;
        uint256 fees;
        uint256 randomWord1;
        uint256 randomWord2;
        address player;
        bool didWin;
        bool fulfilled;
        DiceSelection choice;
    }
    // dice selection 
    enum DiceSelection {
        GREATERTHAN6,
        LESSTHAN6
    }
    // mapping statuses
    mapping(uint256 => DiceStatus) public statuses;



    // link contract address and wrappper address on polygon
    address constant linkAddress = 0x326C977E6efc84E512bB9C30f76E30c160eD06FB;
    address constant vrfWrapperAddress = 0x99aFAf084eBA697E584501b8Ed2c0B37Dd136693;

    //entry fee [update on function on the frontend later on]
    // uint128 constant entryFees = 0.01 ether;
   
   // gas limit to spare in LINK
    uint32 constant callbackGasLimit = 1_000_000;

   // number of words to get from the LINK wrapper
    uint32 constant numWords = 2;
 
   // number of confirmations or blocks should it wait before sending the confirmation
    uint16 constant requestConfirmations = 3;
    
  // VRF instance
  constructor()
   payable 
   VRFV2WrapperConsumerBase(linkAddress, vrfWrapperAddress) 
   {}
    // dice function
   function roll(DiceSelection choice) 
        external 
        payable 
        returns (uint256) {

     // then request randomness
     uint256 requestId = requestRandomness(
         callbackGasLimit,
         requestConfirmations,
         numWords
     );
     
     // update dicestatus with the requestId
     statuses[requestId] = DiceStatus({
         stakedAmount: msg.value,
         fees : VRF_V2_WRAPPER.calculateRequestPrice(callbackGasLimit),
         randomWord1 : 0,
         randomWord2: 0,
         player : msg.sender,
         didWin : false,
         fulfilled : false,
         choice : choice
     });
      
    // since it is a request emit dic request
    emit DiceRequest(requestId);
    return requestId;
  }

   // we send the request ID to chainlink to get the random words
  function fulfillRandomWords(uint256 requestId, uint256[] memory randomWords)
       internal
       override
   {
    // check fees 
    require(statuses[requestId].fees > 0, "Request not found");

    //update status
    statuses[requestId].fulfilled = true;
    statuses[requestId].randomWord1 = randomWords[0].mod(6).add(1);
    statuses[requestId].randomWord2 = randomWords[1].mod(6).add(1);


    // set dicselection with the random words chainlink generate for us
    DiceSelection result = DiceSelection.LESSTHAN6;

    // if even
    if((randomWords[0].mod(6).add(1) + randomWords[1].mod(6)).add(1) > 6) {
      result = DiceSelection.GREATERTHAN6;
     }
    // pay *2 of staked amount if user win
    if (statuses[requestId].choice == result) {
        statuses[requestId].didWin = true;
        payable(statuses[requestId].player).transfer(statuses[requestId].stakedAmount * 2);
    }
    emit DiceResult(requestId, statuses[requestId].didWin);

   }

// get each user status
   function getStatus(uint256 requestId)
    public
    view
    returns (DiceStatus memory)
    {
     return statuses[requestId];
    }

  // send matic
    receive() external payable {}
}