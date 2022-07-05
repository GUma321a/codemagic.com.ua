// ************************** Burger Menu ************************** //
function burgerMenu() {
  const burger  = document.querySelector(".header__burger");
  const menu    = document.querySelector(".header__menu-list");

  burger.addEventListener("click", () => {
    if (!menu.classList.contains("header__menu-list-active")) {
      menu.classList.add("header__menu-list-active");
      burger.classList.add("active-burger");
      document.body.style.overflow = "hidden";
    } else {
      menu.classList.remove("header__menu-list-active");
      burger.classList.remove("active-burger");
      document.body.style.overflow = "visible";
    }
  });

  menu.addEventListener("click", handleMenuClick);
  function handleMenuClick(event) {
    if (event.target instanceof HTMLAnchorElement) {
      menu.classList.remove("header__menu-list-active");
      burger.classList.remove("active-burger");
      document.body.style.overflow = "visible";
    }
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth > 999) {
      menu.classList.remove("header__menu-list-active");
      burger.classList.remove("active-burger");
    }
  });
}
burgerMenu();
// ************************** Burger Menu ************************** //



// ************************** Fade Up Animation ************************** //
function fadeUpAnimation() {
  let fadeUpContainer = document.querySelectorAll(".fade-up");

  for (let i = 0; i < fadeUpContainer.length; i++) {
    let windowHeight    = window.innerHeight;
    let elementTop      = fadeUpContainer[i].getBoundingClientRect().top;
    let elementVisible  = 150;

    if (elementTop < windowHeight - elementVisible) {
      fadeUpContainer[i].classList.add("animate");
    }
  }
}

window.addEventListener("scroll", fadeUpAnimation);
// ************************** Fade Up Animation ************************** //



// ************************** Tabs ************************** //
function Tabs() {
  let bindAll = function() {
    let menuElements = document.querySelectorAll('[data-tab]');
    for(let i = 0; i < menuElements.length ; i++) {
      menuElements[i].addEventListener('click', change, false);
    }
  };

  let clear = function() {
    let menuElements = document.querySelectorAll('[data-tab]');
    for(let i = 0; i < menuElements.length ; i++) {
      menuElements[i].classList.remove('active');
      let id = menuElements[i].getAttribute('data-tab');
      document.getElementById(id).classList.remove('active');
    }
  };

  let change = function(e) {
    e.preventDefault();
    clear();
    e.target.classList.add('active');
    let id = e.currentTarget.getAttribute('data-tab');
    document.getElementById(id).classList.add('active');
  };

  bindAll();
}

const connectTabs = new Tabs();
// ************************** Tabs ************************** //



// ************************** Icons Table Photos ************************** //
function iconsTable() {
  const iconsTableList = document.querySelector('.icons-table__list');
  const iconsTablePhotos = document.querySelector('.icons-table__photos');
  
  iconsTablePhotos.addEventListener("mouseover", () => {
    iconsTableList.classList.add('hide-list');
  });
  
  iconsTablePhotos.addEventListener("mouseleave", () => {
    iconsTableList.classList.remove('hide-list');
  });
}

iconsTable();
// ************************** Icons Table Photos ************************** //










// // ************************** Main Dashboard Change ************************** //
// function mainDashboardChange() {
//   let dashboardContainer = document.querySelectorAll(".features-overview__wrapper");

//   for (let i = 0; i < dashboardContainer.length; i++) {
//     let windowHeight    = window.innerHeight;
//     let elementTop      = dashboardContainer[i].getBoundingClientRect().top;
//     let elementBottom   = dashboardContainer[i].getBoundingClientRect().bottom;
//     let elementVisible  = 50;

//     const preventScroll = (e) => {
//       e.preventDefault();
//       e.stopPropagation();
    
//       return false;
//     };

//     if (elementTop < windowHeight - elementVisible) {
//       document.body.addEventListener('scroll', preventScroll, { passive: false });
//     } else {
//       document.body.removeEventListener('scroll', preventScroll, { passive: false });
//     }

//     if (elementBottom < windowHeight - elementVisible) {
//       document.body.addEventListener('scroll', preventScroll, { passive: false });
//     } else {
//       document.body.removeEventListener('scroll', preventScroll, { passive: false });
//     }
//   }
// }

// window.addEventListener("scroll", mainDashboardChange);
// // ************************** Main Dashboard Change ************************** //






// function overviewTabs() {
//   let overviewTabsContainer = document.querySelectorAll(".features-overview__wrapper");

//   for (let i = 0; i < overviewTabsContainer.length; i++) {
//     let windowHeight    = window.innerHeight;
//     let elementTop      = overviewTabsContainer[i].getBoundingClientRect().top;
//     let elementVisible  = 300;

//     if (elementTop < windowHeight - elementVisible) {
//       overviewTabsContainer[i].classList.add("animate");
//     } else {
//       overviewTabsContainer[i].classList.remove("animate");
//     }
//   }
// }

// window.addEventListener("scroll", overviewTabs);




// function disableScroll(){
//   document.querySelector('body').addEventListener('wheel', preventScroll);
// }

