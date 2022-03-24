const mongoose = require('mongoose')

module.exports = function() {
    const schema = mongoose.Schema({
        assessment: {
            type: mongoose.ObjectId,
            require: true,
            ref: 'Assessment'
        },
        question: {
            type: mongoose.ObjectId,
            required: true,
            ref: 'Question'
        },
        /*
            Valores válidos para objetive_answer 
            Y: Sim (Yes)
            N: Não (No)
            X: Não aplicável (Not Applicable)
            P: Resposta adiada (Postponed)
        */

        objective_answer: {
            type: String,
            enum: ['Y', 'N', 'X', 'P'],
            required: true
        },
        comments: {
            type: String,
            required: false // opcional
        },
        datetime: {
            type: Date,
            required: true,
            dafault: Date.now()
        }
    })

    return mongoose.model('Answer', schema, 'answers')
}