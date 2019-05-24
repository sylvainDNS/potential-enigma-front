import { recover } from '@Utils/recover'
import { getGame } from '@Worker/apiFetcher'
import { append } from '@Utils/builder'
import { TableRow } from '@Component/TableRow'

export const addEvent = socket =>
  socket.on('add', game_id => {
    recover(
      getGame(game_id),
      game => {
        const tr = TableRow(game)
        const table = document.getElementById('game-table')
        append(table, [tr])
      },
      err => console.error(err)
    )
  })
