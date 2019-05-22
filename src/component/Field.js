import { createNode } from '@Utils/builder'

export const Field = id => {
  const input = createNode('input')
  input.id = id
  input.type = 'text'
  input.placeholder = 'Nom de la partie'
  input.classList = 'form-control mb-2 mr-sm-2'
  return input
}
