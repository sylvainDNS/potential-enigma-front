import { addGame } from '@Worker/apiFetcher'
import { Button } from '@Component/Button'

export const AddButton = (label, id) =>
  Button(
    () => {
      const name = document.getElementById(id).value
      addGame(name)
      document.getElementById(id).value = ''
    },
    'primary',
    label
  )
