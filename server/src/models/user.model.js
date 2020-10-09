const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    sobrenome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    telefone: String,
    celular: String,
    endereco: {
        cep: String,
        logradouro: String,
        numero: Number,
        complemento: String,
        bairro: String,
        cidade: String,
        uf: String,
    },
    Genero: {
        type: String,
        required: true
    },
    nascimento: {
        type: Date,
        required: true
    },
    cpf: String,
    moeda: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('User', UserSchema)