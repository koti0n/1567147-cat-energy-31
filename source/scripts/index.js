/* в этот файл добавляет скрипты*/

const button = document.querySelector('.main-nav__toggle');
const navigation = document.querySelector('.main-nav');

button.onclick = function(){
  navigation.classList.toggle('main-nav--closed');
};
