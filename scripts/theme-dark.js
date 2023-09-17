const lightThemeBtn = document.querySelector(
  '.header__theme-button_type_light'
)

const darkThemeBtn = document.querySelector('.header__theme-button_type_dark');

window.onload = () => {
  const themeLocal = localStorage.getItem('theme')
}