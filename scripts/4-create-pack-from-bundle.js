import { readFileSync } from "fs";
import { sdk } from "./helpers.js";

async function main() {
  const bundleModuleAddress = "0xBcB1351ffcA50EF6f142D41129a106dC09eD6772"; // your bundle module address
  const bundleModule = sdk.getBundleModule(bundleModuleAddress);

  const packModuleAddress = "0x93456Fb16fF6a754c8e38B0f8c0098b066FeBE90"; // your pack module address
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log("Getting all NFTs from bundle...");
  const nftsInBundle = await bundleModule.getAll();

  console.log("NFTs in bundle:");
  console.log(nftsInBundle);

  console.log("Creating a pack containing the NFTs from bundle...");
  const created = await packModule.create({
    assetContract: bundleModuleAddress,
    metadata: {
      name: "Music Bands Pack",
      image: readFileSync("./assets/music-bands.jpg"),
    },
    assets: nftsInBundle.map((nft) => ({
      tokenId: nft.metadata.id,
      amount: nft.supply,
    })),
  });

  console.log("Pack created!");
  console.log(created);
}

try {
  await main();
} catch (error) {
  console.error("Error minting the NFTs", error);
  process.exit(1);
}
