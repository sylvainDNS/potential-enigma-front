import { createNode, append } from '@Utils/builder'
import { action } from '@Worker/action'

import { Card } from '@Component/Card'
import { Field } from '@Component/Field'
import { SubmitButton } from '@Component/Button'

export const Chat = () => {
  const card = Card('Chat')
  const form = createNode('form')
  form.action = ''

  const div = createNode('div')
  div.id = 'conversation'

  const fieldId = 'chat-message'
  const field = Field(fieldId)
  const submitButton = SubmitButton('Envoyer', () => action.send(fieldId))

  append(form, [field, submitButton])

  return append(card, [div, form])
}
