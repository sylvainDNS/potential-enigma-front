import { addBubble } from '@Utils/builder'

export const receiveEvent = socket =>
  socket.on('receive', message => addBubble(message, 'receiver'))
