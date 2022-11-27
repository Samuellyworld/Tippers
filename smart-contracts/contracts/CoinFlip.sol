// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";
import "@chainlink/contracts/src/v0.8/VRFV2WrapperConsumerBase.sol";

// contract
contract CoinFlip is VRFV2WrapperConsumerBase {
    // what user request/bet
    event CoinFlipRequest(uint256 requestId);
    // what the result is
    event CoinFlipResult(unit256 requestId, bool didWin);
    // check each user status
    struct coinFlipStatus {
        uint256 fees;
        uint256 randomWords;
        address player;
        bool didWin;
        CoinFlipSelection choice
    }
    // coin flip selection 
    enum CoinFlipSelection {
        HEADS,
        TAILS
    }
    // mapping statuses
    mapping(uint256 => CoinFlipStatus) public statuses;


    // link contract address and wrappper address
    address constant linkAddress = 0x326C977E6efc84E512bB9C30f76E30c160eD06FB;
    address constant vrfwrapper = 0x99aFAf084eBA697E584501b8Ed2c0B37Dd136693;

    //entry fee [update on function or sth later on]
    uint128 constant entryFees = 0.01 ether

    // flip function
   function flip(CoinFlipSelection choice) 
        external 
        payable 
        returns (uint256) {

  }
}