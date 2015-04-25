(function (document) {
  'use strict';

  var body = document.body;

  $(document).ready(function () {
    fab(false);
    slider();
  });

  document.querySelector('#send-message').addEventListener('click', function () {
    document.querySelector('#message-toast').show()
  });

  var p = document.querySelector('core-animated-pages');
  // Profile page
  document.querySelector('#link-profile').addEventListener('click', function () {
    fab(true);
    if ($(body).hasClass('vegas-container'))
      $(body).vegas('destroy');
    p.selected = 1;
  });
  // Skills page
  document.querySelector('#link-skills').addEventListener('click', function () {
    fab(true);
    if ($(body).hasClass('vegas-container'))
      $(body).vegas('destroy');
    p.selected = 2;
    pieCharts();
  });
  // Education page
  document.querySelector('#link-education').addEventListener('click', function () {
    fab(true);
    if ($(body).hasClass('vegas-container'))
      $(body).vegas('destroy');
    p.selected = 3;
  });
  // Experience page
  document.querySelector('#link-experience').addEventListener('click', function () {
    fab(true);
    if ($(body).hasClass('vegas-container'))
      $(body).vegas('destroy');
    p.selected = 4;
  });
  // Contact page
  document.querySelector('#link-contact').addEventListener('click', function () {
    fab(true);
    if ($(body).hasClass('vegas-container'))
      $(body).vegas('destroy');
    p.selected = 5;
  });
  // Contact page from main
  document.querySelector('#link-contact-2').addEventListener('click', function () {
    fab(true);
    if ($(body).hasClass('vegas-container'))
      $(body).vegas('destroy');
    p.selected = 5;
  });
  // Welcome page
  document.querySelector('#link-welcome').addEventListener('click', function () {
    fab(false);
    p.selected = 0;
    setTimeout(function () {
      if (!$(body).hasClass('vegas-container')) {
        slider();
      }
    }, 600);
  });
  // Back button
  document.querySelector('#previous-page').addEventListener('click', function () {
    if ($(body).hasClass('vegas-container'))
      $(body).vegas('destroy');
    var selected = p.selected;
    if (selected > 0) {
      p.selected = selected - 1;
    } else {
      p.selected = 0;
    }
    if (p.selected == 0) {
      fab(false);
      setTimeout(function () {
        if (!$(body).hasClass('vegas-container')) {
          slider();
        }
      }, 600);
    } else if (p.selected == 2) {
      fab(true);
      pieCharts();
    } else {
      fab(true);
    }
  });
})(wrap(document));

function slider () {
  var container = $('.header-container');
  container.hide();
  $(document.body).vegas({
    slides: [
      { src: 'images/slide-2.jpg' },
      { src: 'images/slide-1.jpg' }
    ],
    overlay: '../bower_components/vegas/dist/overlays/01.png',
    transition: 'zoomOut',
    init: function () {
      container.fadeIn(300);
    }
  });
}

function pieCharts() {
  setTimeout(function () {
    $('.chart').easyPieChart({
      barColor: '#3498db',
      size: '150',
      easing: 'easeOutBounce'
    });
  }, 400);
}

function fab(visible) {
 if (visible) {
   $('#previous-page').show();
 } else {
   $('#previous-page').hide();
 }
}


