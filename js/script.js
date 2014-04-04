(function(window, document) {
  "use strict";

var 
  getURLParam: function(name, url) {
    var paramValue = (url || location.search).match(RegExp('[?&]' + name + '=(.+?)(&|$)'));
    return paramValue && decodeURIComponent(paramValue[1].replace(/\+/g, ' '));
  },

  // muestra los idiomas pasados en la URL y actualiza los paths
  Array.prototype.forEach.call(b.querySelectorAll("li.language"), function(li) {
    var lang, url;
    Array.prototype.forEach.call(li.classList, function(className) {
      var parts = /language-(.+)/.exec(className);
      lang = lang || parts && parts[1]
    }), 
    url = getURLParam(lang);
    if (url) {

      li.classList.remove("hidden");
      li.querySelector("a").setAttribute("href", url))
    } 
  })


/*
  userLang = navigator.language || navigator.userLanguage || 'en'
  , languages = ['es', 'fr', 'de']
  ;
if (languages.indexOf(userLang) > -1) {
  var li = document.querySelector('.language-' + userLang);
  li.parentElement.insertBefore(li, li.parentElement.children[0]);
}
*/

/*
  Elimina los 'ghost clicks' en móviles  
*/
if ( 'ontouchstart' in window ||
    (window.DocumentTouch && document instanceof DocumentTouch) ) {
  var links = document.querySelectorAll('.language-link')
    , tapping = false

    , touchStartHandler = function(e) {
      tapping = true;
      this.className += ' fake-active';
      document.addEventListener('touchmove', cancelTap);
    }

    , touchEndHandler = function(e) {
      if (tapping) {
        tapping = false;
        window.location.href = e.target.href;
      }
      removeActive();
    }

    , removeActive = function() {
      var actives = document.querySelectorAll('.fake-active');
      for (var i = 0; i < actives.length; i++) {
        actives[i].className = actives[i].className.replace(/\bfake-active\b/g, '');          
      }
    }

    , cancelTap = function(e) {
      tapping = false;
      if (e.type === 'touchmove') {
        document.removeEventListener('touchmove', cancelTap);
      }
      removeActive();
    }

    , clickHandler = function(e) {
      e.preventDefault();
    }

    ;

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('touchstart', touchStartHandler);
    links[i].addEventListener('touchend', touchEndHandler);
    links[i].addEventListener('click', clickHandler);
  }
  document.addEventListener('touchcancel', cancelTap);
}})(window, document);