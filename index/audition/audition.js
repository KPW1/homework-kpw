
// 첫페이지 움직임 코드
const news = document.querySelector("main .first-page-container .txt-wrapper");
const fp = document.querySelector("main .first-page-container");
const fph = document.querySelector("main .first-page-container").clientHeight;
const fpo = document.querySelector("main .first-page-container").offsetTop;
const spo = document.querySelector("main .second-page-container").offsetTop;
const tpo = document.querySelector("main .third-page-container").offsetTop;




const scrolled = () => {
  const fpsh = fph - scrollY;
  if(scrollY > 100) {
    news.style.transform = `translate(-50% , ${scrollY-100}%)`;
  } else {
    news.style.transform = `translate(-50%, 0)`
  }
};
addEventListener("scroll", scrolled);



// 첫 화면 텍스트박스 움직임 
// const scroll2 = () => {
//   if(scrollY > 1) {
//     news.forEach((h2)=> {
//       h2.style.transform = `translate(-50% , ${scrollY-10}%)`;
//     });
//   } else if (scrollY < fpo) {
//     news.forEach((h2)=> {
//       h2.style.transform = `translate(-50% , 0%)`;
//     });
//   } else {
//     news.forEach((h2)=> {
//       h2.style.transform = `translate(-50% , 0%)`;
//     });
//   }
// };


const white = document.querySelector('.white')
// 메뉴 동작
var app = function () {
  var body = undefined;
  var menu = undefined;
  var menuItems = undefined;
  var init = function init() {
    body = document.querySelector('body');
    menu = document.querySelector('.menu');
    // logo = document.querySelector('.logo');
    menuItems = document.querySelectorAll('.menu-list-item');
    applyListeners();
  };

  var applyListeners = function applyListeners() {
    menu.addEventListener('click', function () {
      white.style.opacity=0;
      return toggleClass(body, 'menu-active');
    });
  };
  var toggleClass = function toggleClass(element, stringClass) {
    if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
  };
  init();
}();


// 공용 하단바 움직임
const footer = document.querySelector('footer');
const scroll4 = () => {
  if(scrollY > fp) {
    footer.style.opacity = 1;
  }else {
    footer.style.opacity = 1;
  }
}
addEventListener("scroll", scroll4);
// addEventListener("scroll", scroll2);

