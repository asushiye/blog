(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{102:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(109),i=a(118),c=a(106);var o=function(e){var t=e.nextItem,a=e.prevItem;return l.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog post page navigation"},l.a.createElement("div",{className:"pagination-nav__item"},a&&l.a.createElement(c.a,{className:"pagination-nav__link",to:a.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Newer Post"),l.a.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&l.a.createElement(c.a,{className:"pagination-nav__link",to:t.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Older Post"),l.a.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},s=a(112),m=a(120),v=a(115);t.default=function(e){var t=e.content,a=e.sidebar,n=t.frontMatter,c=t.metadata,d=c.title,u=c.description,E=c.nextItem,f=c.prevItem,p=c.editUrl,g=n.hide_table_of_contents;return l.a.createElement(r.a,{title:d,description:u,wrapperClassName:"blog-wrapper"},t&&l.a.createElement("div",{className:"container margin-vert--lg"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--2"},l.a.createElement(s.a,{sidebar:a})),l.a.createElement("main",{className:"col col--8"},l.a.createElement(i.a,{frontMatter:n,metadata:c,isBlogPostPage:!0},l.a.createElement(t,null)),l.a.createElement("div",null,p&&l.a.createElement("a",{href:p,target:"_blank",rel:"noreferrer noopener"},l.a.createElement(v.a,null),"Edit this page")),(E||f)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement(o,{nextItem:E,prevItem:f}))),!g&&t.toc&&l.a.createElement("div",{className:"col col--2"},l.a.createElement(m.a,{toc:t.toc})))))}},115:function(e,t,a){"use strict";var n=a(3),l=a(7),r=a(0),i=a.n(r),c=a(104),o=a(57),s=a.n(o);t.a=function(e){var t=e.className,a=Object(l.a)(e,["className"]);return i.a.createElement("svg",Object(n.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(c.a)(s.a.iconEdit,t)},a),i.a.createElement("g",null,i.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}},120:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(104);var i=function(e,t,a){var l=Object(n.useState)(void 0),r=l[0],i=l[1];Object(n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var l=0,c=!1,o=document.getElementsByClassName(e);l<o.length&&!c;){var s=o[l],m=s.href,v=decodeURIComponent(m.substring(m.indexOf("#")+1));n.id===v&&(r&&r.classList.remove(t),s.classList.add(t),i(s),c=!0),l+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},c=a(56),o=a.n(c),s="table-of-contents__link";function m(e){var t=e.toc,a=e.isChild;return t.length?l.a.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:"#"+e.id,className:s,dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(m,{isChild:!0,toc:e.children}))}))):null}t.a=function(e){var t=e.toc;return i(s,"table-of-contents__link--active",100),l.a.createElement("div",{className:Object(r.a)(o.a.tableOfContents,"thin-scrollbar")},l.a.createElement(m,{toc:t}))}}}]);