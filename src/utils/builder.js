import { Form } from '@Component/Form'
import { DataTable } from '@Component/DataTable'
import { Chat } from '@Component/Chat'
import { Bubble } from '@Component/Bubble'
import { getGames } from '@Worker/apiFetcher'

export const setupDom = () => {
  const root = document.getElementById('root')

  const games = getGames()

  const form = Form()
  const dataTable = DataTable(games)
  const chat = Chat()

  append(root, [form, dataTable, chat])
}

export const append = (parent, children) => {
  children.map(child => parent.appendChild(child))
  return parent
}

export const createNode = element => document.createElement(element)

export const removeNodeById = elementId => {
  const element = document.getElementById(elementId)
  return element.parentNode.removeChild(element)
}

export const addBubble = (message, owner) => {
  const conversation = document.getElementById('conversation')
  const bubble = Bubble(message, owner)

  return append(conversation, [bubble])
}
