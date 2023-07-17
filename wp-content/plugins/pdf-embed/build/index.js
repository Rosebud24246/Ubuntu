(()=>{var e,t={817:(e,t,o)=>{"use strict";const n=window.wp.blocks,l=JSON.parse('{"$schema":"https://json.schemastore.org/block.json","apiVersion":2,"name":"tropicalista/pdfembed","version":"0.3.1","title":"Embed Pdf","category":"embed","icon":"pdf","description":"PDF embedder with official Adobe Embed API.","supports":{"html":false,"anchor":true},"attributes":{"id":{"type":"string","source":"attribute","attribute":"id"},"blockId":{"type":"string"},"apiKey":{"type":"string"},"width":{"type":"number"},"height":{"type":"string","default":"500px"},"mediaUrl":{"type":"string"},"fileName":{"type":"string","default":"My PDF"},"embedMode":{"type":"string","default":""},"showDownloadPDF":{"type":"boolean","default":true},"showPrintPDF":{"type":"boolean","default":true},"showFullScreen":{"type":"boolean","default":true},"showPageControls":{"type":"boolean","default":true},"dockPageControls":{"type":"boolean","default":true},"enableFormFilling":{"type":"boolean","default":true},"showAnnotationTools":{"type":"boolean","default":true}},"textdomain":"pdf-embed","editorScript":"file:./build/index.js","editorStyle":"file:./build/index.css","style":"file:./build/style-index.css","viewScript":"file:./build/frontend.js"}'),a=window.wp.element,r=window.wp.i18n,i=window.wp.components,d=window.wp.blockEditor,s=window.wp.compose,c=window.wp.api;var p=o.n(c);function u(e){const{attributes:t,setAttributes:o}=e,{apiKey:n}=t,[l,d]=(0,a.useState)(!1),[s,c]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{c(n)}),[]),(0,a.createElement)(a.Fragment,null,(0,a.createElement)(i.__experimentalInputControl,{label:(0,r.__)("API Key","pdf-embed"),help:(0,a.createInterpolateElement)((0,r.__)("Get your free API key on <a>Adobe  Official site</a>.","pdf-embed"),{a:(0,a.createElement)(i.ExternalLink,{href:"https://www.adobe.io/apis/documentcloud/dcsdk/pdf-embed.html",target:"_blank",rel:"noreferrer"})}),value:s||"",onChange:e=>c(e),suffix:(0,a.createElement)(i.Button,{onClick:()=>{return e=s,d(!0),void new(p().models.Settings)({pdf_embed_api_key:e}).save(null,{success:()=>{o({apiKey:e}),d(!1)}});var e},isPrimary:!0,"aria-disabled":l,isBusy:l},(0,r.__)("Save"))}))}function b(e){const{attributes:t,setAttributes:o}=e,{showDownloadPDF:n,showPrintPDF:l,showFullScreen:s,dockPageControls:c,embedMode:p,height:b,showAnnotationTools:m,enableFormFilling:f}=t;return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(i.PanelBody,{title:(0,r.__)("Settings","pdf-embed"),initialOpen:!0},(0,a.createElement)(u,e),(0,a.createElement)("hr",null),(0,a.createElement)(i.SelectControl,{label:(0,r.__)("Embed mode","pdf-embed"),value:p,options:[{label:(0,r.__)("Default","pdf-embed"),value:""},{label:(0,r.__)("Sized Container","pdf-embed"),value:"SIZED_CONTAINER"},{label:(0,r.__)("Inline","pdf-embed"),value:"IN_LINE"},{label:(0,r.__)("Full Window","pdf-embed"),value:"FULL_WINDOW"}],onChange:e=>o({embedMode:e})}),(0,a.createElement)(i.ToggleControl,{label:(0,r.__)("Show Download PDF","pdf-embed"),checked:n,onChange:e=>o({showDownloadPDF:e})}),(0,a.createElement)(i.ToggleControl,{label:(0,r.__)("Show Print PDF","pdf-embed"),checked:l,onChange:e=>o({showPrintPDF:e})}),(0,a.createElement)(i.ToggleControl,{label:(0,r.__)("Show FullScreen Mode","pdf-embed"),checked:s,onChange:e=>o({showFullScreen:e})}),(0,a.createElement)(i.ToggleControl,{label:(0,r.__)("Page Controls Docked","pdf-embed"),checked:c,onChange:e=>o({dockPageControls:e})}),(0,a.createElement)(i.ToggleControl,{label:(0,r.__)("Show Annotation Tools","pdf-embed"),checked:m,onChange:e=>o({showAnnotationTools:e})}),(0,a.createElement)(i.ToggleControl,{label:(0,r.__)("Enable Form Filling","pdf-embed"),checked:f,onChange:e=>o({enableFormFilling:e})}),"IN_LINE"!==p&&(0,a.createElement)(i.BaseControl,{help:(0,r.__)("Set the height of PDF.","pdf-embed")},(0,a.createElement)(d.HeightControl,{label:(0,r.__)("Height","pdf-embed"),beforeIcon:"image-flip-vertical",value:b,onChange:e=>o({height:e})}))))}var m=o(184),f=o.n(m);function h(e){const{attributes:t,setAttributes:o,isSelected:n,className:l}=e,{mediaUrl:c,embedMode:p,height:u,apiKey:m,showPrintPdf:f,showDownloadPdf:h,fileName:g,blockId:w}=t,y=(0,s.useRefEffect)((e=>{const{ownerDocument:o}=e,{defaultView:n}=o,l=n.document.createElement("script");l.src="https://documentservices.adobe.com/view-sdk/viewer.js",n.document.head.appendChild(l),c&&n.document.addEventListener("adobe_dc_view_sdk.ready",(function(){new n.AdobeDC.View({clientId:m,divId:w}).previewFile({content:{location:{url:c}},metaData:{fileName:g}},t)}))}),[c,p,m,f,h]),v=(0,d.useBlockProps)({ref:y}),_=e=>{e.id&&o({mediaUrl:e.url,fileName:e.filename?e.filename:e.title})},[P,E]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{n||E(!1)}),[n]),c?(0,a.createElement)("div",v,(0,a.createElement)(d.InspectorControls,null,(0,a.createElement)(b,e)),(0,a.createElement)(d.BlockControls,null,c&&(0,a.createElement)(i.ToolbarGroup,null,(0,a.createElement)(d.MediaReplaceFlow,{mediaURL:c,allowedTypes:["application/pdf"],accept:".pdf",onSelect:e=>_(e)}))),(0,a.createElement)("div",{id:w,style:{height:u}}),!P&&(0,a.createElement)("div",{className:"block-library-embed__interactive-overlay",onMouseUp:()=>E(!0)})):(0,a.createElement)("div",v,(0,a.createElement)(d.MediaPlaceholder,{icon:"pdf",labels:{title:(0,r.__)("PDF"),instructions:(0,r.__)("Upload a PDF file, pick one from your media library, or add one with a URL.","pdf-embed")},className:"block-image",onSelect:_,onSelectURL:e=>{o({mediaUrl:e,fileName:new URL(e).pathname.split("/").pop()})},accept:".pdf",allowedTypes:["application/pdf"]}))}function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},g.apply(this,arguments)}const w=window.wp.hooks,y=["core/button","generateblocks/button"],v=(0,s.createHigherOrderComponent)((e=>t=>{if(!y.includes(t.name))return(0,a.createElement)(e,t);const{attributes:o,setAttributes:n}=t;return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(e,t),(0,a.createElement)(d.BlockControls,null,!!o.url&&"pdf"===o.url.split(/[#?]/)[0].split(".").pop().trim()&&(0,a.createElement)(i.ToolbarGroup,null,(0,a.createElement)(i.ToolbarButton,{label:(0,r.__)("Open pdf in lightbox","pdf-embed"),icon:"pdf",onClick:()=>{n({embedPdf:!o.embedPdf})},isPressed:o.embedPdf}))))}),"withSpacingControl");(0,w.addFilter)("editor.BlockEdit","extend-block-example/with-spacing-control",v);const _=["core/button"];(0,w.addFilter)("blocks.registerBlockType","tropicalista/pdf-embed",(function(e,t){return _.includes(t)?(void 0!==e.attributes&&(e.attributes=Object.assign(e.attributes,{embedPdf:{type:"boolean",default:!1}})),e):e})),(0,w.addFilter)("blocks.getSaveContent.extraProps","tropicalista/pdf-embed",(function(e,t,o){if(!y.includes(t.name))return e;const{embedPdf:n}=o,{className:l}=e;return Object.assign({},e,{className:f()(l,{embedPdf:n})})})),(0,n.registerBlockType)(l,{edit:function(e){const{attributes:t,setAttributes:o,clientId:n}=e,{blockId:l,apiKey:s,anchor:c}=t;(0,a.useEffect)((()=>{o({apiKey:pdf_embed.apiKey});const e=n.substr(2,9).replace("-","").replace(/-/g,"");l||o({blockId:e}),c||o({anchor:e})}),[]);const p=(0,d.useBlockProps)();return s?(0,a.createElement)(h,e):(0,a.createElement)("div",p,(0,a.createElement)(i.Placeholder,{icon:"pdf",instructions:(0,a.createElement)(a.RawHTML,null,(0,r.sprintf)((0,r.__)("<p>Please insert a <b>free api Key</b> here or in the settings panel on the right. Get your free API key on %s.</p>","pdf-embed"),'<a href="https://www.adobe.io/apis/documentcloud/dcsdk/pdf-embed.html" target="_blank">Adobe  Official site</a>')),label:(0,r.__)("PDF Embed","pdf-embed")},(0,a.createElement)(u,e)))},save:function(e){let{attributes:t}=e;const{blockId:o,mediaUrl:n,embedMode:l,height:r,apiKey:i,showPrintPDF:s,showDownloadPDF:c,showPageControls:p,showFullScreen:u,dockPageControls:b,fileName:m,showAnnotationTools:f,enableFormFilling:h}=t;return(0,a.createElement)("div",g({id:o},d.useBlockProps.save(),{style:{height:r},"data-apiKey":i,"data-fileName":m,"data-mediaUrl":n,"data-embedMode":l,"data-showDownloadPDF":c,"data-showPrintPDF":s,"data-showPageControls":p,"data-showFullScreen":u,"data-dockPageControls":b,"data-showAnnotationTools":f,"data-enableFormFilling":h}))}})},184:(e,t)=>{var o;!function(){"use strict";var n={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)){if(o.length){var r=l.apply(null,o);r&&e.push(r)}}else if("object"===a){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){e.push(o.toString());continue}for(var i in o)n.call(o,i)&&o[i]&&e.push(i)}}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(o=function(){return l}.apply(t,[]))||(e.exports=o)}()}},o={};function n(e){var l=o[e];if(void 0!==l)return l.exports;var a=o[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,e=[],n.O=(t,o,l,a)=>{if(!o){var r=1/0;for(c=0;c<e.length;c++){for(var[o,l,a]=e[c],i=!0,d=0;d<o.length;d++)(!1&a||r>=a)&&Object.keys(n.O).every((e=>n.O[e](o[d])))?o.splice(d--,1):(i=!1,a<r&&(r=a));if(i){e.splice(c--,1);var s=l();void 0!==s&&(t=s)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,l,a]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var l,a,[r,i,d]=o,s=0;if(r.some((t=>0!==e[t]))){for(l in i)n.o(i,l)&&(n.m[l]=i[l]);if(d)var c=d(n)}for(t&&t(o);s<r.length;s++)a=r[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},o=globalThis.webpackChunkadobe_pdf=globalThis.webpackChunkadobe_pdf||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var l=n.O(void 0,[431],(()=>n(817)));l=n.O(l)})();