/*!
 * scrollview.js
 * @copyright 2018 AJgarden
 * ##### Author: Jia #####
 * ##### Update: 2018/11/05 #####
 */

$.fn.scrollView = function(options) {

  var $selector = $(this);

  if (options === "destroy") {

    $selector.removeAttr('data-scroll-view');

  } else {

    $selector.attr('data-scroll-view','init');

    var defaults = {
      start: 'default', // 'default'(str), selector(str) or px(int)
      end: null,
      // null: until the bottom of page
      // selector(str): until the bottom of direct element
      // px(int): until the direct px
      // only avaliable with repeat be true
      threshold: -200,  // px(int)
      addClass: 'scroll-view', // (str)
      repeat: false, // true or false
      onInit: function(element) {
        return false;
      }, // callback(function) when element is initialized
      onChange: function(element) {
        return false;
      }, // callback(function) when change status everytime
      onAddClass: function(element) {
        return false;
      }, // callback(function) after class added everytime
      onRemoveClass: function(element) {
        return false;
      } // callback(function) after class removed everytime
    };
    var settings = $.extend({}, defaults, options);

    $selector.each(function(i,element) {
      var $this = $(element);
      settings.onInit.call(this,$this);
    });

    $(window).on('scroll', function() {

      var scrollTop = $(window).scrollTop();

      $selector.each(function(i,element) {

        if ($selector.attr('data-scroll-view') === "init") {

          var $this = $(element);
          if ($this.hasClass('scroll-view') == false) {
            if (settings.start === "default")
              var pos = $this.offset().top - $(window).height();
            else if (typeof(settings.start) === "string")
              var pos = $(settings.start).offset().top - $(window).height();
            else
              var pos = settings.start;
            if (settings.repeat == true) {
              if (settings.end != null) {
                if (typeof(settings.end) === "string")
                  var posE = $(settings.end).offset().top + $(settings.end).outerHeight() - $(window).height();
                else
                  var posE = settings.end;
                if ((scrollTop + settings.threshold) >= pos && (scrollTop + settings.threshold) <= posE) {
                  if (typeof(settings.onChange) === "function" && typeof(settings.onAddClass) === "function") {
                    $this.addClass(settings.addClass);
                    settings.onAddClass.call(this,$this);
                    settings.onChange.call(this,$this);
                  } else if (typeof(settings.onChange) === "function") {
                    $this.addClass(settings.addClass);
                    settings.onChange.call(this,$this);
                  } else if (typeof(settings.onAddClass) === "function") {
                    $this.addClass(settings.addClass);
                    settings.onAddClass.call(this,$this);
                  } else {
                    $this.addClass(settings.addClass);
                  }
                }
              } else {
                if ((scrollTop + settings.threshold) >= pos) {
                  if (typeof(settings.onChange) === "function" && typeof(settings.onAddClass) === "function") {
                    $this.addClass(settings.addClass);
                    settings.onAddClass.call(this,$this);
                    settings.onChange.call(this,$this);
                  } else if (typeof(settings.onChange) === "function") {
                    $this.addClass(settings.addClass);
                    settings.onChange.call(this,$this);
                  } else if (typeof(settings.onAddClass) === "function") {
                    $this.addClass(settings.addClass);
                    settings.onAddClass.call(this,$this);
                  } else {
                    $this.addClass(settings.addClass);
                  }
                }
              }
            } else {
              if ((scrollTop + settings.threshold) >= pos) {
                if (typeof(settings.onChange) === "function" && typeof(settings.onAddClass) === "function") {
                  $this.addClass(settings.addClass);
                  settings.onAddClass.call(this,$this);
                  settings.onChange.call(this,$this);
                } else if (typeof(settings.onChange) === "function") {
                  $this.addClass(settings.addClass);
                  settings.onChange.call(this,$this);
                } else if (typeof(settings.onAddClass) === "function") {
                  $this.addClass(settings.addClass);
                  settings.onAddClass.call(this,$this);
                } else {
                  $this.addClass(settings.addClass);
                }
              }
            }
          } else {
            if (settings.repeat == true) {
              if (settings.start === "default")
                var pos = $this.offset().top - $(window).height();
              else if (typeof(settings.start) === "string")
                var pos = $(settings.start).offset().top - $(window).height();
              else
                var pos = settings.start;
              if (settings.end != null) {
                if (typeof(settings.end) === "string")
                  var posE = $(settings.end).offset().top + $(settings.end).outerHeight() - $(window).height();
                else
                  var posE = settings.end;
                if ((scrollTop + settings.threshold) < pos || (scrollTop + settings.threshold) > posE) {
                  if (typeof(settings.onChange) === "function" && typeof(settings.onRemoveClass) === "function") {
                    $this.removeClass(settings.addClass);
                    settings.onRemoveClass.call(this,$this);
                    settings.onChange.call(this,$this);
                  } else if (typeof(settings.onChange) === "function") {
                    $this.removeClass(settings.addClass);
                    settings.onChange.call(this,$this);
                  } else if (typeof(settings.onRemoveClass) === "function") {
                    $this.removeClass(settings.addClass);
                    settings.onRemoveClass.call(this,$this);
                  } else {
                    $this.removeClass(settings.addClass);
                  }
                }
              } else {
                if ((scrollTop + settings.threshold) < pos) {
                  if (typeof(settings.onChange) === "function" && typeof(settings.onRemoveClass) === "function") {
                    $this.removeClass(settings.addClass);
                    settings.onRemoveClass.call(this,$this);
                    settings.onChange.call(this,$this);
                  } else if (typeof(settings.onChange) === "function") {
                    $this.removeClass(settings.addClass);
                    settings.onChange.call(this,$this);
                  } else if (typeof(settings.onRemoveClass) === "function") {
                    $this.removeClass(settings.addClass);
                    settings.onRemoveClass.call(this,$this);
                  } else {
                    $this.removeClass(settings.addClass);
                  }
                }
              }
            }
          }

        }
      });
    }).trigger('scroll');

    $(window).on('resize', function() {
      $(this).trigger('scroll');
    });

  }
}