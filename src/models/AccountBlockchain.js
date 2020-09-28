const mongoose = require('mongoose')

const AccountBlockchain = new mongoose.Schema(
    {
        id: {
            type: String
        },
        blockIndex: {
            type: Number
        },
        present: {
            type: Boolean
        },
        vmType: {
            type: Number
        },
        vmVersion: {
            type: Number
        },
        privileged: {
            type: Boolean
        },
        lastCodeUpdate: {
            type: Date
        },
        codeVersion: {
            type: String
        },
        creationDate: {
            type: Date
        },
        code: {
            type: String
        },
        abi: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

module.exports = { AccountBlockchainEntity: mongoose.model('AccountBlockchain', AccountBlockchain) }