// function enableScroll(){
//   document.querySelector('body').removeEventListener('wheel', preventScroll);
// }

// document.querySelector('#prevent').addEventListener('click', disableScroll);
// document.querySelector('#allow').addEventListener('click', enableScroll);





// document.addEventListener('DOMContentLoaded', function(){
//   var tabs_from_top = document.querySelector('.scroll-tabs').offsetTop;
//   var window_height = window.clientHeight;
//   var tabs_height = document.querySelector('.scroll-tabs').offsetHeight;
//   var count_elements = document.querySelector('.scroll-tabs .et_pb_tabs_controls li').length;
//   var single_tab_height = tabs_height / count_elements;
//   var scrollsection_0 = tabs_from_top - window_height + single_tab_height;
//   var scrollsection_1 = scrollsection_0 + single_tab_height * 1;
//   var scrollsection_2 = scrollsection_0 + single_tab_height * 2;
//   var scrollsection_3 = scrollsection_0 + single_tab_height * 3;
//   var scrollsection_4 = scrollsection_0 + single_tab_height * 4;

//   window.addEventListener('scroll', function() {
//     var scrollTop = window.scrollY;

//     if (scrollTop < scrollsection_0) {
//       // hide / show content
//       document.querySelector('.et_pb_tab').classList.remove('et-pb-active-slide et_pb_active_content');
//       document.querySelector('.et_pb_tab').classList.add('hide_tab');
//       document.querySelector('.et_pb_tab.et_pb_tab_0').classList.remove('hide_tab');
//       document.querySelector('.et_pb_tab.et_pb_tab_0').classList.add('et-pb-active-slide et_pb_active_content');
//       // set active tab
//       document.querySelector('.et_pb_tabs_controls li').classList.remove('et_pb_tab_active');
//       document.querySelector('.et_pb_tabs_controls .et_pb_tab_0').classList.add('et_pb_tab_active');
//     } else if (
//       scrollTop >= scrollsection_0 && scrollTop < scrollsection_1
//     ) {
//       // hide / show content
//       document.querySelector('.et_pb_tab').classList.remove('et-pb-active-slide et_pb_active_content');
//       document.querySelector('.et_pb_tab').classList.add('hide_tab');
//       document.querySelector('.et_pb_tab.et_pb_tab_1').classList.remove('hide_tab');
//       document.querySelector('.et_pb_tab.et_pb_tab_1').classList.add('et-pb-active-slide et_pb_active_content');
//       // set active tab
//       document.querySelector('.et_pb_tabs_controls li').classList.remove('et_pb_tab_active');
//       document.querySelector('.et_pb_tabs_controls .et_pb_tab_1').classList.add('et_pb_tab_active');
//     } else if (
//       scrollTop >= scrollsection_1 && scrollTop < scrollsection_2
//     ) {
//       // hide / show content
//       document.querySelector('.et_pb_tab').classList.remove('et-pb-active-slide et_pb_active_content');
//       document.querySelector('.et_pb_tab').classList.add('hide_tab');
//       document.querySelector('.et_pb_tab.et_pb_tab_2').classList.remove('hide_tab');
//       document.querySelector('.et_pb_tab.et_pb_tab_2').classList.add('et-pb-active-slide et_pb_active_content');
//       // set active tab
//       document.querySelector('.et_pb_tabs_controls li').classList.remove('et_pb_tab_active');
//       document.querySelector('.et_pb_tabs_controls .et_pb_tab_2').classList.add('et_pb_tab_active');
//     } else if (
//       scrollTop >= scrollsection_2 && scrollTop < scrollsection_3
//     ) {
//       // hide / show content
//       document.querySelector('.et_pb_tab').classList.remove('et-pb-active-slide et_pb_active_content');
//       document.querySelector('.et_pb_tab').classList.add('hide_tab');
//       document.querySelector('.et_pb_tab.et_pb_tab_3').classList.remove('hide_tab');
//       document.querySelector('.et_pb_tab.et_pb_tab_3').classList.add('et-pb-active-slide et_pb_active_content');
//       // set active tab
//       document.querySelector('.et_pb_tabs_controls li').classList.remove('et_pb_tab_active');
//       document.querySelector('.et_pb_tabs_controls .et_pb_tab_3').classList.add('et_pb_tab_active');
//     } else if (
//       scrollTop >= scrollsection_3 && scrollTop < scrollsection_4
//     ) {
//       // hide / show content
//       document.querySelector('.et_pb_tab').classList.remove('et-pb-active-slide et_pb_active_content');
//       document.querySelector('.et_pb_tab').classList.add('hide_tab');
//       document.querySelector('.et_pb_tab.et_pb_tab_4').classList.remove('hide_tab');
//       document.querySelector('.et_pb_tab.et_pb_tab_4').classList.add('et-pb-active-slide et_pb_active_content');
//       // set active tab
//       document.querySelector('.et_pb_tabs_controls li').classList.remove('et_pb_tab_active');
//       document.querySelector('.et_pb_tabs_controls .et_pb_tab_4').classList.add('et_pb_tab_active');
//     }
//   });
// });