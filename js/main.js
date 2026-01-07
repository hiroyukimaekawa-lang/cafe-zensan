// ページ読み込み時の処理
$(document).ready(function() {
  
  // モバイルメニューの開閉
  $('.menu_icon a').on('click', function(e) {
    e.preventDefault();
    $('.global_nav ul').toggleClass('active');
  });

  // スムーススクロール
  $('a[href^="#"]').on('click', function(e) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      e.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 80
      }, 1000);
      
      // モバイルメニューを閉じる
      if ($(window).width() <= 768) {
        $('.global_nav ul').removeClass('active');
      }
    }
  });

  // ページトップボタンの表示/非表示
  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      $('.pagetop').addClass('visible');
    } else {
      $('.pagetop').removeClass('visible');
    }
  });

  // ページトップボタンのクリック
  $('.pagetop a').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 800);
  });

  // ウィンドウリサイズ時の処理
  $(window).resize(function() {
    if ($(window).width() > 768) {
      $('.global_nav ul').removeClass('active');
    }
  });

  // スクロール時のヘッダー背景変更
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('header').addClass('scrolled');
    } else {
      $('header').removeClass('scrolled');
    }
  });

  // フェードインアニメーション
  function fadeInOnScroll() {
    $('.menu_item').each(function() {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();

      if (elementBottom > viewportTop && elementTop < viewportBottom) {
        $(this).addClass('fade-in');
      }
    });
  }

  $(window).on('scroll', fadeInOnScroll);
  fadeInOnScroll(); // 初期表示時にも実行

});

