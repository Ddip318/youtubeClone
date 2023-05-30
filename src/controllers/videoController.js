export const trending = (req, res) => res.send("Home Page Videos");
export const search = (req, res) => res.send("Search");

export const see = (req, res) => {
  res.send(`watch Video #${req.params.id}`);
};
export const edit = (req, res) => {
  console.log(req.params);
  res.send("Edit Video");
};
export const upload = (req, res) => res.send("upload");
export const deleteVideo = (req, res) => {
  console.log(req.params);
  res.send("deleteVideo");
};
