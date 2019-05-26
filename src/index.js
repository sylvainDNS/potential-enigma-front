import {
  spreadSocket,
  chatSocket,
  addEvent,
  deleteEvent,
  completeEvent,
  receiveEvent,
} from '@Worker/socketClient'
import { setupDom } from '@Utils/builder'

import '@Style/main.scss'

setupDom()

addEvent(spreadSocket)
deleteEvent(spreadSocket)
completeEvent(spreadSocket)
receiveEvent(chatSocket)
