// require("@nomiclabs/hardhat-waffle");
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    sepolia: {
      url: process.env.NEXT_PUBLIC_INFURIA_RPC_URL,
      accounts: [`0x${process.env.NEXT_PUBLIC_SEPOLIA_PRIVATE_KEY}`],
    },
  },
  solidity: "0.8.4",
};
