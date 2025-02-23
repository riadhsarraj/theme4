import $ from 'jquery'; // Importez jQuery

/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Quantity

******************************/

$(document).ready(function() {
  "use strict";

  /* 

  1. Vars and Inits

  */

  var header = $('.header');
  var menuActive = false;
  var menu = $('.menu');
  var burger = $('.burger_container');

  setHeader();

  $(window).on('resize', function() {
    setHeader();
  });

  $(document).on('scroll', function() {
    setHeader();
  });

  initMenu();
  initQuantity();

  /* 

  2. Set Header

  */

  function setHeader() {
    if ($(window).scrollTop() > 100) {
      header.addClass('scrolled');
    } else {
      header.removeClass('scrolled');
    }
  }

  /* 

  3. Init Menu

  */

  function initMenu() {
    if ($('.menu').length) {
      var menu = $('.menu');
      if ($('.burger_container').length) {
        burger.on('click', function() {
          if (menuActive) {
            closeMenu();
          } else {
            openMenu();

            $(document).one('click', function cls(e) {
              if ($(e.target).hasClass('menu_mm')) {
                $(document).one('click', cls);
              } else {
                closeMenu();
              }
            });
          }
        });
      }
    }
  }

  function openMenu() {
    menu.addClass('active');
    menuActive = true;
  }

  function closeMenu() {
    menu.removeClass('active');
    menuActive = false;
  }

  /* 

  4. Init Quantity

  */

  function initQuantity() {
    // Handle product quantity input
    if ($('.product_quantity').length) {
      var input = $('#quantity_input');
      var incButton = $('#quantity_inc_button');
      var decButton = $('#quantity_dec_button');

      var originalVal;
      var endVal;

      incButton.on('click', function() {
        originalVal = input.val();
        endVal = parseFloat(originalVal) + 1;
        input.val(endVal);
      });

      decButton.on('click', function() {
        originalVal = input.val();
        if (originalVal > 0) {
          endVal = parseFloat(originalVal) - 1;
          input.val(endVal);
        }
      });
    }
  }

  // Exportez les fonctions que vous souhaitez utiliser dans React
  window.initMenu = initMenu;
  window.initQuantity = initQuantity;
});