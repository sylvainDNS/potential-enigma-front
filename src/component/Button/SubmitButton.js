import { chatSocket } from '@Worker/socketClient'
import { Button } from '@Component/Button'
import { addBubble } from '@Utils/builder'

export const SubmitButton = (label, id) =>
  Button(
    () => {
      const message = document.getElementById(id).value
      chatSocket.emit('send', message)
      document.getElementById(id).value = ''

      addBubble(message, 'sender')
    },
    'primary',
    label
  )
