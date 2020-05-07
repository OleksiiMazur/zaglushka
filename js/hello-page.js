"use strict";

function bannerMenuResize () {
    if ($(window).width() > 1200) {
        $('.banner-menu').addClass('opened');
    } else {
        $('.banner-menu').removeClass('opened');
    }
}

function bannerMenuToggle () {
    let bannerMenu = $('.banner-menu');
    let bannerMenuBtn = $('.banner-menu__btn');

    bannerMenuBtn.on('click', function () {
        bannerMenu.toggleClass('opened');
    });
}

function mobileMenuToggle () {
    let menu = $('.main-menu-popup');
    let hamburger = $('.hamburger--mobile');
    let links = $('.main-menu-popup, .logo, .overlay');
    let popupSearchIcon = $('.main-menu-popup .search-btn');
    let headerSearchIcon = $('.search-btn--header');
    let headerSearchWrap = $('.mobile-menu__search-wrap');
    let headerSearch = $('.mobile-menu .search-form input');
    let closeSearch = $('.search-form__close');

    hamburger.on('click', function () {
        menu.addClass('opened');
    });
    links.on('click', function () {
        menu.removeClass('opened');
    });
    popupSearchIcon.on('click', function () {
        menu.removeClass('opened');
        headerSearchWrap.addClass('visible');
        $('.logo').addClass('hidden');

        setTimeout(function () {
            headerSearch.focus();
        }, 700);
    });
    headerSearchIcon.on('click', function () {
        headerSearchWrap.addClass('visible');
        $('.logo').addClass('hidden');

        setTimeout(function () {
            headerSearch.focus();
        }, 100);
    });
    closeSearch.on('click', function () {
        headerSearchWrap.removeClass('visible');
        $('.logo').removeClass('hidden');
    });
}


$(document).ready(function () {
    bannerMenuToggle();
    mobileMenuToggle();
    bannerMenuResize();
});