import{h as e,render as n}from"preact";var t,r={data:""},a=function(e){try{var n=(e=e||document.head).querySelector("[data-goober]");return n||((n=e.appendChild(document.createElement("style"))).innerHTML=" ",n.dataset.goober=""),n.firstChild}catch(e){}return r},i=/(?:([a-z0-9-%@]+) *:? *([^{;]+?);|([^;}{]*?) +{)|(})/gi,c=/\/\*.*?\*\/|\s{2,}|\n/gm,o=function(e,n,t){var r="",a="",i="";if(/^@k/.test(t))return t+JSON.stringify(e).replace(/","/g,";").replace(/"|,"/g,"").replace(/:{/g,"{");for(var c in e){var s=e[c];if(/^@i/.test(c))i+=c+" "+s+";";else if("object"==typeof s){var f=n+" "+c;/&/g.test(c)&&(f=c.replace(/&/g,n)),"@"==c[0]&&(f=n),a+=o(s,f,f==n?c:t||"")}else r+=c.replace(/[A-Z]/g,"-$&").toLowerCase()+":"+s+";"}if(r.charAt(0)){var u=n+"{"+r+"}";return t?a+t+"{"+u+"}":i+u+a}return i+a},s={c:0},f=function(e,n,t){var r=JSON.stringify(e),a=s[r]||(s[r]=t?"":".g0"+~r.split("").reduce(function(e,n){return(e<<5)-e+n.charCodeAt(0)},0)),f=s[a]||(s[a]=o(e[0]?function(e){for(var n,t=[{}];n=i.exec(e.replace(c,""));)n[4]&&t.shift(),n[3]?t.unshift(t[0][n[3]]={}):n[4]||(t[0][n[1]]=n[2]);return t[0]}(e):e,a));return++s.c>1e4&&(s={c:0}),function(e,n){n.data.indexOf(e)<0&&(n.data+=e)}(f,n),a.substr(1)},u=function(e,n,t){return e.reduce(function(e,r,a){var i=n[a];if("function"==typeof n[a]){var c=n[a](t),o=c.attributes||c.props,s=o&&o.className||/^g0/.test(c)&&c;i=s?"."+s:o?"":c}return e+r+(i||"")},"")};function p(e){var n=[].slice.call(arguments,1),t=this||{};return f(e.map?u(e,n,t.p):e,a(t.target),t.g)}p.bind({g:1}),Object.freeze(["\n  border: none;\n  background: white;\n  color: black;\n"]),Object.freeze(["\n  font-size: 14px;\n"]),Object.freeze(["\n  font-size: 24px;\n"]),Object.freeze(["\n  padding: 0.1rem;\n  width: 32px;\n  height: 32px;\n  margin: 0px;\n"]);var l=Object.freeze(['\n  position: fixed;\n  padding: 1rem 1rem;\n  display: flex;\n  width: 100vw;\n  align-items: center;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  bottom: 0;\n  justify-content: space-between;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n    "Ubuntu", "Helvetica Neue", Arial, sans-serif;\n']);t=e,n(e(function(e){var n=this||{};return function(){var e=arguments;return function(r){return n.p=r,t("div",Object.assign({},r,{className:(r&&r.className?r.className+" ":"")+p.apply(n,e)}))}}}()(l),null,"ciao"),document.body);
//# sourceMappingURL=index.mjs.map