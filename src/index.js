import { Form } from '@Component/Form'
import { DataTable } from '@Component/DataTable'
import { getGames } from '@Worker/apiFetcher'

import '@Style/main.scss'

const games = getGames()

Form()
DataTable(games)
