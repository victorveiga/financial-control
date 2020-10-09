const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategoriaSchema = new Schema({
    nome: String,
    tipo: String
})

module.exports = mongoose.model('Categoria', CategoriaSchema)