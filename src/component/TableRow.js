import { append, createNode } from '@Utils/builder'
import { action } from '@Worker/action'
import { CompleteButton, DeleteButton } from '@Component/Button'

export const TableRow = game => {
  const tr = createNode('tr'),
    th = createNode('th'),
    td_complete = createNode('td'),
    td_delete = createNode('td')

  tr.id = game.game_id

  if (game.completedAt) tr.classList.add('completed')
  else
    append(td_complete, [
      CompleteButton(() => action.complete(game.game_id), game.game_id),
    ])

  th.innerHTML = game.name

  append(td_delete, [
    DeleteButton(() => action.delete(game.game_id), game.game_id),
  ])

  return append(tr, [th, td_complete, td_delete])
}
