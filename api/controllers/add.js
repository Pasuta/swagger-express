'use strict';

const add = function (req, res) {
  const sum = parseInt(req.body.a) + parseInt(req.body.b);
  res.json({'sum': sum});
};

module.exports = {
  add
};
