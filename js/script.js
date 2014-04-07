(function(window, document) {
  "use strict";

var 
  getURLParam = function(name, url) {
    var paramValue = (url || location.search).match(RegExp('[?&]' + name + '=(.+?)(&|$)'));
    return paramValue && decodeURIComponent(paramValue[1].replace(/\+/g, ' '));
  }

  // muestra los idiomas pasados en la URL y actualiza los paths
  Array.prototype.forEach.call(document.querySelectorAll("li.language"), function(li) {
    var lang, url;
    Array.prototype.forEach.call(li.classList, function(className) {
      var parts = /language-(.+)/.exec(className);
      lang = lang || parts && parts[1]
    }), 
    url = getURLParam(lang);
    if (url) {
      li.classList.remove("hidden");
      li.querySelector("a").setAttribute("href", url)
    } 
  });

})(window, document);