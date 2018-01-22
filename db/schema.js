const {Schema} = require('mongoose')

const IdeaSchema = new Schema(
    {
        title: {
            type: String,
            required: false,
            default: 'Add Title'
        },
        description: {
            type: String,
            required: false,
            default: 'Add Description'
        }
    },
    {
        timestamps: {}
    }
)

module.exports = {
    IdeaSchema
}