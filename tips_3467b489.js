!function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=2)}({2:function(t,n){function e(t,n){var e=/(\\)?\{([^\{\}\\]+)(\\)?\}/g;return t.replace(e,function(t,e,r,o){if(e||o)return t.replace("\\","");var i,a,c,u=r.replace(/\s/g,"").split("."),l=n;for(i=0,a=u.length;i<a;++i)if(c=u[i],void 0===(l=l[c])||null===l)return"";return l})}function r(t,n){Array.isArray(t)&&(t=t[Math.floor(Math.random()*t.length+1)-1]),$("#message").stop(),$("#message").html(t).fadeTo(200,1),null===n&&(n=5e3),o(n)}function o(t){$("#message").stop().css("opacity",1),null===t&&(t=5e3),$("#message").delay(t).fadeTo(200,0)}String.prototype.render=function(t){return e(this,t)};var i=/x/;i.toString=function(){return r("哈哈，你打开了控制台，是想要看看我的秘密吗？",5e3),""},$(document).on("copy",function(){r("你都复制了些什么呀，转载要记得加上出处哦",5e3)});var a=function(){for(var t=navigator.userAgent,n=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],e=!0,r=0;r<n.length;r++)if(t.indexOf(n[r])>0){e=!1;break}return e}();$.ajax({cache:!1,url:"../source/tips.json",dataType:"json",success:function(t){a?($.each(t.mouseover,function(t,n){$(document).on("mouseover",n.selector,function(){var t=n.text;Array.isArray(n.text)&&(t=n.text[Math.floor(Math.random()*n.text.length+1)-1]),t=t.render({text:$(this).text()}),r(t,2e3)})}),$.each(t.click,function(t,n){$(document).on("click",n.selector,function(){var t=n.text;Array.isArray(n.text)&&(t=n.text[Math.floor(Math.random()*n.text.length+1)-1]),t=t.render({text:$(this).text()}),r(t,2e3)})})):$.each(t.mouseover,function(t,n){$(document).on("touchend",n.selector,function(){var t=n.text;Array.isArray(n.text)&&(t=n.text[Math.floor(Math.random()*n.text.length+1)-1]),t=t.render({text:$(this).text()}),r(t,2e3)})})}}),function(){var t;if(""!==document.referrer){var n=document.createElement("a");n.href=document.referrer,t='Hello! 来自 <span style="color:#0099cc;">'+n.hostname+"</span> 的朋友";var e=n.hostname.split(".")[1];"baidu"==e?t='Hello! 来自 百度搜索 的朋友<br>你是搜索 <span style="color:#0099cc;">'+n.search.split("&wd=")[1].split("&")[0]+"</span> 找到的我吗？":"so"==e?t='Hello! 来自 360搜索 的朋友<br>你是搜索 <span style="color:#0099cc;">'+n.search.split("&q=")[1].split("&")[0]+"</span> 找到的我吗？":"google"==e&&(t='Hello! 来自 谷歌搜索 的朋友<br>欢迎阅读<span style="color:#0099cc;">『'+document.title.split(" - ")[0]+"』</span>")}else if("https://zhang-zc.cn/"==window.location.href){var o=(new Date).getHours();t=o>23||o<=5?"你是夜猫子呀？这么晚还不睡觉，明天起的来嘛":o>5&&o<=7?"早上好！一日之计在于晨，美好的一天就要开始了":o>7&&o<=11?"上午好！工作顺利嘛，不要久坐，多起来走动走动哦！":o>11&&o<=14?"中午了，工作了一个上午，现在是午餐时间！":o>14&&o<=17?"午后很容易犯困呢，今天的运动目标完成了吗？":o>17&&o<=19?"傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红~":o>19&&o<=21?"晚上好，今天过得怎么样？":o>21&&o<=23?"已经这么晚了呀，早点休息吧，晚安~":"嗨~ 快来逗我玩吧！"}else t="欢迎， 来看主人的简历！</span>";r(t,6e3)}(),a?function(){$(".hide-button").fadeOut(0).on("click",function(){$("#landlord").css("display","none")}),$("#landlord").hover(function(){$(".hide-button").fadeIn(600)},function(){$(".hide-button").fadeOut(600)})}():function(){$(".hide-button").fadeOut(0).on("touchend",function(){$("#landlord").css("display","none")}),$("#landlord").on("touchstart",function(){$(".hide-button").fadeIn(1e3)}),$("#landlord").on("touchend",function(){$(".hide-button").fadeOut(1e3)})}();var c=function(){return function(){var t,n,e,r,o=(Array.prototype.slice,Array.prototype.shift),i=Array.prototype.unshift,a={},c=function(t,n){for(var e,r=0,o=t.length;r<o;r++){var i=t[r];e=n.call(i,r,i)}return e};return t=function(t,n,e){e[t]||(e[t]=[]),e[t].push(n)},e=function(t,n,e){if(n[t])if(e)for(var r=n[t].length;r>=0;r--)n[t]===e&&n[t].splice(r,1);else n[t]=[]},n=function(){var t=o.call(arguments),n=o.call(arguments),e=arguments,r=this,i=t[n];if(i&&i.length)return c(i,function(){return this.apply(r,e)})},r=function(r){var r=r||"default",o={},u=[],l={listen:function(n,e,r){t(n,e,o),null!==u&&("last"===r||c(u,function(){this()}),u=null)},one:function(t,n,r){e(t,o),this.listen(t,n,r)},remove:function(t,n){e(t,o,n)},trigger:function(){var t,e,r=this;return i.call(arguments,o),e=arguments,t=function(){return n.apply(r,e)},u?u.push(t):t()}};return r?a[r]?a[r]:a[r]=l:l},{create:r,one:function(t,n,e){this.create().one(t,n,e)},remove:function(t,n){this.create().remove(t,n)},listen:function(t,n,e){this.create().listen(t,n,e)},trigger:function(){this.create().trigger.apply(this,arguments)}}}()}(),u={EM_TYPE_CANVAS_LOAD:"CANVAS_LOAD",EM_TYPE_CANVAS_FIRST_LOAD:"Canvas_load_first"};window.EventMd=c,window.eventEmType=u,window.EventMd.create(u.EM_TYPE_CANVAS_LOAD).listen(u.EM_TYPE_CANVAS_FIRST_LOAD,function(t){$(".cont").show()})}});