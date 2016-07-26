// to keep iframe height equal to iframe's content
iFrameResize({
  checkOrigin: false
});

$(function() {

  var showNotLeaveModal = true;

  $('.accordion.mobile-workaround-accordion').accordion({
    onOpen: function() {
      showNotLeaveModal = false;
    }
  })
  $('.popup').popup();
  
  $('#iframeExampleBefore').on('click', function(e) {
    e.preventDefault();
    $('#iframeExampleModalBefore').modal('show');
  });

  $('#iframeExampleTo').on('click', function(e) {
    e.preventDefault();
    $('#iframeExampleModalTo').modal('show');
  })

  var iframeWindow = document.getElementById('iframe').contentWindow;

  $('#toggleGap').checkbox({
    onChange: function() {
      var state = $(this).is(':checked');
      iframeWindow.layersManager.toggleGap(state);
    }
  });

  $('#toggleMissed').checkbox({
    onChange: function() {
      var state = $(this).is(':checked');
      iframeWindow.layersManager.toggleMissed(state);
    }
  });

  $('#toggleBackground').checkbox({
    onChange: function() {
      var state = +$(this).is(':checked');
      iframeWindow.layersManager.toggleBackground(state);
    }
  });

  var showTada = true;
  var $tada = $('#openDescriptionTadaEffect');
  var $dimmer = $('.ui.dimmer');
  $dimmer.dimmer({
    onHide: function() {
      showTada = false;
    }
  }).dimmer('show');
  // workaround for some mobile phones
  $dimmer.on('tap', function() {
    $dimmer.dimmer('hide');
  });

  function toggleTada() {
    if( ! showTada) return;
    $tada.addClass('tada animated infinite');
    setTimeout(function() {
      $tada.removeClass('tada animated infinite');
      setTimeout(toggleTada, 3000);
    }, 980);
  }
  toggleTada();

  function whereAreYouGoing() {
    if( ! showNotLeaveModal) return;
    $('#readHowItWorksModal').modal('show').modal({
      onApprove: function() {
        $("html, body").animate({ scrollTop: $('#howItWorks').offset().top - 10 }, 450);
      }
    });
  }

  glio.init(
    [ 'top', whereAreYouGoing],
    [ 'top-left', whereAreYouGoing],
    [ 'top-right', whereAreYouGoing]
  )

  function fillTweets(amount) {
    var userLang = (navigator.language || navigator.userLanguage).toLowerCase(),
    tweets = shuffle([
      {lang: 'en', used: false, markup: '<blockquote class="twitter-tweet" data-cards="hidden" data-lang="en"><p lang="en" dir="ltr">I’m confused by this. It’s like… you can do this with background-position: fixed, now download a library to do it? <a href="https://t.co/a2uYyEW4hw">https://t.co/a2uYyEW4hw</a></p>&mdash; Chris Coyier (@chriscoyier) <a href="https://twitter.com/chriscoyier/status/720086706595041280">April 13, 2016</a></blockquote>'},
      {lang: 'en', used: false, markup: '<blockquote class="twitter-tweet" data-cards="hidden" data-lang="en"><p lang="en" dir="ltr">Multiple.js: Sharing A Background Over Multiple Elements - <a href="https://t.co/VSFVuixW4b">https://t.co/VSFVuixW4b</a></p>&mdash; Front-End Daily (@FrontEndDaily) <a href="https://twitter.com/FrontEndDaily/status/723106333847871488">April 21, 2016</a></blockquote>'},
      {lang: 'en', used: false, markup: '<blockquote class="twitter-tweet" data-cards="hidden" data-lang="en"><p lang="en" dir="ltr">Multiple.js - An experiment in sharing background across multiple elements using CSS  <a href="https://t.co/6ELUU28NDd">https://t.co/6ELUU28NDd</a> <a href="https://t.co/1iJf53a0Wu">pic.twitter.com/1iJf53a0Wu</a></p>&mdash; Speckyboy (@speckyboy) <a href="https://twitter.com/speckyboy/status/723558352320663552">April 22, 2016</a></blockquote>'},
      {lang: 'ja', used: false, markup: '<blockquote class="twitter-tweet" data-cards="hidden" data-lang="en"><p lang="ja" dir="ltr">こんなに美しいレイアウトがシンプルなHTMLで簡単に実装できるスクリプト -Multiple.js<a href="https://t.co/SMhrHt6ohi">https://t.co/SMhrHt6ohi</a> <a href="https://t.co/MFvmJivLTI">pic.twitter.com/MFvmJivLTI</a></p>&mdash; コリス (@colisscom) <a href="https://twitter.com/colisscom/status/745416189686382593">June 22, 2016</a></blockquote>'},
      {lang: 'ja', used: false, markup: '<blockquote class="twitter-tweet" data-cards="hidden" data-lang="en"><p lang="ja" dir="ltr">こんなに美しいレイアウトがシンプルなHTMLで簡単に実装できるスクリプト -Multiple.js | コリス <a href="https://t.co/90vxZs0J67">https://t.co/90vxZs0J67</a></p>&mdash; webデザインあんてな (@webdesignsokuho) <a href="https://twitter.com/webdesignsokuho/status/745475852402450432">June 22, 2016</a></blockquote>'},
      {lang: 'ja', used: false, markup: '<blockquote class="twitter-tweet" data-cards="hidden" data-lang="en"><p lang="ja" dir="ltr">こんなに美しいレイアウトがシンプルなHTMLで簡単に実装できるスクリプト -Multiple.js | コリス <a href="https://t.co/HzBjZTeYhw">https://t.co/HzBjZTeYhw</a></p>&mdash; WEBデザイナー、クリエイターの情報源 (@design_manabu) <a href="https://twitter.com/design_manabu/status/745484492790345728">June 22, 2016</a></blockquote>'},
      {lang: 'ja', used: false, markup: '<blockquote class="twitter-tweet" data-cards="hidden" data-lang="en"><p lang="ja" dir="ltr">こんなに美しいレイアウトがシンプルなHTMLで簡単に実装できるスクリプト「Multiple.js」 (コリス)<a href="https://t.co/XuRceZh9dl">https://t.co/XuRceZh9dl</a></p>&mdash; dotHTML5 (@dotHTML5) <a href="https://twitter.com/dotHTML5/status/746308200920715264">June 24, 2016</a></blockquote>'},
      {lang: 'en', used: false, markup: '<blockquote class="twitter-tweet" data-cards="hidden" data-lang="en"><p lang="en" dir="ltr">Multiple.js : Sharing background across Multiple Elements<a href="https://t.co/Lo6niTz43M">https://t.co/Lo6niTz43M</a> <a href="https://twitter.com/hashtag/javascript?src=hash">#javascript</a> <a href="https://t.co/R4a4ziwUNJ">pic.twitter.com/R4a4ziwUNJ</a></p>&mdash; jQuery Rain (@jquery_rain) <a href="https://twitter.com/jquery_rain/status/757210009457471488">July 24, 2016</a></blockquote>'},
      {lang: 'en', used: false, markup: '<blockquote class="twitter-tweet" data-cards="hidden" data-lang="en"><p lang="en" dir="ltr">My thoughts about Multiple.js on <a href="https://twitter.com/whodidthisio">@whodidthisio</a> - Wow! For the first time in my life I have read... <a href="https://t.co/26g74jgeFn">https://t.co/26g74jgeFn</a></p>&mdash; Nedim Arabacı (@needim) <a href="https://twitter.com/needim/status/757799804235755520">July 26, 2016</a></blockquote>'}
    ]),
    result = [];

    for(var i = 0, ii = tweets.length, item; i < ii; i++) {
      item = tweets[i]
      if(item.lang != 'en' && item.lang == userLang && Math.round(Math.random())) {
        item.used = true;
        result.push(item.markup)
      }
    }

    while(result.length < amount) {
      var item = tweets[numRange(0, tweets.length - 1)]
      if(item.used) continue;
      item.used = true;
      result.push(item.markup)
    }

    for(var i = 0; i < result.length; i++) {
      result[i] = '<div class="column">' + result[i] + '</div>';
    }

    $('#tweets').html(result.join(''));

    $(window).on('scroll.tweets', function() {
      if($(window).scrollTop() + window.innerHeight > $(document).height() / 2) {
        $('body').append('<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>');
        $(window).off('scroll.tweets');
      }
    });
  }

  fillTweets(3);

  /**
   * Utils
   */

  function numRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
});
