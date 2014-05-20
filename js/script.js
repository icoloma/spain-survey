(function(window, document) {
  "use strict";

var 
  getURLParam = function(name, url) {
    var paramValue = (url || location.search).match(RegExp('[?&]' + name + '=(.+?)(&|$)'));
    return paramValue && decodeURIComponent(paramValue[1].replace(/\+/g, ' '));
  }

  // muestra los idiomas pasados en la URL y actualiza los paths
  Array.prototype.forEach.call(document.querySelectorAll("li.language"), function(li) {
    var parts = /language-([^ ]+)/.exec(li.className)
    , lang = parts && parts[1]
    , url = getURLParam(lang);
    if (url) {
      li.className = li.className.replace("hidden", "");
      li.querySelector("a").setAttribute("href", url)
    } 
  });

})(window, document);
