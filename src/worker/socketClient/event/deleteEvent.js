import { removeNodeById } from '@Utils/builder'

export const deleteEvent = socket =>
  socket.on('delete', game_id => {
    const element = document.getElementById(game_id)
    if (element.innerHTML.includes('Terminer'))
      document.getElementById('counter').innerText--
    removeNodeById(game_id)
  })
