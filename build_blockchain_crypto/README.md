# Blocks | The Blockchain Backend

## Here’s a summary of what I've accomplished in this section:

- Set up the overall blockchain application.
- Created the basic building block of the blockchain - with blocks themselves!
- Started a test-driven development approach to the project.
- Built the genesis block - to get the blockchain going.
- Added functionality to mine a block - create a new block for the blockchain.
- Developed the important sha-256 hash function.
- Applied the hash to mine a block.

## Second sections:

- Created the fundamental blockchain class.
- Developed functionality to validate the blockchain, to allow for chain replacement.
- Implemented chain replacement.
- Investigated stubbing console output in tests to keep the output clean.

## Proof of Work | the Blockchain Backend

- Implemented the proof of work system by adding a difficulty and nonce value to each block.
- Adjusted the difficulty for a block to ensure that blocks are mined at a rate which approaches a set mining rate for the system.
- Investigated the POW system by writing a script which checked how will the dynamic difficulty adjusted the system to approach the mine rate.
- Switched the hexadecimal character-based difficulty criteria to a more fine-grained binary bit-based difficulty criteria.
- Prevented a potential difficulty jump attack by adding extra validation for the blockchain.

## API and Network | the Blockchain Backend

- Set up an express API to allow for interaction to the backend through HTTP requests.
- Created a GET request to read the blockchain.
- Added a POST request to write new blocks to the blockchain.
- Implemented a real-time messaging network through Redis or PubNub.
- Added the ability to broadcast chains.
- Started peers through alternate ports, and broadcasted chains when blocks were mined through the api.
- Synchronized chains when new peers connected to the network.
- Optimized the implementation to avoid redundant interaction.

## Wallets, Keys, and Transactions | The Cryptocurrency Backend

- Created the core wallet class for the cryptocurrency.
- Developed the cryptographic key pair and public key addressing system.
- Implementing signature generation and verification to make transactions official.
- Built the main transaction class - with the output map and input structure.
- Developed functionality to actually validate transactions.
- Tied transaction creation with the wallet class.
- Allowed transactions to be updated with multiple outputs to efficiently use existing objects.
- Improved the hash function to recognize objects with new properties as changes in incoming data.
- Covered edges cases with transaction updates to prevent vulnerabilities.

##  Transaction Pool | the Blockchain Backend

- Created the core transaction pool with an ability to set transactions.
- Handled transaction through the API, and added API-generated transactions to the pool.
- Made sure invalid transactions did not go to the pool.
- Handled updates to transactions through the API.
- Exposed a new API method to read the transaction pool data.
- Broadcasted transactions as they occurred through the API.
- Synced the transaction pool map as a network-dependent object like the blockchain.