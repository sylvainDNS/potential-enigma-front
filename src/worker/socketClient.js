import io from 'socket.io-client'
import { config } from '@Utils/config'

const initSocket = namespace =>
  io(`${config.socket.host}:${config.socket.port}/${namespace}`)

export const spreadSocket = () => initSocket('spread')
