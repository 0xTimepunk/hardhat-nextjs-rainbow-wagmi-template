import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { expect } from 'chai';
import { ethers } from 'hardhat';
import { HelloWorld } from '../typechain-types';

describe('MockInteractions', async () => {
  let helloWorld: HelloWorld;

  let accounts: SignerWithAddress[];

  before(async () => {
    accounts = await ethers.getSigners();

    // Deploy Player Contract
    const helloWorldFactory = await ethers.getContractFactory('HelloWorld');
    helloWorld = await helloWorldFactory.deploy();
    await helloWorld.deployed();
    console.log({ 'Hello World contract deployed to': helloWorld.address });
  });

  describe('Starting hello world', async () => {
    it('It sets the string correctly', async () => {
      await helloWorld.setWorld();
      await expect(await helloWorld.getWorld()).to.be.eq('HelloWorld');
    });
  });
});
