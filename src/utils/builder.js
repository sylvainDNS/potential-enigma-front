import { Form } from '@Component/Form'
import { DataTable } from '../component/DataTable'
import { getGames } from '@Worker/apiFetcher'

export const setupDom = () => {
  const root = document.getElementById('root')

  const games = getGames()

  const form = Form()
  const dataTable = DataTable(games)

  append(root, [form, dataTable])
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
