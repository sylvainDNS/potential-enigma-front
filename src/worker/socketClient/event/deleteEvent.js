import { removeNodeById } from '@Utils/builder'

export const deleteEvent = socket =>
  socket.on('delete', game_id => removeNodeById(game_id))
