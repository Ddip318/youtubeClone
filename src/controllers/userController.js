import User from "../models/User";

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = async (req, res) => {
  const { name, email, username, password, location } = req.body;
  const usernameExists = await User.exists({ username });
  if (usernameExists) {
    return res.render("join", {
      pageTitle: "Join",
      errorMessage: "This username is already taken.",
    });
  }
  const emailExists = await User.exists({ email });
  if (emailExists) {
    return res.render("join", {
      pageTitle: "Join",
      errorMessage: "This email is already taken.",
    });
  }
  await User.create({
    name,
    email,
    username,
    password,
    location,
  });
  return res.redirect("/login");
};
export const login = (req, res) => res.send("login");

export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Remove User");
export const logout = (req, res) => res.send("logout");
export const see = (req, res) => res.send("see");
