import { readFileSync } from "fs";
import { sdk } from "./helpers.js";

async function main() {
  // Paste in the address from when you created the bundle collection module
  const bundleModuleAddress = "0xBcB1351ffcA50EF6f142D41129a106dC09eD6772";
  const bundleModule = sdk.getBundleModule(bundleModuleAddress);

  console.log("Creating NFT batch...");

  const created = await bundleModule.createAndMintBatch([
    {
      metadata: {
        name: "Alt J",
        description: "Taro",
        image: readFileSync("./assets/altj.jpg"),
        properties: {
          rarity: "super rare",
          fanciness: 7,
        },
      },
      supply: 50,
    },
    {
      metadata: {
        name: "Linkin Park",
        description: "In the end it dosn't even matter",
        image: readFileSync("./assets/LP.jpg"),
        properties: {
          rarity: "a bit rare",
          fanciness: 7,
        },
      },
      supply: 50,
    },
    {
      metadata: {
        name: "Pink Floyd",
        description: "Comfortably numb",
        image: readFileSync("./assets/pinkfloyd.png"),
        properties: {
          rarity: "super rare!",
          fanciness: 10,
        },
      },
      supply: 10,
    },
  ]);

  console.log("NFTs created!");
  console.log(JSON.stringify(created, null, 2));
}

try {
  await main();
} catch (error) {
  console.error("Error minting the NFTs", error);
  process.exit(1);
}
