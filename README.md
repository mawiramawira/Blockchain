Creation of blockchain
    [X] Codenames
        [X] (a) - function argument
    [X] Create a dev folder
        Where we build our blockchain data structure
        Create API to interact with our blockchain
        More details in readme.txt in this folder
    [X] create blockchain.js and test.js
    [X] Run npm init in root folder
    [] In blockchain.js
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
    
