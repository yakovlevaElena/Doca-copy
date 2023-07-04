// //делаем кнопку
// document.getElementById('hider').onclick = function() {
//     const cards = document.querySelectorAll('#card-hidden')
//     for (const card of cards) {
//         card.hidden = !card.hidden
//     }
//   }

// //делаем тему
// const themeToggle = document.querySelectorAll(.'theme');

// themeToggle.forEach()


// Пробую изменить тему по методу из youtube
// let changeThemeButtons = document.querySelectorAll('.changeTheme'); // Помещаем кнопки смены темы в переменную

// changeThemeButtons.forEach(button => {
//     button.addEventListener('click', function () { // К каждой добавляем обработчик событий на клик
//         let theme = this.dataset.theme; // Помещаем в переменную название темы из атрибута data-theme
//         applyTheme(theme); // Вызываем функцию, которая меняет тему и передаем в нее её название
//     });
// });

// function applyTheme(themeName) {
//     document.querySelector('[title="theme"]').setAttribute('href', `css/theme-${themeName}.css`); // Помещаем путь к файлу темы в пустой link в head
//     changeThemeButtons.forEach(button => {
//         button.style.display = 'block'; // Показываем все кнопки смены темы
//     });
//     document.querySelector(`[data-theme="${themeName}"]`).style.display = 'none'; // Но скрываем кнопку для активной темы
// }

//Пробую изменить тему по методу htmlacademy
document.querySelector('.page');
document.querySelector('.page').classList.add('theme-dark');

const button= document.querySelector('.dsafa')

button.addEventListener('click', () => {

})

