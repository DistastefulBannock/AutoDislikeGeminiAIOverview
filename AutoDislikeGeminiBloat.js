// ==UserScript==
// @name         Auto Dislike Gemini Bloat
// @namespace    http://tampermonkey.net/
// @version      2025-05-15
// @description  We're sick of having LLMs shoved down our throats so let's feed them garbage data
// @author       DistastefulBannock
// @match        https://www.google.com/search?q=**
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// @run-at  document-end
// ==/UserScript==

(function() {
    'use strict';
    let interval = setInterval(dislikeGarbage, 2500);
    function dislikeGarbage(){
        let element = document.querySelector("[aria-label=\"Thumbs down\"]");
        if (element === null){
            return;
        }
        element.click()
        console.log("Disliked suggestion");
        clearInterval(interval);
    }
})();
