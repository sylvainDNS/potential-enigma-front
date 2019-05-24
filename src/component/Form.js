import { createNode, append } from '@Utils/builder'

import { Card } from '@Component/Card'
import { Field } from '@Component/Field'
import { AddButton } from '@Component/Button'

export const Form = () => {
  const card = Card('Ajouter une partie')
  const form = createNode('form')
  const field = Field('game-name')
  const submitButton = AddButton('Ajouter', 'game-name')

  append(form, [field, submitButton])

  return append(card, [form])
}
