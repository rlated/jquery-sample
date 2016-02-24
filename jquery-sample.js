/**
 * jQueryプラグインのサンプル
 * https://github.com/rlated/jquery-sample
 * MIT License
 *
 * Usage:
 * $('#target').sample();
 * $('#target').sample({duration: 1000});
 */
(function($){
  $.fn.sample = function(options){
    var settings = $.extend({ duration: 1000 }, options);

    var a = $(this).children().map(function(i, e){ return $(e); })

    $(this).html(a.get(0));
    var o = { this: $(this), i: 0 };

    setInterval(function(){
      if(++o.i == a.length) o.i = 0;
      o.this.html(a.get(o.i));
    }, settings['duration']);
  };
})(jQuery);
