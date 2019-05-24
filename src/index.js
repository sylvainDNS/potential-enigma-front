import { Form } from '@Component/Form'
import { DataTable } from '@Component/DataTable'
import { getGames } from '@Worker/apiFetcher'
import {
  spreadSocket,
  addEvent,
  deleteEvent,
  completeEvent,
} from '@Worker/socketClient'

import '@Style/main.scss'

const games = getGames()

Form()
DataTable(games)

addEvent(spreadSocket)
deleteEvent(spreadSocket)
completeEvent(spreadSocket)
