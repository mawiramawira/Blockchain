const express = require('express');
const { v1: uuid } = require('uuid');
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');

const app = express();
const bitcoin = new Blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))

app.get('/blockchain', function(req,res){
    res.send(bitcoin);
});

app.post('/transaction', function(req,res){
    const blockIndex = 
        bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient)
    res.json({note : `Transacation will be added in block ${blockIndex}`})
});

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


app.listen(3000, function(){
    console.log('Listening to port 3000...');
})