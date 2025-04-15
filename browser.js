// browser.js v1.0 | @ajlkn | MIT licensed

(function () {
  'use strict';

  // Add classes to <html> based on browser
  var ua = navigator.userAgent,
      html = document.documentElement,
      isIE = ua.match(/(MSIE|Trident)/),
      isEdge = ua.match(/Edge\/([0-9]+)/),
      isChrome = ua.match(/Chrome\/([0-9]+)/),
      isSafari = ua.match(/Safari/) && !ua.match(/Chrome/),
      isFirefox = ua.match(/Firefox\/([0-9]+)/),
      isMobile = ua.match(/Mobi/);

  if (isIE) {
    html.classList.add('is-ie');
  }

  if (isEdge) {
    html.classList.add('is-edge');
  }

  if (isChrome) {
    html.classList.add('is-chrome');
  }

  if (isSafari) {
    html.classList.add('is-safari');
  }

  if (isFirefox) {
    html.classList.add('is-firefox');
  }

  if (isMobile) {
    html.classList.add('is-mobile');
  }
})();
