export const localsMiddlewate = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "Youtube Clone";
  res.locals.loggedInUser = req.session.user;
  next();
};
