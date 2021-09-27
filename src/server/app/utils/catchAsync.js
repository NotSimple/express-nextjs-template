const objectMap = require('./objectMap')

const catchAsync = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => next(err))
}

module.exports = {
  map: (obj) => objectMap(obj, catchAsync),
  on: catchAsync,
}
