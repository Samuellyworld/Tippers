// SPDX-License-Identifier: MIT
pragma solidity >=0.8.17;

import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";
import "@chainlink/contracts/src/v0.8/VRFV2WrapperConsumerBase.sol";

// contract
contract CoinFlip is VRFV2WrapperConsumerBase {
    // what user request/bet
    event CoinFlipRequest(uint256 requestId);
    // what the result is
    event CoinFlipResult(uint256 requestId, bool didWin);
    // check each user status
    struct CoinFlipStatus {
        uint stakedAmount;
        uint256 fees;
        uint256 randomWord;
        address player;
        bool didWin;
        bool fulfilled;
        CoinFlipSelection choice;
    }
    // coin flip selection 
    enum CoinFlipSelection {
        HEADS,
        TAILS
    }
    // mapping statuses
    mapping(uint256 => CoinFlipStatus) public statuses;



    // link contract address and wrappper address on polygon
    address constant linkAddress = 0x326C977E6efc84E512bB9C30f76E30c160eD06FB;
    address constant vrfWrapperAddress = 0x99aFAf084eBA697E584501b8Ed2c0B37Dd136693;

    //entry fee [update on function on the frontend later on]
    // uint128 constant entryFees = 0.01 ether;
   
   // gas limit to spare in LINK
    uint32 constant callbackGasLimit = 1_000_000;

   // number of words to get from the LINK wrapper
    uint32 constant numWords = 1;
 
   // number of confirmations or blocks should it wait before sending the confirmation
    uint16 constant requestConfirmations = 3;
    
  // VRF instance
  constructor()
   payable 
   VRFV2WrapperConsumerBase(linkAddress, vrfWrapperAddress) 
   {}
    // flip function
   function flip(CoinFlipSelection choice) 
        external 
        payable 
        returns (uint256) {

     // then request randomness
     uint256 requestId = requestRandomness(
         callbackGasLimit,
         requestConfirmations,
         numWords
     );
     
     // update coinflipstatus with the requestId
     statuses[requestId] = CoinFlipStatus({
         stakedAmount: msg.value,
         fees : VRF_V2_WRAPPER.calculateRequestPrice(callbackGasLimit),
         randomWord : 0,
         player : msg.sender,
         didWin : false,
         fulfilled : false,
         choice : choice
     });
      
    // since it is a request emit coinflip request
    emit CoinFlipRequest(requestId);
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
    statuses[requestId].randomWord = randomWords[0];

    // set coinFlipselection with the random words chainlink generate for us
    CoinFlipSelection result = CoinFlipSelection.HEADS;

    // if even
    if(randomWords[0] % 2 == 0) {
      result = CoinFlipSelection.TAILS;
     }
    // pay *2 of staked amount if user win
    if (statuses[requestId].choice == result) {
        statuses[requestId].didWin = true;
        payable(statuses[requestId].player).transfer(msg.value * 2);
    }
    emit CoinFlipResult(requestId, statuses[requestId].didWin);

   }

// get each user status
   function getStatus(uint256 requestId)
    public
    view
    returns (CoinFlipStatus memory)
    {
     return statuses[requestId];
    }

  // send matic
    receive() external payable {}
}