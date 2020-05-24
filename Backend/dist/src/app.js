const express = require("express");
const HttpError = require("./models/http-error");
const weatherRoutes = require("./routes/weather-routes");
const { GENERAL_ERROR, ROUTE_NOT_FOUND_ERROR } = require("./utils/constants");
const app = express();
const port = process.env.PORT || 3000;
/* app.use((req, res, next) => {
  //* means will open this api to all the domains
  res.setHeader("Access-Control-Allow-Origin", "*");
  //control which header incoming req can have
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
}); */
app.use("/weather", weatherRoutes);
app.use((req, res, next) => {
    throw new HttpError(ROUTE_NOT_FOUND_ERROR, 404);
});
app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res
        .status(error.code || 500)
        .json({ message: error.message || GENERAL_ERROR });
});
app.listen(port, () => {
    console.log(`Server is up on port ${port}.`);
});
//# sourceMappingURL=app.js.map