import io from 'socket.io-client'
import { config } from '@Utils/config'

const initSocket = () =>
  io(`${config.socket.host}:${config.socket.port}/spread`)

export const socket = initSocket()
