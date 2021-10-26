"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[6971],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},21269:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={id:"index",title:"Tremor",sidebar_position:0},l="Tremor",c={unversionedId:"index",id:"index",isDocsHomePage:!1,title:"Tremor",description:"Tremor is an event processing system originally designed for the needs of platform engineering and infrastructure.",source:"@site/docs/index.md",sourceDirName:".",slug:"/index",permalink:"/docs/next/index",editUrl:"https://github.com/tremor-rs/tremor-www/tree/main/docs/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"index",title:"Tremor",sidebar_position:0},sidebar:"docsSidebar",previous:{title:"Tooling",permalink:"/docs/next/getting-started/tooling"},next:{title:"Architecture Overview",permalink:"/docs/next/overview"}},p=[],u={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tremor"},"Tremor"),(0,a.kt)("p",null,"Tremor is an event processing system originally designed for the needs of platform engineering and infrastructure."),(0,a.kt)("p",null,"Tremor has been running in production since October 2018, processes 10 terabytes of data per day, or 10 billion messages per minute and 10 million metrics per second. Tremor achieves this with 10x footprint reduction in bare metal infrastructure and cloud based deployments in 6 ( and counting ) systems at Wayfair, whilst reducing memory usage by 10x and delivering better quality of service under conditions when our network is saturated at peak eCommerce trading lifecycles."),(0,a.kt)("p",null,"Tremor reduces cost, reduces complexity and consolidates and simplifies our operational environment to\nspark SRE joy, to reduce workload on our NOC and to drop our operating costs."),(0,a.kt)("p",null,"As a secondary benefit, tremor is relatively low latency and relatively high throughput however this is\nan explicit non-goal of the project."),(0,a.kt)("p",null,"Tremor runs 24x7 365 days per year and is implemented in the Rust programming language."),(0,a.kt)("p",null,"Click for an ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/overview"},"Architectural overview")," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/history"},"Canned History")," of the project."),(0,a.kt)("p",null,"Other interesting topics are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/scripting/tremor-script/index"},"The tremor-script language")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/scripting/tremor-query/index"},"The tremor-query language")),(0,a.kt)("li",{parentName:"ul"},"Artefacts namely:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/artefacts/onramps"},"Onramps")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/artefacts/offramps"},"Offramps")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/artefacts/codecs"},"Codecs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/artefacts/preprocessors"},"Pre-")," and ",(0,a.kt)("a",{parentName:"li",href:"/docs/next/artefacts/postprocessors"},"Postprocessors")))),(0,a.kt)("li",{parentName:"ul"},"Operational information about",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/operations/monitoring"},"Monitoring")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/operations/configuration"},"Configuration")," and the ",(0,a.kt)("a",{parentName:"li",href:"/docs/next/operations/configuration-walkthrough"},"Configuration Walkthrough")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/operations/cli"},"The tremor CLI")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api"},"The tremor API"),"/0"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"docs/recipes/README"},"Recipes"))),(0,a.kt)("p",null,"This is not an exhaustive list and for the curious it might be worth to explore the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tremor-rs/tremor-www-docs/tree/main/docs"},"docs")," folder on their own."))}m.isMDXComponent=!0}}]);