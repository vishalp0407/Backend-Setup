import UserModel from "#models/user.model.js";

/**
 * @desc Auth User
 * @route POST/api/v1/users/login
 * @access public
 */
const authUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (user && (await user.matchPassword(password))) {
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
  res.send("register");
};

/**
 * @desc Logout user
 * @route POST/api/v1/users
 * @access private
 */
const logoutUser = async (req, res) => {
  res.send("Logot User");
};

/**
 * @desc Get user profile
 * @route GET/api/v1/users/profile
 * @access private
 */
const getUserProfile = async (req, res) => {
  res.send("Get user profile");
};

/**
 * @desc Update user Profile
 * @route PUT/api/v1/users/profile
 * @access private
 */
const updateUserProfile = async (req, res) => {
  res.send("Update User Profile");
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
 * @desc update usr
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

export { authUser };
