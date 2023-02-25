const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const generateToken = require("../utils/generateToken");

//@description     Auth the user
//@route           POST /api/users/login
//@access          Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        pic: user.pic,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ msg: "Invalid Email or Password" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

//@description     Register new user
//@route           POST /api/users/
//@access          Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(404).json({ msg: "User already exists" });
    }

    const user = await User.create({
      name,
      email,
      password,
      pic,
    });

    await user
      .save()
      .then(() =>
        res.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          pic: user.pic,
          token: generateToken(user._id),
        })
      )
      .catch((err) => res.status(400).json({ msg: err.message }));
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

module.exports = { authUser, registerUser };
