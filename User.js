const Schema = mongoose.Schema;
const userSchema = new Schema({
 Login: { type: String, required: true },
 Password: { type: String, required: true },
 Email: { type: String, required: true }
  
});
const User = mongoose.model("User", userSchema);