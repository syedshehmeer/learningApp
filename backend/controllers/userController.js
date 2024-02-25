import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
import Stripe from "stripe";

// @desc Auth user/set token
//route POST /api/users/auth
//@access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id)
      ? console.log("token generated")
      : console.log("Failure jwt");
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      paid: user.paid,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc Register a new user
//route POST /api/users/
//@access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  const paid = false;
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const user = await User.create({ name, email, password, paid });

  if (user) {
    generateToken(res, user._id);
    res
      .status(201)
      .json({ _id: user._id, name: user.name, email: user.email, paid: paid });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc Logout user
//route POST /api/users/logout
//@access Public
const LogoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "User logged out" });
});

// @desc Get user profile
//route GET /api/users/profile
//@access Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = {
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
  };
  res.status(200).json(user);
});

// @desc Update user profile
//route PUT /api/users/profile
//@access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.paid = req.body.paid || user.paid;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();
    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      paid: updatedUser.paid,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
  res.status(200).json({ message: "Update user profile" });
});

const checkout = asyncHandler(async (req, res) => {
  try {
    const { user } = req.body;
    const stripe = new Stripe(process.env.STRIPE_SECRET);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: "https://learning-app-blond.vercel.app/checkout-success",
      cancel_url: "https://learning-app-blond.vercel.app/payment",
      customer_email: user.email,
      client_reference_id: user._id,
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: 400 * 100,
            product_data: {
              name: "Fullstack Web Development Bootcamp",
              description: "MERN courses and more",
            },
          },
          quantity: 1,
        },
      ],
    });

    // Send the session ID as part of the response
    res
      .status(200)
      .json({ success: true, message: "Successfully Paid", session });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating checkout session",
    });
  }
});

export {
  authUser,
  registerUser,
  LogoutUser,
  getUserProfile,
  updateUserProfile,
  checkout,
};
