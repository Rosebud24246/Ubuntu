!function(){"use strict";var e=wp.blocks,t=JSON.parse('{"apiVersion":"1","name":"peb/pdf-embed","title":"PDF Embed","description":"Show PDF file on you web page.","category":"widgets","keywords":["pdf","embed pdf","display pdf"],"textdomain":"pdf-embed-block","attributes":{"align":{"type":"string","default":""},"cId":{"type":"string","default":""},"file":{"type":"object","default":{"id":null,"url":"","alt":"","title":""}},"config":{"type":"object","default":{"embedMode":"SIZED_CONTAINER"}},"alignment":{"type":"string","default":"center"},"width":{"type":"string","default":"100%"},"height":{"type":"string","default":"550px"}},"supports":{"align":["wide","full"],"html":false},"example":{"attributes":{"preview":true,"columns":{"desktop":1,"tablet":1,"mobile":1}}},"editorScript":"file:dist/editor.js","script":"file:dist/script.js"}'),n=wp.i18n,r=wp.element,a=wp.components,l=wp.blockEditor;function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c=function(e){var t=e.className,r=e.value,o=void 0===r?{}:r,i=e.types,c=void 0===i?["image"]:i,u=e.onChange,d=e.placeholder,f=void 0===d?(0,n.__)("Enter URL","bplugins"):d;return React.createElement(a.PanelRow,{className:"".concat(t," bplInlineMediaUpload")},React.createElement(a.TextControl,{value:null==o?void 0:o.url,onChange:function(e){return u({id:null,url:e,alt:"",title:""})},placeholder:f}),React.createElement(l.MediaUploadCheck,null,React.createElement(l.MediaUpload,{allowedTypes:c,onSelect:function(e){var t=e.id,n=e.url,r=e.alt,a=e.title;return u({id:t,url:n,alt:r,title:a})},render:function(e){var t=e.open;return React.createElement(a.Button,{className:"button button-primary",onClick:t,icon:"upload"})}})))},u=function(e){var t=e.onChange,i=e.icon,c=void 0===i?"format-image":i,u=e.type,d=void 0===u?"image":u,f=e.typeName,s=void 0===f?"":f,p=e.placeholder,m=void 0===p?(0,n.__)("Paste or type a video URL","bplugins"):p,b=o((0,r.useState)(),2),y=b[0],v=b[1];return React.createElement(a.Placeholder,{className:"bplMediaPlaceholder",label:(0,n.__)("Upload ".concat(s||d),"bplugins"),instructions:(0,n.__)("Upload a ".concat(s||d," or paste/write ").concat(s||d," url to get started."),"bplugins"),icon:c},React.createElement(l.MediaUploadCheck,null,React.createElement(l.MediaUpload,{allowedTypes:[d],onSelect:function(e){return t(e)},render:function(e){var t=e.open;return React.createElement(a.Button,{isPrimary:!0,onClick:t}," ",(0,n.__)("Upload","bplugins")," ")}})),React.createElement(a.PanelRow,{className:"bplUrlInput"},React.createElement("h3",null," ",(0,n.__)("Or","bplugins")," "),React.createElement("input",{type:"url","aria-label":(0,n.__)("URL","bplugins"),placeholder:m,onChange:function(e){return v(e.target.value)},value:y}),React.createElement(a.Button,{label:(0,n.__)("Apply","bplugins"),type:"submit",onClick:function(e){e.preventDefault(),t({id:null,url:y,alt:"",title:""}),v("")},isPrimary:!0},(0,n.__)("Apply","bplugins"))))},d=function(e){var t=e.label,r=void 0===t?(0,n.__)("Edit Image:","bplugins"):t,o=e.icon,i=void 0===o?"format-image":o,c=e.types,u=void 0===c?["image"]:c,d=e.value,f=void 0===d?{}:d,s=e.onChange;return(null==f?void 0:f.url)&&React.createElement(a.ToolbarGroup,{className:"bPlToolbar"},React.createElement(l.MediaUploadCheck,null,React.createElement(l.MediaUpload,{allowedTypes:u,value:null==f?void 0:f.id,onSelect:function(e){var t=e.id,n=e.url,r=e.alt,a=e.title;return s({id:t,url:n,alt:r,title:a})},render:function(e){var t=e.open;return React.createElement(a.ToolbarButton,{label:r,icon:i,onClick:t})}})))},f=function(e){var t=e.className,n=void 0===t?"mt20 mb5":t,r=e.children;return React.createElement("p",{className:"bPlLabel ".concat(n)},r)},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{value:"px",label:"px",default:e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{value:"%",label:"%",default:e}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{value:"em",label:"em",default:e}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{value:"vh",label:"vh",default:e}},y=[{label:(0,n.__)("Sized Container","pdf-embed-block"),value:"SIZED_CONTAINER"},{label:(0,n.__)("In Line","pdf-embed-block"),value:"IN_LINE"}];(0,n.__)("General","pdf-embed-block"),(0,n.__)("Style","pdf-embed-block");function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var h=function(e){var t=e.data,l=e.dataLoading,o=e.saveData,i=e.isLoading,c=v((0,r.useState)(""),2),u=c[0],d=c[1];return(0,r.useEffect)((function(){return d(t)}),[t,l]),l?React.createElement("div",{className:"pebSpinnerContainer"},React.createElement(a.Spinner,null)," ",(0,n.__)(" Loading","pdf-embed-block")):React.createElement(React.Fragment,null,React.createElement("div",{className:"bplMediaPlaceholder"},React.createElement(f,{className:"mb5"},(0,n.__)("Adobe API Key (Client ID):","pdf-embed-block")),React.createElement(a.PanelRow,{className:"bplUrlInput"},React.createElement(a.TextControl,{value:u,onChange:function(e){return d(e)}}),React.createElement(a.Button,{className:"saveSettings",onClick:function(){return o(u)},disabled:i},(0,n.__)("Save","pdf-embed-block")))),React.createElement("small",null,(0,n.__)("Get a free API Key from "),React.createElement("a",{href:"https://documentcloud.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-embed-api",target:"_blank",rel:"noreferrer"},(0,n.__)("Adobe official site","pdf-embed-block"))))};function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return P(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var S=function(e){var t=e.attributes,o=e.setAttributes,i=e.data,u=e.dataLoading,v=e.saveData,g=e.isLoading,E=t.file,P=t.config,S=t.alignment,O=t.width,k=t.height,A=P.embedMode,D=void 0===A?"":A,I=R((0,r.useState)(E.title),2),C=I[0],j=I[1],N=(0,r.useRef)(function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;return function(){for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];t&&clearTimeout(t),t=setTimeout((function(){return e.apply(void 0,a)}),n)}}((function(e,t){o({file:w(w({},e),{},{title:t})})}),750)).current;return React.createElement(React.Fragment,null,React.createElement(l.InspectorControls,null,React.createElement(a.PanelBody,{className:"bPlPanelBody help",title:(0,n.__)("Help","pdf-embed-block"),initialOpen:!1},React.createElement("div",{className:"helpItem"},React.createElement("a",{href:"https://bblockswp.com/docs/pdf-embed-block/",target:"_blank",rel:"noreferrer"},React.createElement(a.Dashicon,{icon:"book"}),(0,n.__)("Read Documentation","pdf-embed-block"))),React.createElement("div",{className:"helpItem rateUs"},React.createElement("a",{href:"https://wordpress.org/support/plugin/pdf-embed-block/reviews/#new-post",target:"_blank",rel:"noreferrer"},React.createElement("span",null,React.createElement(a.Dashicon,{icon:"star-filled"}),(0,n.__)("Would you please rate us?","pdf-embed-block")),React.createElement("span",null,(0,n.__)("We are new and we need your help to grow!🙏","pdf-embed-block"))))),React.createElement(a.PanelBody,{className:"bPlPanelBody",title:(0,n.__)("PDF Settings","pdf-embed-block")},React.createElement(h,{data:i,dataLoading:u,saveData:v,isLoading:g}),React.createElement(f,null,(0,n.__)("PDF File:","pdf-embed-block")),React.createElement(c,{value:E,types:["application/pdf"],onChange:function(e){j(e.title),o({file:e})},placeholder:(0,n.__)("Enter PDF URL","pdf-embed-block")}),React.createElement(f,{className:"mt10"},(0,n.__)("PDF File Name:","pdf-embed-block")),React.createElement(a.TextControl,{value:C,onChange:function(e){j(e),N(E,e)}}),React.createElement(a.PanelRow,null,React.createElement(f,{className:""},(0,n.__)("Embed Mode:","pdf-embed-block")),React.createElement(a.SelectControl,{value:D,onChange:function(e){return function(e,t){return o({config:w(w({},P),{},_({},e,t))})}("embedMode",e)},options:y}))),React.createElement(a.PanelBody,{className:"bPlPanelBody",title:(0,n.__)("Layout Settings","pdf-embed-block"),initialOpen:!1},React.createElement(a.__experimentalUnitControl,{label:(0,n.__)("Width:","pdf-embed-block"),labelPosition:"left",value:O,onChange:function(e){return o({width:e})},units:[s(650),p(100),m(40)],isResetValueOnUnitChange:!0}),"IN_LINE"!==D&&React.createElement(a.__experimentalUnitControl,{className:"mt10",label:(0,n.__)("Height:","pdf-embed-block"),labelPosition:"left",value:k,onChange:function(e){return o({height:e})},units:[s(459),b(100),m(28)],isResetValueOnUnitChange:!0}))),React.createElement(l.BlockControls,null,React.createElement(d,{label:(0,n.__)("Edit PDF:","pdf-embed-block"),icon:"pdf",types:["application/pdf"],value:E,onChange:function(e){return o({file:e})}}),React.createElement(l.AlignmentToolbar,{value:S,onChange:function(e){return o({alignment:e})},describedBy:(0,n.__)("PDF Embed Alignment"),alignmentControls:[{title:(0,n.__)("PDF Embed in left","pdf-embed-block"),align:"left",icon:"align-left"},{title:(0,n.__)("PDF Embed in center","pdf-embed-block"),align:"center",icon:"align-center"},{title:(0,n.__)("PDF Embed in right","pdf-embed-block"),align:"right",icon:"align-right"}]})))},O=function(e){var t=e.attributes,n=e.clientId,r=t.alignment,a=t.width,l=t.height;return React.createElement("style",{dangerouslySetInnerHTML:{__html:"\n\t\t#pebPDFEmbed-".concat(n," .pebPDFEmbed{\n\t\t\ttext-align: ").concat(r,";\n\t\t}\n\t\t#pebPDFEmbed-").concat(n," .pebPDFEmbed .pebSizedContainer{\n\t\t\twidth: ").concat("0px"===a||"0%"===a||"0em"===a?"auto":a,";\n\t\t\theight: ").concat("0px"===l||"0vh"===l||"0em"===l?"auto":l,";\n\t\t}\n\t\t#pebPDFEmbed-").concat(n," .pebPDFEmbed .pebInLine{\n\t\t\twidth: ").concat("0px"===a||"0%"===a||"0em"===a?"auto":a,";\n\t\t}\n\t")}})};function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.readyPromise=new Promise((function(e){window.AdobeDC?e():document.addEventListener("adobe_dc_view_sdk.ready",(function(){return e()}))})),this.adobeDCView=void 0}var t,n,r;return t=e,n=[{key:"ready",value:function(){return this.readyPromise}},{key:"previewFile",value:function(e,t,n,r){var a,l=n.file,o={clientId:r};e&&(o.divId=e),this.adobeDCView=new window.AdobeDC.View(o);var i=this.adobeDCView.previewFile({content:{location:{url:l.url}},metaData:{fileName:l.title||" ",id:null===(a=l.id)||void 0===a?void 0:a.toString()}},function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({showDownloadPDF:!1,showPrintPDF:!1,showFullScreen:!0},t));return i}}],n&&D(t.prototype,n),r&&D(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),C=I,j=React;function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return F(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var L=function(e,t){var n=N((0,j.useState)(!0),2),r=n[0],a=n[1],l=N((0,j.useState)(null),2),o=l[0],i=l[1];(0,j.useEffect)((function(){wp.api.loadPromise.then((function(){(new wp.api.models.Settings).fetch().then((function(t){i(c(t[e])),a(!1)}))}))}),[t]);var c=function(e){var t=e;try{t=JSON.parse(e)}catch(e){}return t};return{data:o,isLoading:r}},M=["isLoaded"];function U(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return T(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var B=function(e,t,n){var r=t.type,a=void 0===r?"string":r,l=x((0,j.useState)(!1),2),o=l[0],i=l[1],c=x((0,j.useState)(null),2),u=c[0],d=c[1],f=x((0,j.useState)(null),2),s=f[0],p=f[1],m=function(e,t){var n=e;if("object"===a){e.isLoaded;n=U(e,M);try{n="saving"===t?JSON.stringify(e):JSON.parse(e)}catch(e){d(null==e?void 0:e.message)}}return n};return{data:s,saveData:function(t){d(null),i(!0),n("saving");try{var r=new wp.api.models.Settings(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},e,m(t,"saving")));r.save().then((function(t){p(m(t[e],"response")),i(!1),n(null)}))}catch(e){d(null==e?void 0:e.message),i(!1),n(null)}},isLoading:o,error:u}};function z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return V(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return V(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var K=function(e){var t=e.className,l=e.attributes,o=e.setAttributes,i=e.clientId,c=e.isSelected,d=l.file,f=l.config,s=z((0,r.useState)(null),2),p=s[0],m=s[1],b=L("pebAPIKey",p),y=b.data,v=b.isLoading,g=B("pebAPIKey",{type:"string"},m),E=g.saveData,w=g.isLoading;return(0,r.useEffect)((function(){i&&o({cId:i.substring(0,10)})}),[i]),(0,r.useEffect)((function(){setTimeout((function(){var e=document.querySelectorAll(".components-panel__body-title button");function t(){var n=this;this.removeEventListener("click",t),e.forEach((function(e){"true"!==e.getAttribute("aria-expanded")||e.isEqualNode(n)||e.click()})),setTimeout((function(){n.addEventListener("click",t)}),500)}e.forEach((function(e){e.addEventListener("click",t)}))}),500)}),[c]),(0,r.useEffect)((function(){if(y&&d.url){var e=new C;e.ready().then((function(){e.previewFile("pebPDFArea-".concat(i),{embedMode:null==f?void 0:f.embedMode},l,y)}))}}),[y,d,null==f?void 0:f.embedMode]),v||w?React.createElement("div",{className:"pebSpinnerContainer"},React.createElement(a.Spinner,null)," ",(0,n.__)(" Loading","pdf-embed-block")):React.createElement(React.Fragment,null,React.createElement(S,{attributes:l,setAttributes:o,data:y,dataLoading:v,saveData:E,isLoading:w}),y?null!=d&&d.url?React.createElement("div",{className:t,id:"pebPDFEmbed-".concat(i)},React.createElement(O,{attributes:l,clientId:i}),React.createElement("div",{className:"pebPDFEmbed"},"SIZED_CONTAINER"===(null==f?void 0:f.embedMode)&&React.createElement("div",{className:"pebSizedContainer",id:"pebPDFArea-".concat(i)}),"IN_LINE"===(null==f?void 0:f.embedMode)&&React.createElement("div",{className:"pebInLine",id:"pebPDFArea-".concat(i)}))):React.createElement(u,{type:"application/pdf",typeName:"PDF",icon:"pdf",onChange:function(e){return o({file:e})},placeholder:(0,n.__)("Paste or type a PDF URL","pdf-embed-block")}):React.createElement(a.Placeholder,{className:"bplMediaPlaceholder",label:(0,n.__)("API Key (Client ID)","pdf-embed-block"),instructions:React.createElement("p",null,(0,n.__)("Generate a PDF Embed API Key (Client ID) from ","pdf-embed-block"),React.createElement("a",{href:"https://documentcloud.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-embed-api",target:"_blank",rel:"noreferrer"},(0,n.__)("here","pdf-embed-block")),(0,n.__)(". Amd insert the Client ID in the field of in the settings panel on the right.","pdf-embed-block")),icon:"pdf"},React.createElement(h,{data:y,dataLoading:v,saveData:E,isLoading:w})))},$=React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 512 512"},React.createElement("rect",{width:512,height:512,rx:"15%",fill:"#4527a4"}),React.createElement("path",{fill:"#fff",d:"M413 302c-9-10-29-15-56-15-16 0-33 2-53 5a252 252 0 0 1-52-69c10-30 17-59 17-81 0-17-6-44-30-44-7 0-13 4-17 10-10 18-6 58 13 100a898 898 0 0 1-50 117c-53 22-88 46-91 65-2 9 4 24 25 24 31 0 65-45 91-91a626 626 0 0 1 92-24c38 33 71 38 87 38 32 0 35-23 24-35zM227 111c8-12 26-8 26 16 0 16-5 42-15 72-18-42-18-75-11-88zM100 391c3-16 33-38 80-57-26 44-52 72-68 72-10 0-13-9-12-15zm197-98a574 574 0 0 0-83 22 453 453 0 0 0 36-84 327 327 0 0 0 47 62zm13 4c32-5 59-4 71-2 29 6 19 41-13 33-23-5-42-18-58-31z"}));(0,e.registerBlockType)(t,{icon:$,edit:K,save:function(){return null}})}();
//# sourceMappingURL=editor.js.map