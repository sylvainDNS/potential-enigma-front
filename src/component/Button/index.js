import { createNode } from '@Utils/builder'

export { AddButton } from './AddButton'
export { CompleteButton } from './CompleteButton'

export const Button = (onClick, className, label, game_id) => {
  const button = createNode('button')

  if (game_id) button.id = 'button-' + className + '-' + game_id
  button.type = 'button'
  button.innerHTML = label
  button.classList = `btn btn-${className}`

  button.addEventListener('click', onClick)

  return button
}
