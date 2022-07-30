
//example of signing messages
const ethers = require('ethers');

const message = "my message";
const EXPOSED_KEY =
  "8da4ef21b864d2cc526dbdb2a120bd2874c36c9d0a1fb7f8c63d7f7a8b41de8f";

async function main(){
    const wallet = new ethers.Wallet(EXPOSED_KEY);
    console.log(`Using address ${wallet.address}`); 
    console.log(
    `Signing a message address ${wallet.address}`
    );

    //returns raw signature generated from Private key
    const signature = await wallet.signMessage(message);
    console.log(`Raw signature: ${signature}`);

    //returns signing address from signature and raw message
    const address = ethers.utils.verifyMessage( message , signature );
    console.log(`Address from signature: ${address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });