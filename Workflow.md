Creation of blockchain and blockchain API
    [X] Codenames
        [X] (a) - function argument
        [X] (e) - endpoints
        [X] (m) - middleware
        [X] (d) - dependency
        [X] (n) - note : a brief description
    [X] Create a dev folder
        Where we build our blockchain data structure(n)
        Create API to interact with our blockchain(n)
        More details in readme.txt in this folder(n)
        [X] Create blockchain.js and test.js
    [X] Run npm init in root folder. 
    [X] Install sha256
    [X] In blockchain.js - blockchain architecture
        [X] Create the basic blockchain architecture(n)
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
                        [X] Requires a lot of work to geneerate. Because SHA-256 is random(n)
                        [X] Easy to verify. Because a hash always returns the same value for a string(n)
                    [X] test functionality in test.js
            [X] Create genesis block
                [X] Create new block - first block in the blockchain
                [X] test functionality in test.js 
    [X] Install express
    [X] Create api.js in dev. In api.js, the API 
        [X] Create a way to access the blockchain, mine and transact within the blockchain(n)
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
    [X] Building a decentralized network
        [X] Build multiple nodes that host the blockchain 
            [X] Rename api.js to networkNode.js to capture its utility
            [X] Up to now we have only used a single node/server (api.js) to access the blockchain.
                We now need to create separate servers that host the network to reduce monopoly(n)
            [X] Add a port = process.argv[2] in networkNode.js to host different port numbers
                [X] process.argv helps add dynamic variables when calls are made from postman(n)
                    e.g. we can run "nodemon --watch dev -e js dev/networkNode.js 3003"
                         and this will run port 3003 if we use process.argv[2]
            [X] Modify package.json 
                [X] "node_1": "nodemon --watch dev -e js dev/networkNode.js 3001 http://localhost:3001",
                [X] "node_2": "nodemon --watch dev -e js dev/networkNode.js 3002 http://localhost:3002",
                [X] "node_3": "nodemon --watch dev -e js dev/networkNode.js 3003 http://localhost:3003",
                [X] "node_4": "nodemon --watch dev -e js dev/networkNode.js 3004 http://localhost:3004",
                [X] "node_5": "nodemon --watch dev -e js dev/networkNode.js 3005 http://localhost:3005"
                [X] To run a node use npm run node_number
            [X] Add a currentNodeUrl = process.argv[3] in blockchain.js to keep track of the current node
                "nodemon --watch dev -e js dev/networkNode.js 3003 http://localhost:3003"
                argument 3 is the url of the node
            [X] Add a register-and-broadcast-node endpoint(e) POST
                [X] Register a new node with our network(n)
                [X] Will register the new node on its own server and broadcast it to the rest of the nodes in the network
                    and then make sure the new node is made aware of all the nodes in the network(n)
                [X] Add and request a new node. 
                [X] MUST check if it already exists or is the current node.
                [X] npm install request-promise and request to make requests to all other nodes in our network.
                [X] Register the new node with a node existing in the network
                [X] Broadcast the new node to the existing nodes in the network
                [X] Register existing nodes in the new node
            [X] Add a register-node endpoint(e)               POST 
                [X] Will be used by a node to register other nodes broadcasted to it from other nodes(n)
                [X] Helper endpoint to register-and-broadcast-node(n)
                [X] MUST check if it already exists or is the current node.
            [X] Add register-node-bulk endpoint(e)            POST
                [X] Register all existing nodes in the network in the new unaware node(n)
                [X] Helper endpoint to register-and-broadcast-node(n)
    [X] Synchronizing the network
        

           
            






            


