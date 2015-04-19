(function (document) {
  'use strict';

  $(document).ready(function () {
    $(document.body).vegas({
      slides: [
        { src: 'images/slide-1.jpg' },
        { src: 'images/slide-2.jpg' }
      ]
    });
    $('.chart').easyPieChart({
      barColor: '#3498db',
      size: '150',
      easing: 'easeOutBounce'
    });
  });

  document.querySelector('#send-message').addEventListener('click', function () {
    document.querySelector('#message-toast').show()
  });

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  //var app = document.querySelector('#app');
  //app.appName = 'Yo, Polymer App!';

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  //app.addEventListener('template-bound', function() {
  //  console.log('Our app is ready to rock!');
  //});

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));


