'use strict';
// hamburger

const ham = document.querySelector('#hamburger');
const nav = document.querySelector('#js-nav');

ham.addEventListener('click', function(){
  ham.classList.toggle('active');
  nav.classList.toggle('active');
});

// new-itemスライドショー
const newItemSwiper = new Swiper('.new-item-swiper', {
  slidesPerView: 1,
  spaceBetween: 16,
  grabCursor: true,
  loop:true,
  autoplay:{
    delay:3000,
  },
  speed:500,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
    950: {
      slidesPerView: 4,
      // spaceBetween: 32,
    }
  },
});

// Ranking タブ切替
document.addEventListener('DOMContentLoaded', function(){
  // タブに対してクリックイベントを適用
  const tabs = document.getElementsByClassName('tab');
  console.log(tabs);
  for(let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', tabSwitch, false);
  }

  // タブをクリックすると実行する関数
  function tabSwitch(){
    // タブのclassの値を変更
    document.getElementsByClassName('is-active')[0].classList.remove('is-active');
    this.classList.add('is-active');
    // コンテンツのclassの値を変更
    document.getElementsByClassName('is-show')[0].classList.remove('is-show');
    const arrayTabs = Array.prototype.slice.call(tabs);
    const index = arrayTabs.indexOf(this);
    document.getElementsByClassName('panel')[index].classList.add('is-show');
  };
}, false);

// newsスライドショー

const slideLength = document.querySelectorAll('.news-swiper-slide').length;

  const initSwiper = () => {
    const newsSwiper = new Swiper('.news-swiper', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      loop: true,
      loopedSlides: slideLength,
      speed: 8000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      freeMode: {
        enabled: true,
        momentum: false,
      },
      grabCursor: true,
      breakpoints: {
        1025: {
          spaceBetween: 32,
        }
      },
      on: {
        touchEnd: (swiper) => {
          swiper.slideTo(swiper.activeIndex + 1);
        }
      }
    });
  };

  window.addEventListener('load', function(){
    initSwiper();
  });

