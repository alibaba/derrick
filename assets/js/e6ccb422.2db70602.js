(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{100:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return o})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return u}));var n=t(3),c=t(7),i=(t(0),t(107)),a={title:"\u5bf9\u6bd4\u5176\u4ed6\u9879\u76ee"},o={unversionedId:"comparison",id:"comparison",isDocsHomePage:!1,title:"\u5bf9\u6bd4\u5176\u4ed6\u9879\u76ee",description:"Buildpack",source:"@site/docs/comparison.md",slug:"/comparison",permalink:"/derrick/docs/comparison",editUrl:"https://github.com/alibaba/derrick/edit/master/website/docs/comparison.md",version:"current",sidebar:"docs",previous:{title:"\u9879\u76ee\u8bbe\u8ba1",permalink:"/derrick/docs/design"},next:{title:"\u5b89\u88c5\u6307\u5357",permalink:"/derrick/docs/installation"}},l=[{value:"Buildpack",id:"buildpack",children:[]}],p={toc:l};function u(e){var r=e.components,t=Object(c.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"buildpack"},"Buildpack"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://buildpacks.io/"},"Buildpack")," \u662f\u4e00\u4e2a\u5ba2\u6237\u7aef\u5de5\u5177\uff0c\u7528\u4e8e\u4ece\u6e90\u4ee3\u7801\u81ea\u52a8\u5316\u6784\u5efa\u51fa\u5e94\u7528\u955c\u50cf\u3002"),Object(i.b)("p",null,"Derrick \u5728\u5f88\u5927\u7a0b\u5ea6\u4e0a\u501f\u9274\u4e86 Buildpack \u7684\u601d\u60f3\uff0c\u5305\u62ec auto-detection \u7b49\u7b80\u5355\u6613\u7528\u7684\u4f53\u9a8c\u3002\u4f46\u662f\uff0cBuildpack \u4f5c\u7528\u7684\u573a\u666f\u8fc7\u4e8e\u5c40\u9650\uff0c\u5f88\u591a\u7528\u6237\u9700\u8981\u7684\u573a\u666f\u6ca1\u6cd5\u6ee1\u8db3\u3002\u6bd4\u5982\u8bf4\uff1a"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u7528\u6237\u4e0d\u60f3\u8981\u81ea\u52a8\u6784\u5efa\u955c\u50cf\uff0c\u800c\u662f\u60f3\u8981\u5148\u81ea\u52a8\u751f\u6210 Dockerfile \u6587\u4ef6\uff0c\u7136\u540e\u5728\u91cc\u9762\u624b\u52a8\u505a\u4e00\u4e9b\u66f4\u6539\u3002"),Object(i.b)("li",{parentName:"ol"},"\u7528\u6237\u60f3\u8981\u81ea\u52a8\u751f\u6210 K8S \u90e8\u7f72\u914d\u7f6e\u3002"),Object(i.b)("li",{parentName:"ol"},"\u7528\u6237\u60f3\u8981\u81ea\u52a8\u751f\u6210\u4e00\u4e9b\u4e91\u8d44\u6e90\u914d\u7f6e\u7684\u6a21\u677f\uff0c\u6bd4\u5982\u8ddf\u4e2d\u95f4\u4ef6 AHAS/MSE/ARMS \u7684\u96c6\u6210\uff0c\u7136\u540e\u8fdb\u4e00\u6b65\u586b\u5165\u4fe1\u606f\u3002"),Object(i.b)("li",{parentName:"ol"},"\u7528\u6237\u60f3\u8981\u4e00\u6b65\u5230\u4f4d\u628a\u955c\u50cf\u4e0a\u4f20\u5230\u955c\u50cf\u670d\u52a1\u4e2d\u3002"),Object(i.b)("li",{parentName:"ol"},"\u7528\u6237\u5df2\u7ecf\u6709\u4e00\u4e9b\u670d\u52a1\u8dd1\u5728 VM \u91cc\u9762\uff0c\u60f3\u8981\u8fdb\u4e00\u6b65\u628a\u8fd9\u4e9b\u5e94\u7528\u7ed9\u5bb9\u5668\u5316\u540e\u8fd0\u884c\u5230 K8S \u4e0a\u3002")),Object(i.b)("p",null,"\u8fd9\u4e9b\u90fd\u662f Buildpack \u65e0\u6cd5\u89e3\u51b3\u7684\u95ee\u9898\u3002\u800c Derrick \u7684\u51fa\u73b0\u6b63\u662f\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e9b\u7528\u6237\u95ee\u9898\uff0c\u4e3a\u4e86\u80fd\u591f\u66f4\u597d\u5730\u5e2e\u52a9\u7528\u6237\u5bb9\u5668\u5316\u5e94\u7528\u3002"),Object(i.b)("p",null,"\u53e6\u4e00\u65b9\u9762\uff0cDerrick \u8ba1\u5212\u76f4\u63a5\u5229\u7528 Buildpack \u505a\u81ea\u52a8\u751f\u6210\u955c\u50cf\u7684\u5de5\u4f5c\uff0c\u5145\u5206\u5229\u7528 Buildpack \u793e\u533a\u5df2\u6709\u7684\u80fd\u529b\u3002\u4ece\u8fd9\u70b9\u770b\uff0cDerrick \u66f4\u50cf\u662f Buildpack \u7684\u4e00\u4e2a\u8d85\u96c6\u3002"),Object(i.b)("p",null,"Derrick \u8ddf Buildpack \u7684\u5bf9\u6bd4\u603b\u7ed3\u5982\u4e0b\uff1a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Derrick \u80fd\u591f\u751f\u6210 Dockerfile \u7b49\u914d\u7f6e\u6587\u4ef6\uff0c\u8ba9\u7528\u6237\u8fdb\u4e00\u6b65\u4fee\u6539\u3002"),Object(i.b)("li",{parentName:"ul"},"Derrick \u80fd\u591f\u751f\u6210 K8S \u90e8\u7f72\u914d\u7f6e\u3001\u4e91\u8d44\u6e90\u914d\u7f6e\u7b49\u3002"),Object(i.b)("li",{parentName:"ul"},"Derrick \u80fd\u591f\u5c06\u5df2\u7ecf\u5728\u8fd0\u884c\u7684\u670d\u52a1\u5bb9\u5668\u5316\u3002"),Object(i.b)("li",{parentName:"ul"},"Buildpack \u80fd\u591f\u81ea\u52a8\u751f\u6210\u955c\u50cf\u3002\u800c\u4e14\u8fd9\u65b9\u9762\u5728\u793e\u533a\u6709\u5927\u91cf\u5df2\u6709\u7684\u80fd\u529b\u3002Derrick \u6709\u8ba1\u5212\u76f4\u63a5\u5229\u7528\u8d77\u6765\uff0c\u800c\u4e0d\u662f\u91cd\u590d\u5efa\u8bbe\u3002")))}u.isMDXComponent=!0},107:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return m}));var n=t(0),c=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,c=function(e,r){if(null==e)return{};var t,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(c[t]=e[t]);return c}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var p=c.a.createContext({}),u=function(e){var r=c.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},b=function(e){var r=u(e.components);return c.a.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return c.a.createElement(c.a.Fragment,{},r)}},s=c.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=u(t),s=n,m=b["".concat(a,".").concat(s)]||b[s]||d[s]||i;return t?c.a.createElement(m,o(o({ref:r},p),{},{components:t})):c.a.createElement(m,o({ref:r},p))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=s;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,a[1]=o;for(var p=2;p<i;p++)a[p]=t[p];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);