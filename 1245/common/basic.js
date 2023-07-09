const Navscrolled = () => {
  if(scrollY > 1) {
    $('nav').addClass('active');
  } else{
    $('nav').removeClass('active');
  }
};
addEventListener("scroll", Navscrolled);