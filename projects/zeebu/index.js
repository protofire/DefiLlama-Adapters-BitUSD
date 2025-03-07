const { stakings } = require("../helper/staking");
const { pool2s } = require("../helper/pool2");

const VOTING_ESCROW_ADDRESSES = {
  ethereum: '0x8e76Cdf3b14c540aB54aFa7f8492AC1d16Ecfb35',
  base: '0xcf08d1ec5d8e566d95299399307f75f98d6aea03',
  bsc: '0xd3e8cD2eDbf252860E02ffb245fD654b1ab30f30',
};

const ZBU_ADDRESSES = {
  ethereum: '0xe77f6aCD24185e149e329C1C0F479201b9Ec2f4B',
  base: '0x2C8C89C442436CC6C0a77943E09c8Daf49Da3161',
  bsc: '0x4D3dc895a9EDb234DfA3e303A196c009dC918f84',
};

const lpTokens = [
  '0xC3889F9764d68BDF2e16f237206746344172A147'
];

const stackingcontract = [
  '0x45dd22aCe398002b34cB37b363B2F02C7dd47842'
];

module.exports = {
  ethereum: {
    staking: stakings([VOTING_ESCROW_ADDRESSES["ethereum"]], ZBU_ADDRESSES["ethereum"]),
    tvl: () => ({})
  },
  base: {
    staking: stakings([VOTING_ESCROW_ADDRESSES["base"]], ZBU_ADDRESSES["base"]),
    pool2: pool2s(stackingcontract, lpTokens),
  },
  bsc: {
    staking: stakings([VOTING_ESCROW_ADDRESSES["bsc"]], ZBU_ADDRESSES["bsc"]),
  },
  methodology:
    'Counts ZBU tokens locked in Voting Escrow contracts across Ethereum, Base, and BSC.',
};
