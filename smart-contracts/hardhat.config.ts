import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");


const { API_URL, PRIVATE_KEY,POLYGONSCAN_APIKEY } = process.env;


const config: HardhatUserConfig | any = {
  solidity: "0.8.17",
  networks: {
     polygon_mumbai: {
        url: API_URL,
        accounts: [`${PRIVATE_KEY}`]
     }
  },
  etherscan: {
    apiKey: {
      polygonMumbai: POLYGONSCAN_APIKEY
    }
  }

};

export default config;
