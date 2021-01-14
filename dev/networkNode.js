const express = require('express');
const { v1: uuid } = require('uuid');
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');
const rp = require('request-promise');

const app = express();
const bitcoin = new Blockchain();

//make the port variable dynamic so we can create multiple nodes
const port = process.argv[2];

//middleware - information passes here before being processed
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))

//endpoints

// display the blockchain
app.get('/blockchain', function(req,res){
    res.send(bitcoin);
});

// create transactions
app.post('/transaction', function(req,res){
    const blockIndex = 
        bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient)
    res.json({note : `Transacation will be added in block ${blockIndex}`})
});

// mine the blockchain
app.get('/mine', function(req,res){
    //mine the block
    const lastBlock = bitcoin.getLastBlock();
    const previousBlockHash = lastBlock['hash'];
    const currentBlockData = {
        transactions : bitcoin.pendingTransactions,
        index : lastBlock['index'] + 1
    };
    const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);

    //create reward transaction to the node
    const nodeAddress = uuid().split('-').join('');
    bitcoin.createNewTransaction(12.5, "00", nodeAddress);

    //create the block
    const blockHash = bitcoin.hashBlock(previousBlockHash, currentBlockData,nonce);
    const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, blockHash);

    res.json({
        note: "New block mined successfully",
        block: newBlock
    })

});

// register a node and broadcast it to other nodes in the network
app.post('/register-and-broadcast-node', function(req,res){
    const newNodeUri = req.body.newNodeUri;

    //check the node's existence
    const nodeNotAlreadyPresent = bitcoin.networkNodes.indexOf(newNodeUri) == -1;
    //N : did not exist in instructions
    const notCurrentNode = bitcoin.currentNodeUri !== newNodeUri;

    if(nodeNotAlreadyPresent && notCurrentNode){
        bitcoin.networkNodes.push(newNodeUri);
    }

    //promises from registered nodes
    const regNodesPromises = [];

    //broadcast it to other nodes
    bitcoin.networkNodes.forEach(networkNodeUri => {
        const requestOptions = {
            uri : networkNodeUri + '/register-node',
            method : 'POST',
            body : {newNodeUri : newNodeUri},
            json : true
        };

        regNodesPromises.push(rp(requestOptions));
    });

    //make the new node aware of the other nodes in the network
    Promise.all(regNodesPromises).then(data => {
        const bulkRegisterOptions = {
            uri : newNodeUri + '/register-nodes-bulk',
            method : 'POST',
            body : {allNetworkNodes : [...bitcoin.networkNodes,bitcoin.currentNodeUri]},
            json : true
        };

        return rp(bulkRegisterOptions).then(data => {
            res.json({note: "New Node registered with network successfully"});
        });
    });
});

//register a broadcasted node
app.post('/register-node', function(req,res){
    const newNodeUri = req.body.newNodeUri;
    const nodeNotAlreadyPresent = bitcoin.networkNodes.indexOf(newNodeUri) == -1;
    const notCurrentNode = bitcoin.currentNodeUri !== newNodeUri;

    if(nodeNotAlreadyPresent && notCurrentNode){
        bitcoin.networkNodes.push(newNodeUri);
    }
    res.json({note: "New Node registered with network successfully"});
});

app.post('/register-nodes-bulk', function(req,res){
    const allNetworkNodes = req.body.allNetworkNodes;

    allNetworkNodes.forEach(networkNodeUri => {
        const nodeNotAlreadyPresent = bitcoin.networkNodes.indexOf(networkNodeUri) == -1;
        const notCurrentNode = bitcoin.currentNodeUri !== networkNodeUri;

        if(nodeNotAlreadyPresent && notCurrentNode){
            bitcoin.networkNodes.push(networkNodeUri);
        }
    });

    res.json({note : "Bulk registration successful."});
});

app.listen(port, function(){
    console.log(`Listening to port ${port}...`);
});
