const blacklist = require('metro-config/src/defaults/blacklist');

module.exports = {
  resolver: {
    blacklistRE: blacklist([
      // Add the regular expression pattern to match the warning here
      /onAnimatedValueUpdate/,
    ]),
  },
};
