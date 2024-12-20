async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    const ChargeStationFinder = await ethers.deployContract("ChargeStationFinder");
    console.log("ChargeStationFinder address:", await ChargeStationFinder.getAddress());

   }
   main()
    .then(() => process.exit(0))
    .catch((error) =>{
    	console.error(error);
    	process.exit(1);
   });
