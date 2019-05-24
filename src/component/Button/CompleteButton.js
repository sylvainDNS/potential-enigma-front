import { completeGame } from '@Worker/apiFetcher'
import { Button } from '@Component/Button'

export const CompleteButton = game_id =>
  Button(() => completeGame(game_id), 'info', 'Terminer', game_id)
