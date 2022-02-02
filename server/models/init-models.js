var DataTypes = require("sequelize").DataTypes;
var _NOTICE = require("./NOTICE");
var _PHOTO = require("./PHOTO");
var _POST = require("./POST");
var _REVIEW = require("./REVIEW");

function initModels(sequelize) {
  var NOTICE = _NOTICE(sequelize, DataTypes);
  var PHOTO = _PHOTO(sequelize, DataTypes);
  var POST = _POST(sequelize, DataTypes);
  var REVIEW = _REVIEW(sequelize, DataTypes);


  return {
    NOTICE,
    PHOTO,
    POST,
    REVIEW,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
