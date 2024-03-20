import createError from "../utils/createError.js";
import User from "../models/user.model.js";

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

export const editUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  user.img = req.body.img || user.img;
  user.desc = req.body.desc || user.desc;
  user.title = req.body.title || user.title;
  user.education = req.body.education || user.education;
  user.experience = req.body.experience || user.experience;
  user.skills = req.body.skills || user.skills;
  user.certificate = req.body.certificate || user.certificate;
  await user.save();
  res.status(200).send(user);
};
