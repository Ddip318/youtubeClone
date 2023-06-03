import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, uppercase: true }, //{type:String}
  fileUrl: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, default: 0, required: true },
  },
  owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
});

videoSchema.static("formatHashtags", function (hashtags) {
  return hashtags
    .split(",")
    .map((word) => (word.startsWith("#") ? word : `#${word.trim()}`));
});

const movieModel = mongoose.model("Video", videoSchema);
//It could also be `Video.js`, but we usually use first capital letter for mongoose model's name.
export default movieModel;

//uppercase,trim,maxLength 등 다양한 schematype이 있다.
//maxlength 를 여기서 설정해줬으면 html(pug) 가서도 넣어줄것
