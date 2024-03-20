import Gig from "../models/gig.model.js";
import createError from "../utils/createError.js";
import User from "../models/user.model.js";


export const createGig = async (req, res, next) => {

  const newGig = new Gig({
    userId: req.userId,
    ...req.body,
  });

  try {
    const savedGig = await newGig.save();
    res.status(201).json(savedGig);
  } catch (err) {
    next(err);
  }
};

export const deleteGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);
    if (gig.userId !== req.userId)
      return next(createError(403, "You can delete only your gig!"));

    await Gig.findByIdAndDelete(req.params.id);
    res.status(200).send("Gig has been deleted!");
  } catch (err) {
    next(err);
  }
};

export const getGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);
    if (!gig) next(createError(404, "Gig not found!"));
    res.status(200).send(gig);
  } catch (err) {
    next(err);
  }
};

export const getGigs = async (req, res, next) => {
  const q = req.query;
  const filters = {
    ...(q.userId && { userId: q.userId }),
    ...(q.cat && { cat: q.cat }),
    ...((q.min || q.max) && {
      price: {
        ...(q.min && { $gt: q.min }),
        ...(q.max && { $lt: q.max }),
      },
    }),
    ...(q.search && { title: { $regex: q.search, $options: "i" } }),
    ...(q.timeZone && { timeZone: encodeURI(q.timeZone) }),
  };
  try {
    const gigs = await Gig.find(filters).sort({ [q.sort]: -1 });
    res.status(200).send(gigs);
  } catch (err) {
    next(err);
  }

};

export const addToFavorites=async(req,res)=>{
  const {userId,servise_Id}=req.body;
  try {
      const user=await User.findById(userId);
      user.favorites.push(servise_Id);
      await user.save();
      res.json({
          success:"true",
          message:"item added to favourite",
          favorites:user.favorites
      })
  } catch (error) {
      res.json({
          success:"false",
          error:error.message,
      })
  }
}
export const removeFromFav=async(req,res)=>{
  const {userId,servise_Id}=req.body;
  try {
      const user=await User.findById(userId);
      user.favorites=user.favorites.filter((id)=>id.toString()!==servise_Id);
      await user.save();
      res.json({
          success:"true",
          message:"item removed From favourite",
          favorites:user.favorites
      })
  } catch(error) {
      res.json({
          success:"false",
          error:error.message
      })
  }
}
export const getUserFav=async (req,res,next)=>{
  const user =await User.findById(req.params.userId)
  if(!user)
  {
      const error=new Error();
      error.message='not found ';
      error.statusCode=404;
      return next(error);
  }
  return res.json({
      status:"Done",
      data:user.favorites
  });
}
