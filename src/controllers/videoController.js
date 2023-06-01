import Video from "../models/Video";

export const home = async (req, res) => {
  const videos = await Video.find({}); // {} 모든 형식의 값 받아옴res.render("home", { pageTitle: "Home", videos });
  return res.render("home", { pageTitle: "Home", videos });
};

export const watch = (req, res) => {
  const { id } = req.params; // req.params.id
  return res.render("watch", { pageTitle: `Watching` });
};

export const getEdit = (req, res) => {
  return res.render("edit", { pageTitle: `Editing` });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body; // req.body.title
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload video" });
};
export const postUpload = async (req, res) => {
  const { title, descrpition, hashtags } = req.body;
  const video = new Video({
    title,
    descrpition,
    createdAt: Date.now(),
    hashtag: hashtags.split(",").map((word) => `#${word}`),
    meta: {
      views: 0,
      rating: 0,
    },
  });
  const dbVideo = await video.save(); //mongodb 에 저장
  return res.redirect("/");
};
