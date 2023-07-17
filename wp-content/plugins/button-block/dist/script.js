!function(){"use strict";var t=React,n=ReactDOM,o=function(t){var n=t.width,o=void 0===n?"0px":n,c=t.style,e=void 0===c?"solid":c,a=t.color,i=void 0===a?"#0000":a,r=t.side,l=void 0===r?"all":r,d=t.radius,u=void 0===d?"0px":d,s=function(t){var n=null==l?void 0:l.toLowerCase();return(null==n?void 0:n.includes("all"))||(null==n?void 0:n.includes(t))},v="0px"===o||!o,f="".concat(o," ").concat(e," ").concat(i);return"\n\t\t".concat(v?"":s("top")?"border-top: ".concat(f,";"):"","\n\t\t").concat(v?"":s("right")?"border-right: ".concat(f,";"):"","\n\t\t").concat(v?"":s("bottom")?"border-bottom: ".concat(f,";"):"","\n\t\t").concat(v?"":s("left")?"border-left: ".concat(f,";"):"","\n\t\t").concat(u?"border-radius: ".concat(u,";"):"","\n\t")},c=function(t){var n=t.color,o=void 0===n?"#333":n,c=t.bgType,e=void 0===c?"solid":c,a=t.bg,i=void 0===a?"#0000":a,r=t.gradient,l=void 0===r?"linear-gradient(135deg, #4527a4, #8344c5)":r;return"\n\t\t".concat(o?"color: ".concat(o,";"):"","\n\t\t").concat(l||i?"background: ".concat("gradient"===e?l:i,";"):"","\n\t")},e=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"box",o="";return null==t||t.map((function(c,e){var a=c.hOffset,i=void 0===a?"0px":a,r=c.vOffset,l=void 0===r?"0px":r,d=c.blur,u=void 0===d?"0px":d,s=c.spreed,v=void 0===s?"0px":s,f=c.color,p=void 0===f?"#7090b0":f,g=c.isInset,b=void 0!==g&&g?"inset":"",m="".concat(i||""," ").concat(l||""," ").concat(u||""),h=e+1>=t.length?"":", ";o+="text"===n?"".concat(m," ").concat(p||"").concat(h):"".concat(m," ").concat(v||""," ").concat(p||""," ").concat(b).concat(h)})),o||"none"},a=function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=t.fontFamily,c=void 0===o?"Default":o,e=t.fontCategory,a=void 0===e?"sans-serif":e,i=t.fontVariant,r=void 0===i?400:i,l=t.fontWeight,d=void 0===l?400:l,u=t.isUploadFont,s=void 0===u||u,v=t.fontSize,f=void 0===v?15:v,p=t.fontStyle,g=void 0===p?"normal":p,b=t.textTransform,m=void 0===b?"none":b,h=t.textDecoration,x=void 0===h?"auto":h,y=t.lineHeight,w=void 0===y?"135%":y,R=t.letterSpace,E=void 0===R?"0px":R,S=function(t,n){return t?"".concat(n,": ").concat(t,";"):""},I=!n||!c||"Default"===c,D="\n\t\t".concat(I?"":"font-family: '".concat(c,"', ").concat(a,";"),"\n\t\t").concat(S(d,"font-weight"),"\n\t\t").concat(f?"font-size: ".concat(f,"px;"):"","\n\t\t").concat(S(g,"font-style"),"\n\t\t").concat(S(m,"text-transform"),"\n\t\t").concat(S(x,"text-decoration"),"\n\t\t").concat(S(w,"line-height"),"\n\t\t").concat(S(E,"letter-spacing"),"\n\t"),F=r&&400!==r?"400i"===r?":ital@1":null!=r&&r.includes("00i")?": ital, wght@1, ".concat(null==r?void 0:r.replace("00i","00")," "):": wght@".concat(r," "):"",L=I?"":"https://fonts.googleapis.com/css2?family=".concat(null==c?void 0:c.split(" ").join("+")).concat(F.replace(/ /g,""),"&display=swap");return{styles:D.replace(/\s+/g," ").trim(),googleFontLink:!s||I?"":"@import url(".concat(L,");")}},i=function(t){var n,i,r,l,d,u,s,v,f,p,g,b,m,h,x,y,w,R=t.attributes,E=t.clientId,S=R.isFullWidth,I=R.addCSS,D=R.alignment,F=R.typography,L=R.colors,k=R.hovColors,A=R.padding,B=R.border,O=R.shadow;return React.createElement(React.Fragment,null,React.createElement("style",{dangerouslySetInnerHTML:{__html:"\n\t\t\t".concat(null===(n=a(F))||void 0===n?void 0:n.googleFontLink,"\n\n\t\t\t#btnButton-").concat(E,"{\n\t\t\t\ttext-align: ").concat(D,";\n\t\t\t}\n\t\t\t#btnButton-").concat(E," .btnButton{\n\t\t\t\t").concat((null===(i=a(F))||void 0===i?void 0:i.styles)||"font-size: 18px; font-weight: 600; text-decoration: none;","\n\t\t\t\t").concat(c(L)||"color: #fff; background-color: #4527a4;","\n\t\t\t\twidth: ").concat(S?"100%":"auto",";\n\t\t\t\tpadding: ").concat((r=A,l=r.side,d=void 0===l?2:l,u=r.vertical,s=void 0===u?"0px":u,v=r.horizontal,f=void 0===v?"0px":v,p=r.top,g=void 0===p?"0px":p,b=r.right,m=void 0===b?"0px":b,h=r.bottom,x=void 0===h?"0px":h,y=r.left,w=void 0===y?"0px":y,(2===d?"".concat(s," ").concat(f):"".concat(g," ").concat(m," ").concat(x," ").concat(w))||"10px 20px"),";\n\t\t\t\t").concat(o(B)||"border-radius: 5px;","\n\t\t\t\tbox-shadow: ").concat(e((null==O?void 0:O.shadow)||O)||"none",";\n\t\t\t}\n\t\t\t#btnButton-").concat(E," .btnButton:hover{\n\t\t\t\t").concat(c(k)||"color: #fff; background-color: #8344c5;","\n\t\t\t}\n\t\t\t").concat(I,"\n\t\t\t").replace(/\s+/g," ")}}))};document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".wp-block-btn-button").forEach((function(t){var o=JSON.parse(t.dataset.attributes);(0,n.render)(React.createElement(React.Fragment,null,React.createElement(i,{attributes:o,clientId:o.cId}),React.createElement(r,{attributes:o})),t),null==t||t.removeAttribute("data-attributes")}))}));var r=function(n){var o=n.attributes,c=o.text,e=o.url,a=o.target,i=o.tooltip,r=o.isDownload,l=o.isUpIcon,d=o.icon,u=o.upIcon,s=o.animationType,v=o.animationDuration,f=o.addID,p=(0,t.useRef)(null);return(0,t.useEffect)((function(){var t,n,o,c;(r?null==p||null===(t=p.current)||void 0===t||t.setAttribute("download",""):null==p||null===(n=p.current)||void 0===n||n.removeAttribute("download"),null===(o=window.AOS)||void 0===o||o.init(),e)||(null==p||null===(c=p.current)||void 0===c||c.removeAttribute("href"))}),[]),React.createElement("a",{className:"btnButton","data-aos":s,"data-aos-duration":1e3*v,href:e,target:a,rel:"noopener noreferrer",tooltip:i,position:"top",ref:p,id:f},l&&(null==u?void 0:u.url)&&React.createElement("img",{src:null==u?void 0:u.url,alt:null==u?void 0:u.alt}),!l&&(null==d?void 0:d.class)&&React.createElement("i",{className:null==d?void 0:d.class}),React.createElement("span",{className:"btnText",dangerouslySetInnerHTML:{__html:c}}))}}();
//# sourceMappingURL=script.js.map