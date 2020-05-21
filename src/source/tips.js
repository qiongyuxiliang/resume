// 
function render(template, context) {

    var tokenReg = /(\\)?\{([^\{\}\\]+)(\\)?\}/g;

    return template.replace(tokenReg, function (word, slash1, token, slash2) {
        if (slash1 || slash2) {  
            return word.replace('\\', '');
        }

        var variables = token.replace(/\s/g, '').split('.');
        var currentObject = context;
        var i, length, variable;

        for (i = 0, length = variables.length; i < length; ++i) {
            variable = variables[i];
            currentObject = currentObject[variable];
            if (currentObject === undefined || currentObject === null) return '';
        }
        return currentObject;
    });
}
String.prototype.render = function (context) {
    return render(this, context);
};

var re = /x/;
console.log(re);
re.toString = function() {
    showMessage('哈哈，你打开了控制台，是想要看看我的秘密吗？', 5000);
    return '';
};

$(document).on('copy', function (){
    showMessage('你都复制了些什么呀，转载要记得加上出处哦', 5000);
});
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
var isPc = IsPC();
$.ajax({
    cache: false,
    url: "../source/tips.json",
    dataType: "json",
    success: function (result){
        if(isPc){
            $.each(result.mouseover, function (index, tips){
                $(document).on("mouseover", tips.selector, function (){
                    console.log(tips.selector)
                    var text = tips.text;
                    if(Array.isArray(tips.text)) text = tips.text[Math.floor(Math.random() * tips.text.length + 1)-1];
                    text = text.render({text: $(this).text()});
                    showMessage(text, 2000);
                });
            });
         
        }
        $.each(result.click, function (index, tips){
            $(document).on("touchend", tips.selector, function (){
                var text = tips.text;
                if(Array.isArray(tips.text)) text = tips.text[Math.floor(Math.random() * tips.text.length + 1)-1];
                text = text.render({text: $(this).text()});
                showMessage(text, 2000);
            });
        });
      
    }
});

(function (){
    var text;
    if(document.referrer !== ''){
        var referrer = document.createElement('a');
        referrer.href = document.referrer;
        text = 'Hello! 来自 <span style="color:#0099cc;">' + referrer.hostname + '</span> 的朋友';
        var domain = referrer.hostname.split('.')[1];
        if (domain == 'baidu') {
            text = 'Hello! 来自 百度搜索 的朋友<br>你是搜索 <span style="color:#0099cc;">' + referrer.search.split('&wd=')[1].split('&')[0] + '</span> 找到的我吗？';
        }else if (domain == 'so') {
            text = 'Hello! 来自 360搜索 的朋友<br>你是搜索 <span style="color:#0099cc;">' + referrer.search.split('&q=')[1].split('&')[0] + '</span> 找到的我吗？';
        }else if (domain == 'google') {
            text = 'Hello! 来自 谷歌搜索 的朋友<br>欢迎阅读<span style="color:#0099cc;">『' + document.title.split(' - ')[0] + '』</span>';
        }
    }else {
        if (window.location.href == 'https://zhang-zc.cn/') { //如果是主页
            var now = (new Date()).getHours();
            if (now > 23 || now <= 5) {
                text = '你是夜猫子呀？这么晚还不睡觉，明天起的来嘛';
            } else if (now > 5 && now <= 7) {
                text = '早上好！一日之计在于晨，美好的一天就要开始了';
            } else if (now > 7 && now <= 11) {
                text = '上午好！工作顺利嘛，不要久坐，多起来走动走动哦！';
            } else if (now > 11 && now <= 14) {
                text = '中午了，工作了一个上午，现在是午餐时间！';
            } else if (now > 14 && now <= 17) {
                text = '午后很容易犯困呢，今天的运动目标完成了吗？';
            } else if (now > 17 && now <= 19) {
                text = '傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红~';
            } else if (now > 19 && now <= 21) {
                text = '晚上好，今天过得怎么样？';
            } else if (now > 21 && now <= 23) {
                text = '已经这么晚了呀，早点休息吧，晚安~';
            } else {
                text = '嗨~ 快来逗我玩吧！';
            }
        }else {
            text = '欢迎， 来看主人的简历！</span>';
        }
    }
    showMessage(text, 6000);
})();



