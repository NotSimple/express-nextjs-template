const app = require('./app')
const config = require('./config/config')
const database = require('./config/database')
const logger = require('./config/logger')

let server
database.sequelize
  .authenticate()
  .then(() => {
    logger.info('Connected to database')
    server = app.listen(config.port, () => {
      logger.info(`Server succesfully started on port ${config.port}`)
    })
  })
  .catch(() => {
    logger.info('Failed to connect to database')
  })

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed')
      process.exit(1)
    })
  } else {
    process.exit(1)
  }
}

const unexpectedErrorHandler = (error) => {
  logger.error(error)
  exitHandler()
}

process.on('uncaughtException', unexpectedErrorHandler)
process.on('unhandledRejection', unexpectedErrorHandler)

process.on('SIGTERM', () => {
  logger.info('SIGTERM received')
  if (server) {
    server.close()
  }
})
