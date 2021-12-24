//make it easy for the factory info (instance) to be used elsewhere in the app
import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface), //interface
    '0xce2CF29728912c3a318f122733921685bc2287d5' //contract address
);

export default instance;