function showMessage(text, timeout){
    if(Array.isArray(text)) text = text[Math.floor(Math.random() * text.length + 1)-1];
      console.log('showMessage', text);
      $('#message').stop();
      $('#message').html(text).fadeTo(200, 1);
      if (timeout === null) timeout = 5000;
      hideMessage(timeout);
}
function hideMessage(timeout){
    $('#message').stop().css('opacity',1);
    if (timeout === null) timeout = 5000;
    $('#message').delay(timeout).fadeTo(200, 0);
}
function initLive2d (){
    $('.hide-button').fadeOut(0).on('click', () => {
        $('#landlord').css('display', 'none')
    })
    $('#landlord').hover(() => {
        $('.hide-button').fadeIn(600)
    }, () => {
        $('.hide-button').fadeOut(600)
    })
}
function initLive2dPhone(){
    $('.hide-button').fadeOut(0).on('touchend', () => {
        $('#landlord').css('display', 'none')
    })
    $('#landlord').on('touchstart',() => {
        $('.hide-button').fadeIn(600)
    })
    $('#landlord').on('touchend',() => {
        $('.hide-button').fadeOut(600)
    })
}
if(isPc){
    initLive2d ();
}else{
    initLive2dPhone();
}
/* 订阅发布模式 */
var EventMd = (function(){
    var global = this,
        EventMd,
        _default = 'default';
    EventMd = function(){
        var _listen,
            _trigger,
            _remove,
            _slice = Array.prototype.slice,
            _shift = Array.prototype.shift,
            _unshift = Array.prototype.unshift,
            namespaceCache = {},
            _create,
            find,
            each = function( ary, fn ){
                var ret;
                for ( var i = 0, l = ary.length; i < l; i++ ){
                    var n = ary[i];
                    ret = fn.call( n, i, n);
                }
                return ret;
            };
        _listen = function( key, fn, cache ){
            if ( !cache[ key ] ){
                cache[ key ] = [];
            }
            cache[key].push( fn );
        };
        _remove = function( key, cache ,fn){
            if ( cache[ key ] ){
                if( fn ){
                    for( var i = cache[ key ].length; i >= 0; i-- ){
                        if( cache[ key ] === fn ){
                            cache[ key ].splice( i, 1 );
                        }
                    }
                }else{
                    cache[ key ] = [];
                }
            }
        };
        _trigger = function(){
            var cache = _shift.call(arguments),
                key = _shift.call(arguments),
                args = arguments,
                _self = this,
                ret,
                stack = cache[ key ];
            if ( !stack || !stack.length ){
                return;
            }
            return each( stack, function(){
                return this.apply( _self, args );
            });
        };
        _create = function( namespace ){
            var namespace = namespace || _default;
            var cache = {},
                offlineStack = [], // 离线事件
                ret = {
                    listen: function( key, fn, last ){
                        _listen( key, fn, cache );
                        if ( offlineStack === null ){
                            return;
                        }
                        if ( last === 'last' ){
                        }else{
                            each( offlineStack, function(){
                                this();
                            });
                        }
                        offlineStack = null;
                    },
                    one: function( key, fn, last ){
                        _remove( key, cache );
                        this.listen( key, fn ,last );
                    },
                    remove: function( key, fn ){
                        _remove( key, cache ,fn);
                    },
                    trigger: function(){
                        var fn,
                            args,
                            _self = this;
                        _unshift.call( arguments, cache );
                        args = arguments;
                        fn = function(){
                            return _trigger.apply( _self, args );
                        };
                        if ( offlineStack ){
                            return offlineStack.push( fn );
                        }
                        return fn();
                    }
                };
            return namespace ?
                ( namespaceCache[ namespace ] ? namespaceCache[ namespace ] :
                    namespaceCache[ namespace ] = ret )
                : ret;
        };
        return {
            create: _create,
            one: function( key,fn, last ){
                var event = this.create( );
                event.one( key,fn,last );
            },
            remove: function( key,fn ){
                var event = this.create( );
                event.remove( key,fn );
            },
            listen: function( key, fn, last ){
                var event = this.create( );
                event.listen( key, fn, last );
            },
            trigger: function(){
                var event = this.create( );
                event.trigger.apply( this, arguments );
            }
        };
    }();
    return EventMd;
})();
var eventEmType = {
    EM_TYPE_CANVAS_LOAD:"CANVAS_LOAD",     //动画播放结束
    EM_TYPE_CANVAS_FIRST_LOAD:"Canvas_load_first" //座驾动画结束
};
window.EventMd = EventMd;
window.eventEmType = eventEmType;
window.EventMd.create(eventEmType.EM_TYPE_CANVAS_LOAD).listen(eventEmType.EM_TYPE_CANVAS_FIRST_LOAD, function (messageJson) {
    $(".cont").show();
});

