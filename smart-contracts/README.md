# 📃 Smart Contracts
This contains the detailed  explanation of  what tippers platform smart contracts do.

## 🪪 Contracts Addresses
- Coin Flip - https://mumbai.polygonscan.com/address/0xEd35035c67d41e39f6112D1BeD5A0F94DA311D68#code

- Dice Roll - https://mumbai.polygonscan.com/address/0xCd9deE10EeCf230D50Bb0d9a6a14dD6ec754EB3e#code

- Wheel Spin - https://mumbai.polygonscan.com/address/0x8e9d001B6D5ee4C013803ed69691E16fDa25227D#code

## 🎈 Tools & Technologies
- Solidity 
- ChainLink VRF
- Polygon
- Alchemy API
- HardHat

## 🔂 What Each Contract Does

**CoinFlip.sol** - Sends a Request to ChainLink VRF to get a random number, check if the random number is a modulus of 2 i.e ``randomNumber % 2``. Set the selection depending on what the user picks either by  ``1 or 0`` that is an Head or tail. if the random number  chainlink vrf gives is a modulus of 2 then the ``enum`` is set to ``0`` if otherwise ``1``, if the user's choice is equal to any of the selection, the user gets two times of his/her stake. [see more](https://github.com/Samuellyworld/Tippers/blob/main/smart-contracts/contracts/CoinFlip.sol)

| Title | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `chainlink VRF` | `number` | **get**. get a random number|
| `choice` | `number` | **Required**. user bet choice |
| `Selection` | `Object` | **event**. set the enum selection base on the random number result|


**Dice.sol** - Sends a Request to ChainLink VRF to get two random numbers within the range of ``1-6``, the selection is set depending on what the user picks either by  ``1 or 0`` that is greater than 6 or less than 6. if the addition of what chainlink vrf random numbers gives us is greater than 6 then the ``enum`` is set to ``0`` if otherwise ``1``, if the user's choice is equal to any of the selection, the user gets two times of his/her stake. [see more](https://github.com/Samuellyworld/Tippers/blob/main/smart-contracts/contracts/Dice.sol)

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `chainlink VRF` | `number` | **get**. get two random numbers between 1-6|
| `choice` | `number` | **Required**. user bet choice |
| `Selection` | `Object` | **event**. set the enum selection base on the random numbers result |

**Wheel.sol** - Sends a Request to chainlink VRF to get a random number between the range of ``0 to 6``. if the number is ``0 or 4``, the user get exactly the same amount staked. if the number is between ``1 or 5``, the users get two times of his or her stake. if the number is ``3``, the user get 1/2 of his/her stake. [see more](https://github.com/Samuellyworld/Tippers/blob/main/smart-contracts/contracts/Wheel.sol)

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `chainlink VRF` | `number` | **get**. get a random number between 0-6|


## 💻 Local Installation

- Make sure you have [Node](https://nodejs.org/en/download/) & [Git](https://git-scm.com/downloads) downloaded

* git clone repository

```
  $ git clone https://github.com/Samuellyworld/Tippers.git
```

* open `smart-contracts` folder in your terminal

```
  $ cd smart-contracts
```
- create a `.env` file in the `smart-contracts` directory and add the following 

```
 API_URL = "ENTER ALCHEMY API URL"
 PRIVATE_KEY = "ENTER WALLET PRIVATE KEY"
 POLYGONSCAN_APIKEY= "ENTER POLYGONSCAN API KEY"
```

- install dependencies 
```
 $ npm install
```
- compile smart-contracts, deploy and verify with this

```
 $ npx hardhat run scripts/deploy.ts --network polygon_mumbai
```

## 🪪 License.
Copyright Tippers 2022 [**MIT LICENSE**](https://github.com/Samuellyworld/Tippers/blob/main/LICENSE)
