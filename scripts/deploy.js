const hre = require("hardhat");

async function main() {
    const TrendPrediction = await hre.ethers.getContractFactory("TrendPrediction");
    const contract = await TrendPrediction.deploy();
    await contract.deployed();

    console.log('Contract deployed to: ${contract.address}');
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});