(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{343:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return p}));var o=n(2),r=n(6),c=(n(0),n(471)),a={id:"componentformattingoption",title:"ComponentFormattingOption",sidebar_label:"ComponentFormattingOption"},i={id:"api/generated/enums/componentformattingoption",title:"ComponentFormattingOption",description:"Index",source:"@site/docs/api/generated/enums/componentformattingoption.md",permalink:"/docs/api/generated/enums/componentformattingoption",editUrl:"https://github.com/nodegui/nodegui/edit/master/website/docs/api/generated/enums/componentformattingoption.md",sidebar_label:"ComponentFormattingOption",sidebar:"api",previous:{title:"ColorDialogOption",permalink:"/docs/api/generated/enums/colordialogoption"},next:{title:"ConnectionType",permalink:"/docs/api/generated/enums/connectiontype"}},d=[{value:"Index",id:"index",children:[{value:"Enumeration members",id:"enumeration-members",children:[]}]},{value:"Enumeration members",id:"enumeration-members-1",children:[{value:"DecodeReserved",id:"decodereserved",children:[]},{value:"EncodeDelimiters",id:"encodedelimiters",children:[]},{value:"EncodeReserved",id:"encodereserved",children:[]},{value:"EncodeSpaces",id:"encodespaces",children:[]},{value:"EncodeUnicode",id:"encodeunicode",children:[]},{value:"FullyDecoded",id:"fullydecoded",children:[]},{value:"FullyEncoded",id:"fullyencoded",children:[]},{value:"PrettyDecoded",id:"prettydecoded",children:[]}]}],l={rightToc:d};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"enumeration-members"},"Enumeration members"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/api/generated/enums/componentformattingoption#decodereserved"}),"DecodeReserved")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/api/generated/enums/componentformattingoption#encodedelimiters"}),"EncodeDelimiters")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/api/generated/enums/componentformattingoption#encodereserved"}),"EncodeReserved")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/api/generated/enums/componentformattingoption#encodespaces"}),"EncodeSpaces")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/api/generated/enums/componentformattingoption#encodeunicode"}),"EncodeUnicode")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/api/generated/enums/componentformattingoption#fullydecoded"}),"FullyDecoded")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/api/generated/enums/componentformattingoption#fullyencoded"}),"FullyEncoded")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/api/generated/enums/componentformattingoption#prettydecoded"}),"PrettyDecoded"))),Object(c.b)("h2",{id:"enumeration-members-1"},"Enumeration members"),Object(c.b)("h3",{id:"decodereserved"},"DecodeReserved"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"DecodeReserved"),": = 33554432"),Object(c.b)("p",null,"Decode the US-ASCII characters that the URL specification does not allow to appear in the URL. This is the default on the getters of individual components."),Object(c.b)("hr",null),Object(c.b)("h3",{id:"encodedelimiters"},"EncodeDelimiters"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"EncodeDelimiters"),": = 0x400000 | 0x800000"),Object(c.b)("p",null,"Leave certain delimiters in their encoded form, as would appear in the URL when the full URL is represented as text. The delimiters are affected by this option change from component to component. This flag has no effect in toString() or toEncoded()."),Object(c.b)("hr",null),Object(c.b)("h3",{id:"encodereserved"},"EncodeReserved"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"EncodeReserved"),": = 16777216"),Object(c.b)("p",null,"Leave US-ASCII characters not permitted in the URL by the specification in their encoded form. This is the default on toString() and toEncoded()."),Object(c.b)("hr",null),Object(c.b)("h3",{id:"encodespaces"},"EncodeSpaces"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"EncodeSpaces"),": = 1048576"),Object(c.b)("p",null,'Leave space characters in their encoded form ("%20").'),Object(c.b)("hr",null),Object(c.b)("h3",{id:"encodeunicode"},"EncodeUnicode"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"EncodeUnicode"),": = 2097152"),Object(c.b)("p",null,'Leave non-US-ASCII characters encoded in their UTF-8 percent-encoded form (e.g., "%C3%A9" for the U+00E9 codepoint, LATIN SMALL LETTER E WITH ACUTE).'),Object(c.b)("hr",null),Object(c.b)("h3",{id:"fullydecoded"},"FullyDecoded"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"FullyDecoded"),": = FullyEncoded | DecodeReserved | 0x4000000"),Object(c.b)("p",null,"Attempt to decode as much as possible. For individual components of the URL, this decodes every percent encoding sequence, including control characters (U+0000 to U+001F) and UTF-8 sequences found in percent-encoded form. Use of this mode may cause data loss, see below for more information."),Object(c.b)("hr",null),Object(c.b)("h3",{id:"fullyencoded"},"FullyEncoded"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"FullyEncoded"),": = EncodeSpaces | EncodeUnicode | EncodeDelimiters | EncodeReserved"),Object(c.b)("p",null,"Leave all characters in their properly-encoded form, as this component would appear as part of a URL. When used with toString(), this produces a fully-compliant URL in QString form, exactly equal to the result of toEncoded()"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"prettydecoded"},"PrettyDecoded"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"PrettyDecoded"),": = 0"),Object(c.b)("p",null,'The component is returned in a "pretty form", with most percent-encoded characters decoded. The exact behavior of PrettyDecoded varies from component to component and may also change from Qt release to Qt release. This is the default.'))}p.isMDXComponent=!0},471:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var o=n(0),r=n.n(o);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),s=p(n),m=o,u=s["".concat(a,".").concat(m)]||s[m]||b[m]||c;return n?r.a.createElement(u,i(i({ref:t},l),{},{components:n})):r.a.createElement(u,i({ref:t},l))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=n[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);