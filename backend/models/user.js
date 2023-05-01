const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
    email : {type: String, required: true, unique: true},  // adresse e-mail de l'utilisateur [unique]
    password :{type: String, required: true} // mot de passe de l'utilisateur haché
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);