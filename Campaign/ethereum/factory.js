import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x865f7E6D135c0B9719816e7f97eC6dF9E7E0c0c3'
);

export default instance;