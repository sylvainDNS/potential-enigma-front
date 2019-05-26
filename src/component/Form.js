import { createNode, append } from '@Utils/builder'
import { action } from '@Worker/action'

import { Card } from '@Component/Card'
import { Field } from '@Component/Field'
import { SubmitButton } from '@Component/Button'

export const Form = () => {
  const card = Card('Ajouter une partie')
  const form = createNode('form')
  const field = Field('game-name')
  const submitButton = SubmitButton('Ajouter', () => action.add('game-name'))

  append(form, [field, submitButton])

  return append(card, [form])
}
