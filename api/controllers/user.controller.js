import User from "../models/user.model.js";
import createError from "../utils/createError.js";

export const deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  // if (req.userId !== user._id.toString()) {
  //   return next(createError(403, "You can delete only your account!"));
  // }
  await User.findByIdAndDelete(req.params.id);
  res.status(200).send("deleted.");
};

export const getUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).send(user);
};

export const getVerificationStatus = async (req, res) => {
  try {
    const userId = req.userId; // Assuming you have middleware to get user ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ isVerified: user.verified });
  } catch (error) {
    console.error("Error fetching verification status:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
