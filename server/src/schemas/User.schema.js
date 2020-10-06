const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    nome: String,
    sobrenome: String,
    email: String,
    senha: String,
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
    Genero: String,
    nascimento: Date,
    cpf: String,
    Moeda: String,
})

module.exports = mongoose.model('User', UserSchema)