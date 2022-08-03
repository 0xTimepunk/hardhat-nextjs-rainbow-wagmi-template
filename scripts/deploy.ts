import { ethers } from 'hardhat';
import { HelloWorld__factory as HelloWorldFactory, HelloWorld } from '../typechain-types';

async function main() {
  let helloWorld: HelloWorld;

  const signer = (await ethers.getSigners())[0];

  console.log({ SignerAccount: signer.address });

  // Deploy Player Contract

  helloWorld = await new HelloWorldFactory(signer).deploy();

  console.log({ 'Hello World contract deployed to': helloWorld.address });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
