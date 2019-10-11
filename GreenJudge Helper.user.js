// ==UserScript==
// @name         GreenJudge Helper
// @namespace    https://kevinweng.tk/
// @version      0.1
// @description  GreenJudge Helper
// @author       nevikw39
// @match        http://www.tcgs.tc.edu.tw:1218/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const user = document.querySelector("body > div:nth-child(2) > ul > li:nth-child(1) > a").innerText.slice(0, -2);
    if (user == "Log")
        return;
    if (document.URL.includes("ShowProblem"))
    {
        const problem = document.querySelector("body > div.content_individual > div:nth-child(1) > div:nth-child(2) > span").innerText.slice(0, 4);
        const bar = document.querySelector("body > div.content_individual > div:nth-child(21)");
        let submit = document.createElement("a");
        submit.classList.add("buttonlink");
        submit.innerText = "My Submits";
        submit.href = `http://www.tcgs.tc.edu.tw:1218/RealtimeStatus?problemid=${problem}&account=${user}`;
        bar.appendChild(submit);
        let next = document.createElement("a");
        next.classList.add("buttonlink");
        next.innerText = "Next";
        next.href = `http://www.tcgs.tc.edu.tw:1218/ShowProblem?problemid=${problem[0] + (parseInt(problem.slice(1)) + 1).toString().padStart(3, '0')}`;
        bar.appendChild(next);
        let prev = document.createElement("a");
        prev.classList.add("buttonlink");
        prev.innerText = "Prev";
        prev.href = `http://www.tcgs.tc.edu.tw:1218/ShowProblem?problemid=${problem[0] + (parseInt(problem.slice(1)) - 1).toString().padStart(3, '0')}`;
        bar.insertBefore(prev, bar.firstChild);
    }
})();