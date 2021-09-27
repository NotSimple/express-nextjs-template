const database = require('../config/database')

const useDatabase = (req, res, next) => {
  req.orm = database
  next()
}

module.exports = useDatabase
