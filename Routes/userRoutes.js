const express = require("express");
const router = express.Router();
const User = require("../Models/userSchema");
//add user @Post
router.post("/newUser", (req, res) => {
  let newUser = new User(req.body);
  newUser.save((err, data) => {
    err ? console.log(err) : res.send(data);
  });
});
//get ALL users @get
router.get("/", (req, res) => {
  User.find({}, (err, data) => {
    err ? console.log(err) : res.json(data);
  });
});
//get user by id @get
router.get("/:id", (req, res) => {
  User.find({ _id: req.params.id }, (err, data) => {
    err ? console.log(err) : res.json(data);
  });
});
//delete user by id @delete
router.delete("/:id", (req, res) => {
  User.findByIdAndDelete({ _id: req.params.id }, (err, msg) => {
    err ? console.log(err) : res.json({ msg: "User was deleted" });
  });
});
//update user by id @put
router.put("/:id", (req, res) => {
  User.findByIdAndUpdate(
    { _id: req.params.id },
    { ...req.body },
    (err, data) => {
      err ? console.log(err) : res.json({ msg: "User was updated" });
    }
  );
});

module.exports = router;