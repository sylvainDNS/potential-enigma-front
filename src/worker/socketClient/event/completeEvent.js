export const completeEvent = socket =>
  socket.on('complete', game_id => {
    const tr = document.getElementById(game_id)
    tr.className += 'completed'
    tr.lastChild.previousSibling.firstChild.remove()
    document.getElementById('counter').innerText--
  })
