const url = require('url')

const sequelizeParseUrl = (sqlUrl) => {
  const options = {}

  const urlParts = new url.URL(sqlUrl)

  options.dialect = urlParts.protocol.replace(/:$/, '')

  options.host = urlParts.hostname

  if (urlParts.pathname) {
    options.database = urlParts.pathname.replace(/^\//, '')
  }

  if (urlParts.port) {
    options.port = urlParts.port
  }

  if (urlParts.username) {
    options.username = urlParts.username
  }
  if (urlParts.password) {
    options.password = urlParts.password
  }
  return options
}

module.exports = sequelizeParseUrl
