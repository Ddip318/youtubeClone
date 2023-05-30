const fakeUser = {
  username: "Nico",
  loggedIn: true,
};

export const trending = (req, res) => {
  res.render("home", { pageTitle: "Home", fakeUser });
};
export const search = (req, res) => res.send("Search");

export const see = (req, res) => {
  //res.send(`watch Video #${req.params.id}`);
  res.render("watch", { pageTitle: "Watch" });
};
export const edit = (req, res) => {
  res.render("edit", { pageTitle: "Edit" });
};
export const upload = (req, res) => {
  res.send("upload");
};
export const deleteVideo = (req, res) => {
  console.log(req.params);
  res.send("deleteVideo");
};
