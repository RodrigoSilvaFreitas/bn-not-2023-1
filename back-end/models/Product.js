const mongoose = require('mongoose')

const schema = mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    unit: {
        type: String,
        enum: ['un', 'kg', 'lt'],
        required: true,
    },
    price: {
        type: Number,
        min: 0.01,
        required: true,
    },
    supplier: {
        type: mongoose.ObjectId,
        ref: 'Supplier', // nome do model relacionado
        required: true,
    }
})

module.exports = mongoose.model('Product', schema, 'products')