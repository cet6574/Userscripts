// ==UserScript==
// @name               ACT.Google.DM.NCR
// @name:zh-CN         ACT.谷歌.DM.NCR
// @description        Google region locked, no country redirect.
// @description:zh-CN  谷歌地区锁定，没有国家重定向。
// @author             ACTCD
// @version            20220403.1
// @license            GPL-3.0-or-later
// @namespace          ACTCD/Userscripts
// @supportURL         https://github.com/ACTCD/Userscripts#contact
// @homepageURL        https://github.com/ACTCD/Userscripts
// @updateURL          https://raw.githubusercontent.com/ACTCD/Userscripts/main/userjs/ACT.Google.DM.NCR.user.js
// @downloadURL        https://raw.githubusercontent.com/ACTCD/Userscripts/main/userjs/ACT.Google.DM.NCR.user.js
// @match              *://www.google.com/*
// @match              *://www.google.ad/*
// @match              *://www.google.ae/*
// @match              *://www.google.com.af/*
// @match              *://www.google.com.ag/*
// @match              *://www.google.com.ai/*
// @match              *://www.google.al/*
// @match              *://www.google.am/*
// @match              *://www.google.co.ao/*
// @match              *://www.google.com.ar/*
// @match              *://www.google.as/*
// @match              *://www.google.at/*
// @match              *://www.google.com.au/*
// @match              *://www.google.az/*
// @match              *://www.google.ba/*
// @match              *://www.google.com.bd/*
// @match              *://www.google.be/*
// @match              *://www.google.bf/*
// @match              *://www.google.bg/*
// @match              *://www.google.com.bh/*
// @match              *://www.google.bi/*
// @match              *://www.google.bj/*
// @match              *://www.google.com.bn/*
// @match              *://www.google.com.bo/*
// @match              *://www.google.com.br/*
// @match              *://www.google.bs/*
// @match              *://www.google.bt/*
// @match              *://www.google.co.bw/*
// @match              *://www.google.by/*
// @match              *://www.google.com.bz/*
// @match              *://www.google.ca/*
// @match              *://www.google.cd/*
// @match              *://www.google.cf/*
// @match              *://www.google.cg/*
// @match              *://www.google.ch/*
// @match              *://www.google.ci/*
// @match              *://www.google.co.ck/*
// @match              *://www.google.cl/*
// @match              *://www.google.cm/*
// @match              *://www.google.cn/*
// @match              *://www.google.com.co/*
// @match              *://www.google.co.cr/*
// @match              *://www.google.com.cu/*
// @match              *://www.google.cv/*
// @match              *://www.google.com.cy/*
// @match              *://www.google.cz/*
// @match              *://www.google.de/*
// @match              *://www.google.dj/*
// @match              *://www.google.dk/*
// @match              *://www.google.dm/*
// @match              *://www.google.com.do/*
// @match              *://www.google.dz/*
// @match              *://www.google.com.ec/*
// @match              *://www.google.ee/*
// @match              *://www.google.com.eg/*
// @match              *://www.google.es/*
// @match              *://www.google.com.et/*
// @match              *://www.google.fi/*
// @match              *://www.google.com.fj/*
// @match              *://www.google.fm/*
// @match              *://www.google.fr/*
// @match              *://www.google.ga/*
// @match              *://www.google.ge/*
// @match              *://www.google.gg/*
// @match              *://www.google.com.gh/*
// @match              *://www.google.com.gi/*
// @match              *://www.google.gl/*
// @match              *://www.google.gm/*
// @match              *://www.google.gr/*
// @match              *://www.google.com.gt/*
// @match              *://www.google.gy/*
// @match              *://www.google.com.hk/*
// @match              *://www.google.hn/*
// @match              *://www.google.hr/*
// @match              *://www.google.ht/*
// @match              *://www.google.hu/*
// @match              *://www.google.co.id/*
// @match              *://www.google.ie/*
// @match              *://www.google.co.il/*
// @match              *://www.google.im/*
// @match              *://www.google.co.in/*
// @match              *://www.google.iq/*
// @match              *://www.google.is/*
// @match              *://www.google.it/*
// @match              *://www.google.je/*
// @match              *://www.google.com.jm/*
// @match              *://www.google.jo/*
// @match              *://www.google.co.jp/*
// @match              *://www.google.co.ke/*
// @match              *://www.google.com.kh/*
// @match              *://www.google.ki/*
// @match              *://www.google.kg/*
// @match              *://www.google.co.kr/*
// @match              *://www.google.com.kw/*
// @match              *://www.google.kz/*
// @match              *://www.google.la/*
// @match              *://www.google.com.lb/*
// @match              *://www.google.li/*
// @match              *://www.google.lk/*
// @match              *://www.google.co.ls/*
// @match              *://www.google.lt/*
// @match              *://www.google.lu/*
// @match              *://www.google.lv/*
// @match              *://www.google.com.ly/*
// @match              *://www.google.co.ma/*
// @match              *://www.google.md/*
// @match              *://www.google.me/*
// @match              *://www.google.mg/*
// @match              *://www.google.mk/*
// @match              *://www.google.ml/*
// @match              *://www.google.com.mm/*
// @match              *://www.google.mn/*
// @match              *://www.google.ms/*
// @match              *://www.google.com.mt/*
// @match              *://www.google.mu/*
// @match              *://www.google.mv/*
// @match              *://www.google.mw/*
// @match              *://www.google.com.mx/*
// @match              *://www.google.com.my/*
// @match              *://www.google.co.mz/*
// @match              *://www.google.com.na/*
// @match              *://www.google.com.ng/*
// @match              *://www.google.com.ni/*
// @match              *://www.google.ne/*
// @match              *://www.google.nl/*
// @match              *://www.google.no/*
// @match              *://www.google.com.np/*
// @match              *://www.google.nr/*
// @match              *://www.google.nu/*
// @match              *://www.google.co.nz/*
// @match              *://www.google.com.om/*
// @match              *://www.google.com.pa/*
// @match              *://www.google.com.pe/*
// @match              *://www.google.com.pg/*
// @match              *://www.google.com.ph/*
// @match              *://www.google.com.pk/*
// @match              *://www.google.pl/*
// @match              *://www.google.pn/*
// @match              *://www.google.com.pr/*
// @match              *://www.google.ps/*
// @match              *://www.google.pt/*
// @match              *://www.google.com.py/*
// @match              *://www.google.com.qa/*
// @match              *://www.google.ro/*
// @match              *://www.google.ru/*
// @match              *://www.google.rw/*
// @match              *://www.google.com.sa/*
// @match              *://www.google.com.sb/*
// @match              *://www.google.sc/*
// @match              *://www.google.se/*
// @match              *://www.google.com.sg/*
// @match              *://www.google.sh/*
// @match              *://www.google.si/*
// @match              *://www.google.sk/*
// @match              *://www.google.com.sl/*
// @match              *://www.google.sn/*
// @match              *://www.google.so/*
// @match              *://www.google.sm/*
// @match              *://www.google.sr/*
// @match              *://www.google.st/*
// @match              *://www.google.com.sv/*
// @match              *://www.google.td/*
// @match              *://www.google.tg/*
// @match              *://www.google.co.th/*
// @match              *://www.google.com.tj/*
// @match              *://www.google.tl/*
// @match              *://www.google.tm/*
// @match              *://www.google.tn/*
// @match              *://www.google.to/*
// @match              *://www.google.com.tr/*
// @match              *://www.google.tt/*
// @match              *://www.google.com.tw/*
// @match              *://www.google.co.tz/*
// @match              *://www.google.com.ua/*
// @match              *://www.google.co.ug/*
// @match              *://www.google.co.uk/*
// @match              *://www.google.com.uy/*
// @match              *://www.google.co.uz/*
// @match              *://www.google.com.vc/*
// @match              *://www.google.co.ve/*
// @match              *://www.google.vg/*
// @match              *://www.google.co.vi/*
// @match              *://www.google.com.vn/*
// @match              *://www.google.vu/*
// @match              *://www.google.ws/*
// @match              *://www.google.rs/*
// @match              *://www.google.co.za/*
// @match              *://www.google.co.zm/*
// @match              *://www.google.co.zw/*
// @match              *://www.google.cat/*
// @grant              none
// @run-at             document-start
// ==/UserScript==
// https://www.google.com/supported_domains

(function () {
    'use strict';

    const lang = navigator.language || 'zh-CN';
    const url = new URL(location);
    url.hostname = 'www.google.com';
    if (url.hostname != location.hostname) {
        window.stop();
        location.replace('https://www.google.com/ncr#ncr:' + encodeURIComponent(url));
    } else {
        if (url.hash.slice(0, 5) == '#ncr:') {
            url.href = decodeURIComponent(url.hash.slice(5));
            url.hash = location.hash = '';
            url.searchParams.set("gl", 'ZZ');
        }
        if (url.searchParams.get("gl") != lang.slice(-2)) {
            url.searchParams.set("gl", lang.slice(-2));
            url.searchParams.set("hl", lang);
            window.stop();
            location.replace(url.href);
        }
    }

})();
