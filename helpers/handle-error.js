const createPath = require("./create-path");

const handleError = (res, error) => {
  console.log(error);
  res.render(createPath("error"), { title: "Error" });
};

const apiHandleError = (res, error) =>{
  res.status(500).send(error.message);
}

module.exports = {
  handleError,
  apiHandleError,
}
