import { deleteGame } from '@Worker/apiFetcher'
import { Button } from '@Component/Button'

export const DeleteButton = game_id =>
  Button(() => deleteGame(game_id), 'danger', 'Supprimer', game_id)
