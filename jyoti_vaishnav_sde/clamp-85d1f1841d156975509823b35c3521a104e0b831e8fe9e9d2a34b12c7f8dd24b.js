!function(){function e(l,e){function n(e,t){return s.getComputedStyle||(s.getComputedStyle=function(n){return this.el=n,this.getPropertyValue=function(e){var t=/(\-([a-z]){1})/g;return"float"==e&&(e="styleFloat"),t.test(e)&&(e=e.replace(t,function(e,t,n){return n.toUpperCase()})),n.currentStyle&&n.currentStyle[e]?n.currentStyle[e]:null},this}),s.getComputedStyle(e,null).getPropertyValue(t)}function t(e){var t=e||l.clientHeight,n=a(l);return Math.max(Math.floor(t/n),0)}function i(e){return a(l)*e}function a(e){var t=n(e,"line-height");return"normal"==t&&(t=1.2*parseInt(n(e,"font-size"))),parseInt(t)}function r(e){return e.lastChild.children&&0<e.lastChild.children.length?r(Array.prototype.slice.call(e.children).pop()):e.lastChild&&e.lastChild.nodeValue&&""!=e.lastChild.nodeValue&&e.lastChild.nodeValue!=p.truncationChar?e.lastChild:(e.lastChild.parentNode.removeChild(e.lastChild),r(l))}function o(e,t){function n(){H=p.splitOnChars.slice(0),L=H[0],y=g=null}if(t){var i=e.nodeValue.replace(p.truncationChar,"");if(g||(L=0<H.length?H.shift():"",g=i.split(L)),1<g.length?(y=g.pop(),u(e,g.join(L))):g=null,c&&(e.nodeValue=e.nodeValue.replace(p.truncationChar,""),l.innerHTML=e.nodeValue+" "+c.innerHTML+p.truncationChar),g){if(l.clientHeight<=t){if(!(0<=H.length&&""!=L))return l.innerHTML;u(e,g.join(L)+L+y),g=null}}else""==L&&(u(e,""),e=r(l),n());if(!p.animate)return o(e,t);setTimeout(function(){o(e,t)},!0===p.animate?10:p.animate)}}function u(e,t){e.nodeValue=t+p.truncationChar}e=e||{};var c,s=window,p={clamp:e.clamp||2,useNativeClamp:"undefined"==typeof e.useNativeClamp||e.useNativeClamp,splitOnChars:e.splitOnChars||[".","-","\u2013","\u2014"," "],animate:e.animate||!1,truncationChar:e.truncationChar||"\u2026",truncationHTML:e.truncationHTML},h=l.style,d=l.innerHTML,f="undefined"!=typeof l.style.webkitLineClamp,C=p.clamp,m=C.indexOf&&(-1<C.indexOf("px")||-1<C.indexOf("em"));p.truncationHTML&&((c=document.createElement("span")).innerHTML=p.truncationHTML);var g,y,v,H=p.splitOnChars.slice(0),L=H[0];if("auto"==C?C=t():m&&(C=t(parseInt(C))),f&&p.useNativeClamp)h.overflow="hidden",h.textOverflow="ellipsis",h.webkitBoxOrient="vertical",h.display="-webkit-box",h.webkitLineClamp=C,m&&(h.height=p.clamp+"px");else{var M=i(C);M<=l.clientHeight&&(v=o(r(l),M))}return{original:d,clamped:v}}window.$clamp=e}();