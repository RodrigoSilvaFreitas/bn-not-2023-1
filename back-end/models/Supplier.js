const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    // Subdocumento incorporado
    address: {
        street: {
            type: String,
            require: true
        },
        number: {
            type: String,
            require: true
        },
        complement: {
            type: String,
            require: false
        },
        district: {
            type: String,
            require: true
        },
        city: {
            type: String,
            require: true
        },
        state: {
            type: String,
            require: true
        },
        zip_code: {
            type: String,
            require: false
        }
    }
})

// Parametros de mongoose model:

//1º Nome do model, para uso interno (convenção : primeira letra maiúscula e singular)
//2º relação de campos do esquema (contante schema)
//3º nome da collection no banco de dados (convenção: mesmo nome do model mas com letra minúscila e no plural)

module.exports = mongoose.model('Supplier', schema, 'suppliers')