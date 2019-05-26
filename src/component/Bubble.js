import { createNode } from '@Utils/builder'

export const Bubble = (message, owner) => {
  const bubble = createNode('div')
  bubble.className += `bubble ${owner}`

  bubble.innerHTML = message

  return bubble
}
