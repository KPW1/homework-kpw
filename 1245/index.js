const news = document.querySelectorAll("main .first-page-slide .text-wrapper");
const fp = document.querySelectorAll("main .first-page-slide");
const fip = document.querySelectorAll("main .first-page-slide .img-wrapper");
const fpo = document.querySelector("main .first-page-container").offsetTop;
const fph = document.querySelectorAll("main .first-page-slide").clientHeight;
const sp = document.querySelector("main .second-page-container");
const spo = document.querySelector("main .second-page-container").offsetTop;
const tp = document.querySelector("main .third-page-container");
const tpo = document.querySelector("main .third-page-container").offsetTop;
const fourp = document.querySelector("main .fourth-page-container")
const fouro = document.querySelector("main .fourth-page-container").offsetTop;
const footer = document.querySelector('footer');
const inner = document.querySelectorAll('main .first-page-container .first-page-slide .text-box');
const inner2 = document.querySelector('main .first-page-container .first-page-slide .text-wrapper .text-inner');
const inner3 = document.querySelectorAll('main .first-page-container .first-page-slide .text-wrapper .text-inner');

const page = document.querySelectorAll('main .first-page-container .first-page-slide');
const next = document.querySelector('.next'); 
const prev = document.querySelector('.prev'); 
const counts = document.querySelectorAll('.counts');
const slide = document.querySelectorAll('.slide-box');
const img = document.querySelectorAll('.img-wrapper img')


let num = 0;
const pb = document.querySelector('.prev');
const nb = document.querySelector('.next');
const prevevt = () => {
  --num;
  if(num < 0) {
    $('main .first-page-container .first-page-slide .slide-box').animate({left: -2100 + 'px'}, 300);
    num=2; 
  } else if ((num >-1) || (num=0)) {
    $('main .first-page-container .first-page-slide .slide-box').animate({left: -1050 * num + 'px'}, 300);    
  }
  counts.forEach((a,idx,arr)=> {
    a.classList.remove('active')
    arr[num].classList.add('active');
  })
  img.forEach((a2,idx,arr2)=> {
    a2.classList.remove('active')
    arr2[num].classList.add('active');
  })
}
const nextevt = () => {
  ++num;
    if (num < 3) {
      $('main .first-page-container .first-page-slide .slide-box').animate({left: -1050 * num + 'px'}, 300);
    } else {
      $('main .first-page-container .first-page-slide .slide-box').animate({left: 0 + 'px'}, 300)
      num = 0;
    }
    counts.forEach((a,idx,arr)=> {
      a.classList.remove('active')
      arr[num].classList.add('active');
    })
    img.forEach((a,idx,arr)=> {
      a.classList.remove('active')
      arr[num].classList.add('active');
    })
}
prev.addEventListener('click',prevevt);
next.addEventListener('click',nextevt);


const countevent = () => {
  counts.forEach((a,idx,arr) => {
    
  })
}

// 하단 네비게이션바 
const scroll1 = () => {
  if(scrollY > 1) {
    $('nav').addClass('active');
  } else{
    $('nav').removeClass('active');
  }
};

// 첫 화면 텍스트박스 움직임 
const scroll2 = () => {
  if(scrollY > 1) {
    news.forEach((a)=> {
      a.style.transform = `translate(-50% , ${scrollY-10}%)`;
    });
  } else if (scrollY < fpo) {
    news.forEach((a)=> {
      a.style.transform = `translate(-50% , 0%)`;
    });
  } else {
    news.forEach((a)=> {
      a.style.transform = `translate(-50% , 0%)`;
    });
  }
};

// 첫 화면 이미지 움직임
const scroll3 = () => {
  if(scrollY > fpo) {
    fip.forEach((a) => {
      a.style.transform = `translate(0,${-100}px)`;
    });

  }else {
    fip.forEach((a) => {
      a.style.transform = `translate(0,0)`;
    });

  }
}

// 공용 하단바 위치 조절 
const scroll4 = () => {
  if(scrollY > spo) {
    footer.style.opacity = 1;
  }else {
    footer.style.opacity = 0;
  }
}
addEventListener("scroll", scroll1);
addEventListener("scroll", scroll2);
addEventListener("scroll", scroll3);
addEventListener("scroll", scroll4);


const circle = document.querySelector('main .third-page-container .circle-wrapper');
const scc = circle.scroll({behavior:"smooth"})

const cs = () => {
    if (scrollY > circle.offsetTop) {
      circle.style.opacity = 1;
      circle.style.width = scrollY - 700 + 'px';
    } else {
      circle.style.opacity = 0;
      circle.style.width = 0 + 'px';
    }
  }
const effect =document.querySelectorAll('.effect');
const ef1 =document.querySelectorAll('.ef1');
const ef2 =document.querySelectorAll('.ef2');
const ef3 =document.querySelectorAll('.ef3');
const ef4 =document.querySelectorAll('.ef4');
const eftext = document.querySelector('main .third-page-container .text-wrapper')
const fe = () => {
  if(scrollY < 1200 || scrollY > fouro - 200) {
    effect.forEach((a)=> {
      a.style.opacity =0;
    });
    eftext.style.opacity=0;
  }else if((scrollY > 1200) && (scrollY < 1500)) {
    effect.forEach((a,idx,arr) => {
      arr[0].style.opacity=1;
    });
    eftext.style.opacity=1;
  }else if((scrollY > 1500) && (scrollY < 1800)) {
    effect.forEach((a,idx,arr) => {
      arr[1].style.opacity =1;
    });
    eftext.style.opacity=1;
  }else if((scrollY > 1800) && (scrollY < 2100)) {
    effect.forEach((a,idx,arr) => {
      arr[2].style.opacity =1;
  });
  eftext.style.opacity=1;
  }else if((scrollY > 2100) && (scrollY < 2400)) {
    effect.forEach((a,idx,arr) => {
      arr[3].style.opacity =1;
  }); 
  eftext.style.opacity=1;
  }else {
    effect.forEach((a) => {
      a.style.opacity=1;
    });
  }
}
// $(window).on('scroll', () => {
//   $('.')
// });
addEventListener('scroll',cs);
addEventListener('scroll',fe);


const swiper = new Swiper(".mySwiper", {
  watchSlidesProgress: true,
  slidesPerView: 5,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});




const log = () => {
  console.log(scrollY);
}
addEventListener("scroll",log);


const logo = document.querySelector('.logo');

const come = () => {
  scrollTo({
    top:0,
    left:0,
    behavior:"smooth"
  })
}
logo.addEventListener('click',come);




