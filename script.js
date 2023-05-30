//делаем кнопку
document.getElementById('hider').onclick = function() {
    const cards = document.querySelectorAll('#card-hidden')
    for (const card of cards) {
        card.hidden = !card.hidden
    }
  }

//делаем тему
let changeThemeButtons = document.querySelectorAll('.theme-toogle');
document.getElementById('dark').onclick = function() {
    
  }