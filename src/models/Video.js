import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, uppercase: true }, //{type:String}
  description: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String }],
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  },
});

const movieModel = mongoose.model("Video", videoSchema);
//It could also be `Video.js`, but we usually use first capital letter for mongoose model's name.
export default movieModel;

//uppercase,trim,maxLength 등 다양한 schematype이 있다.
//maxlength 를 여기서 설정해줬으면 html(pug) 가서도 넣어줄것
