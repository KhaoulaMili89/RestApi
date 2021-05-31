const mongoose= require('mongoose')
const Schema=mongoose.Schema
const UserSchema= new Schema({
    Login : String,
    Password : String,
    Email : String
})
module.exports=mongoose.model('user', UserSchema)