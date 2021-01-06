Creation of blockchain and blockchain API
    [X] Codenames
        [X] (a) - function argument
        [X] (e) - endpoints
        [X] (m) - middleware
        [X] (d) - dependency
    [X] Create a dev folder
        Where we build our blockchain data structure
        Create API to interact with our blockchain
        More details in readme.txt in this folder
    [X] create blockchain.js and test.js
    [X] Run npm init in root folder. 
    [X] Install sha256
    [X] In blockchain.js - blockchain architecture
        [X] Create blockchain structure 
            [X] Define blockchain properties
                [X] chain - keeps the blocks
                [X] pendingTransactions - contains pending transactions before a block is mined
                [X] test functionality in test.js
            [X] Create prototype methods
                [X] Create new block
                    [X] Define block object with the following properties
                        [X] index - contains index of the current block
                        [X] timestamp - contains timestamp of when block was created
                        [X] transactions - contains transactions before block was mined
                        [X] nonce(a) 
                        [X] hash(a)
                        [X] previousBlockHash(a)
                    [X] Add block to chain
                    [X] Once this method is done, a block is said to be MINED. 
                        It contains all the transactions between the current and the previous block. 
                    [X] test functionality in test.js
                [X] Get last block in chain
                    [X] test functionality in test.js
                [X] Create New Transaction
                    [X] Create transaction properties
                        [X] sender(a)
                        [X] recepient(a)
                        [X] amount(a)
                    [X] Add the transaction to pendingTransactions
                    [X] test functionality in test.js
                [X] Create hashing for blocks
                    [X] Use SHA-256 protocol
                        [X] previousBlockHash(a)
                        [X] currentBlockData(a)
                        [X] nonce(a) 
                    [X] test functionality in test.js
                [X] Adding security through proof of work algorithm
                    [X] Since SHA-256 is very random, we want to give a specific set of rules that the block
                        must match in order to be considered a valid block and added to the chain
                        e.g. hash must start with 4 zeros so we must hash the block many times.
                        [X] Requires a lot of work to geneerate. Because SHA-256 is random 
                        [X] Easy to verify. Because a hash always returns the same value for a string.
                    [X] test functionality in test.js
            [X] Create genesis block
                [X] Create new block
                [X] test functionality in test.js 
    [X] Install express
    [X] Create api.js in dev. In api.js, the API 
        [X] Create express app
            [X] Add dependencies
                [X] nodemon(d - dev)
                    [X] In package.json/scripts add: "start": "nodemon --watch dev -e js dev/api.js"
                [X] uuid(d)
            [X] Add middleware
                [X] body-parser(m)
            [X] Add endpoints
                [X] Keep testing in Postman
                [X] blockchain(e)  GET
                    [X] Where we see the whole chain
                [X] transaction(e) POST
                    [X] Carry out transactions
                [X] mine(e)        GET
                    [X] Send a reward to a nodeAddress(currently uuid) that mined the block  
            


