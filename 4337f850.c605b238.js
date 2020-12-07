(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{101:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return l})),t.d(r,"default",(function(){return b}));var n=t(2),s=t(6),o=(t(0),t(212)),a={id:"class-browserserver",title:"class: BrowserServer"},c={unversionedId:"api/class-browserserver",id:"api/class-browserserver",isDocsHomePage:!1,title:"class: BrowserServer",description:"- browserServer.on('close')",source:"@site/docs/api/class-browserserver.md",slug:"/api/class-browserserver",permalink:"/playwright/docs/next/api/class-browserserver",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/class-browserserver.md",version:"current",sidebar:"api",previous:{title:"class: Worker",permalink:"/playwright/docs/next/api/class-worker"},next:{title:"class: BrowserType",permalink:"/playwright/docs/next/api/class-browsertype"}},l=[{value:"browserServer.on(&#39;close&#39;)",id:"browserserveronclose",children:[]},{value:"browserServer.close()",id:"browserserverclose",children:[]},{value:"browserServer.kill()",id:"browserserverkill",children:[]},{value:"browserServer.process()",id:"browserserverprocess",children:[]},{value:"browserServer.wsEndpoint()",id:"browserserverwsendpoint",children:[]}],i={rightToc:l};function b(e){var r=e.components,t=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#browserserveronclose"}),"browserServer.on('close')")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#browserserverclose"}),"browserServer.close()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#browserserverkill"}),"browserServer.kill()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#browserserverprocess"}),"browserServer.process()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#browserserverwsendpoint"}),"browserServer.wsEndpoint()"))),Object(o.b)("h2",{id:"browserserveronclose"},"browserServer.on('close')"),Object(o.b)("p",null,"Emitted when the browser server closes."),Object(o.b)("h2",{id:"browserserverclose"},"browserServer.close()"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),">")),Object(o.b)("p",null,"Closes the browser gracefully and makes sure the process is terminated."),Object(o.b)("h2",{id:"browserserverkill"},"browserServer.kill()"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),">")),Object(o.b)("p",null,"Kills the browser process and waits for the process to exit."),Object(o.b)("h2",{id:"browserserverprocess"},"browserServer.process()"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://nodejs.org/api/child_process.html",title:"ChildProcess"}),"ChildProcess"),">")),Object(o.b)("p",null,"Spawned browser application process."),Object(o.b)("h2",{id:"browserserverwsendpoint"},"browserServer.wsEndpoint()"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),">")),Object(o.b)("p",null,"Browser websocket url."),Object(o.b)("p",null,"Browser websocket endpoint which can be used as an argument to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#browsertypeconnectparams"}),"browserType.connect(params)")," to establish connection to the\nbrowser."))}b.isMDXComponent=!0},212:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return d}));var n=t(0),s=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=s.a.createContext({}),b=function(e){var r=s.a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=b(e.components);return s.a.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return s.a.createElement(s.a.Fragment,{},r)}},w=s.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=b(t),w=n,d=p["".concat(a,".").concat(w)]||p[w]||u[w]||o;return t?s.a.createElement(d,c(c({ref:r},i),{},{components:t})):s.a.createElement(d,c({ref:r},i))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,a=new Array(o);a[0]=w;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var i=2;i<o;i++)a[i]=t[i];return s.a.createElement.apply(null,a)}return s.a.createElement.apply(null,t)}w.displayName="MDXCreateElement"}}]);