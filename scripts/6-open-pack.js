import { sdk } from "./helpers.js";

async function main() {
  const packModuleAddress = "0x93456Fb16fF6a754c8e38B0f8c0098b066FeBE90";
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log("Opening the pack...");
  const opened = await packModule.open("0");
  console.log("Opened the pack!");
  console.log(opened);
}

try {
  await main();
} catch (error) {
  console.error("Error opening the pack", error);
  process.exit(1);
}
