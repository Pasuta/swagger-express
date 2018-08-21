'use strict';

const diff = function (req, res) {
  const diff = parseInt(req.body.a) - parseInt(req.body.b);
  res.json({'diff': diff});
};

module.exports = {
  diff
};
