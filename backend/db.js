
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://arun001:Arun1234@cluster0.nwkoe.mongodb.net/temp1")

// Create a Schema for Users
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
});

// Create a model from the schema
const User = mongoose.model('User', userSchema);

module.exports = {
	User
};