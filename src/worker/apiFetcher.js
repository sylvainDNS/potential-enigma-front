import { config } from '@Utils/config'

const url = `http://${config.api.host}:${config.api.port}/games`

export const addGame = name =>
  fetch(url, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({ name: name }),
  })
    .then(resp => resp.json())
    .catch(err => console.error(err))

export const getGames = () =>
  fetch(url)
    .then(resp => resp.json())
    .catch(err => console.error(err))
