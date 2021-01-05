//blockchain constructor function
function Blockchain() {
    this.chain = [];
    this.pendingTransactions = [];

    //creating a new block
    Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) {
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

    //retrieving the lst block of the chain
    Blockchain.prototype.getLastBlock = function(){
        return this.chain[this.chain.length - 1];
    }

    //creating a new transaction
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
}

module.exports = Blockchain;

