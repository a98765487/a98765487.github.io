(function(t){function a(a){for(var e,r,l=a[0],c=a[1],o=a[2],d=0,u=[];d<l.length;d++)r=l[d],i[r]&&u.push(i[r][0]),i[r]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);v&&v(a);while(u.length)u.shift()();return n.push.apply(n,o||[]),s()}function s(){for(var t,a=0;a<n.length;a++){for(var s=n[a],e=!0,l=1;l<s.length;l++){var c=s[l];0!==i[c]&&(e=!1)}e&&(n.splice(a--,1),t=r(r.s=s[0]))}return t}var e={},i={app:0},n=[];function r(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=e,r.d=function(t,a,s){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)r.d(s,e,function(a){return t[a]}.bind(null,e));return s},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=a,l=l.slice();for(var o=0;o<l.length;o++)a(l[o]);var v=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"56d7":function(t,a,s){"use strict";s.r(a);s("cadf"),s("551c"),s("f751"),s("097d");var e=s("2b0e"),i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},n=[],r={name:"App"},l=r,c=(s("5c0b"),s("2877")),o=Object(c["a"])(l,i,n,!1,null,null,null),v=o.exports,d=s("8c4f"),u=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[e("div",{staticClass:"texture"}),e("header",[e("nav",{staticClass:"navbar navbar-expand-lg navbar-dark fixed-top navbar-slim"},[e("div",{staticClass:"container"},[e("a",{staticClass:"navbar-brand",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.scrollTop()}}},[e("img",{attrs:{src:s("7223")}})]),t._m(0),t._m(1)])])]),e("main",[e("section",{staticClass:"pb-4",attrs:{id:"section_about_us"}},[e("div",{staticClass:"container"},[t._m(2),t._m(3),e("div",{staticClass:"row wow bounce",attrs:{"data-wow-duration":"2s"}},[t._m(4),e("div",{staticClass:"col-sm-12 text-center"},[e("p"),t._v("因合約問題僅能以demo畫面的形式展示，詳情可以私訊我經營的"),e("a",{attrs:{href:"#"},on:{click:t.scrolltoContact}},[t._v("社群軟體")])])])])]),e("section",{staticClass:"pb-4 wow fadeIn",attrs:{id:"section_provide_service"}},[e("div",{staticClass:"container"},[t._m(5),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6"},[e("ol",[t._m(6),t._m(7),t._m(8),e("li",[t._v("任何外包形式的工作邀約"),e("ul",[e("li",[t._v("可以私訊我的"),e("a",{attrs:{href:"#"},on:{click:t.scrolltoContact}},[t._v("社群軟體")])])])])])]),t._m(9)])])]),t._m(10),t._m(11)]),t._m(12)])},f=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",id:"nav-mobile"}},[s("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavAltMarkup"}},[s("div",{staticClass:"navbar-nav ml-auto"},[s("a",{staticClass:"nav-item nav-link active",attrs:{href:"#","data-id":"section_about_us"}},[t._v("簡述")]),s("a",{staticClass:"nav-item nav-link",attrs:{href:"#","data-id":"section_provide_service"}},[t._v("服務項目")]),s("a",{staticClass:"nav-item nav-link",attrs:{href:"#","data-id":"section_qa"}},[t._v("Q&A")]),s("a",{staticClass:"nav-item nav-link",attrs:{href:"#","data-id":"section_contact"}},[t._v("聯絡資訊")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row justify-content-center py-4"},[s("h2",{staticClass:"text-center wow bounce",attrs:{"data-wow-duration":"1.5s"}},[t._v("肚子工作室")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row mb-4"},[e("div",{staticClass:"col-sm-6 bg-white wow bounceInLeft",attrs:{"data-wow-duration":"1s","data-wow-delay":"0.5s"}},[e("div",{staticClass:"d-flex justify-content-center py-4"},[e("img",{staticClass:"circle",attrs:{src:s("e1fc")}})]),e("div",{staticClass:"d-flex justify-content-center"},[e("h4",[t._v("關於我")])]),e("p",[t._v("Hi，我是肚子，本名陳奕儒，目前在魁亨科技專案公司擔任約3年工作經驗的工程師，曾經手大型企業、工研院、台經院等機關的專案，隨著專業能力日積月累的提升，希望今年能夠依賴接案獲得一些額外的收入，主要專業為網站前後端程式撰寫。")]),e("div",{staticClass:"d-flex justify-content-center"},[e("h4",[t._v("擅長技能")])]),e("div",{staticClass:"d-flex"},[e("ul",[e("li",[t._v("前端：pug、bootstrap4 + scss、vue-cli")]),e("li",[t._v("後端：asp.net MVC、asp.net Web API、SQL")])])])]),e("div",{staticClass:"col-sm-6 flex-center wow bounceInRight",attrs:{"data-wow-duration":"1s","data-wow-delay":"0.5s"}},[e("div",{staticClass:"scene"},[e("div",{staticClass:"h4"},[t._v("滑過來！")]),e("div",{staticClass:"person"},[e("div",{staticClass:"hairs"},[e("div",{staticClass:"hair1"}),e("div",{staticClass:"hair2"}),e("div",{staticClass:"hair3"}),e("div",{staticClass:"hair4"})]),e("div",{staticClass:"body"},[e("div",{staticClass:"glasses"},[e("div",{staticClass:"glasses-left"},[e("div",{staticClass:"eye"},[e("div",{staticClass:"eyeball"})])]),e("div",{staticClass:"glasses-mid"}),e("div",{staticClass:"glasses-right"},[e("div",{staticClass:"eye"},[e("div",{staticClass:"eyeball"})])])]),e("div",{staticClass:"mouth"})])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-sm-12 d-flex justify-content-center"},[s("h4",[t._v("專案經歷")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12 d-flex justify-content-center"},[s("h4",[t._v("服務項目")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",[t._v("客製化版面一頁式形象網站"),s("ul",[s("li",[t._v("參考範例："),s("a",{attrs:{href:"https://www.xiangdengbath.com",target:"_blank"}},[t._v("湘登陶板浴")])]),s("li",[t._v("價格：NT$20000")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",[t._v("客製化版面多頁式形象網站"),s("ul",[s("li",[t._v("參考範例："),s("a",{attrs:{href:"https://www.everyoungbiodimension.com",target:"_blank"}},[t._v("長陽生醫")])]),s("li",[t._v("價格：NT$20000 + 每種頁面NT$5000")]),s("li",{staticClass:"text-success"},[t._v("Note： 一種頁面表示為一個需要重新設計的版型")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",[t._v("前後台任何客製需求"),s("ul",[s("li",[t._v("價格：依功能複雜程度議價")]),s("li",{staticClass:"text-success"},[t._v("Note： e.g.( Excel匯出資料、檔案輸出、多語系、網路爬蟲…)")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-sm-6"},[t._v("包含："),s("ol",[s("li",[t._v("RWD(手機，平板支援)")]),s("li",[t._v("網址免費SSL(資安、SEO優化)")]),s("li",[t._v("Google Analytics(google提供的免費網站流量分析工具)")]),s("li",[t._v("Google Search Console (google提供的免費網站查詢結果優化工具)")]),s("li",[t._v("資料備份")]),s("li",[t._v("網站遇到問題的諮詢、除錯")])]),t._v("不包含："),s("ol",[s("li",[t._v("後台管理介面(依管理需求項目另議)")]),s("li",[t._v("網址(約500~1000/年，根據網址熱門程度)")]),s("li",[t._v("虛擬主機(約3~6000/年，根據圖片、檔案量、流量)")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"pb-4 wow fadeIn",attrs:{id:"section_qa"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12 d-flex justify-content-center"},[s("h4",[t._v("Q&A")])]),s("div",{staticClass:"col-sm-12"},[s("div",[s("p",[t._v("Q：可以開發票嗎？")]),s("p",[t._v("A：有成立公司，可以。")])]),s("div",[s("p",[t._v("Q：處理金流串接會有資安風險的疑慮嗎？")]),s("p",[t._v("A：目前處理線上金流都是透過銀行、歐富寶…提供的API，交易處理有嚴格的控管。")])]),s("div",[s("p",[t._v("Q：接案的事情公司知道嗎?")]),s("p",[t._v("A：知道。")])])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"pb-4 wow fadeIn",attrs:{id:"section_contact"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12 d-flex justify-content-center mb-4"},[e("h4",[t._v("聯絡資訊")])]),e("div",{staticClass:"col-sm-6 d-flex justify-content-center mb-4"},[e("ul",[e("li",[t._v("手機：0960110783")]),e("li",[t._v("信箱：y98765487@gmail.com")]),e("li",[t._v("Line："),e("div",{staticClass:"line-it-button",staticStyle:{display:"none"},attrs:{"data-lang":"zh_Hant","data-type":"friend","data-lineid":"jimmy99_88","data-count":"true","data-home":"true"}})]),e("li",[t._v("IG：jimmy99_88")])])]),e("div",{staticClass:"col-sm-6 d-flex justify-content-center"},[e("div",{staticClass:"icon"},[e("a",{attrs:{href:"https://www.facebook.com/profile.php?id=100001286863015",target:"_blank"}},[e("img",{attrs:{src:s("82db")}})])]),e("div",{staticClass:"icon"},[e("a",{attrs:{href:"mailto:y98765487@gmail.com",target:"_blank"}},[e("i",{staticClass:"far fa-envelope"})])]),e("div",{staticClass:"icon"},[e("a",{attrs:{href:"tel:+886960110783",target:"_blank"}},[e("i",{staticClass:"fas fa-phone"})])])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("footer",{staticClass:"text-center"},[s("p",[t._v("肚子工作室版權所有 © 2019 All Rights Reserved.")])])}],p={name:"home",created:function(){},mounted:function(){$("nav").hide(),$("#navbarNavAltMarkup>.navbar-nav a").click(function(t){t.preventDefault(),$("#navbarNavAltMarkup a").removeClass("active"),$(this).addClass("active");var a=$("#"+$(this).data("id")).offset().top;$("html,body").animate({scrollTop:a-100},500),$("#navbarNavAltMarkup").removeClass("show")}),window.addEventListener("scroll",function(){0==$(this).scrollTop()?$("nav").hide(1e3):$("nav").show(1e3)}),(new WOW).init()},methods:{scrollTop:function(){$("html,body").animate({scrollTop:0})},scrolltoContact:function(){var t=$("#section_contact").offset().top;$("html,body").animate({scrollTop:t-100},500)}}},m=p,b=Object(c["a"])(m,u,f,!1,null,null,null),h=b.exports;e["a"].use(d["a"]);var A=new d["a"]({mode:"history",routes:[{path:"/",name:"home",component:h}]});e["a"].config.productionTip=!1,new e["a"]({router:A,render:function(t){return t(v)}}).$mount("#app")},"5c0b":function(t,a,s){"use strict";var e=s("5e27"),i=s.n(e);i.a},"5e27":function(t,a,s){},7223:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAnCAYAAABNJBuZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAohJREFUeNrUWbFtxDAMFD5NSpXp4hGcDbxBPIJHcJlSmcDZwGVK58tU/kygbODfwCM4KmhAUESJtGTnQ4DA598WKB7vSClC0Ewab4yPxhfEJ+O1uGFrjc+BDbg+wMZvxooIAiHXt7KZhokCtpnD7M7DhXfjL8bvre+vxj+Mn41/wd+F84xrD7De59Eo1B4UeuNVQAA6AjLVURuQELAviIJYhktEzQ6xKRBEw+DUkmGdJKsg88oTQM+U6T9HZTV3MzPz/ZBc14EEdLmbqfQEUDJ7D7aRnlCWMzzX5OhDLvHbxPdj6MrIlNASRSdK3GHDRMCVYk1ssC2nQmQiT0KoKOR5Sj9yxaOj9CidwJO1ufoCGAPKiZVjBwmYAs+g6tol8kQgs1pIhilKF5rESRkdMpYXZgMxedgkshtPGubY0zIasfT0rN14UjCVqySeZSqEL4LKE7UBFe40PEUSpphq6OXJuGEjI3OilgG0NCIe0UqRHPiIBN6yBoZCxxljdOIhSSVMwUUAhV9xnCKLnT1ES7Er40igPWXzZvzJ+GXLWSWFJ4opGNjNzZxjzE+pceVprAr6ROvUONa1s92TjQk8GZFetNb/DOsNe6GQUh6YWExIAzzstrJKuHiLJWDwoNCKHc3NGCVbNaEklTVbaUSpSHYiPnfxBBmzZ08pufZorfdq/Bs2E2p2MgU1xRzrS6cUZ3DpBLR+PzroD8Ap5XlHb5z70BNcEciYdkhbQmAasl/B5x5+W9WrsjhYWBwaLQWcU4WA8q+DdcTGpLO0AnYzXSE8qp2xXeUm/GLBryBjk6fR5bpvUznQEJFbjV4ceOues5fY90xS/BOzyTtbBP1XVlhq09xy9n8EGABV4RUdOUP+/gAAAABJRU5ErkJggg=="},"82db":function(t,a){t.exports="data:image/png;base64,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"},e1fc:function(t,a,s){t.exports=s.p+"img/sticker.45fbe6cd.jpg"}});
//# sourceMappingURL=app.0df388ac.js.map