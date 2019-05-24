import io from 'socket.io-client'
import { config } from '@Utils/config'

export { addEvent } from './event/addEvent'
export { completeEvent } from './event/completeEvent'
export { deleteEvent } from './event/deleteEvent'

const initSocket = namespace =>
  io(`${config.socket.host}:${config.socket.port}/${namespace}`)

export const spreadSocket = initSocket('spread')
