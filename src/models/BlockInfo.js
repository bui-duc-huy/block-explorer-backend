const mongoose = require('mongoose')
// const ProducerKey = require('./interfaces/index.js')

const BlockInfoSchema = new mongoose.Schema(
    {
        id: {
            type: String
        },
        blockIndex: {
            type: Number
        },
        blockId: {
            type: String
        },
        timestamp: {
            type: Date
        },
        producer: {
            type: String
        },
        confirmed: {
            type: Number
        },
        previous: {
            type: String
        },
        transactionMroot: {
            type: String
        },
        actionMroot: {
            type: String
        },
        scheduleVersion: {
            type: Number
        },
        newProducersVersion: {
            type: String
        },
        newProducers: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

module.exports = { BlockInfoSchemaEntity: mongoose.model('BlockInfoSchema', BlockInfoSchema) }