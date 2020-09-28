const mongoose = require('mongoose')

const TransactionTrace = new mongoose.Schema(
    {
        id: {
            type: String
        },
        blockIndex: {
            type: Number
        },
        failedDtrxTrace: {
            type: String
        },
        transactionId: {
            type: String
        },
        status: {
            
        }
    },
    {
        timestamps: true
    }
)

module.exports = { TransactionTraceEntity: mongoose.model('TransactionTrace', TransactionTrace) }