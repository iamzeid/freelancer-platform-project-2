import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import axios from "axios";

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "ITI", {
    expiresIn: maxAge,
  });
};

const handleErrors = (err) => {
  let errors = { email: "", password: "", username: "" };

  console.log(err);
  if (err.message === "incorrect email") {
    errors.email = "That email is not registered";
  }

  if (err.message === "incorrect password") {
    errors.password = "That password is incorrect";
  }

  if (err.code === 11000) {
    if (err.keyPattern.email) {
      errors.email = "Email is already registered";
    } else if (err.keyPattern.username) {
      errors.username = "Username is already taken";
    }
    return errors;
  }

  if (err.message.includes("Users validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

export const register = async (req, res) => {
  if (req.body.googleAccessToken) {
    const { googleAccessToken } = req.body;

    axios
      .get("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: {
          Authorization: `Bearer ${googleAccessToken}`,
        },
      })
      .then(async (response) => {
        const { email, username } = req.body;
        const firstName = response.data.given_name;
        const lastName = response.data.family_name;
        const picture = response.data.picture;

        const existingUser = await User.findOne({ $or: [{ email }, { username }] });

        if (existingUser) {
          if (existingUser.email === email) {
            return res.status(400).json({ message: "Email is already registered" });
          } else {
            return res.status(400).json({ message: "Username is already taken" });
          }
        }

        const result = await User.create({
          verified: "true",
          email,
          username,
          firstName,
          lastName,
          profilePicture: picture,
        });

        const token = createToken(result._id);

        res.status(200).json({ result, token });
      })
      .catch((err) => {
        res.status(400).json({ message: "Invalid access token!" });
      });
  } else {
    try {
      const { email, password, username } = req.body;
      const user = await User.create({ email, password, username });
      const token = createToken(user._id);

      res.cookie("jwt", token, {
        withCredentials: true,
        httpOnly: false,
        maxAge: maxAge * 1000,
      });

      res.status(201).json({ user: user._id, created: true });
    } catch (err) {
      console.log(err);
      const errors = handleErrors(err);
      res.json({ errors, created: false });
    }
  }
};

export const login = async (req, res) => {
  if (req.body.googleAccessToken) {
    const { googleAccessToken } = req.body;

    axios
      .get("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: {
          Authorization: `Bearer ${googleAccessToken}`,
        },
      })
      .then(async (response) => {
        const { email } = req.body;
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
          return res.status(404).json({ message: "User does not exist!" });
        }

        const token = createToken(existingUser._id);

        res.status(200).json({ result: existingUser, token });
      })
      .catch((err) => {
        res.status(400).json({ message: "Invalid access token!" });
      });
  } else {
    const { email, password } = req.body;
    try {
      const user = await User.login(email, password);
      const token = createToken(user._id);
      res.cookie("jwt", token, { httpOnly: false, maxAge: maxAge * 1000 });
      res.status(200).json({ user: user._id,favorites:user.favorites, status: true ,text:"doneeeee"});
    } catch (err) {
      const errors = handleErrors(err);
      res.json({ errors, status: false });
    }
  }
};

export const logout = (req, res) => {
  // Your logout logic here
};
