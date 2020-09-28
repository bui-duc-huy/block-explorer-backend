const { mongoose } = require('src/helper')
const { BlockInfoSchemaEntity } = require('./../../models')

function pushBlock(block) {
    await BlockInfoSchemaEntity.collection.insertOne(block)
}