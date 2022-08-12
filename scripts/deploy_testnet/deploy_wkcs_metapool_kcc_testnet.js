const {deploy} = require('../template_crypto2BasePool');
const {toWei} = require("web3-utils");

require('dotenv').config({
    path: '.env-kccTestnet' // test
    // path: '.env-kccMainnetMock' // uat
    // path: '.env-kccMainnet' // prod
});

async function main() {
    const wkcs = process.env.WKCS;
    const lpName = "Klein WKCS-3Ken";
    const lpSymbol = "dev_kenWKCSUSD";
    const initialPrice = toWei("9.5");

    await deploy(wkcs, lpName, lpSymbol, initialPrice);

    console.log("completed")
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })