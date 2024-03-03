const hre = require("hardhat");

async function main() {
  const initialOwner = "0x8e45EEdFf2e79C91197F7DDf3C82B17ae8F23187";

  const MyERC721Token = await hre.ethers.deployContract("MyERC721Token", [
    initialOwner,
  ]);

  await MyERC721Token.waitForDeployment();

  console.log(`MyERC20Token deployed to ${MyERC721Token.target}`);

  const tokenId = 8;
  const uri =
    "ipfs://QmVoEPQ7EE27LTxMZg4aee4jnsqHSwDBYBVT3vTA2MY8S2";
  await MyERC721Token.safeMint(initialOwner, tokenId, uri);

  console.log(`Token ${tokenId} minted.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// ipfs add art.png
// ipfs add nft.json