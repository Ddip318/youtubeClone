import Video from "../models/Video";

const handleSearch = (error, videos) => {
  console.log("errors", error);
  console.log("videos", videos);
};
export const home = (req, res) => {
  Video.find({}, handleSearch); //{} 모든 형식을 갖는다. (filletr,promise(구버전 callback))
  return res.render("home", { pageTitle: "Home", videos: [] });
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
export const postUpload = (req, res) => {
  const { title } = req.body;
  return res.redirect("/");
};
