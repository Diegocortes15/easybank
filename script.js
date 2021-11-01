'use strict';

// const navigationToggle = function(){

// }

const navigationCheckbox = document.querySelector('.bar-navigation__checkbox');
const navigationMobile = document.querySelector('.navigation--mobile');
const burgerMenu = document.querySelector('.bar-navigation__toggle-button');
const overlay = document.querySelector('.overlay');

navigationCheckbox.checked = true;
navigationMobile.classList.add('hidden');

const openMobileNav = function () {
    console.log('toggle menu');
    overlay.classList.remove('hidden');
    navigationMobile.classList.remove('hidden');
    burgerMenu.innerHTML = '';
    burgerMenu.insertAdjacentHTML(
        'beforeend',
        `
        <svg class="bar-navigation-mobile__burguer" xmlns="http://www.w3.org/2000/svg" width="18" height="19">
            <g fill="#2D314D" fill-rule="evenodd">
              <path d="M.868.661l16.97 16.97-.706.708L.162 1.369z" />
              <path d="M.161 17.632L17.131.662l.708.706-16.97 16.97z" />
            </g>
          </svg>
        `
    );
};

const closeMobileNav = function () {
    console.log('hidden toggle menu');
    overlay.classList.add('hidden');
    navigationMobile.classList.add('hidden');
    burgerMenu.innerHTML = '';
    burgerMenu.insertAdjacentHTML(
        'beforeend',
        `
  <svg class="bar-navigation-mobile__burguer" xmlns="http://www.w3.org/2000/svg" width="24" height="11">
      <g fill="#2D314D" fill-rule="evenodd">
        <path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z" />
      </g>
    </svg>
  `
    );
};

burgerMenu.addEventListener('click', function () {
    // navigationCheckbox.checked = navigationCheckbox.checked === false ? false : true;
    console.log(navigationCheckbox.checked);

    if (navigationCheckbox.checked) {
        openMobileNav();
    }

    if (!navigationCheckbox.checked) {
        closeMobileNav();
    }
});

overlay.addEventListener('click', function () {
    if (!navigationCheckbox.checked) {
        navigationCheckbox.checked = true;
        closeMobileNav();
    }
});