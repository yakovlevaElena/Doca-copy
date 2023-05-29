
document.getElementById('hider').onclick = function() {
    const cards = document.querySelectorAll('#card-hidden')
    for (const card of cards) {
        card.hidden = !card.hidden
    }
  }