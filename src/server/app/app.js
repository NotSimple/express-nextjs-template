const compression = require('compression')
const cors = require('cors')
const express = require('express')
const helmet = require('helmet')

const config = require('./config/config')
const morgan = require('./config/morgan')
const { errorConverter, errorHandler } = require('./middlewares/error')
const handleInvalidRoutes = require('./middlewares/invalidRoutes')
const useDatabase = require('./middlewares/useDatabase')
const routes = require('./routes/v1')

const app = express()

if (config.env !== 'test') {
  app.use(morgan.successHandler)
  app.use(morgan.errorHandler)
}

// use secure HTTP headers
app.use(helmet())

// parse json body
app.use(express.json())

// compress all responses w/ gzip
app.use(compression())

// enable cors
const corsOptions = {
  origin: config.cors.origin,
  credentials: config.cors.credentials,
}
app.use(cors(corsOptions))

// load orm (accesible with req.orm)
app.use(useDatabase)

// v1 api routes
app.use('/v1', routes)

// HTTP 404 error for any invalid route
app.use(handleInvalidRoutes)

// convert error to ApiError, if needed
app.use(errorConverter)

// handle error
app.use(errorHandler)

module.exports = app
