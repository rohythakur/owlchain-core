/*************************
trust.js
*************************/
(function ($) {
    /*setup*/
    var _setup = function () {

    };
    /*trust-contract*/
    var _bind = function () {
        function setDisplay(cls) { 
            //  console.log('cls: '+cls);
            _section.hide();
            _section.siblings('.' + cls).show();
            _menu.val(cls);
            var _t = _section.siblings('.' + cls);
            if (cls == "s2") { 
                setTimeout(function () {
                    _t.find('.list').addClass('on');
                }, 2000);
            } else {
            }
            //$("#selectBox option:eq(2)").attr("selected", "selected");
        }
        var _menu = $('header select');
        var _artivle
        var _section = $('article.wrap > section');
        var _link = $('a.link');

        _menu.bind('change', function (event) {
            var _val = $(this).val();
            setDisplay(_val);
        });
        /*공통UI*/
        _link.bind('click', function (event) {
            var _val = $(this).attr('data-val');
            setDisplay(_val);
        });
        /**/
        $('.popup-link').bind('click', function (event) {
            var _popup = $('.s1 .popup');
            _popup.addClass('on');
        });
        /*init*/
        var _cls = $('section.on').attr('class').split('on')[0].replace(/\s+/g, '');
        setDisplay(_cls);
    }
    /*ADD_ACCOUNT
     */
    $(document).ready(function () {
        _bind();
    });
})($);