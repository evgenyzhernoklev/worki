"use strict";var _createClass=function(){function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}();function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var scrollTo=function(s,r){var l=document.scrollingElement||document.documentElement,a=l.scrollTop,c=s-a,u=+new Date;!function t(){var e,i,n,o=+new Date-u;l.scrollTop=parseInt((e=o,i=a,n=c,(e/=r/2)<1?n/2*e*e+i:-n/2*(--e*(e-2)-1)+i)),o<r?requestAnimationFrame(t):l.scrollTop=s}()};function slideDown(e,t){t=t||"300ms ease",e.style.webkitTransition="initial",e.style.transition="initial",e.style.visibility="hidden",e.style.maxHeight="initial";var i=e.offsetHeight+"px";e.style.removeProperty("visibility"),e.style.maxHeight="0",e.style.overflow="hidden",e.style.webkitTransition="max-height "+t+", opacity "+t,e.style.transition="max-height "+t+", opacity "+t;var n=function t(){e.style.removeProperty("-webkit-transition"),e.style.removeProperty("transition"),e.style.removeProperty("opacity"),e.removeEventListener("transitionend",t)};requestAnimationFrame(function(){e.addEventListener("transitionend",n),e.style.maxHeight=i,e.style.opacity="1"})}function slideUp(e,t){t=t||"300ms ease",e.style.webkitTransition="initial",e.style.transition="initial";var i=e.offsetHeight+"px";e.style.maxHeight=i,e.style.overflow="hidden",e.style.webkitTransition="max-height "+t+", opacity "+t,e.style.transition="max-height "+t+", opacity "+t;var n=function t(){e.style.removeProperty("-webkit-transition"),e.style.removeProperty("transition"),e.style.removeProperty("opacity"),e.removeEventListener("transitionend",t)};requestAnimationFrame(function(){e.addEventListener("transitionend",n),e.style.maxHeight="0",e.style.opacity="0"})}Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){var e=this;if(!document.documentElement.contains(e))return null;do{if(e.matches(t))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null}),window.viewportSize={},window.viewportSize.getHeight=function(){return getSize("Height")},window.viewportSize.getWidth=function(){return getSize("Width")};var getSize=function(t){var e,i=t.toLowerCase(),n=window.document,o=n.documentElement;if(void 0===window["inner"+t])e=o["client"+t];else if(window["inner"+t]!=o["client"+t]){var s=n.createElement("body");s.id="vpw-test-b",s.style.cssText="overflow:scroll";var r=n.createElement("div");r.id="vpw-test-d",r.style.cssText="position:absolute;top:-1000px",r.innerHTML="<style>@media("+i+":"+o["client"+t]+"px){body#vpw-test-b div#vpw-test-d{"+i+":7px!important}}</style>",s.appendChild(r),o.insertBefore(s,n.head),e=7==r["offset"+t]?o["client"+t]:window["inner"+t],o.removeChild(s)}else e=window["inner"+t];return e},Dropdown=function(){function e(t){_classCallCheck(this,e),this.container=t,this.contents=this.container.querySelectorAll(".js-dropdown-item-content"),this.links=this.container.querySelectorAll(".js-dropdown-item-link"),this.init()}return _createClass(e,[{key:"init",value:function(){this.container.addEventListener("click",this.updateDropdown.bind(this))}},{key:"updateDropdown",value:function(t){var e=t.target;if(e.classList.contains("js-dropdown-item-link")){t.preventDefault();var i=e.closest(".js-dropdown-item").querySelector(".js-dropdown-item-content");e.classList.contains("is-active")?this.clearDropdown():(this.clearDropdown(),e.classList.add("is-active"),slideDown(i))}}},{key:"clearDropdown",value:function(){var t=!0,e=!1,i=void 0;try{for(var n,o=this.links[Symbol.iterator]();!(t=(n=o.next()).done);t=!0){n.value.classList.remove("is-active")}}catch(t){e=!0,i=t}finally{try{!t&&o.return&&o.return()}finally{if(e)throw i}}var s=!0,r=!1,l=void 0;try{for(var a,c=this.contents[Symbol.iterator]();!(s=(a=c.next()).done);s=!0){slideUp(a.value)}}catch(t){r=!0,l=t}finally{try{!s&&c.return&&c.return()}finally{if(r)throw l}}}}]),e}(),Menu=function(){function e(t){_classCallCheck(this,e),this.container=t,this.menuScroll=this.container.querySelector(".js-menu-scroll"),this.menuScrollTarget=document.querySelector(".js-menu-show"),this.init()}return _createClass(e,[{key:"init",value:function(){window.addEventListener("scroll",this.checkMenuPosition.bind(this)),window.addEventListener("resize",this.checkMenuPosition.bind(this)),document.body.addEventListener("click",this.scrollToElement.bind(this))}},{key:"checkMenuPosition",value:function(){this.menuScrollTarget.getBoundingClientRect().top<0?this.menuScroll.classList.add("is-active"):this.menuScroll.classList.remove("is-active")}},{key:"scrollToElement",value:function(t){var e=t.target;if(e.classList.contains("js-menu-link-scroll")){t.preventDefault();var i=document.querySelector(e.getAttribute("href")).getBoundingClientRect().top+window.pageYOffset-65;scrollTo(i,1e3)}}}]),e}(),SlideToggle=function(){function e(t){_classCallCheck(this,e),this.container=t,this.content=this.container.querySelector(".js-slideToggle-content"),this.button=this.container.querySelector(".js-slideToggle-button"),this.WIDTH_MOBILE=767,this.init()}return _createClass(e,[{key:"init",value:function(){this.button.addEventListener("click",this.toggleContent.bind(this)),window.addEventListener("resize",this.checkTogglePosition.bind(this))}},{key:"toggleContent",value:function(t){t.preventDefault();var e=this.button.classList,i=this.content.classList;e.contains("is-active")?(i.remove("is-active"),e.remove("is-active"),this.button.textContent="показать все",slideUp(this.content)):(i.add("is-active"),e.add("is-active"),this.button.textContent="скрыть",slideDown(this.content))}},{key:"checkTogglePosition",value:function(){}}]),e}(),Toggle=function(){function t(){_classCallCheck(this,t),this.init()}return _createClass(t,[{key:"init",value:function(){document.body.addEventListener("click",this.toggleSwitch.bind(this))}},{key:"toggleSwitch",value:function(t){var e=t.target,i=e.classList;if(i.contains("js-toggle-link")){t.preventDefault();var n=e.closest(".js-toggle-container").querySelector(".js-toggle-content"),o=n.classList;i.contains("is-active")?(i.remove("is-active"),o.remove("is-active"),n.style.maxHeight="0"):(i.add("is-active"),o.add("is-active"),n.style.maxHeight="none")}}}]),t}(),Tooltips=function(){function t(){_classCallCheck(this,t),this.tooltipContents=document.body.querySelectorAll(".js-tooltip-content"),this.tooltipLinks=document.body.querySelectorAll(".js-tooltip-link"),this.init()}return _createClass(t,[{key:"init",value:function(){document.body.addEventListener("click",this.toggleTooltip.bind(this))}},{key:"toggleTooltip",value:function(t){var e=t.target;if(e.classList.contains("js-tooltip-link")){t.preventDefault();var i=e.closest(".js-tooltip-container").querySelector(".js-tooltip-content");e.classList.contains("is-active")?this.clearTooltips():(this.clearTooltips(),e.classList.add("is-active"),i.classList.add("is-active"))}else this.clearTooltips()}},{key:"clearTooltips",value:function(){var t=!0,e=!1,i=void 0;try{for(var n,o=this.tooltipContents[Symbol.iterator]();!(t=(n=o.next()).done);t=!0){n.value.classList.remove("is-active")}}catch(t){e=!0,i=t}finally{try{!t&&o.return&&o.return()}finally{if(e)throw i}}var s=!0,r=!1,l=void 0;try{for(var a,c=this.tooltipLinks[Symbol.iterator]();!(s=(a=c.next()).done);s=!0){a.value.classList.remove("is-active")}}catch(t){r=!0,l=t}finally{try{!s&&c.return&&c.return()}finally{if(r)throw l}}}}]),t}(),Viewer=function(){function t(){_classCallCheck(this,t),this.init()}return _createClass(t,[{key:"init",value:function(){this.initClasses()}},{key:"initClasses",value:function(){var t=!0,e=!1,i=void 0;try{for(var n,o=document.querySelectorAll(".js-dropdown-container")[Symbol.iterator]();!(t=(n=o.next()).done);t=!0){var s=n.value;new Dropdown(s)}}catch(t){e=!0,i=t}finally{try{!t&&o.return&&o.return()}finally{if(e)throw i}}var r=!0,l=!1,a=void 0;try{for(var c,u=document.querySelectorAll(".js-menu-container")[Symbol.iterator]();!(r=(c=u.next()).done);r=!0){s=c.value;new Menu(s)}}catch(t){l=!0,a=t}finally{try{!r&&u.return&&u.return()}finally{if(l)throw a}}var d=!0,v=!1,h=void 0;try{for(var y,f=document.querySelectorAll(".js-slideToggle-container")[Symbol.iterator]();!(d=(y=f.next()).done);d=!0){s=y.value;new SlideToggle(s)}}catch(t){v=!0,h=t}finally{try{!d&&f.return&&f.return()}finally{if(v)throw h}}document.querySelectorAll(".js-tooltip-link").length&&new Tooltips,document.querySelectorAll(".js-toggle-link").length&&new Toggle}}]),t}();document.addEventListener("DOMContentLoaded",function(){new Viewer});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzY3JvbGxUbyIsInRvIiwiZHVyYXRpb24iLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJzY3JvbGxpbmdFbGVtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic3RhcnQiLCJzY3JvbGxUb3AiLCJjaGFuZ2UiLCJzdGFydERhdGUiLCJEYXRlIiwiZWFzZUluT3V0UXVhZCIsInQiLCJiIiwiYyIsImN1cnJlbnRUaW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYW5pbWF0ZVNjcm9sbCIsImN1cnJlbnREYXRlIiwic2xpZGVEb3duIiwiZWwiLCJ0aW1pbmciLCJzdHlsZSIsInRyYW5zaXRpb24iLCJ2aXNpYmlsaXR5Iiwid2Via2l0VHJhbnNpdGlvbiIsIm1heEhlaWdodCIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsIm92ZXJmbG93IiwiZW5kU2xpZGVEb3duIiwicmVtb3ZlUHJvcGVydHkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2xpZGVVcCIsIkVsZW1lbnQiLCJwcm90b3R5cGUiLCJtYXRjaGVzIiwibXNNYXRjaGVzU2VsZWN0b3IiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJjbG9zZXN0IiwicyIsImNvbnRhaW5zIiwibm9kZVR5cGUiLCJ3aW5kb3ciLCJ2aWV3cG9ydFNpemUiLCJnZXRIZWlnaHQiLCJnZXRTaXplIiwiZ2V0V2lkdGgiLCJOYW1lIiwic2l6ZSIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsInVuZGVmaW5lZCIsImJvZHlFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImlkIiwiZGl2RWxlbWVudCIsImNzc1RleHQiLCJhcHBlbmRDaGlsZCIsImlubmVySFRNTCIsImhlYWQiLCJpbnNlcnRCZWZvcmUiLCJyZW1vdmVDaGlsZCIsIkRyb3Bkb3duIiwiY29udGFpbmVyIiwiX2NsYXNzQ2FsbENoZWNrIiwidGhpcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb250ZW50cyIsImxpbmtzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInVwZGF0ZURyb3Bkb3duIiwiYmluZCIsInRhcmdldCIsImUiLCJjbGFzc0xpc3QiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFyZW50IiwiY2xlYXJEcm9wZG93biIsIl9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24iLCJfZGlkSXRlcmF0b3JFcnJvciIsIl9pdGVyYXRvckVycm9yIiwiX3N0ZXAiLCJfaXRlcmF0b3IiLCJTeW1ib2wiLCJpdGVyYXRvciIsIm5leHQiLCJkb25lIiwidmFsdWUiLCJyZW1vdmUiLCJlcnIiLCJyZXR1cm4iLCJfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiIsIl9kaWRJdGVyYXRvckVycm9yMiIsIl9pdGVyYXRvckVycm9yMiIsIl9zdGVwMiIsIl9pdGVyYXRvcjIiLCJNZW51IiwibWVudVNjcm9sbCIsIm1lbnVTY3JvbGxUYXJnZXQiLCJjaGVja01lbnVQb3NpdGlvbiIsImJvZHkiLCJzY3JvbGxUb0VsZW1lbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJhZGQiLCJ0YXJnZXRQb3NpdGlvblRvcCIsImdldEF0dHJpYnV0ZSIsInBhZ2VZT2Zmc2V0IiwiU2xpZGVUb2dnbGUiLCJidXR0b24iLCJXSURUSF9NT0JJTEUiLCJpbml0IiwidG9nZ2xlQ29udGVudCIsImNoZWNrVG9nZ2xlUG9zaXRpb24iLCJidXR0b25DbGFzc0xpc3QiLCJjb250ZW50Q2xhc3NMaXN0IiwidGV4dENvbnRlbnQiLCJUb2dnbGUiLCJ0b2dnbGVTd2l0Y2giLCJ0YXJnZXRDbGFzc0xpc3QiLCJNRU5VX0hFSUdIVCIsInRhcmdldFBvc2l0aW9uIiwiVG9vbHRpcHMiLCJ0b2dnbGVUb29sdGlwIiwiY2xlYXJUb29sdGlwcyIsIl9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zIiwiX2RpZEl0ZXJhdG9yRXJyb3IzIiwiX2l0ZXJhdG9yRXJyb3IzIiwiX3N0ZXAzIiwiX2l0ZXJhdG9yMyIsInRvb2x0aXBDb250ZW50cyIsIl9pdGVyYXRvck5vcm1hbENvbXBsZXRpb240IiwiX2RpZEl0ZXJhdG9yRXJyb3I0IiwiX2l0ZXJhdG9yRXJyb3I0IiwiX3N0ZXA0IiwiX2l0ZXJhdG9yNCIsInRvb2x0aXBMaW5rcyIsIlZpZXdlciIsImluaXRDbGFzc2VzIiwiX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjUiLCJfZGlkSXRlcmF0b3JFcnJvcjUiLCJfaXRlcmF0b3JFcnJvcjUiLCJfc3RlcDUiLCJfaXRlcmF0b3I1IiwiX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjYiLCJfZGlkSXRlcmF0b3JFcnJvcjYiLCJfaXRlcmF0b3JFcnJvcjYiLCJfc3RlcDYiLCJfaXRlcmF0b3I2IiwiX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjciLCJfZGlkSXRlcmF0b3JFcnJvcjciLCJfaXRlcmF0b3JFcnJvcjciLCJfc3RlcDciLCJfaXRlcmF0b3I3IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiNlhBR0UsSUFBTUEsU0FBVyxTQUFTQyxFQUFJQyxHQUM1QixJQUNBQyxFQUFVQyxTQUFTQyxrQkFBb0JELFNBQVNFLGdCQUxwREMsRUFBQUosRUFBQUssVUFPSUMsRUFBU1IsRUFBS00sRUFDZEcsR0FBYSxJQUFJQyxNQUtELFNBQWhCQyxJQUNFQyxJQVZGQSxFQUFBQyxFQUFBQyxFQVdVQyxHQURSLElBQUFMLEtBQ1dELEVBQ1hHLEVBQUFBLFVBQUFBLFVBWkZBLEVBWUVBLEVBWkZDLEVBWUVELEVBWkZFLEVBWUVGLEdBRkFBLEdBRUFBLEVBRk8sR0FMVCxFQUFBRSxFQUFBLEVBQUFGLEVBQUFBLEVBQUFDLEdBRUFDLEVBQUEsS0FEQUYsR0FDQUEsRUFBQSxHQUFBLEdBQUFDLElBTUVFLEVBQWVILEVBYmpCSSxzQkFBQUMsR0FnQlFDLEVBQUFBLFVBQW1CUixFQUd6Qk8sSUE2QkosU0FBU0UsVUFBVUMsRUFBSUMsR0FDckJBLEVBQVNBLEdBQVUsYUFBbkJBLEVBQUFBLE1BQVNBLGlCQUFVLFVBSW5CRCxFQUFHRSxNQUFNQyxXQUFhLFVBRnRCSCxFQUFBRSxNQUFBRSxXQUFB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QTRFLENBQW5FdEosRUFBbUV5SixFQUFBakUsTUE1RTVFLElBQUlnQyxZQUFBQSxJQW1FUSxNQUFBOUIsR0FBQTZELEdBQUEsRUFBQUMsRUFBQTlELEVBQUEsUUFBQSxLQUFBNEQsR0FBQUksRUFBQS9ELFFBQUErRCxFQUFBL0QsU0FBQSxRQUFBLEdBQUE0RCxFQUFBLE1BQUFDLEdBakVWdkosU0FDSTBFLGlCQUFpQkMsb0JBQWMrRSxRQURuQyxJQUFBaEMsU0FLRUgsU0FBQUEsaUJBQXVCLG1CQUF2Qm1DLFFBQ0F2QyxJQUFBQSxnQkFLQXpDLFNBQUFBLGlCQUFjbkQsbUJBQWQsV0FDRCxJQUFBa0giLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXJkIHBhcnR5XG4gKi9cbiAgY29uc3Qgc2Nyb2xsVG8gPSBmdW5jdGlvbih0bywgZHVyYXRpb24pIHtcbiAgICBjb25zdFxuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgICBzdGFydCA9IGVsZW1lbnQuc2Nyb2xsVG9wLFxuICAgIGNoYW5nZSA9IHRvIC0gc3RhcnQsXG4gICAgc3RhcnREYXRlID0gK25ldyBEYXRlKCksXG4gICAgLy8gdCA9IGN1cnJlbnQgdGltZVxuICAgIC8vIGIgPSBzdGFydCB2YWx1ZVxuICAgIC8vIGMgPSBjaGFuZ2UgaW4gdmFsdWVcbiAgICAvLyBkID0gZHVyYXRpb25cbiAgICBlYXNlSW5PdXRRdWFkID0gZnVuY3Rpb24odCwgYiwgYywgZCkge1xuICAgICAgdCAvPSBkLzI7XG4gICAgICBpZiAodCA8IDEpIHJldHVybiBjLzIqdCp0ICsgYjtcbiAgICAgIHQtLTtcbiAgICAgIHJldHVybiAtYy8yICogKHQqKHQtMikgLSAxKSArIGI7XG4gICAgfSxcbiAgICBhbmltYXRlU2Nyb2xsID0gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBjdXJyZW50RGF0ZSA9ICtuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBjdXJyZW50RGF0ZSAtIHN0YXJ0RGF0ZTtcbiAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gcGFyc2VJbnQoZWFzZUluT3V0UXVhZChjdXJyZW50VGltZSwgc3RhcnQsIGNoYW5nZSwgZHVyYXRpb24pKTtcbiAgICAgIGlmIChjdXJyZW50VGltZSA8IGR1cmF0aW9uKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlU2Nyb2xsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gdG87XG4gICAgICB9XG4gICAgfTtcbiAgICBhbmltYXRlU2Nyb2xsKCk7XG4gIH07XG4gIGlmICghRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcylcbiAgICAgIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgPSBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvcjtcbiAgXG4gIGlmICghRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdClcbiAgICAgIEVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3QgPSBmdW5jdGlvbihzKSB7XG4gICAgICAgICAgdmFyIGVsID0gdGhpcztcbiAgICAgICAgICBpZiAoIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyhlbCkpIHJldHVybiBudWxsO1xuICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgaWYgKGVsLm1hdGNoZXMocykpIHJldHVybiBlbDtcbiAgICAgICAgICAgICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50IHx8IGVsLnBhcmVudE5vZGU7XG4gICAgICAgICAgfSB3aGlsZSAoZWwgIT09IG51bGwgJiYgZWwubm9kZVR5cGUgPT09IDEpO1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfTtcbiAgLyoqXG4gICAqIFNsaWRlIGFuIGVsZW1lbnQgZG93biBsaWtlIGpRdWVyeSdzIHNsaWRlRG93biBmdW5jdGlvbiB1c2luZyBDU1MzIHRyYW5zaXRpb25zLlxuICAgKiBAc2VlIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2x1ZGRlci80MjI2Mjg4XG4gICAqIEBwYXJhbSAge2VsZW1lbnR9ICBlbFxuICAgKiBAcGFyYW0gIHtzdHJpbmd9ICAgdGltaW5nXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBmdW5jdGlvbiBzbGlkZURvd24oZWwsIHRpbWluZykge1xuICAgIHRpbWluZyA9IHRpbWluZyB8fCAnMzAwbXMgZWFzZSc7XG4gIFxuICAgIC8vIEdldCBlbGVtZW50IGhlaWdodFxuICAgIGVsLnN0eWxlLndlYmtpdFRyYW5zaXRpb24gPSAnaW5pdGlhbCc7XG4gICAgZWwuc3R5bGUudHJhbnNpdGlvbiA9ICdpbml0aWFsJztcbiAgICBlbC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgZWwuc3R5bGUubWF4SGVpZ2h0ID0gJ2luaXRpYWwnO1xuICAgIHZhciBoZWlnaHQgPSBlbC5vZmZzZXRIZWlnaHQgKyAncHgnO1xuICAgIGVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCd2aXNpYmlsaXR5Jyk7XG4gICAgZWwuc3R5bGUubWF4SGVpZ2h0ID0gJzAnO1xuICAgIGVsLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gIFxuICAgIC8vIEJlZ2luIHRyYW5zaXRpb25cbiAgICBlbC5zdHlsZS53ZWJraXRUcmFuc2l0aW9uID0gJ21heC1oZWlnaHQgJyArIHRpbWluZyArICcsIG9wYWNpdHkgJyArIHRpbWluZyArICcnO1xuICAgIGVsLnN0eWxlLnRyYW5zaXRpb24gPSAnbWF4LWhlaWdodCAnICsgdGltaW5nICsgJywgb3BhY2l0eSAnICsgdGltaW5nICsgJyc7XG4gICAgdmFyIGVuZFNsaWRlRG93biA9IGZ1bmN0aW9uKCkge1xuICAgICAgZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJy13ZWJraXQtdHJhbnNpdGlvbicpO1xuICAgICAgZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24nKTtcbiAgICAgIGVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvcGFjaXR5Jyk7XG4gICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZW5kU2xpZGVEb3duKTtcbiAgICB9O1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBlbmRTbGlkZURvd24pO1xuICAgICAgZWwuc3R5bGUubWF4SGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgZWwuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICB9KTtcbiAgfVxuICBcbiAgLyoqXG4gICAqIFNsaWRlIGFuIGVsZW1lbnQgdXAgbGlrZSBqUXVlcnkncyBzbGlkZVVwIGZ1bmN0aW9uIHVzaW5nIENTUzMgdHJhbnNpdGlvbnMuXG4gICAqIEBzZWUgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vbHVkZGVyLzQyMjYyODhcbiAgICogQHBhcmFtICB7ZWxlbWVudH0gIGVsXG4gICAqIEBwYXJhbSAge3N0cmluZ30gICB0aW1pbmdcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGZ1bmN0aW9uIHNsaWRlVXAoZWwsIHRpbWluZykge1xuICAgIHRpbWluZyA9IHRpbWluZyB8fCAnMzAwbXMgZWFzZSc7XG4gIFxuICAgIC8vIEdldCBlbGVtZW50IGhlaWdodFxuICAgIGVsLnN0eWxlLndlYmtpdFRyYW5zaXRpb24gPSAnaW5pdGlhbCc7XG4gICAgZWwuc3R5bGUudHJhbnNpdGlvbiA9ICdpbml0aWFsJztcbiAgICB2YXIgaGVpZ2h0ID0gZWwub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcbiAgICBlbC5zdHlsZS5tYXhIZWlnaHQgPSBoZWlnaHQ7XG4gICAgZWwuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgXG4gICAgLy8gQmVnaW4gdHJhbnNpdGlvblxuICAgIGVsLnN0eWxlLndlYmtpdFRyYW5zaXRpb24gPSAnbWF4LWhlaWdodCAnICsgdGltaW5nICsgJywgb3BhY2l0eSAnICsgdGltaW5nICsgJyc7XG4gICAgZWwuc3R5bGUudHJhbnNpdGlvbiA9ICdtYXgtaGVpZ2h0ICcgKyB0aW1pbmcgKyAnLCBvcGFjaXR5ICcgKyB0aW1pbmcgKyAnJztcbiAgICB2YXIgZW5kU2xpZGVEb3duID0gZnVuY3Rpb24oKSB7XG4gICAgICBlbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnLXdlYmtpdC10cmFuc2l0aW9uJyk7XG4gICAgICBlbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbicpO1xuICAgICAgZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ29wYWNpdHknKTtcbiAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBlbmRTbGlkZURvd24pO1xuICAgIH07XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGVuZFNsaWRlRG93bik7XG4gICAgICBlbC5zdHlsZS5tYXhIZWlnaHQgPSAnMCc7XG4gICAgICBlbC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgIH0pO1xuICB9XG4gIHdpbmRvdy52aWV3cG9ydFNpemUgPSB7fTtcbiAgXG4gIHdpbmRvdy52aWV3cG9ydFNpemUuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICBcdHJldHVybiBnZXRTaXplKFwiSGVpZ2h0XCIpO1xuICB9O1xuICBcbiAgd2luZG93LnZpZXdwb3J0U2l6ZS5nZXRXaWR0aCA9IGZ1bmN0aW9uICgpIHtcbiAgXHRyZXR1cm4gZ2V0U2l6ZShcIldpZHRoXCIpO1xuICB9O1xuICBcbiAgdmFyIGdldFNpemUgPSBmdW5jdGlvbiAoTmFtZSkge1xuICBcdHZhciBzaXplO1xuICBcdHZhciBuYW1lID0gTmFtZS50b0xvd2VyQ2FzZSgpO1xuICBcdHZhciBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcbiAgXHR2YXIgZG9jdW1lbnRFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICBcdGlmICh3aW5kb3dbXCJpbm5lclwiICsgTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICBcdFx0Ly8gSUU2ICYgSUU3IGRvbid0IGhhdmUgd2luZG93LmlubmVyV2lkdGggb3IgaW5uZXJIZWlnaHRcbiAgXHRcdHNpemUgPSBkb2N1bWVudEVsZW1lbnRbXCJjbGllbnRcIiArIE5hbWVdO1xuICBcdH1cbiAgXHRlbHNlIGlmICh3aW5kb3dbXCJpbm5lclwiICsgTmFtZV0gIT0gZG9jdW1lbnRFbGVtZW50W1wiY2xpZW50XCIgKyBOYW1lXSkge1xuICBcdFx0Ly8gV2ViS2l0IGRvZXNuJ3QgaW5jbHVkZSBzY3JvbGxiYXJzIHdoaWxlIGNhbGN1bGF0aW5nIHZpZXdwb3J0IHNpemUgc28gd2UgaGF2ZSB0byBnZXQgZmFuY3lcbiAgXG4gIFx0XHQvLyBJbnNlcnQgbWFya3VwIHRvIHRlc3QgaWYgYSBtZWRpYSBxdWVyeSB3aWxsIG1hdGNoIGRvY3VtZW50LmRvdW1lbnRFbGVtZW50W1wiY2xpZW50XCIgKyBOYW1lXVxuICBcdFx0dmFyIGJvZHlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJvZHlcIik7XG4gIFx0XHRib2R5RWxlbWVudC5pZCA9IFwidnB3LXRlc3QtYlwiO1xuICBcdFx0Ym9keUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IFwib3ZlcmZsb3c6c2Nyb2xsXCI7XG4gIFx0XHR2YXIgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIFx0XHRkaXZFbGVtZW50LmlkID0gXCJ2cHctdGVzdC1kXCI7XG4gIFx0XHRkaXZFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBcInBvc2l0aW9uOmFic29sdXRlO3RvcDotMTAwMHB4XCI7XG4gIFx0XHQvLyBHZXR0aW5nIHNwZWNpZmljIG9uIHRoZSBDU1Mgc2VsZWN0b3Igc28gaXQgd29uJ3QgZ2V0IG92ZXJyaWRkZW4gZWFzaWx5XG4gIFx0XHRkaXZFbGVtZW50LmlubmVySFRNTCA9IFwiPHN0eWxlPkBtZWRpYShcIiArIG5hbWUgKyBcIjpcIiArIGRvY3VtZW50RWxlbWVudFtcImNsaWVudFwiICsgTmFtZV0gKyBcInB4KXtib2R5I3Zwdy10ZXN0LWIgZGl2I3Zwdy10ZXN0LWR7XCIgKyBuYW1lICsgXCI6N3B4IWltcG9ydGFudH19PC9zdHlsZT5cIjtcbiAgXHRcdGJvZHlFbGVtZW50LmFwcGVuZENoaWxkKGRpdkVsZW1lbnQpO1xuICBcdFx0ZG9jdW1lbnRFbGVtZW50Lmluc2VydEJlZm9yZShib2R5RWxlbWVudCwgZG9jdW1lbnQuaGVhZCk7XG4gIFxuICBcdFx0aWYgKGRpdkVsZW1lbnRbXCJvZmZzZXRcIiArIE5hbWVdID09IDcpIHtcbiAgXHRcdFx0Ly8gTWVkaWEgcXVlcnkgbWF0Y2hlcyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbXCJjbGllbnRcIiArIE5hbWVdXG4gIFx0XHRcdHNpemUgPSBkb2N1bWVudEVsZW1lbnRbXCJjbGllbnRcIiArIE5hbWVdO1xuICBcdFx0fVxuICBcdFx0ZWxzZSB7XG4gIFx0XHRcdC8vIE1lZGlhIHF1ZXJ5IGRpZG4ndCBtYXRjaCwgdXNlIHdpbmRvd1tcImlubmVyXCIgKyBOYW1lXVxuICBcdFx0XHRzaXplID0gd2luZG93W1wiaW5uZXJcIiArIE5hbWVdO1xuICBcdFx0fVxuICBcdFx0Ly8gQ2xlYW51cFxuICBcdFx0ZG9jdW1lbnRFbGVtZW50LnJlbW92ZUNoaWxkKGJvZHlFbGVtZW50KTtcbiAgXHR9XG4gIFx0ZWxzZSB7XG4gIFx0XHQvLyBEZWZhdWx0IHRvIHVzZSB3aW5kb3dbXCJpbm5lclwiICsgTmFtZV1cbiAgXHRcdHNpemUgPSB3aW5kb3dbXCJpbm5lclwiICsgTmFtZV07XG4gIFx0fVxuICBcdHJldHVybiBzaXplO1xuICB9O1xuXG5cblxuLypcbiAqIEN1c3RvbVxuICovXG4gY2xhc3MgRHJvcGRvd24ge1xuICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG4gICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICB0aGlzLmNvbnRlbnRzID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmpzLWRyb3Bkb3duLWl0ZW0tY29udGVudCcpO1xuICAgICB0aGlzLmxpbmtzID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmpzLWRyb3Bkb3duLWl0ZW0tbGluaycpO1xuICAgICB0aGlzLmluaXQoKTtcbiAgIH1cbiBcbiAgIGluaXQoKSB7XG4gICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy51cGRhdGVEcm9wZG93bi5iaW5kKHRoaXMpKTtcbiAgIH1cbiBcbiAgIHVwZGF0ZURyb3Bkb3duKGUpIHtcbiAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xuIFxuICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnanMtZHJvcGRvd24taXRlbS1saW5rJykpIHtcbiAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgbGV0IHBhcmVudCA9IHRhcmdldC5jbG9zZXN0KCcuanMtZHJvcGRvd24taXRlbScpLFxuICAgICAgICAgICBjb250ZW50ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1kcm9wZG93bi1pdGVtLWNvbnRlbnQnKTtcbiBcbiAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaXMtYWN0aXZlJykpIHtcbiAgICAgICAgIHRoaXMuY2xlYXJEcm9wZG93bigpO1xuICAgICAgIH0gZWxzZSB7XG4gICAgICAgICB0aGlzLmNsZWFyRHJvcGRvd24oKTtcbiAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgIHNsaWRlRG93bihjb250ZW50KTtcbiAgICAgICB9XG4gICAgIH1cbiAgIH1cbiBcbiAgIGNsZWFyRHJvcGRvd24oKSB7XG4gICAgIGZvciAodmFyIGVsZW1lbnQgb2YgdGhpcy5saW5rcykge1xuICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgIH1cbiAgICAgZm9yICh2YXIgZWxlbWVudCBvZiB0aGlzLmNvbnRlbnRzKSB7XG4gICAgICAgc2xpZGVVcChlbGVtZW50KTtcbiAgICAgfVxuICAgfVxuIH1cbiBjbGFzcyBNZW51IHtcbiAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgdGhpcy5tZW51U2Nyb2xsID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignLmpzLW1lbnUtc2Nyb2xsJyk7XG4gICAgIHRoaXMubWVudVNjcm9sbFRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1tZW51LXNob3cnKTtcbiAgICAgdGhpcy5pbml0KCk7XG4gICB9XG4gXG4gICBpbml0KCkge1xuICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5jaGVja01lbnVQb3NpdGlvbi5iaW5kKHRoaXMpKTtcbiAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuY2hlY2tNZW51UG9zaXRpb24uYmluZCh0aGlzKSk7XG4gICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNjcm9sbFRvRWxlbWVudC5iaW5kKHRoaXMpKTtcbiAgIH1cbiBcbiAgIGNoZWNrTWVudVBvc2l0aW9uKCkge1xuICAgICBsZXQgdGFyZ2V0UG9zaXRpb24gPSB0aGlzLm1lbnVTY3JvbGxUYXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICB0YXJnZXRQb3NpdGlvblRvcCA9IHRhcmdldFBvc2l0aW9uLnRvcDtcbiBcbiAgICAgaWYgKHRhcmdldFBvc2l0aW9uVG9wIDwgMCkge1xuICAgICAgIHRoaXMubWVudVNjcm9sbC5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcbiAgICAgfSBlbHNlIHtcbiAgICAgICB0aGlzLm1lbnVTY3JvbGwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgIH1cbiAgIH1cbiBcbiAgIHNjcm9sbFRvRWxlbWVudChlKSB7XG4gICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcbiBcbiAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2pzLW1lbnUtbGluay1zY3JvbGwnKSkge1xuICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICBjb25zdCBNRU5VX0hFSUdIVCA9IDY1O1xuICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJykpLFxuICAgICAgICAgICB0YXJnZXRQb3NpdGlvbiA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgIHRhcmdldFBvc2l0aW9uVG9wID0gdGFyZ2V0UG9zaXRpb24udG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0IC0gTUVOVV9IRUlHSFQ7XG4gXG4gICAgICAgc2Nyb2xsVG8odGFyZ2V0UG9zaXRpb25Ub3AsIDEwMDApO1xuICAgICB9XG4gICB9XG4gfVxuIGNsYXNzIFNsaWRlVG9nZ2xlIHtcbiAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgdGhpcy5jb250ZW50ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignLmpzLXNsaWRlVG9nZ2xlLWNvbnRlbnQnKTtcbiAgICAgdGhpcy5idXR0b24gPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuanMtc2xpZGVUb2dnbGUtYnV0dG9uJyk7XG4gICAgIHRoaXMuV0lEVEhfTU9CSUxFID0gNzY3O1xuICAgICB0aGlzLmluaXQoKTtcbiAgIH1cbiBcbiAgIGluaXQoKSB7XG4gICAgIHRoaXMuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGVDb250ZW50LmJpbmQodGhpcykpO1xuICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5jaGVja1RvZ2dsZVBvc2l0aW9uLmJpbmQodGhpcykpO1xuICAgfVxuIFxuICAgdG9nZ2xlQ29udGVudChlKSB7XG4gICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgbGV0IGJ1dHRvbkNsYXNzTGlzdCA9IHRoaXMuYnV0dG9uLmNsYXNzTGlzdCxcbiAgICAgICAgIGNvbnRlbnRDbGFzc0xpc3QgPSB0aGlzLmNvbnRlbnQuY2xhc3NMaXN0O1xuIFxuICAgICBpZiAoYnV0dG9uQ2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1hY3RpdmUnKSkge1xuICAgICAgIGNvbnRlbnRDbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICAgICBidXR0b25DbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICAgICB0aGlzLmJ1dHRvbi50ZXh0Q29udGVudCA9ICfQv9C+0LrQsNC30LDRgtGMINCy0YHQtSc7XG4gICAgICAgc2xpZGVVcCh0aGlzLmNvbnRlbnQpO1xuICAgICB9IGVsc2Uge1xuICAgICAgIGNvbnRlbnRDbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcbiAgICAgICBidXR0b25DbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcbiAgICAgICB0aGlzLmJ1dHRvbi50ZXh0Q29udGVudCA9ICfRgdC60YDRi9GC0YwnO1xuICAgICAgIHNsaWRlRG93bih0aGlzLmNvbnRlbnQpO1xuICAgICB9XG4gICB9XG4gXG4gICBjaGVja1RvZ2dsZVBvc2l0aW9uKCkge1xuICAgICAvLyBjb25zb2xlLmxvZyh2aWV3cG9ydFNpemUuZ2V0V2lkdGgoKSk7XG4gICB9XG4gfVxuIGNsYXNzIFRvZ2dsZSB7XG4gICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgdGhpcy5pbml0KCk7XG4gICB9XG4gXG4gICBpbml0KCkge1xuICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGVTd2l0Y2guYmluZCh0aGlzKSk7XG4gICB9XG4gXG4gICB0b2dnbGVTd2l0Y2goZSkge1xuICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQsXG4gICAgICAgICB0YXJnZXRDbGFzc0xpc3QgPSB0YXJnZXQuY2xhc3NMaXN0O1xuIFxuICAgICBpZiAodGFyZ2V0Q2xhc3NMaXN0LmNvbnRhaW5zKCdqcy10b2dnbGUtbGluaycpKSB7XG4gICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgIGxldCBwYXJlbnQgPSB0YXJnZXQuY2xvc2VzdCgnLmpzLXRvZ2dsZS1jb250YWluZXInKSxcbiAgICAgICAgICAgY29udGVudCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCcuanMtdG9nZ2xlLWNvbnRlbnQnKSxcbiAgICAgICAgICAgY29udGVudENsYXNzTGlzdCA9IGNvbnRlbnQuY2xhc3NMaXN0O1xuIFxuICAgICAgIGlmICh0YXJnZXRDbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpKSB7XG4gICAgICAgICB0YXJnZXRDbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgIGNvbnRlbnRDbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gJzAnO1xuICAgICAgIH0gZWxzZSB7XG4gICAgICAgICB0YXJnZXRDbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgIGNvbnRlbnRDbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gJ25vbmUnO1xuICAgICAgIH1cbiAgICAgfVxuICAgfVxuIH1cbiBjbGFzcyBUb29sdGlwcyB7XG4gICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgdGhpcy50b29sdGlwQ29udGVudHMgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy10b29sdGlwLWNvbnRlbnQnKTtcbiAgICAgdGhpcy50b29sdGlwTGlua3MgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy10b29sdGlwLWxpbmsnKTtcbiAgICAgdGhpcy5pbml0KCk7XG4gICB9XG4gXG4gICBpbml0KCkge1xuICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGVUb29sdGlwLmJpbmQodGhpcykpO1xuICAgfVxuIFxuICAgdG9nZ2xlVG9vbHRpcChlKSB7XG4gICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcbiBcbiAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2pzLXRvb2x0aXAtbGluaycpKSB7XG4gICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgIGxldCBwYXJlbnQgPSB0YXJnZXQuY2xvc2VzdCgnLmpzLXRvb2x0aXAtY29udGFpbmVyJyksXG4gICAgICAgICAgIGNvbnRlbnQgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignLmpzLXRvb2x0aXAtY29udGVudCcpO1xuIFxuICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1hY3RpdmUnKSkge1xuICAgICAgICAgdGhpcy5jbGVhclRvb2x0aXBzKCk7XG4gICAgICAgfSBlbHNlIHtcbiAgICAgICAgIHRoaXMuY2xlYXJUb29sdGlwcygpO1xuICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcbiAgICAgICB9XG4gICAgIH0gZWxzZSB7XG4gICAgICAgdGhpcy5jbGVhclRvb2x0aXBzKCk7XG4gICAgIH1cbiAgIH1cbiBcbiAgIGNsZWFyVG9vbHRpcHMoKSB7XG4gICAgIGZvciAodmFyIGVsZW1lbnQgb2YgdGhpcy50b29sdGlwQ29udGVudHMpIHtcbiAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgICB9XG4gICAgIGZvciAodmFyIGVsZW1lbnQgb2YgdGhpcy50b29sdGlwTGlua3MpIHtcbiAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgICB9XG4gICB9XG4gfVxuIGNsYXNzIFZpZXdlciB7XG4gICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgdGhpcy5pbml0KCk7XG4gICB9XG4gXG4gICBpbml0KCkge1xuICAgICB0aGlzLmluaXRDbGFzc2VzKCk7XG4gICB9XG4gXG4gICBpbml0Q2xhc3NlcygpIHtcbiAgICAgZm9yICh2YXIgZWxlbWVudCBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtZHJvcGRvd24tY29udGFpbmVyJykpIHtcbiAgICAgICBuZXcgRHJvcGRvd24oZWxlbWVudCk7XG4gICAgIH1cbiBcbiAgICAgZm9yICh2YXIgZWxlbWVudCBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtbWVudS1jb250YWluZXInKSkge1xuICAgICAgIG5ldyBNZW51KGVsZW1lbnQpO1xuICAgICB9XG4gXG4gICAgIGZvciAodmFyIGVsZW1lbnQgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXNsaWRlVG9nZ2xlLWNvbnRhaW5lcicpKSB7XG4gICAgICAgbmV3IFNsaWRlVG9nZ2xlKGVsZW1lbnQpO1xuICAgICB9XG4gXG4gICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtdG9vbHRpcC1saW5rJykubGVuZ3RoKSB7XG4gICAgICAgbmV3IFRvb2x0aXBzKCk7XG4gICAgIH1cbiBcbiAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy10b2dnbGUtbGluaycpLmxlbmd0aCkge1xuICAgICAgIG5ldyBUb2dnbGUoKTtcbiAgICAgfVxuICAgfVxuIH1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgbmV3IFZpZXdlcigpO1xufSk7Il19
