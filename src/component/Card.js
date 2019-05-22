import { createNode, append } from '@Utils/builder'

export const Card = title => {
  const card = createNode('div')
  card.classList.add('card')

  const cardHeader = createNode('div')
  cardHeader.classList = 'card-header'
  cardHeader.innerHTML = title

  return append(card, [cardHeader])
}
