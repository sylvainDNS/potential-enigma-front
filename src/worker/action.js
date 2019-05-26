import { chatSocket } from '@Worker/socketClient'
import { addBubble } from '@Utils/builder'
import { addGame, completeGame, deleteGame } from '@Worker/apiFetcher'

export const action = {
  add: id => {
    const name = document.getElementById(id).value
    addGame(name)
    document.getElementById(id).value = ''
  },
  send: id => {
    const message = document.getElementById(id).value
    chatSocket.emit('send', message)
    document.getElementById(id).value = ''

    addBubble(message, 'sender')
  },
  complete: game_id => completeGame(game_id),
  delete: game_id => deleteGame(game_id),
}
