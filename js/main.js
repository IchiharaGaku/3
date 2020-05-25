$(function () {
  $('a[href^="#"]').click.each(function () {
    var adjust = 0;
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top + adjust;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    $(".menu-content").removeClass("open");
    $("#hamburger").removeClass("active");
    return false;
  });

  var _window = $(window),
    _header = $("header"),
    eyecatchBottom;

  _window.on("scroll", function () {
    eyecatchBottom = $("#eyecatch").height();
    if (_window.scrollTop() > eyecatchBottom) {
      _header.addClass("transform");
    } else {
      _header.removeClass("transform");
    }
  });

  $("#top-btn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 700);
  });

  $(window).scroll(function () {
    $(".hair").show(function () {
      var txtPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scroll > txtPos - windowHeight + 200) {
        $(this).addClass("fadein");
      }
    });
  });

  $(window).scroll(function () {
    $(".sample").show(function () {
      var txtPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scroll > txtPos - windowHeight + 200) {
        $(this).addClass("bottomin");
      }
    });
  });
  $(window).scroll(function () {
    $(".sample").show(function () {
      var txtPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scroll > txtPos - windowHeight + 200) {
        $(this).addClass("bottomin");
      }
    });
  });
  $(window).scroll(function () {
    $(".style").show(function () {
      var txtPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scroll > txtPos - windowHeight + 200) {
        $(this).addClass("rightin");
      }
    });
  });
  $(window).scroll(function () {
    $(".produ").show(function () {
      var txtPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scroll > txtPos - windowHeight + 200) {
        $(this).addClass("produin");
      }
    });
  });

  if ($(window).innerWidth() >= 769) {
    $(window).scroll(function () {
      $(".sal").show(function () {
        var txtPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > txtPos - windowHeight + 200) {
          $(this).addClass("salin");
        }
      });
    });

    $(window).scroll(function () {
      $(".model1").show(function () {
        var txtPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > txtPos - windowHeight + 200) {
          $(this).addClass("model1in");
        }
      });
    });

    $(window).scroll(function () {
      $(".model2").show(function () {
        var txtPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > txtPos - windowHeight + 200) {
          $(this).addClass("model2in");
        }
      });
    });

    $(window).scroll(function () {
      $(".model3").show(function () {
        var txtPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > txtPos - windowHeight + 200) {
          $(this).addClass("model3in");
        }
      });
    });
  }
  $(window).scroll(function () {
    $(".articles").show(function () {
      var txtPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scroll > txtPos - windowHeight + 200) {
        $(this).addClass("artin");
      }
    });
  });

  $("#hamburger").click(function () {
    $(this).toggleClass("active");
    $(".menu-content").toggleClass("open");
  });
});
