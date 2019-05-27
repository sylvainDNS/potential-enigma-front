import { createNode } from '@Utils/builder'

export const Counter = count => {
  const counter = createNode('span')
  counter.className += 'counter '
  counter.className += 'badge badge-pill badge-secondary '
  counter.id = 'counter'
  counter.innerText = count

  return counter
}
