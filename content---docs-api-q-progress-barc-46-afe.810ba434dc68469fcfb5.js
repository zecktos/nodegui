(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{125:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return c}));r(0);var a=r(173);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s={sidebar_label:"QProgressBar",title:"QProgressBar"},o=[{value:"Example",id:"example",children:[]},{value:"new QProgressBar(parent?)",id:"new-qprogressbarparent",children:[]},{value:"Static Methods",id:"static-methods",children:[]},{value:"Instance Properties",id:"instance-properties",children:[]},{value:"Instance Methods",id:"instance-methods",children:[{value:"progressBar.setValue(value)",id:"progressbarsetvaluevalue",children:[]},{value:"progressBar.setMaximum(max)",id:"progressbarsetmaximummax",children:[]},{value:"progressBar.setMinimum(min)",id:"progressbarsetminimummin",children:[]},{value:"progressBar.setOrientation(orientation)",id:"progressbarsetorientationorientation",children:[]},{value:"progressBar.value()",id:"progressbarvalue",children:[]}]}],l={rightToc:o},p="wrapper";function c(e){var t=e.components,r=i(e,["components"]);return Object(a.b)(p,n({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Create and control progress bar widgets.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"This class is a JS wrapper around Qt's ",Object(a.b)("a",n({parentName:"strong"},{href:"https://doc.qt.io/qt-5/qprogressbar.html"}),"QProgressBar class"))),Object(a.b)("p",null,"A ",Object(a.b)("inlineCode",{parentName:"p"},"QProgressBar")," provides ability to add and manipulate native progress bar widgets."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"QProgressBar inherits from ",Object(a.b)("a",n({parentName:"strong"},{href:"/docs/api/NodeWidget"}),"NodeWidget"))),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",n({parentName:"pre"},{className:"language-javascript"}),'const { QProgressBar } = require("@nodegui/nodegui");\n\nconst progressBar = new QProgressBar();\n')),Object(a.b)("h3",{id:"new-qprogressbarparent"},Object(a.b)("inlineCode",{parentName:"h3"},"new QProgressBar(parent?)")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"parent")," NodeWidget (",Object(a.b)("em",{parentName:"li"},"optional"),"). Any widget inheriting from NodeWidget can be passed as a parent. This will make this widget, the child of the parent widget.")),Object(a.b)("h2",{id:"static-methods"},"Static Methods"),Object(a.b)("p",null,"QProgressBar can access all the static methods defined in ",Object(a.b)("a",n({parentName:"p"},{href:"/docs/api/NodeWidget"}),"NodeWidget")),Object(a.b)("h2",{id:"instance-properties"},"Instance Properties"),Object(a.b)("p",null,"QProgressBar can access all the instance properties defined in ",Object(a.b)("a",n({parentName:"p"},{href:"/docs/api/NodeWidget"}),"NodeWidget")),Object(a.b)("h2",{id:"instance-methods"},"Instance Methods"),Object(a.b)("p",null,"QProgressBar can access all the instance methods defined in ",Object(a.b)("a",n({parentName:"p"},{href:"/docs/api/NodeWidget"}),"NodeWidget"),". Additionally it also has the following instance methods:"),Object(a.b)("h3",{id:"progressbarsetvaluevalue"},Object(a.b)("inlineCode",{parentName:"h3"},"progressBar.setValue(value)")),Object(a.b)("p",null,"Sets the current value of the progressBar. It calls the native method ",Object(a.b)("a",n({parentName:"p"},{href:"https://doc.qt.io/qt-5/qprogressbar.html#value-prop"}),"QProgressBar: setValue"),"."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"value")," number - Set the value as current value")),Object(a.b)("h3",{id:"progressbarsetmaximummax"},Object(a.b)("inlineCode",{parentName:"h3"},"progressBar.setMaximum(max)")),Object(a.b)("p",null,"Sets the max value of the progressBar. It calls the native method ",Object(a.b)("a",n({parentName:"p"},{href:"https://doc.qt.io/qt-5/qprogressbar.html#maximum-prop"}),"QProgressBar: setMaximum"),"."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"max")," number - Set the value as max value of the progress bar.")),Object(a.b)("h3",{id:"progressbarsetminimummin"},Object(a.b)("inlineCode",{parentName:"h3"},"progressBar.setMinimum(min)")),Object(a.b)("p",null,"Sets the min value of the progressBar. It calls the native method ",Object(a.b)("a",n({parentName:"p"},{href:"https://doc.qt.io/qt-5/qprogressbar.html#minimum-prop"}),"QProgressBar: setMinimum"),"."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"min")," number - Set the value as min value of the progress bar.")),Object(a.b)("h3",{id:"progressbarsetorientationorientation"},Object(a.b)("inlineCode",{parentName:"h3"},"progressBar.setOrientation(orientation)")),Object(a.b)("p",null,"Sets the orientation of the progressBar. It calls the native method ",Object(a.b)("a",n({parentName:"p"},{href:"https://doc.qt.io/qt-5/qprogressbar.html#orientation-prop"}),"QProgressBar: setOrientation"),"."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"orientation")," Orientation - Specifies visual orientation of the progress bar. ",Object(a.b)("a",n({parentName:"li"},{href:"/docs/api/QtEnums"}),"Orientation is an enum from Qt"))),Object(a.b)("h3",{id:"progressbarvalue"},Object(a.b)("inlineCode",{parentName:"h3"},"progressBar.value()")),Object(a.b)("p",null,"Returns the current value (Number) of the progressBar. It calls the native method ",Object(a.b)("a",n({parentName:"p"},{href:"https://doc.qt.io/qt-5/qprogressbar.html#value-prop"}),"QProgressBar: value"),"."))}c.isMDXComponent=!0},173:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return b}));var a=r(0),n=r.n(a),i=n.a.createContext({}),s=function(e){var t=n.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},o=function(e){var t=s(e.components);return n.a.createElement(i.Provider,{value:t},e.children)};var l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},c=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(r[a]=e[a]);return r}(e,["components","mdxType","originalType","parentName"]),c=s(r),b=a,u=c[o+"."+b]||c[b]||p[b]||i;return r?n.a.createElement(u,Object.assign({},{ref:t},l,{components:r})):n.a.createElement(u,Object.assign({},{ref:t},l))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[l]="string"==typeof e?e:a,s[1]=o;for(var b=2;b<i;b++)s[b]=r[b];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,r)}c.displayName="MDXCreateElement"}}]);