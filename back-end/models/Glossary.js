// importa o moongose
const mongoose = require('mongoose')

module.exports = function () {

    const schema = mongoose.Schema({
        entry: {
            type: String,
            required: true
        },
        definiton: {
            type: String,
            required: true
        }
    })

    // Geração do model
    // 1° parâmetro: nome do model (inicial maiúscula)
    // 2° parâmetro: atributos do model (definidos na variável schema)
    // 3° parâmetro: nome da collection no banco de dados
    return mongoose.model('Glossary', schema, 'glossaries')

}