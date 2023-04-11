const Supllier = require('../models/Supllier') // importação do model

const controller = {} // Objeto vazio

controller.create = async (req, res) => {
    try {
        // Manda as informações que vieram em req body para serem gravadas no banco de dados
        await Supllier.create(req.body)

        // HTTP 201 = Created
        res.status(201).end()
    }
    catch (error) {
        console.error(error)
        // HTTP 500 = Internal Server Error
        res.status(500).send(error)
    }
}

controller.retrieveAll = async (req, res) => {
    try {
        // Retorna todos os documento da coleção
        const result = await Supllier.find()
        //HTTP 200: OK (implicito)
        res.send(result)
    }
    catch (error) {
        console.error(error)
        // HTTP 500 = Internal Server Error
        res.status(500).send(error)
    }
}
controller.retrieveOne = async (req, res) => {
    try {
        const result = await Supllier.findById(req.params.id)

        if (result) {
            // Encontrou o documento => HTTO 200 OK (implicito)
            res.send(result)
        } else {
            //Não encontrou o documento => HTTP 404: NOT FOUND
            res.status(404).end()
        }
    }
    catch (error) {
        console.error(error)
        // HTTP 500 = Internal Server Error
        res.status(500).send(error)
    }
}

controller.update = async (req, res) => {
    try {
        const result = await Supllier.findByIdAndUpdate(req.params.id, req.body)

        if (result) {
            //Encontrou e atualizou => HTTP 204: No content
            res.status(204).end()
        } else {
            //Não encontrou para atualizar => HTTP 404: Not found
            res.status(404).end()
        }
    }
    catch (error) {
        console.error(error)
        // HTTP 500 = Internal Server Error
        res.status(500).send(error)
    }
}

controller.delete = async (req, res) => {
    try {
        const result = await Supllier.findByIdAndDelete(req.params.id, req.body)

        if (result) {
            //Encontrou e excluiu => HTTP 204: No content
            res.status(204).end()
        } else {
            //Não encontrou para excluir => HTTP 404: Not found
            res.status(404).end()
        }
    }
    catch (error) {
        console.error(error)
        // HTTP 500 = Internal Server Error
        res.status(500).send(error)
    }
}

module.exports = controller