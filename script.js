// スクロール値取得
window.addEventListener("scroll", function(){
  let scrollTop = document.documentElement.scrollTop;
  if(220 < scrollTop && scrollTop < 1100){
    document.getElementById("concept-text").classList.add("show");
  }
  if(scrollTop > 1101){
    document.getElementById("concept-text").classList.remove("show");
  }

  // weight出現
  if(1600 < scrollTop && scrollTop < 2300){
    document.getElementById("weight").classList.add("show");
  }else{
    document.getElementById("weight").classList.remove("show");
  }

  // design出現
  if(2400 < scrollTop && scrollTop < 3100){
    document.getElementById("design").classList.add("show");
  }else{
    document.getElementById("design").classList.remove("show");
  }

  //performance出現
  if(3200 < scrollTop && scrollTop < 3900){
    document.getElementById("performance").classList.add("show");
  }else{
    document.getElementById("performance").classList.remove("show");
  }

});

// swiper
var mySwiper = new Swiper('.swiper-container', {
  loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


// footerアコーディオン
const title = document.querySelectorAll('.js-accordion');
for(let i=0; i<title.length; i++){
  let titleEach = title[i];
  let content = titleEach.nextElementSibling;
  titleEach.addEventListener("click", function(){
    titleEach.classList.toggle("is-active");
    content.classList.toggle("is-open");
  });
}