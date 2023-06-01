import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: String, //{type:String}
  descrpition: String,
  createdAt: Date,
  hashtag: [{ type: String }],
  meta: {
    views: Number,
    rating: Number,
  },
});

const movieModel = mongoose.model("Video", videoSchema);
//It could also be `Video.js`, but we usually use first capital letter for mongoose model's name.
export default movieModel;
