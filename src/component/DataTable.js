import { append } from '@Utils/builder'
import { recover } from '@Utils/recover'

import { Card } from '@Component/Card'
import { Table } from '@Component/Table'
import { TableRow } from '@Component/TableRow'

export const DataTable = games => {
  const card = Card('Les parties')
  const table = Table()

  recover(
    games,
    games =>
      games.map(game => {
        const tr = TableRow(game)
        return append(table, [tr])
      }),
    err => console.error(err)
  )

  return append(card, [table])
}
