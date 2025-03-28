import jwt from "jsonwebtoken";
import UserModel from "#models/user.model.js";
import generateToken from "#utils/generate-token.util.js";

/**
 * @desc Auth User
 * @route POST/api/v1/users/login
 * @access public
 */
const authUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
};

/**
 * @desc Register users
 * @route POST/api/v1/users
 * @access public
 */
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const userExist = await UserModel.findOne({ email });

  if (userExist) {
    res.status(400); // Bad Request (client Error)
    throw new Error("User already exists");
  }

  const user = await UserModel.create({ name, email, password });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user Data");
  }
};

/**
 * @desc Logout user
 * @route POST/api/v1/users
 * @access private
 */
const logoutUser = async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expiresIn: new Date(0),
  });
  res.status(200).json({ message: "User logged out" });
};

/**
 * @desc Get user profile
 * @route GET/api/v1/users/profile
 * @access private
 */
const getUserProfile = async (req, res) => {
  const user = await UserModel.findById(req.user._id);

  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
};

/**
 * @desc Update user Profile
 * @route PUT/api/v1/users/profile
 * @access private
 */
const updateUserProfile = async (req, res) => {
  const user = await UserModel.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save();
    generateToken(res, updateUser._id);
    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updateUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
};

/**
 * @desc Get all users
 * @route GET/api/v1/users
 * @access private/admin
 */
const getUsers = async (req, res) => {
  res.send("get all users");
};

/**
 * @desc Get usr by ID
 * @route GET/api/v1/users/:id
 * @access private/admin
 */
const getUserById = async (req, res) => {
  res.send("Get user by Id");
};

/**
 * @desc update user
 * @route PUT/api/v1/users/:id
 * @access private/admin
 */
const updateUser = async (req, res) => {
  res.send("Update Usr");
};

/**
 * @desc Delte User
 * @route DELETE/api/v1/users/:id
 * @access private/admin
 */

const deleteUser = async (req, res) => {
  res.send("Delete user");
};

export {
  authUser,
  logoutUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
};
