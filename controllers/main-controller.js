const createPath = require("../helpers/create-path");
const handleError = require("../helpers/handle-error");

const getMainPage = (req, res) => {
  const title = "Home";
  res.render(createPath("index"), { title });
};

module.exports = {
    getMainPage,
}