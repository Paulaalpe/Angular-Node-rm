const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

let episodioSchema = new Schema({
  
    name: {
        type: String,
        unique: true
    },
    air_date: {
        type: String
    },
    episode: {
        type: String
    }
}, {
    collection: 'episodes'
})

episodioSchema.plugin(uniqueValidator, { message: 'Id ya en uso' });
module.exports = mongoose.model('Episodio', episodioSchema);