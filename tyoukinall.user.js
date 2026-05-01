// ==UserScript==
// @name         一括読み込み
// @match        https://midorinet-iwate.cybozu.com/o/ag.cgi?page=DBRecord&did=150*
// @match        https://midorinet-iwate.cybozu.com/o/ag.cgi?page=DBForm&did=150*
// @match        https://midorinet-iwate.cybozu.com/o/ag.cgi?page=DBTaskForm&did=150*
// @require      https://raw.githubusercontent.com/midoriI2026/tyoukin1/main/tyoukin1.js
// @require      https://raw.githubusercontent.com/midoriI2026/tyoukin2/main/tyoukin2.js
// @require      https://raw.githubusercontent.com/midoriI2026/tyoukin3/main/tyoukin3.js
// @require      https://raw.githubusercontent.com/midoriI2026/tyoukin4/main/tyoukin4.js
// ==/UserScript==
(function() {
  'use strict';

  const params = new URLSearchParams(location.search);

  function isPage(page, did) {
    return params.get("page") === page && params.get("did") === String(did);
  }

  window.addEventListener('load', () => {

    if (isPage("DBRecord", 150) || isPage("DBForm", 150)) {
      tyoukin1();
    }

    if (isPage("DBForm", 150)) {
      tyoukin2();
    }
    if (isPage("DBTaskForm", 150)) {
      tyoukin3();
    }
    if (isPage("DBTaskForm", 150) || isPage("DBForm", 150)) {
      tyoukin4();
    }
  });

})();
