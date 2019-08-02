var mongoose= require('mongoose');
var Schema = mongoose.Schema;

var testSchema = new Schema({
    name: String,
    direccion: String,
    descripcion: String,
    imagen:String
});

module.exports = mongoose.model('Test',testSchema);