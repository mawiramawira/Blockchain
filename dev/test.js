const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389, 'OIUOEDHKHKD', '78s97d4x6dsf');
bitcoin.createNewTransaction(100,'ALEXHT12324','K0QHFSHDSGHJ');
bitcoin.createNewBlock(2389, 'OGSGSFSFSFS', '78s97d4sdsds');

bitcoin.createNewTransaction(20,'ALEXHT12324','K0QHFSHDSGHJ');
bitcoin.createNewTransaction(40,'ALEXHT12324','K0QHFSHDSGHJ');
bitcoin.createNewTransaction(60,'ALEXHT12324','K0QHFSHDSGHJ');

bitcoin.createNewBlock(2389, 'OOSMFKSFSGS', '78s97d4xdsfs');

console.log(bitcoin.chain[2]);
