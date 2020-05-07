"use strict";

function subheaderHtml () {
    let desktopL = $(window).width() > 1700;
    let desktopM = $(window).width() <= 1700 && $(window).width() > 1400;
    let laptop = $(window).width() <= 1400 && $(window).width() > 1024;
    let tab = $(window).width() <= 1024 && $(window).width() > 768;
    let mobile = $(window).width() <= 768;

    if (desktopL) {

    } else if (desktopM) {

    }
}

function bannerMenuToggle () {
    let bannerMenu = $('.banner-menu');
    let bannerMenuBtn = $('.banner-menu__btn');

    bannerMenuBtn.on('click', function () {
        bannerMenu.toggleClass('opened');
    });
}


$(document).ready(function () {
    bannerMenuToggle();
    // $(window).on('resize', subheaderHtml);
});