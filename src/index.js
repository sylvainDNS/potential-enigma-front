import {
  spreadSocket,
  addEvent,
  deleteEvent,
  completeEvent,
} from '@Worker/socketClient'
import { setupDom } from '@Utils/builder'

import '@Style/main.scss'

setupDom()

addEvent(spreadSocket)
deleteEvent(spreadSocket)
completeEvent(spreadSocket)
