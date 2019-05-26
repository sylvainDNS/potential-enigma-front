import { Button } from '@Component/Button'

export const DeleteButton = (onClick, game_id) =>
  Button(onClick, 'danger', 'Supprimer', game_id)
