"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[1269],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=u(n),d=s,v=m["".concat(c,".").concat(d)]||m[d]||l[d]||i;return n?r.createElement(v,o(o({ref:t},p),{},{components:n})):r.createElement(v,o({ref:t},p))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,o=new Array(i);o[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:s,o[1]=a;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95140:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(87462),s=n(63366),i=(n(67294),n(3905)),o=["components"],a={sidebar_position:900},c="Recipes",u={unversionedId:"scripting/tremor-query/recipes",id:"scripting/tremor-query/recipes",isDocsHomePage:!1,title:"Recipes",description:"Periodic Synthetic Metrics Events",source:"@site/docs/scripting/tremor-query/recipes.md",sourceDirName:"scripting/tremor-query",slug:"/scripting/tremor-query/recipes",permalink:"/docs/next/scripting/tremor-query/recipes",editUrl:"https://github.com/tremor-rs/tremor-www/tree/main/docs/scripting/tremor-query/recipes.md",tags:[],version:"current",sidebarPosition:900,frontMatter:{sidebar_position:900},sidebar:"docsSidebar",previous:{title:"Aggregate Functions",permalink:"/docs/next/scripting/tremor-query/functions"},next:{title:"aggr",permalink:"/docs/next/scripting/tremor-query/functions/aggr"}},p=[{value:"Periodic Synthetic Metrics Events",id:"periodic-synthetic-metrics-events",children:[]}],l={toc:p};function m(e){var t=e.components,n=(0,s.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"recipes"},"Recipes"),(0,i.kt)("h2",{id:"periodic-synthetic-metrics-events"},"Periodic Synthetic Metrics Events"),(0,i.kt)("p",null,"Periodically, produce basic statistics and percentiles / quartiles from a stream of ingested events, for a particular value in the inbound event stream."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-trickle"},'# Every 10 seconds\ncreate tumbling window `10secs`\n with\n   interval = datetime::with_seconds(10),\nend;\n\n# Aggregate events producing statistics into a temporary stream\nselect {\n    "measurement": event.measurement,\n    "tags": patch event.tags of insert "window" => "10s" end,\n    "stats": aggr::stats::hdr(event.fields[group[2]], [ "0.42", "0.5", "0.9", "0.99", "0.999" ]),\n    "class": group[2]\n}\nfrom in[`10secs`]\ngroup by set(event.measurement, event.tags, each(record::keys(event.fields)))\ninto normalize\nhaving event.stats.count > 100; # discard if not enough sample data for group\n\n# create a temporary stream to normalize results\ncreate stream normalize;\n\n# normalize output record to match requirements downstream ( influx )\nselect {\n  "measurement":  event.measurement,\n  "tags":  event.tags,\n  "fields":  {\n    "count_#{event.class}":  event.stats.count,\n    "min_#{event.class}":  event.stats.min,\n    "max_#{event.class}":  event.stats.max,\n    "mean_#{event.class}":  event.stats.mean,\n    "stdev_#{event.class}":  event.stats.stdev,\n    "var_#{event.class}":  event.stats.var,\n    "p42_#{event.class}":  event.stats.percentiles["0.42"],\n    "p50_#{event.class}":  event.stats.percentiles["0.5"],\n    "p90_#{event.class}":  event.stats.percentiles["0.9"],\n    "p99_#{event.class}":  event.stats.percentiles["0.99"],\n    "p99.9_#{event.class}":  event.stats.percentiles["0.999"]\n  }\n}\nfrom normalize\ninto out;\n')))}m.isMDXComponent=!0}}]);