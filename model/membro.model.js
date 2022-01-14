const mongoose = require('mongoose');
const { Schema } = mongoose;

const membroSchema = new Schema({
    congregacao: {
        type:String,
        required: true
    },
    matriculaID: {
        type: Number,
        required: true
    },
    name: {
        type:String,
        required:true
    },
    filiacaoPai: {
        type:String,
        required:true
    },
    filiacaoMae: {
        type:String,
        required:true
    },
    dataNascimento: {
        type:String,
        required:true
    },
    nacionalidade:{
        type:String,
        required:true
    },
    naturalidade: {
        type:String,
        required:true
    },
    estado: {
        type:String,
        required:true
    },
    estadoCivil: {
        type:String,
        required:true
    },
    profissao: String,
    escolaridade: String,
    tituloEleitor: String,
    tipoCertidao: String,
    numeroCertidao: String,
    dataBatismo: String,
    igrejaBatismo: String,
    dataAdmissao: String,
    rg: String,
    cpf: String,
    conjuge: String,
    conjugeMatricula: Number,
    conjugeCargo: String,
    membroIgreja: Boolean,
    dataSaida: String,
    procedencia: String,
    endereco: {
        type:String,
        required:true
    },
    imagemURL: String,
    observacao: String
});


module.exports = mongoose.model('Membro',membroSchema);