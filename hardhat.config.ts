import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';
import '@openzeppelin/hardhat-upgrades';
import '@primitivefi/hardhat-marmite';
import '@typechain/hardhat';
import * as dotenv from 'dotenv';
import 'hardhat-gas-reporter';
import { HardhatUserConfig, task } from 'hardhat/config';
import 'solidity-coverage';

dotenv.config();
const GWEI = 1000 * 1000 * 1000;

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  networks: {
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/' + process.env.ALCHEMY_TOKEN,
      accounts: {
        mnemonic: process.env.MNEMONIC as string,
      },
      gasPrice: 65 * GWEI,
    },
    arbitrumRinkeby: {
      url: 'https://arb-rinkeby.g.alchemy.com/v2/' + process.env.ALCHEMY_TOKEN,
      accounts: {
        mnemonic: process.env.MNEMONIC as string,
      },
    },
    mumbai: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/' + process.env.ALCHEMY_TOKEN,
      accounts: {
        mnemonic: process.env.MNEMONIC as string,
      },
      gasPrice: 1100000000,
    },
    hardhatevm: {
      blockGasLimit: 9500000,
      gas: 9500000,
      gasPrice: 8000000000,
      chainId: 31337,
      throwOnTransactionFailures: true,
      throwOnCallFailures: true,
      url: 'http://localhost:8545',
    },
  },
  solidity: {
    compilers: [
      {
        version: '0.8.15',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  gasReporter: {
    currency: 'USD',
    gasPrice: 100,
    enabled: process.env.REPORT_GAS === 'true',
    excludeContracts: [],
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_TOKEN,
  },
  mocha: {
    timeout: 100000,
  },
};

task('accounts', 'Prints the list of accounts', async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(await account.address);
  }
});

export default config;
