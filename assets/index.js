var e,n=require("preact"),t={data:""},r=function(e){try{var n=(e=e||document.head).querySelector("[data-goober]");return n||((n=e.appendChild(document.createElement("style"))).innerHTML=" ",n.dataset.goober=""),n.firstChild}catch(e){}return t},a=/(?:([a-z0-9-%@]+) *:? *([^{;]+?);|([^;}{]*?) +{)|(})/gi,i=/\/\*.*?\*\/|\s{2,}|\n/gm,c=function(e,n,t){var r="",a="",i="";if(/^@k/.test(t))return t+JSON.stringify(e).replace(/","/g,";").replace(/"|,"/g,"").replace(/:{/g,"{");for(var o in e){var s=e[o];if(/^@i/.test(o))i+=o+" "+s+";";else if("object"==typeof s){var u=n+" "+o;/&/g.test(o)&&(u=o.replace(/&/g,n)),"@"==o[0]&&(u=n),a+=c(s,u,u==n?o:t||"")}else r+=o.replace(/[A-Z]/g,"-$&").toLowerCase()+":"+s+";"}if(r.charAt(0)){var f=n+"{"+r+"}";return t?a+t+"{"+f+"}":i+f+a}return i+a},o={c:0},s=function(e,n,t){var r=JSON.stringify(e),s=o[r]||(o[r]=t?"":".g0"+~r.split("").reduce(function(e,n){return(e<<5)-e+n.charCodeAt(0)},0)),u=o[s]||(o[s]=c(e[0]?function(e){for(var n,t=[{}];n=a.exec(e.replace(i,""));)n[4]&&t.shift(),n[3]?t.unshift(t[0][n[3]]={}):n[4]||(t[0][n[1]]=n[2]);return t[0]}(e):e,s));return++o.c>1e4&&(o={c:0}),function(e,n){n.data.indexOf(e)<0&&(n.data+=e)}(u,n),s.substr(1)},u=function(e,n,t){return e.reduce(function(e,r,a){var i=n[a];if("function"==typeof n[a]){var c=n[a](t),o=c.attributes||c.props,s=o&&o.className||/^g0/.test(c)&&c;i=s?"."+s:o?"":c}return e+r+(i||"")},"")};function f(e){var n=[].slice.call(arguments,1),t=this||{};return s(e.map?u(e,n,t.p):e,r(t.target),t.g)}f.bind({g:1}),Object.freeze(["\n  border: none;\n  background: white;\n  color: black;\n"]),Object.freeze(["\n  font-size: 14px;\n"]),Object.freeze(["\n  font-size: 24px;\n"]),Object.freeze(["\n  padding: 0.1rem;\n  width: 32px;\n  height: 32px;\n  margin: 0px;\n"]);var p=Object.freeze(['\n  position: fixed;\n  padding: 1rem 1rem;\n  display: flex;\n  width: 100vw;\n  align-items: center;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  bottom: 0;\n  justify-content: space-between;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n    "Ubuntu", "Helvetica Neue", Arial, sans-serif;\n']);e=n.h;var l=function(n){var t=this||{};return function(){var n=arguments;return function(r){return t.p=r,e("div",Object.assign({},r,{className:(r&&r.className?r.className+" ":"")+f.apply(t,n)}))}}}()(p);n.render(n.h(l,null,"ciao"),document.body);
//# sourceMappingURL=index.js.map
