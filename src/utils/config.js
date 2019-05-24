import env from 'common-env'
import dotenv from 'dotenv'

dotenv.config()

export const config = env().getOrElseAll({
  api: {
    host: 'localhost',
    port: 4444,
  },
  socket: {
    host: 'localhost',
    port: 4444,
  },
})
