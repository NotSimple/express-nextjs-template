const path = require('path')

const dotenv = require('dotenv')
const Joi = require('joi')

const sequelizeParseUrl = require('../utils/sequelizeParseUrl')

dotenv.config({ path: path.join(__dirname, '../../.env') })

const environmentSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
    PORT: Joi.number().default(8080),
    POSTGRES_URL: Joi.string().required().description('SQL DB url'),
    SECRET_KEY: Joi.string().required().description('256 bit secret key'),
    COOKIE_DOMAIN: Joi.string().default('localhost'),
    COOKIE_MAX_AGE: Joi.number().default(24 * 60 * 60 * 1000), // default 1 day
    CORS_ORIGIN: Joi.any().default(false), // default CORS is off
    CORS_ALLOW_CREDENTIALS: Joi.bool().default(false),
    AWS_ACCESS_KEY_ID: Joi.string().required(),
    AWS_SECRET_ACCESS_KEY: Joi.string().required(),
  })
  .unknown()

const { value: env, error } = environmentSchema
  .prefs({ errors: { label: 'key' } })
  .validate(process.env)

if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

module.exports = {
  env: env.NODE_ENV,
  port: env.PORT,
  secret: env.SECRET_KEY,
  cookie: {
    domain: env.COOKIE_DOMAIN,
    maxAge: env.COOKIE_MAX_AGE,
  },
  cors: {
    origin: env.CORS_ORIGIN,
    credentials: env.CORS_ALLOW_CREDENTIALS,
  },
  database: sequelizeParseUrl(env.POSTGRES_URL),
  aws: {
    accessKeyId: env.AWS_ACCESS_KEY_ID,
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
  },
}
