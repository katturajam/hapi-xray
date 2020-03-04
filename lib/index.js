const { register } = require('./plugin');
const pjson = require('../package');
register.attributes = {
  name: pjson.name,
  version: pjson.version
};
exports.register = register;
