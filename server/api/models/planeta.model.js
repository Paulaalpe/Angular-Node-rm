const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

let planetaSchema = new Schema({
    name: {
        type: String
    },
    type: {
        type: String
    },
    dimension: {
        type: String
    }
}, {
    collection:'planetas'
})

planetaSchema.plugin(uniqueValidator, {message: 'Id ya en uso'});
module.exports = mongoose.model('Planeta', planetaSchema);