import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x6E2628E01095Ae36988F838E49Cbd49bbcB4d4fd"
);

export default instance;
