const httpStatus = require('http-status')

const catchAsync = require('../utils/catchAsync')

const hello = async (req, res) => {
  const helloString = 'Hello World!'
  // call model
  // req.orm.User.findOne(...)
  res.status(httpStatus.OK).send({
    message: helloString,
  })
}

module.exports = catchAsync.map({
  hello,
})
