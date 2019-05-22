import { createNode, append } from '@Utils/builder'

export const Table = () => {
  const table = createNode('table')
  table.id = 'game-table'
  table.classList = 'table'

  const tbody = createNode('tbody')

  return append(table, [tbody])
}
