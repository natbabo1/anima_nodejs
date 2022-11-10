const fs = require("fs");
const path = require("path");
const ServerError = require("../utilities/serverError");

module.exports = async (req, res, next) => {
  try {
    res
      .status(200)
      .render(
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/vF93EfemJ4E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
      );
  } catch (err) {
    next(err);
  }
};
