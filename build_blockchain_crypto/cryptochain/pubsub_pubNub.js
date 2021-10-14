const PubNub = require('pubnub');

const credentials = {
    publishKey: 'pub-c-3747e402-9e70-4c2c-a94f-2da290b99d4b',
    subscribeKey: 'sub-c-ae2e8414-2ce8-11ec-8d0d-52e976b77916',
    secretKey: 'sec-c-ZjI0NjJlZGQtYjY0OS00NDNhLWI5MjUtOGRjMjhkNjk2MzA0'
};

const CHANNELS = {
    TEST: 'TEST',
    BLOCKCHAIN: 'BLOCKCHAIN'
};

class PubSub {
    constructor() {
        this.pubnub = new PubNub(credentials);

        this.pubnub.subscribe({ channels: Object.values(CHANNELS) });

        this.pubnub.addListener(this.listener());
            
            }

    listener() {
        return {
            message: messageObject => {
                const { channel, message } = messageObject;

                console.log(`Message received. Channel: ${channel}. Message: ${message}`);
            }
        };
    }

    publish({ channel, message }) {
        this.pubnub.publish({ channel, message });
    }
}

const testPubSub = new PubSub();
testPubSub.publish({ channel: CHANNELS.TEST, message: 'Hello PubNub' });

module.exports = PubSub;