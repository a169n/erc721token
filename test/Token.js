const { expect } = require("chai");

describe("MyERC721Token", function () {
  let MyERC721Token;
  let myERC721Token;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    MyERC721Token = await ethers.getContractFactory("MyERC721Token");
    [owner, addr1, addr2] = await ethers.getSigners();

    myERC721Token = await MyERC721Token.deploy(owner.address);
    await myERC721Token.waitForDeployment();
  });

  it("Should return the correct token URI", async function () {
    const tokenId = 1;
    const uri = "ipfs://QmVoEPQ7EE27LTxMZg4aee4jnsqHSwDBYBVT3vTA2MY8S2";
    await myERC721Token.safeMint(owner.address, tokenId, uri);

    expect(await myERC721Token.tokenURI(tokenId)).to.equal(uri);
  });

  it("Should mint a token and set URI correctly", async function () {
    const tokenId = 2;
    const uri = "ipfs://QmVoEPQ7EE27LTxMZg4aee4jnsqHSwDBYBVT3vTA2MY8S2";

    await myERC721Token.safeMint(addr1.address, tokenId, uri);

    expect(await myERC721Token.ownerOf(tokenId)).to.equal(addr1.address);
    expect(await myERC721Token.tokenURI(tokenId)).to.equal(uri);
  });

  it("Should return the correct token URI after minting", async function () {
    const tokenId = 4;
    const uri = "ipfs://QmVoEPQ7EE27LTxMZg4aee4jnsqHSwDBYBVT3vTA2MY8S2";
  
    await myERC721Token.safeMint(owner.address, tokenId, uri);
  
    const retrievedURI = await myERC721Token.tokenURI(tokenId);
  
    expect(retrievedURI).to.equal(uri);
  });
  
  
});
