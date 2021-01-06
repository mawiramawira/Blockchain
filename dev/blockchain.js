const sha256 = require('sha256');

//blockchain constructor function
function Blockchain(){
    //creating a new block
    Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash){
        const newBlock = {
            index : this.chain.length + 1,
            timestamp : Date.now(),
            transactions : this.pendingTransactions,
            nonce : nonce,
            hash : hash,
            previousBlockHash : previousBlockHash,
        };

        this.chain.push(newBlock);
        this.pendingTransactions = [];

        return newBlock;
    };

    //retrieving the last block of the chain
    Blockchain.prototype.getLastBlock = function(){
        return this.chain[this.chain.length - 1];
    }

    //creating a new pending transaction
    Blockchain.prototype.createNewTransaction = function(amount, sender, recipient){
        //will be recorded in the blockchain when a new block is mined
        const pendingTransaction = {
            amount : amount,
            sender : sender,
            recipient : recipient,
        };

        this.pendingTransactions.push(pendingTransaction);

        //the number of the block the transacation was added
        return this.getLastBlock()['index'] + 1;

    }

    //hashing data - uses SHA-256 
    Blockchain.prototype.hashBlock = function(previousBlockHash,currentBlockData,nonce){
        const dataAsString = previousBlockHash + nonce.toString() + 
            JSON.stringify(currentBlockData);
        const hash = sha256(dataAsString);
        return hash;
    }

    //proof of work
    Blockchain.prototype.proofOfWork = function(previousBlockHash,currentBlockData){
        let nonce = 0;
        let hash = this.hashBlock(previousBlockHash,currentBlockData,nonce);
        //rule - 4 zeros
        while(hash.substring(0,4) != '0000'){
            nonce ++;
            hash = this.hashBlock(previousBlockHash,currentBlockData,nonce);
        }
        return nonce;
    }

    //base properties
    this.chain = [];
    this.pendingTransactions = [];
    this.createNewBlock(100,'0','0');
}

module.exports = Blockchain;

