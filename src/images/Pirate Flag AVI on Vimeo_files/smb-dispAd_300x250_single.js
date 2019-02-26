(function() {
  'use strict';

  // *
  // Constants
  // *
  var assetBaseUrl = '//saambaa.com/widget/gpt/300x250',
    gaPropertyId = 'UA-55160257-3',
    apiBaseUrl = '//api.saambaa.com',
    siteBaseUrl = '//saambaa.com/site/full/#/',
    blankImageUrl = '//saambaa.com/assets/image/blank.png',
    noFillLineItemId = 4783204548,
    widgetStyle = '300x250',
    widgetClass = 'smb-dispad_300x250_single',
    widgetHeaderContClass = 'smb-dispad-header-cont',
    widgetHeaderClass = 'smb-dispad-header',
    widgetHeaderId = 'smb-dispad-header-text',
    widgetHeaderSuggestClass = 'smb-dispad-header-suggest',
    widgetContBackdrop = 'smb-dispad-adcont-backdrop',
    WidgetContBackdropLogo = 'smb-dispad-adcont-backdrop-logo',
    WidgetContBackdropText = 'smb-dispad-adcont-backdrop-text',
    widgetVideoContClass = 'smb-dispad-vidcont',
    widgetDisplayAdContClass = 'smb-dispad-displayad-cont',
    widgetMainCont = 'smb-dispad-main-cont',
    widgetSlideContClass = 'smb-dispad-slideshow-cont',
    widgetLoaderClass = 'smb-dispad-loader',
    widgetItemContId = 'smb-dispad-item-contid',
    widgetItemContClass = 'smb-dispad-item-cont',
    widgetFooterContClass = 'smb-dispad-footer-cont',
    widgetFooterTextId = 'smb-dispad-footer-text',
    widgetItemClass = 'smb-dispad-item',
    widgetItemCaptionContClass = 'smb-dispad-img-caption-cont',
    widgetItemCaptionClass = 'smb-dispad-img-caption',
    widgetItemTitleClass = 'smb-dispad-img-caption-title',
    widgetItemDetailClass = 'smb-dispad-img-caption-detail',
    widgetMarketClass = 'smb-dispad-markets',
    widgetMarketSelectContClass = 'custom-select',
    widgetMarketSelectClass = 'smb-dispad-markets-select',
    widgetItemClickMoreClass = 'smb-dispad-img-caption-clickmore',
    slideInUpClass = 'slideInUp',
    slideInLeftClass = 'slideInLeft',
    fadeInClass = 'fadeIn',
    staticCaptionClass = 'staticCaption',
    fontStyleId = 'smb-fonts',
    widgetStyleId = 'smb-dispad-style',
    widgetSelecStyleId = 'smb-dispad-select-style',
    scrollArrowClass = 'scroll-arrow',
    widgetAniStyleId = 'smb-dispad-animation-style',
    jsonLibId = 'smb-json',
    dateLibId = 'smb-date',
    jwLibId = 'smb-jw',
    cbConfigName = 'smb-cfg',
    eqcssLibId = 'smb-eq',
    googTagLibId = 'smb-googtag',
    smbPrebid = 'smb-prebid',
    videoCallback = '__smbOnAdUnitDone',
    delayedPrebids = [],
    lkqdVPAID,
    vpaidFrame,
    testCase = false;

  var _smbDisplayAdHeight = 250,
    _smbDisplayAdWidth = 300;

  var _lkqdPlayerId = new Date().getTime().toString() + Math.round(Math.random() * 1000000000).toString(),
    previousWinningBids = [],
    previousBids = [],
    _videoCount = 0;


  var cLog = function(msg) {
    if (widgetConfig.traceLevel > 4) {
      console.log(msg);
    }
  };

  // Browser check
  var _isMobileDevice = function() {
    var check = false;
    (function(a) {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
        check = true
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  };

  // $
  // DOM builder
  // $
  var el = {
    getById: function(id) {
      return document.getElementById(id);
    },

    getByTag: function(tag) {
      return document.getElementsByTagName(tag);
    },

    getByClassName: function(elm, cls) {
      return elm.getElementsByClassName(cls);
    },

    create: function(tag, props) {
      var elm = document.createElement(tag);

      for (var prop in props) {
        elm[prop] = props[prop];
      }

      return elm;
    },

    addEvent: function(elm, e, handler) {
      elm.addEventListener(e, handler, false);
    }
  };

  //$ Dynamically add stylesheets to page
  var stylesLoader = function(styles) {

    for (var i = 0; i < styles.length; i++) {
      var style = styles[i],
        styleTag = el.getById(style.id);

      if (styleTag)
        continue;

      // set additional properties
      style.type = 'text/css';
      style.rel = 'stylesheet';
      styleTag = el.create('link', style);
      (document.head || el.getByTag('head')[0]).appendChild(styleTag);
    }
  };

  //$ Dynamically adds script to page
  var scriptsLoader = function(scripts, cb) {
    var scriptsLoaded = 0;

    var onLoadedScripts = function() {
      scriptsLoaded++;

      if (scriptsLoaded !== scripts.length)
        return;

      if (cb)
        cb();
    };

    for (var i = 0; i < scripts.length; i++) {
      var script = scripts[i],
        scriptTag = el.getById(script.id);
      if (scriptTag)
        continue;

      // add additional properties
      script.type = 'text/javascript';
      script.async = true;

      scriptTag = el.create('script', script);
      scriptTag.onreadystatechange = scriptTag.onload = function() {
        var state = scriptTag.readyState;

        if (!state || /loaded|complete/.test(state))
          onLoadedScripts();
      };

      (document.head || el.getByTag('head')[0]).appendChild(scriptTag);
    }
  };

  var clearTimer = function(_timer) {
    if (_timer)
      clearTimeout(_timer);
    _timer = null;
  };

  // AJAX JSON Request
  var _execJsonReq = function(action, uri, cb) {
    var xhr = new XMLHttpRequest();
    xhr.open(action, uri);
    xhr.onload = function() {
      var response = JSON.parse(xhr.responseText);
      if (cb)
        cb(response.Data);
    };

    xhr.send();
  };
  // *
  // DISPLAY WIDGET
  // *
  var DisplayWidget = (function() {

    // Animation check
    var _getAnimationEvent = function() {
      var elm = el.create('fakeelement'),
        animations = {
          'animation': 'animationend',
          'OAnimation': 'oAnimationEnd',
          'MozAnimation': 'transitionend',
          'WebkitAnimation': 'webkitAnimationEnd'
        };

      for (var an in animations) {
        if (elm.style[an] !== undefined) {
          return animations[an];
        }
      }
    };

    var _config = {
        version: '0.1.0'
      },
      _currentMarketId = 0,
      _itemCount = 0,
      _slideIndex = 0,
      _slideMaxCount = 5,
      _slideTimeout = null,
      _displayAdTimeout = null,
      _idleStateTimeout = null,
      _slideRegEx = new RegExp(slideInUpClass + '|' + slideInLeftClass, 'g'),
      _isMobile = _isMobileDevice(),
      _prebidInitialized = false,
      _widgetLoaded = false,
      _displayAdMode = null,
      _displayAdInterval = null,
      _tagInfo = null,
      _initMoatOnAdTime = false,
      _videoAdIsLoaded = false,
      _displayAdHasRendered = false,
      _displayAdFilteredOut = false,
      _pauseAdTimer = null,
      _currentFocus = '',
      _hideZindex = 0,
      _showZindex = 9,
      _validateAdDisplayedTimer = null,
      _requestVideoTimeoutTimer = null,
      _requestDisplayAdTimeoutTimer = null,
      _showSlidesTimeoutTimer = null,
      _videoAdTimeSessionKey = '__smbVidST',
      _displayAdTimeSessionKey = '__smbDtST',
      _videoAdRequestCountSessionKey = '_smbVideoAdRequestCount',
      _displayAdRequestCountSessionKey = '_smbDisplayAdRequestCount',
      _displayAdRequestCount = 0,
      _videoAdRequestCount = 0,
      _videoState = '',
      _isVideoContainerViewable = false,
      _moatApi = null,
      _moatMute = null,
      _moatIds,

      // elements
      _marketSelect = null,
      _widgetContainer = null,
      _widget = null,
      _mainCont = null,
      _slideShowCont = null,
      _itemCont = null,
      _videoCont = null,
      _displayAdCont = null,
      _leftScroll = null,
      _rightScroll = null,
      _smbDispSlot = null,
      _headerCont = null,
      _footerCont = null;

    var trace = function(msg, severity) {
      if (widgetConfig.traceLevel > 0) {
        switch (severity) {
          case 'price':
            console.log(msg);
            break;
        }
      }
      if (widgetConfig.traceLevel > 1) {
        switch (severity) {
          case 'error':
            console.error(msg);
            break;
          case 'warn':
            console.warn(msg);
            break;
          case 'info':
            console.info(msg);
        }
      }
    };

    const eventLog = function(msg, style) {
      if (widgetConfig.traceLevel > 3) {
        console.log(`%c ${msg}`, `${style}`);
      }
    };

    var _disableVideoRequests = function() {
      trace('disabling video requests', 'warn');
      widgetConfig.videoAdEnabled = false;
    }

    var _disableDisplayAdRequests = function() {
      trace('disabling displayAd requests', 'warn');
      widgetConfig.displayAdEnabled = false;
    }

    //$ Creat script element for Google Analytics
    var _createAnalytics = function() {

      (function(i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function() {
          (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
          m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
      })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
      let hostname = document.location.host;
      if (hostname.includes('google'))
        hostname = document.referrer.split('/')[2].toString();
      ga('create', gaPropertyId, 'auto', 'smbTracker');
      ga('smbTracker.set', {
        page: document.location.pathname,
        title: document.title,
      });
      ga('smbTracker.set','hostname', hostname);
      ga('smbTracker.send', 'pageview', `widget/gpt/300x250/${widgetConfig.partnerName}`);
      //Piwik Analytics
      window._paq = window._paq || [];
      /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
      window._paq.push(['setCustomDimension', 1, `widget/gpt/300x250/${widgetConfig.partnerName}`]);
      window._paq.push(['setCustomDimension', 2, hostname]);
      window._paq.push(['trackPageView']);
      window._paq.push(['enableLinkTracking']);
      (function() {
        var u = "//analytics.saambaa.com/";
        window._paq.push(['setTrackerUrl', u + 'piwik.php']);
        window._paq.push(['setSiteId', widgetConfig.analyticsSiteId || '1']);
        var d = document,
          g = d.createElement('script'),
          s = d.getElementsByTagName('script')[0];
        g.type = 'text/javascript';
        g.async = true;
        g.defer = true;
        g.src = '//saambaa-static.azureedge.net/piwik.js';
        s.parentNode.insertBefore(g, s);
      })();

      // Init with QuantCast
      _quantcastScript();
      _quantcastPixel();
    };
    //$ Create script element for QuantCast
    var _quantcastScript = function() {
      var url = (document.location.protocol == "https:" ? "https://secure" : "http://edge") + ".quantserve.com/quant.js";
      // TODO: Change to run functions from within JS instead of create el // Locate
      // _qevents in window
      var tracker = el.create('script', {
        innerHTML: "var _qevents = _qevents || [];(function() { var elem = document.createElement('s" +
          "cript');elem.src = '" + url + "';elem.async = true;elem.type = 'text/javascript'; var scpt = document.getElemen" +
          "tsByTagName('script')[0];scpt.parentNode.insertBefore(elem, scpt);})(); _qevents" +
          ".push({qacct: 'p-TWKb6gH_3MnFX'});"
      })
      tracker.type = 'text/javascript';
      (document.body || el.getByTag('body')[0]).appendChild(tracker);
    };
    //$ Create tracking pixel element for QuantCast
    var _quantcastPixel = function() {
      // TODO: change from innerHTML to instead build of props
      var pixel = el.create('noscript', {
        innerHTML: "<div>style='display:none;'><img src='//pixel.quantserve.com/pixel/p-TWKb6gH_3MnF" +
          "X.gif' border='0' height='1' width='1' alt='Quantcast'/></div>"
      });
      (document.body || el.getByTag('body')[0]).appendChild(pixel)
    };

    // *
    // Main widget bootstrap function
    // *
    var _createWidget = function() {

      if (_requestAdsAfterLoad()) {  // first request will happen on first slide change
        trace('Requesting ads after load', 'warn');
        //function try() {     if (!$("#element").size()) {       window.requestAnimationFrame(try);     }else {        $("#element").do_some_stuff();
        window.addEventListener('load', function() {
          trace(`Widget loaded (${widgetConfig.partnerName})`, 'warn');
          if (!_widgetLoaded) { // otherwise already requested in slide change
            _widgetLoaded = true;
          }
        });
      } else {
        _widgetLoaded = true;   //request will happen when loading first slide
      }

      _widgetContainer = el.create('div', {
        className: 'smb-dispad-widget-cont'
      });
      _widget.appendChild(_widgetContainer);

      //$ create header
      var headerTemplate = '<div class="' + widgetHeaderClass + '"><div class="' + widgetMarketClass + '"><div class="' + widgetMarketSelectContClass + '"><select class="' + widgetMarketSelectClass + '"></select></div></div></div>';

      _headerCont = el.create('div', {
        className: widgetHeaderContClass,
        innerHTML: headerTemplate
      });

      // setup market
      _marketSelect = el.getByClassName(_headerCont, widgetMarketSelectClass)[0];

      el.addEvent(_marketSelect, 'change', function(e) {
        var marketSelected = _getSelectedMarketInfo(e);

        _onMarketChange(marketSelected.marketId);
        ga('smbTracker.send', 'event', 'markets', 'Market Selected', marketSelected.marketId + " " + marketSelected.marketName);
      });

      _mainCont = el.create('div', {
        className: widgetMainCont
      })

      _widgetContainer.appendChild(_mainCont);

      // Video container setup
      if (widgetConfig.videoAdEnabled) {
        //$ create video ad container
        _videoCont = el.create('div', {
          className: widgetVideoContClass,
          id: 'smbPlayer'
        });
        _videoCont.style.display = 'block';
        _videoCont.style.zIndex = _hideZindex;
        _mainCont.appendChild(_videoCont);

        _createVideoUnit();
        if (widgetConfig.maxVideoAdRequestTimeInSec != 0) {
          _requestVideoTimeoutTimer = setTimeout(_videoAdRequestTimeout, getAdRequestDurationTime(widgetConfig.maxVideoAdRequestTimeInSec, _videoAdTimeSessionKey));
        }
        eventLog(`video enabled`, `color:green`)
        trace('video enabled', 'info')
      } else {
        _displayAdMode = widgetConfig.displayAdEnabled;
        eventLog(`video disabled`, `color:red`)
        trace('video disabled', 'info')
      }

      // Create GPT Container
      if (widgetConfig.displayAdEnabled) {
        _displayAdCont = el.create('div', {
          className: widgetDisplayAdContClass
        });
        _displayAdCont.style.margin = 'auto';
        _displayAdCont.style.zIndex = _showZindex;

        const backdrop = el.create('div', {
          className: widgetContBackdrop
        });
        const backdropLogo = el.create('div', {
          className: WidgetContBackdropLogo
        });
        const backdropText = el.create('div', {
          className: WidgetContBackdropText,
          innerHTML: "Find Your Fun"
        });
        _displayAdCont.appendChild(backdrop);
        _displayAdCont.appendChild(backdropLogo);
        _displayAdCont.appendChild(backdropText);
        _mainCont.appendChild(_displayAdCont);
        cLog('loaded displayAd mode : ' + widgetConfig.displayAdId);
        if (widgetConfig.maxDisplayAdRequestTimeInSec != 0) {
          _requestDisplayAdTimeoutTimer = setTimeout(_displayAdRequestTimeout, getAdRequestDurationTime(widgetConfig.maxDisplayAdRequestTimeInSec, _displayAdTimeSessionKey));
        }
        _setupDisplay();
      } else {
        eventLog(`display ad disabled`, `color:red`)
        trace('display ad disabled', 'info')
      }


      //$ Create Slideshow Container
      _slideShowCont = el.create('div', {
        className: widgetSlideContClass
      })

      //$ create item container
      _itemCont = el.create('div', {
        className: widgetItemContClass,
        id: widgetItemContId
      });

      if (_requestAdsAfterLoad() || (!widgetConfig.displayAdEnabled && !widgetConfig.videoAdEnabled))
        _slideShowCont.style.display = "block";
      else
        _slideShowCont.style.display = "none"; // hide slide container

      _slideShowCont.style.zIndex = _showZindex;

      _mainCont.appendChild(_slideShowCont);
      _slideShowCont.appendChild(_headerCont);
      _slideShowCont.appendChild(_itemCont);

      //$ create footer
      var footerTemplate = '<div class="smb-dispad-powered-by"><div id="' + widgetFooterTextId + '">powered by <a title="Powered by Saambaa" href="//go.saambaa.com" target="' +
        '_blank"><img id="smb-icon" src="//saambaa.com/assets/image/logo-saambaa.png" alt' +
        '="Powered by Saambaa" /></a></div></div>';

      _footerCont = el.create('div', {
        className: widgetFooterContClass,
        innerHTML: footerTemplate
      });
      _slideShowCont.appendChild(_footerCont);

      // create slide scroll arrows
      _createScroll();

      // Load markets and slides
      _getMarkets();
    };

    let _createScroll = function() {
      // Left Scroll
      _leftScroll = el.create('div', {
          className: 'scroll-container',
          id: 'scroll-left',
      });
      _mainCont.appendChild(_leftScroll);
      const _leftArrow = el.create('div', {
          className: scrollArrowClass,
          id: 'arrow-left',
          'data-direction': 'back'
      });
      _leftScroll.appendChild(_leftArrow);

       // Right Scroll
      _rightScroll = el.create('div', {
          className: 'scroll-container',
          id: 'scroll-right',
      });
      _mainCont.appendChild(_rightScroll);
      const _rightArrow = el.create('div', {
          className: scrollArrowClass,
          id: 'arrow-right',
          'data-direction': 'forward'
      });
      _rightScroll.appendChild(_rightArrow);

      const arrowHandler = function() {
          if (_displayAdTimeout) {
              clearTimeout(_displayAdTimeout);
          }
          let attribute = this['data-direction'];
          if (_currentFocus==='displayAd' && attribute==='back')
            _slideIndex++;  // factor in that we want the current slide if back selected during display ad
          _showSlides(true);
          _hideVideoUnit(true);
          _nextSlide(attribute);
          _displayAdTimeout = setTimeout(_requestAds, 2000);
      };

      const arrows = document.getElementsByClassName(scrollArrowClass);
       Array.from(arrows).forEach(function(arrow) {
          arrow.addEventListener('click', arrowHandler);
        });
    }

    /*Copyright (c) 2011-2016 Moat Inc. All Rights Reserved.*/
    function initMoatTracking(a, c, d, h, k) {
      var f = document.createElement("script"),
        b = [];
      c = {
        adData: {
          ids: c,
          duration: d,
          url: k
        },
        dispatchEvent: function(a) {
          this.sendEvent ? (b && (b.push(a), a = b, b = !1), this.sendEvent(a)) : b.push(a)
        }
      };
      d = "_moatApi" + Math.floor(1E8 * Math.random());
      var e, g;
      try {
        e = a.ownerDocument, g = e.defaultView || e.parentWindow
      } catch (l) {
        e = document, g = window
      }
      g[d] = c;
      f.type = "text/javascript";
      a && a.insertBefore(f, a.childNodes[0] || null);
      f.src = "https://z.moatads.com/" + h + "/moatvideo.js#" + d;
      return c
    };

    function raiseMoatEvent(moatType, volume) {
      if (_moatApi) {
        _moatApi.dispatchEvent({
          "type": moatType,
          "adVolume": volume
        });
        eventLog(` ' ${moatType}' Reached // Volume ${volume}`, `color:black; background: yellow;`);
      }
    };

    var _getLoader = function() {
      return el.getByClassName(_itemCont, widgetLoaderClass)[0];
    };

    var _showLoader = function(show) {
      var loader = _getLoader();

      if (show && !loader) {
        loader = el.create('img', {
          src: assetBaseUrl + '/assets/loader-dots.gif',
          className: widgetLoaderClass
        });
        _itemCont.appendChild(loader);
      } else if (loader)
        _itemCont.removeChild(loader);
    };

    // Gets markets
    var _getMarkets = function() {
      _showLoader(true);

      // set default current market id
      if (!_currentMarketId || _currentMarketId == 0)
        _currentMarketId = _config.marketId;
      if (_currentMarketId == 0) {
        _currentMarketId == 31;
        trace('Default market used!', 'error');
        //trackHit('_getMarkets reverting to default id');
      }

      _execJsonReq('GET', apiBaseUrl + '/partners/' + _config.partnerId + '/markets', function(items) {
        if (!items.length)
          return;

        if (_marketSelect.options.length) {
          for (var i = 0; i < market.options.length; i++) {
            _marketSelect.remove(market.options[i]);
          }
        }

        // create opts for each item
        for (var i = 0; i < items.length; i++) {
          var item = items[i];

          var opt = el.create('option', {
            value: item.Id,
            innerHTML: item.Name
          });

          if (item.Id === _currentMarketId)
            opt.setAttribute('selected', 'selected');

          _marketSelect.appendChild(opt);
        }
        _onMarketChange(_currentMarketId);
      });
    };

    // *
    // Gets posts for the selected market
    // *
    var _getPosts = function() {
      //$ show loader
      var loader = _getLoader();

      if (!loader)
        _showLoader(true);

      _resetSlide();

      var marketId = _currentMarketId || _config.marketId;
      if (marketId == 0) {
        marketId == 31;
        trace('Default market used for getting posts!', 'error');
        //trackHit('_getPosts reverting to default id');
      }

      _execJsonReq('GET', apiBaseUrl + '/partners/' + _config.partnerId + '/markets/' + marketId + '/channels/' + _config.channelId + '/posts?filteredPostsRequest={pageNumber:1,pageSize:' + widgetConfig.maxPosts + ',mode:"sparse"}', function(data) {
        //$ get loader again
        loader = _getLoader();

        if (loader)
          _showLoader(false);

        _itemCount = data.Items.length;

        if (!_itemCount)
          return;

        //$ clear existing items
        _itemCont.innerHTML = '';

        for (var i = 0; i < data.Items.length; i++) {
          var post = data.Items[i];

          var item = el.create('div', {
            className: widgetItemClass
          });
          _itemCont.appendChild(item);

          // create link
          var link = el.create('a', {
            href: _getPostUrl(post)
          });
          //like Native Content/Click/[PostTitle]
          //ga('smbTracker.send', 'pageview', `widget/gpt/300x250/${widgetConfig.partnerName}`)
          //link.setAttribute('onclick', `this._trackClick('Click','${post.Title}')`);
          link.setAttribute('onclick', `ga('smbTracker.send', 'event', 'Ad', 'Click', 'widget/gpt/300x250/${widgetConfig.partnerName}')`); // removed /${post.Title}
          link.setAttribute('target', '_blank');
          item.appendChild(link);

          // create img tag and append to link
          var imgTag = el.create('img', {
            src: blankImageUrl,
            dataSrc: post.ImageUri
          });
          link.appendChild(imgTag);

          // create click more
          var clickMoreCont = el.create('div', {
            className: widgetItemClickMoreClass
          });
          clickMoreCont.innerHTML = '<p>Click for more</p>';
          link.appendChild(clickMoreCont);

          // create caption container
          var capCont = el.create('div', {
            className: widgetItemCaptionContClass
          });
          link.appendChild(capCont);

          // create caption and append to link
          var cap = el.create('div', {
            className: widgetItemCaptionClass
          });
          capCont.appendChild(cap);

          // create caption title
          var capTitle = el.create('p', {
            className: widgetItemTitleClass,
            innerHTML: post.Title
          });

          cap.appendChild(capTitle);

          var capDetail = el.create('p', {
            className: widgetItemDetailClass,
            innerHTML: _getCaptionDetail(post)
          });

          cap.appendChild(capDetail);
        }
        if (_currentFocus !== 'displayAd')
          _nextSlide();
          _requestAds();
      });
    };

    // *
    // Helper function to get correct url based on post type
    // *
    var _getPostUrl = function(post) {
//      if (post.PostType !== 8)
//        return siteBaseUrl + _config.partnerId + '/' + _currentMarketId + '/' + _config.channelId + '/' + post.Id;
      var clickurl = (post.ClickthruUrl) ? post.ClickthruUrl : post.ClickUrl;  // remove legacy support after full api update

      var params = [
        'pd00=' + _config.partnerId,
        'pd01=' + _currentMarketId,
        'pd02=300x250_Widget',
      ];

      return clickurl + '?' + params.join('&');
    };

    // Gets caption detail
    var _getCaptionDetail = function(post) {
      var capText = post.StartDateFormatted + ' &#x00040 ' + post.PlaceName;
      if (post.Source)
        capText += '<br> <span> ' + post.Source + '</span>';

      return capText;
    };

    // *
    // SLIDE FUNCTIONS
    // *
    var _nextSlide = function(direction = null) {
      trace('start _nextSlide', 'info');
      clearTimer(_slideTimeout);

      var itemConts = _hideSlideItems();

      // slide scroll helper
      _slideIndex = _getSlideIndex(itemConts, direction);

      trace('_nextSlide load item', 'info');
      // get current item
      var item = itemConts[_slideIndex];
      item.style.display = 'block';

      // get caption container
      var capCont = el.getByClassName(item, widgetItemCaptionContClass)[0],
        capDetail = el.getByClassName(capCont, widgetItemCaptionClass)[0],
        clickMore = el.getByClassName(item, widgetItemClickMoreClass)[0],
        img = item.getElementsByTagName('img')[0];

      if (img.src.indexOf('blank.png') != -1) // used for lazy loading
        img.src = img.dataSrc;

      if (widgetConfig.optimizationLevel == 0) {
        // wire up caption animation
        var capTimeoutId = setTimeout(function() {
          clearTimer(capTimeoutId);
          capCont.className += ' ' + slideInUpClass;
        }, 300);

        // setup slide from left to right
        var aniEventType = _getAnimationEvent();
        var onCapContSlideUpDone = function() {
          capCont.removeEventListener(aniEventType, onCapContSlideUpDone);

          if (_isMobile)
            capDetail.className += ' ' + fadeInClass;
          else
            capDetail.className += ' ' + slideInLeftClass;
        };
        var onCapDetailDone = function() {
          capDetail.removeEventListener(aniEventType, onCapDetailDone);

          if (_isMobile)
            clickMore.className += ' ' + fadeInClass;
          else
            clickMore.className += ' ' + slideInLeftClass;
        };
        capCont.addEventListener(aniEventType, onCapContSlideUpDone);
        capDetail.addEventListener(aniEventType, onCapDetailDone);
      } else {
        capCont.className += ' ' + staticCaptionClass;
        capDetail.className += ' ' + staticCaptionClass;
        clickMore.className += ' ' + staticCaptionClass;
      }

      _currentFocus = 'slide';
      if (widgetConfig.autoScrollEnabled) {
        _slideTimeout = setTimeout(function() {
          _onSlideChange(itemConts.length);
        }, 1000 * widgetConfig.slideTimeInSec);
      }
    };

    let _getSlideIndex = function(itemConts, direction = null) {
      if (direction === 'forward' || 'autoScrollEnabled' in widgetConfig && !direction) {
          _slideIndex++;
      } else if (direction === 'back') {
          _slideIndex--;
      } else {
          _slideIndex++;
      }
      // reset index if we are out of range
      if ( _slideIndex < 0) {
          _slideIndex = itemConts.length + _slideIndex;
      } else if (Math.abs(_slideIndex) >= itemConts.length) {
          _slideIndex = 0;
      }
      _slideIndex = Math.abs(_slideIndex);
      return _slideIndex
  }

    var _stopSlide = function() {
      clearTimer(_slideTimeout);
      _hideSlideItems();
    };

    var _removeAnimation = function(item) {
      var capCont = el.getByClassName(item, widgetItemCaptionContClass)[0],
        capDetail = el.getByClassName(capCont, widgetItemCaptionClass)[0],
        clickMore = el.getByClassName(item, widgetItemClickMoreClass)[0];

      if (widgetConfig.optimizationLevel == 0) {
        capDetail.className = capDetail.className.replace(_slideRegEx, '');
        capCont.className = capCont.className.replace(_slideRegEx, '');
        clickMore.className = clickMore.className.replace(_slideRegEx, '');
      } else {
        capDetail.className = capDetail.className.replace(staticCaptionClass, '');
        capCont.className = capCont.className.replace(staticCaptionClass, '');
        clickMore.className = clickMore.className.replace(staticCaptionClass, '');
      }
    };

    var _hideSlideItems = function() {
      var itemConts = el.getByClassName(_itemCont, widgetItemClass);

      for (var i = 0; i < itemConts.length; i++) {
        // remove animation
        var item = itemConts[i];
        item.style.display = 'none';
        _removeAnimation(item);
      }
      return itemConts;
    };

    var _resetSlide = function() {
      _slideIndex = 0;
      _stopSlide();
    };

    // cap/limit support
    var _isValidForDisplayAdRequest = function() {
      if (widgetConfig.displayAdEnabled) {
        if (widgetConfig.maxDisplayAdRequests != 0 && _displayAdRequestCount >= widgetConfig.maxDisplayAdRequests)
          _disableDisplayAdRequests();
      }
      return (widgetConfig.displayAdEnabled)
    };

    var _isValidForVideoAdRequest = function() {
      if (widgetConfig.videoAdEnabled) {
        if (widgetConfig.maxVideoAdRequests != 0) {
          widgetConfig.videoAdEnabled = _videoAdRequestCount < widgetConfig.maxVideoAdRequests;
          if (_videoAdRequestCount >= widgetConfig.maxVideoAdRequests)
            trace('video ad count exceeded', 'warn');
        }
      }
      return widgetConfig.videoAdEnabled;
    };

    var incrementDisplayAdRequestCount = function() {
        _displayAdRequestCount++;
        if (widgetConfig.useSession)
          sessionStorage.setItem(_displayAdRequestCountSessionKey, _displayAdRequestCount);
        trace(`_displayAdRequestCount = ${_displayAdRequestCount}`, 'info');
      },
      resetDisplayAdRequestCount = function() {
        if (widgetConfig.useSession)
          sessionStorage.setItem(_displayAdRequestCountSessionKey, '0');
        _displayAdRequestCount = 0;
        trace(`Refresh reset displayAd count // ${_displayAdRequestCount}`, 'info')
      },
      isSessionExpired = function(sessionKey, maxTime) {
        var startTime = sessionStorage.getItem(sessionKey);
        if (startTime) {
          let timeNow = Date.now();
          if (timeNow - (startTime + maxTime) > 0)
            return (false);
        }
        return true;
      },
      getAdRequestDurationTime = function(requestDuration, sessionKey) {
        if (widgetConfig.useSession) {
          var startTime = sessionStorage.getItem(sessionKey);
          if (!startTime) {
            startTime = Date.now();
            sessionStorage.setItem(sessionKey, startTime);
            return requestDuration * 1000;
          } else {
            let timeNow = Date.now();
            if ((timeNow - startTime) > requestDuration) { // session exceeded so reset it
              sessionStorage.setItem(sessionKey, timeNow);
              return requestDuration * 1000;
            } else {
              var duration = (timeNow - startTime);
              return ((timeNow - startTime)); // already in milliseconds
            }
          }
        }
        return requestDuration * 1000;
      },
      resetVideoAdRequestCount = function() {
        if (widgetConfig.useSession)
          sessionStorage.setItem(_videoAdRequestCountSessionKey, '0');
        _videoAdRequestCount = 0;
        trace(`Refresh reset videoAd count // ${_videoAdRequestCount}`, 'info')
      },
      incrementVideoAdRequestCount = function() {
        _videoAdRequestCount++;
        if (widgetConfig.useSession)
          sessionStorage.setItem(_videoAdRequestCountSessionKey, _videoAdRequestCount); // Save # of refreshes data to sessionStorage
        trace(`_videAdRequestCount = ${_videoAdRequestCount}`, 'info');
      };

    // *
    // DISPLAY AD UNIT FUNCTIONS
    // *
    var PREBID_TIMEOUT = 700,
      prebidAdUnit = null;

    var _createDisplayAdDiv = function() {
      var displayAdUnitCont = el.create('div', {
        id: widgetConfig.displayAdId
      });
      displayAdUnitCont.style.margin = 'auto';
      displayAdUnitCont.style.height = '250px';
      displayAdUnitCont.style.width = '300px';
      displayAdUnitCont.style.display = 'block';
      _displayAdCont.appendChild(displayAdUnitCont);
    };

    var _prebidConfig = function() {
      _displayAdInterval = widgetConfig.displayAdTimeout;

      prebidAdUnit = [{
        code: widgetConfig.displayAdId,
        mediaTypes: {
          banner: {
            sizes: [
              [300, 250]
            ]
          },
          native: {
            image: {
              sizes: [
              [300, 250]
              ]
            }
          },
        },
        bids: widgetConfig.preBids[0]
      }];


      if (widgetConfig.useAdFilter) {
        trace(`using ad filter`, `info`)
        pbjs.que.push(function() {
          // Wrapper for Saambaa, generated on 2018-12-06T15:02:50-05:00, version 2018.04.02
          pbjs.que.push(function() {

              var confiantWrap = function confiantWrap(a,b,c,d,e){function f(a){return(m(a)||"")[s]("/","_")[s]("+","-")}function g(b,c,d){var e=w+n(b)+"&d="+c,f="err__"+1*new Date;k[f]=d;var g="<"+q+" on"+t+'="void('+f+'())" '+r+'="'+e+'" type="text/java'+q+'" ></'+q+">";a[v](g)}function h(){var c=f(d+"/"+x.k.hb_bidder[0]+":"+x.k.hb_size[0]),h={wh:c,wd:l.parse(l[u](x)),wr:0};g(c,f(l[u](h)),function(){a[v](b.ad)});var i={prebid:{adId:b.adId,cpm:b.cpm}},j={d:h,t:b.ad,cb:e,id:i};k[d]={},k[d][c]=j}var i=b.bidder,j=b.size,k=a.parentWindow||a.defaultView,l=k.JSON,m=k.btoa,n=k.encodeURIComponent;if(!l||!m)return!1;var o="t",p="i",q="script",r="src",s="replace",t="error",u="stringify",v="wr"+p+o+"e",w="https://"+c+"/?wrapper="+n(d)+"&tpid=",x={k:{hb_bidder:[i],hb_size:[j]}};return h(),a.close(),!0};

              // keep a reference to original renderAd function
              var w = window;
              w._clrm = w._clrm || {};
              w._clrm.renderAd = w._clrm.renderAd || pbjs.renderAd;
              var config = w._clrm.prebid || {
                     /* Enables sandboxing on a device group
                          All:1 , Desktop:2, Mobile: 3, iOS: 4, Android: 5, Off: 0
                      */
                  sandbox: 0
              };

              var isGoogleFrame = function (c) {
                  return c.tagName === 'IFRAME' && c.id && c.id.indexOf('google_ads_iframe_') > -1;
              }

              var shouldSandbox = function () {
                        var uaToRegexMap = {
                            "mobile": /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i,
                            "ios": /(.+)(iPhone|iPad|iPod)(.+)OS[\s|\_](\d)\_?(\d)?[\_]?(\d)?.+/i,
                            "android": /Android/i
                          },
                          sbStr = "" +config.sandbox;
                        if (sbStr === "1") {
                          // all environments
                          return true;
                        } else if (sbStr === "2") {
                          // desktop
                          return !navigator.userAgent.match(uaToRegexMap["mobile"]);
                        } else if (sbStr === "3") {
                          // mobile
                          return navigator.userAgent.match(uaToRegexMap["mobile"]);
                        } else if (sbStr === "4") {
                          // ios only
                          return navigator.userAgent.match(uaToRegexMap["ios"]);
                        } else if (sbStr === "5") {
                          // android
                          return navigator.userAgent.match(uaToRegexMap["android"]);
                        } else {
                          return false;
                        }
                    }

               Node.prototype.appendChild = (function (original) {
                      return function (child) {
                        if (isGoogleFrame(child) && shouldSandbox() && !child.getAttribute('sandbox')) {
                          child.setAttribute('sandbox', 'allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation');
                          child.setAttribute('data-forced-sandbox', true);
                        }
                        return original.call(this, child);
                      };
                    }(Node.prototype.appendChild));


              // override renderAd
              pbjs.renderAd = function(doc, id) {
                  if (doc && id) {
                      try {

                          // get pbjs bids
                          var bids = [],
                              bidResponses = pbjs.getBidResponses(),
                              highestBids = pbjs.getHighestCpmBids();
                          for (var slot in bidResponses) {
                              bids = bids.concat(bidResponses[slot].bids);
                          }
                          bids = bids.concat(highestBids);

                          // lookup ad by ad Id (avoid ES6 array functions)
                          var bid, i;
                          for (i=0; i<bids.length; i++) {
                              if (bids[i].adId === id) {
                                  bid = bids[i];
                                  break;
                              }
                          }

                          // Optional: list of bidders that don't need wrapping, array of strings, e.g.: ["bidder1", "bidder2"]
                          var confiantExcludeBidders = [];

                          // check bidder exclusion (avoid ES6 array functions)
                          var excludeBidder = false;
                          for (i=0; i<confiantExcludeBidders.length; i++) {
                              if (bid.bidder === confiantExcludeBidders[i]) {
                                  excludeBidder = true;
                                  break;
                              }
                          }

                          if (bid && bid.ad && !excludeBidder) {
                              // Neutralize document
                              var docwrite = doc.write;
                              var docclose = doc.close;
                              doc.write = doc.close = function() {};
                              // call renderAd with our neutralized doc.write
                              window._clrm.renderAd(doc, id);
                              // Restore document
                              delete doc.write;
                              delete doc.close;

                              var callback = function(blockingType, blockingId, isBlocked, wrapperId, tagId, impressionData) {
                                  //console.log("w00t one more bad ad nixed.", arguments);
                                  trace(`Nixed`, `info`);
                                  _displayAdHasRendered = false;
                                  _displayAdFilteredOut = true;
                                  //trackHit('Ad Filter', bid.bidder);
                              };

                              var cdnHost = 'clarium.global.ssl.fastly.net';
                              var confiantId = '9tgoNyGTAZjiv_HkXoBbJClUKFo';
                              // do the actual ad serving and fall back on document.write if failure
                              if (!confiantWrap(doc, bid, cdnHost, confiantId, callback)) {
                                  doc.write(bid.ad);
                                  doc.close();
                              }

                              return;
                          }
                      } catch (e) {
                          console.log(e);
                      }
                  }

                  // if bid.ad is not defined or if any error occurs, call renderAd to serve the creative
                  window._clrm.renderAd(doc, id);
              };

          });

        });
// old confiant
/*          var confiantWrap = function(a, b, c, d, e) {
            function f(a) {
              return (m(a) || "")[s]("/", "_")[s]("+", "-")
            }

            function g(b, c, d) {
              var e = w + n(b) + "&d=" + c,
                f = "err__" + 1 * new Date;
              k[f] = d;
              var g = "<" + q + " on" + t + '="void(' + f + '())" ' + r + '="' + e + '" type="text/java' + q + '" ></' + q + ">";
              a[v](g)
            }

            function h() {
              var c = f(d + "/" + x.k.hb_bidder[0] + ":" + x.k.hb_size[0]),
                h = {
                  wh: c,
                  wd: l.parse(l[u](x)),
                  wr: 0
                };
              g(c, f(l[u](h)), function() {
                a[v](b.ad)
              });
              var i = {
                  prebid: {
                    adId: b.adId,
                    cpm: b.cpm
                  }
                },
                j = {
                  d: h,
                  t: b.ad,
                  cb: e,
                  id: i
                };
              k[d] = {}, k[d][c] = j
            }
            var i = b.bidder,
              j = b.size,
              k = a.parentWindow || a.defaultView,
              l = k.JSON,
              m = k.btoa,
              n = k.encodeURIComponent;
            if (!l || !m) return !1;
            var o = "t",
              p = "i",
              q = "script",
              r = "src",
              s = "replace",
              t = "error",
              u = "stringify",
              v = "wr" + p + o + "e",
              w = "https://" + c + "/?wrapper=" + n(d) + "&tpid=",
              x = {
                k: {
                  hb_bidder: [i],
                  hb_size: [j]
                }
              };
            return h(), a.close(), !0
          };

          // keep a reference to original renderAd function
          var w = window;
          w.clrm = w.clrm || {};
          w.clrm.renderAd = w.clrm.renderAd || pbjs.renderAd;
          // override renderAd
          pbjs.renderAd = function(doc, id) {
            if (doc && id) {
              try {

                // get pbjs bids
                var bids;
                if (pbjs._bidsReceived) { // prebid < 1.0
                  bids = pbjs._bidsReceived;
                } else { // prebid >= 1.0
                  bids = pbjs.getHighestCpmBids();
                }

                // lookup ad by ad Id (avoid ES6 array functions)
                var bid, i;
                for (i = 0; i < bids.length; i++) {
                  if (bids[i].adId === id) {
                    bid = bids[i];
                    break;
                  }
                }

                // Optional: list of bidders that don't need wrapping, array of strings, e.g.: ["bidder1", "bidder2"]
                var confiantExcludeBidders = [];

                // check bidder exclusion (avoid ES6 array functions)
                var excludeBidder = false;
                for (i = 0; i < confiantExcludeBidders.length; i++) {
                  if (bid.bidder === confiantExcludeBidders[i]) {
                    excludeBidder = true;
                    break;
                  }
                }

                if (bid && bid.ad && !excludeBidder) {
                  // Neutralize doc.write
                  var docwrite = doc.write;
                  doc.write = function(a) {};
                  // call renderAd with our neutralized doc.write
                  window.clrm.renderAd(doc, id);
                  // Restore doc.write
                  doc.write = docwrite;

                  var cdnHost = 'clarium.global.ssl.fastly.net';
                  var confiantId = '9tgoNyGTAZjiv_HkXoBbJClUKFo';
                  var callback = function(blockingType, blockingId, isBlocked, wrapperId, tagId, impressionData) {
                    // console.log("w00t one more bad ad nixed.", arguments);
                    trace(`Nixed`, `info`);
                    _displayAdHasRendered = false;
                    _displayAdFilteredOut = true;
                    //trackHit('Ad Filter', bid.bidder);
                  };

                  // do the actual ad serving and fall back on document.write if failure
                  if (!confiantWrap(doc, bid, cdnHost, confiantId, callback)) {
                    doc.write(bid.ad);
                    doc.close();
                  }

                  return;
                }
              } catch (e) {
                console.log(e);
              }
            }
            // if bid.ad is not defined or if any error occurs, call renderAd to serve the creative
            window.clrm.renderAd(doc, id);
          };

        });*/
      };

      window.pbjs = window.pbjs || {};
      window.pbjs.que = window.pbjs.que || [];

      const customGranularity = {
        'buckets': [{
          'min': 0.03,
          'max': 5.00,
          'increment': 0.01
        }, {
          'min': 5.00,
          'max': 10.00,
          'increment': 0.05
        }, {
          'min': 10.00,
          'max': 20.00,
          'increment': 0.10
        }]
      };

      window.pbjs.setConfig({
        priceGranularity: customGranularity //,
        //publisherDomain: parent.origin //,
//        userSync: {
//          filterSettings: {
//            iframe: {
//              bidders: '*',      // '*' represents all bidders
//              filter: 'include'
//            }
//          }
//        }
      })

      window.pbjs.bidderSettings = {
        sonobi: {
          bidCpmAdjustment: function(bidCpm) {
            // adjust the bid in real time before the auction takes place
            //console.log(1*widgetConfig.bidCpms['sonobi']);
            return bidCpm * widgetConfig.bidCpms['sonobi']; //0.7;
          }
        },
        districtmDMX: {
          bidCpmAdjustment: function(bidCpm) {
            // adjust the bid in real time before the auction takes place
            //console.log(1*widgetConfig.bidCpms['districtmDMX']);
            return bidCpm * widgetConfig.bidCpms['districtmDMX']; //0.85;
          }
        }
      };
      // end prebid cfg
    }

    var _initPrebid = function() {
      cLog('calling prebid');
      _prebidInitialized = true;

      if (widgetConfig.useSession) {
        if (widgetConfig.maxDisplayAdRequestTimeInSec == 0 || isSessionExpired(_displayAdTimeSessionKey, widgetConfig.maxDisplayAdRequestTimeInSec * 1000))
          resetDisplayAdRequestCount();
        else
          _displayAdRequestCount = sessionStorage.getItem(_displayAdRequestCountSessionKey);
      } else _displayAdRequestCount = 0;

      window.pbjs.que.push(function() {
        window.pbjs.addAdUnits(prebidAdUnit);
      });

      window.pbjs.onEvent('bidWon', function(e) {
        if (e.adUnitCode === widgetConfig.displayAdId) {
          //          _logBidders();
          if (widgetConfig.traceLevel > 4) {
            let note = '';
            if (_isPreviousBid(e.adId)) {//previousBids.includes(e.adId)) {
              for (var n = 0; n < previousBids.length; n++) {
                if (previousBids[n].adId == e.adId || previousWinningBids.includes(previousBids[n].adId))
                  continue;
                if (previousBids[n].cpm > e.cpm)
                  note = `: prev>cpm ${previousBids[n].adId}-${previousBids[n].cpm}-ttl(${previousBids[n].ttl}) `;
              }
              eventLog(`pre-bid -CACHED BID WON = ${e.bidder} ${note}// CPM = ${e.adserverTargeting.hb_pb} // bid = ${e.cpm} // id = ${e.adId}`, `color:black; background: yellow;`);
              //trackHit(`${widgetConfig.partnerName} C WIN=${e.bidder},bid=${e.cpm},id=${e.adId} ${note}`);
            }
          }
          //previousBids.splice(previousBids.indexOf(e.adId), 1 );  // remove winnging bid
          previousWinningBids.push(e.adId);

          switch (e.bidder) {
            case 'sonobi':
                _displayAdInterval = 40 * 1000;
              trace(`sonobi interval = ${_displayAdInterval}`, `info`);
              break;
          }
        }
        let wSSP = e.bidder;
        if (e.bidder && e.bidder.length > 2) {
          wSSP = e.bidder.substring(0, 3);
        }
        trace(`${wSSP} - ${e.adserverTargeting.hb_pb}`, `price`);
        eventLog(`pre-bid - Winning Bidder = ${e.bidder} // CPM = ${e.adserverTargeting.hb_pb} // bid = ${e.cpm} // id = ${e.adId}`, `color:red;`);
        //trackHit('Prebid WIN', e.bidder);
      });

      /*  FOR DEBUG
			window.pbjs.onEvent('auctionInit', function (e) {
                // console.log(`auctionInit`, e);
            });
            window.pbjs.onEvent('bidRequested', function (e) {
                // console.log(`bidRequested`, e);
            });
            window.pbjs.onEvent('bidResponse', function (e) {
                // console.log(`bidResponse`, e);
            });
			*/
    }

    function refreshSlot(slot) {
      trace('refreshSlot', 'info');
      if (widgetConfig.preBidEnabled) {
        _saveCurrentPrebids();
        _displayAdFilteredOut = false;
        //eventLog(`pre-bid - get targeting = ${window.pbjs.getAdserverTargetingForAdUnitCodeStr(widgetConfig.displayAdId)}`, `color:blue;`);
        window.pbjs.que.push(function() {
          window.pbjs.requestBids({
            timeout: PREBID_TIMEOUT,
            bidsBackHandler: function() {
              window.pbjs.setTargetingForGPTAsync([slot.getSlotElementId()]);
              if (widgetConfig.traceLevel > 5) {
                eventLog(`pre-bid - get targeting = ${window.pbjs.getAdserverTargetingForAdUnitCodeStr(widgetConfig.displayAdId)}`, `color:red;`);
              }
              window.googletag.pubads().refresh([slot]);
              incrementDisplayAdRequestCount();
            }
          });
        });
      } else {
        window.googletag.pubads().refresh([slot]);
      }
      _resetAdInterval(slot);
    }

    var _isDfpOrder = function(id) {
      let validIds = [2162947417, 2250275929, 2334149426, 2385640231, 2239771125];
      return (id && validIds.includes(id));
    };

/*    var _logLegacyBidders = function() {
      //eventLog(`bidResponses - ${JSON.stringify(window.pbjs.getBidResponses())}`, `color:red`);
      //let bidResp = window.pbjs.getBidResponses();
      //if (bidResp[widgetConfig.displayAdId].bids.length > 0) {
      let bidResp = window.pbjs._bidsReceived;
      if (bidResp.length > 0) {
        eventLog(`pre-bidder - logging (${bidResp.length}) prebids `, `color:brown`);
        bidResp.forEach(bid => {
          eventLog(`pre-bidder - ${bid.bidder}, adId - ${bid.adId}, cpm - ${bid.cpm}, ttl - ${bid.ttl}, size - ${bid.getSize()} `, `color:brown`);
        });
      } else {
        eventLog(`No prebids! `, `color:brown`);
      }

      bidResp = window.pbjs._winningBids;
      if (bidResp.length > 0) {
        eventLog(`pre-bidder - winning (${bidResp.length}) prebids `, `color:green`);
        bidResp.forEach(bid => {
          eventLog(`pre-bidder - ${bid.bidder}, adId - ${bid.adId}, cpm - ${bid.cpm}, ttl - ${bid.ttl}, size - ${bid.getSize()} `, `color:green`);
        });
      } else {
        eventLog(`No winning prebids! `, `color:green`);
      }
    };
*/
    var _logBidders = function() {
      //eventLog(`bidResponses - ${JSON.stringify(window.pbjs.getBidResponses())}`, `color:red`);
      //let bidResp = window.pbjs.getBidResponses();
      //if (bidResp[widgetConfig.displayAdId].bids.length > 0) {
      let bidResp = window.pbjs.getBidResponsesForAdUnitCode(widgetConfig.displayAdId);
      if (bidResp.bids.length > 0) {
        eventLog(`pre-bidder - logging (${bidResp.bids.length}) prebids `, `color:brown`);
        bidResp.bids.forEach(bid => {
          eventLog(`pre-bidder - ${bid.bidder}, adId - ${bid.adId}, cpm - ${bid.cpm}, ttl - ${bid.ttl}, size - ${bid.getSize()} `, `color:brown`);
        });
      } else {
        eventLog(`No prebids! `, `color:brown`);
      }
    };

    var _logBidWinners = function() {
      let bidResp = window.pbjs.getAllWinningBids();
      if (bidResp.length > 0) {
        let bidResp = window.pbjs.getBidResponsesForAdUnitCode(widgetConfig.displayAdId);
        if (bidResp.bids.length > 0) {
          eventLog(`pre-bidder - winning (${bidResp.bids.length}) prebids RENDERED `, `color:green`);
          bidResp.bids.forEach(bid => {
            eventLog(`pre-bidder - ${bid.bidder}, adId - ${bid.adId}, cpm - ${bid.cpm}, ttl - ${bid.ttl}, size - ${bid.getSize()} `, `color:green`);
          });
        }
      } else {
        eventLog(`No winning prebids! `, `color:green`);
      }
      let bidWins = window.pbjs.getAllPrebidWinningBids();
      if (bidWins.length > 0) {
        eventLog(`pre-bidder - winning (${bidWins.length}) prebids NOT RENDERED`, `color:blue`);
        bidWins.forEach(bid => {
          eventLog(`pre-bidder - ${bid.bidder}, adId - ${bid.adId}, cpm - ${bid.cpm}, ttl - ${bid.ttl}, size - ${bid.getSize()} `, `color:blue`);
        });
      }
    };

    var _logAllPreBids = function() {
      if (widgetConfig.traceLevel < 4)
        return;
      eventLog(`pre-bidder - Logging all prebids `, `color:purple`);
      var responses = pbjs.getBidResponses();
      var winners = pbjs.getAllWinningBids();
      var output = [];
      Object.keys(responses).forEach(function(adUnitCode) {
        var response = responses[adUnitCode];
        response.bids.forEach(function(bid) {
          output.push({
            bid: bid,
            adunit: adUnitCode,
            adId: bid.adId,
            bidder: bid.bidder,
            time: bid.timeToRespond,
            cpm: bid.cpm,
            ttl: bid.ttl,
            msg: bid.statusMessage,
            rendered: !!winners.find(function(winner) {
              return winner.adId == bid.adId;
            })
          });
        });
      });
      if (output.length) {
        if (console.table) {
          console.table(output);
        } else {
          for (var j = 0; j < output.length; j++) {
            console.log(output[j]);
          }
        }
      } else {
        console.warn('NO prebid responses');
      }
    };

    var _logPreBidWinners = function() {
      if (widgetConfig.traceLevel < 4)
        return;
      eventLog(`pre-bidder - Logging all prebid winners `, `color:purple`);
      var bids = pbjs.getHighestCpmBids();
      var output = [];
      for (var i = 0; i < bids.length; i++) {
        var b = bids[i];
        output.push({
          'adunit': b.adUnitCode,
          'adId': b.adId,
          'bidder': b.bidder,
          'time': b.timeToRespond,
          'cpm': b.cpm
        });
      }
      if (output.length) {
        if (console.table) {
          console.table(output);
        } else {
          for (var j = 0; j < output.length; j++) {
            console.log(output[j]);
          }
        }
      } else {
        console.warn('No prebid winners');
      }
    };

    var _saveCurrentPrebids = function() {
      let bidResp = window.pbjs.getBidResponsesForAdUnitCode(widgetConfig.displayAdId);
      if (bidResp.bids.length > 0) {
        previousBids = [];
        bidResp.bids.forEach(bid => {
          previousBids.push({adId : bid.adId, cpm : bid.cpm});
          //eventLog(`pre-bidder - ${bid.bidder}, adId - ${bid.adId}, cpm - ${bid.cpm}, ttl - ${bid.ttl}, size - ${bid.getSize()} `, `color:brown`);
        });
        eventLog(`pre-bidder - saving current Prebids `, `color:blue`);
        _logAllPreBids();
      }
    };

    var _isPreviousBid = function(adId) {
      if (previousBids.length > 0) {
        for (var n = 0; n < previousBids.length; n++) {
          if (previousBids[n].adId == adId)
            return true;
        }
      }
      return false;
    }

    var _setupDisplay = function() {
      if (widgetConfig.preBidEnabled)
        _prebidConfig();
      else {
        trace('Prebid Disabled', 'warn');
      }
      _slideMaxCount = 1;
      _createDisplayAdDiv();

      // Reference vars for googletag
      window.googletag = window.googletag || {};
      window.googletag.cmd = window.googletag.cmd || [];
      window.googletag.cmd.push(function() {
        window.googletag.pubads().disableInitialLoad();
      });

      // Call google tag function from window
      window.googletag.cmd.push(function() {
        _smbDispSlot = window.googletag.defineSlot(widgetConfig.displayAdSlot, [_smbDisplayAdWidth, _smbDisplayAdHeight], widgetConfig.displayAdId).addService(window.googletag.pubads());
        window.googletag.pubads().enableSingleRequest();
        //                window.googletag.enableServices();

        //if (!_requestAdsAfterLoad())
        //    _callPrebid();

        // Listen for slot to render
        window.googletag.pubads().addEventListener('slotRenderEnded', function(event) {
          let targetSlot = event.slot.getAdUnitPath();
          if (targetSlot == widgetConfig.displayAdSlot) {
            cLog(`This slot has rendered : ${targetSlot}`);
            cLog(event);
            //let slotSize = event.size[0] + 'x' + event.size[1];
            //cLog('slot size=' + slotSize + '  -  isEmpty=' + event.isEmpty);
            if (widgetConfig.traceLevel > 5 && widgetConfig.preBidEnabled) {
              _logBidders();
              _logBidWinners();
              _logAllPreBids();
              _logPreBidWinners();
            }

            _displayAdHasRendered = (event.slotContentChanged && !event.isEmpty); // (_isValidDisplayAd(event.lineItemId)) && (slotSize != '180x150');
            cLog(`_displayAdHasRendered = ${_displayAdHasRendered}`);
            // Logging for CPM Optimizations
            if (event.campaignId != null && !_isDfpOrder(event.campaignId)) {
              //if (event.campaignId == '2185575041' || event.campaignId == '2241619391') {
              if (_displayAdFilteredOut) {
                _displayAdHasRendered = false;
                trace('pb - nixed ' + event.campaignId, 'price')
              } else {
                eventLog(`Prebid bidder won - ` + event.campaignId, `color:red`);
                trace('pb - ' + event.campaignId, 'price')
              }
            } else if (event.campaignId == '2162947417') {
              eventLog(`AdEx won`, `color:red`);
              trace('ae', 'price')
            } else if (event.campaignId == '2385640231') {
              eventLog(`AdEx2 won`, `color:red`);
              trace('ae2', 'price')
            } else if (event.campaignId == '2250275929') {
              eventLog(`bidWin - smb adX house`, `color:red`);
              trace('smb ae hs', 'price')
              if (widgetConfig.videoRequestType == 'googima') {
                _displayAdHasRendered = false;
                eventLog(`ignoring adX house - showing slides`, `color:purple`);
              }
            } else if (event.campaignId == '2334149426') {
              eventLog(`bidWin - AdX Price Priority`, `color:red`);
              trace('ae pp', 'price')
            } else if (event.campaignId == '2239771125') {
              eventLog(`33across won`, `color:red`);
              trace('33', 'price')
              //if (widgetConfig.partnerName == 'genius')
              //  _displayAdHasRendered = false;
            } else {
              _displayAdHasRendered = false;
              eventLog(`No Winner`, `color:red`);
              trace('nw - ' + event.campaignId, 'price')
            };

            if (_displayAdHasRendered == false) {
              //trackHit('Failed Prebid Render - ', event.campaignId);
              eventLog(`No valid Ad to display - ${event.campaignId}`, `color:blue`);
            }

            clearTimer(_displayAdTimeout);
            if (!(_displayAdHasRendered && widgetConfig.autoScrollEnabled)) {
              _displayAdTimeout = setTimeout(function() {
                _requestAds();
              }, 1000 * widgetConfig.slideTimeInSec);
            }
          }

        });

        window.googletag.pubads().addEventListener('impressionViewable', function(event) {
          let targetSlot = event.slot.getAdUnitPath();
          if (targetSlot == widgetConfig.displayAdSlot) {
            eventLog(`Display impressionViewable - ${targetSlot}`, `color:green; %c`);
          };
        });

        window.googletag.pubads().addEventListener('slotOnload', function(event) {
          cLog('slotOnload');
          cLog(event);
//          _logTargeting(event);
//          _verifyPrebid(event);
        });
/*
        var _verifyPrebid = function(e) {
          eventLog(`pre-bidder - checking cached bids `, `color:darkred`);
          let adId = e.slot.getTargeting('hb_adid');
          let pb = e.slot.getTargeting('hb_pb');
          if (adId && pb) {
            if (_isPreviousBid(adId)) {//previousBids.includes(e.adId)) {
              for (var n = 0; n < previousBids.length; n++) {
                if (previousBids[n].adId != adId || previousWinningBids.includes(previousBids[n].adId))
                  continue;
                if (previousBids[n].cpm > pb) {
                  eventLog(`pre-bidder - HIGHER CPM FOUND ${previousBids[n].adId} - ${previousBids[n].cpm}`, `color:black; background: yellow;`);
                  break;
                }
              }
            }
          }
        };

        var _logTargeting = function(event) {
          if (widgetConfig.traceLevel < 4)
            return;
          eventLog(`pre-bidder - Logging slot targeting `, `color:red`);
          let targets = event.slot.getTargetingKeys();
          let output = [];
          for (var i = 0; i < targets.length; i++) {
            let t = event.slot.getTargeting(targets[i]);
            let k = targets[i];
            output.push({
              key: k, value: t[0]
            });
          }
          if (output.length) {
            if (console.table) {
              console.table(output);
            } else {
              for (var j = 0; j < output.length; j++) {
                console.log(output[j]);
              }
            }
          } else {
            console.warn('No prebid winners');
          }
        };
*/
        // window.googletag.pubads().addEventListener('slotVisibilityChanged', function(event) {
        //     // _showDisplayAdUnit();

        //     cLog('slotVisibilityChanged');
        //     cLog(event);
        // });
        window.googletag.enableServices();
      });

      // Push ad to div
      window.googletag.cmd.push(function() {
        window.googletag.display(widgetConfig.displayAdId);
      });
    }

    var _showSlides = function(userHasScrolled = false) {
      trace('_showSlides called', 'info');
      clearTimer(_showSlidesTimeoutTimer);

      // Hide Display Ad Container
      _slideShowCont.style.display = 'block';
      if (_displayAdCont) {
        _displayAdCont.style.display = 'none';
      }
      // Clear all Ad Slots
      _clearDisplayAd()
      if (!userHasScrolled) {
        if (isVideoAdReady()) {
          trace('resuming video after display ad', 'info');
          _currentFocus = 'videoAd';
          _showVideoUnit();
        } else {
          _nextSlide();
          _requestAds();
        }
      }
    };

    let _clearDisplayAd = () => {
      _displayAdHasRendered = false;
      // Clear all Ad Slots
      window.googletag.pubads().clear([_smbDispSlot]);
  }

    var _showDisplayAdUnit = function() {
      // cLog('Show Display')
      trace('showDisplayAd start', 'info')
      _currentFocus = 'displayAd';
      _displayAdHasRendered = false;
      // show ad unit container
      if (_displayAdCont)
        _displayAdCont.style.display = 'block';
      _slideShowCont.style.display = 'none';
      //_validateAdDisplayedTimer = setTimeout(_validateAdDisplayed, 2000);
      _stopSlide();

      clearTimer(_showSlidesTimeoutTimer);
      _showSlidesTimeoutTimer = setTimeout(_showSlides, _displayAdInterval);
      trace('showDisplayAd end - showing for : ' + _displayAdInterval, 'info')
    };

    var _requestDisplayAd = function() { //_isValidForDisplayAdRequest
      trace(` _isValidForDisplayAdRequest = ${_isValidForDisplayAdRequest()}`, 'info')
      if (widgetConfig.displayAdEnabled && _isValidForDisplayAdRequest()) {
        cLog('Requesting displayAd. tag = ' + widgetConfig.displayAdId);
        refreshSlot(_smbDispSlot);
      }
    };

    var _resetAdInterval = function(slot) {
      _displayAdInterval = widgetConfig.displayAdTimeout;
      trace(`Interval reset to ${_displayAdInterval}`, `info`);
    }

    // *
    // VIDEO PLAYER FUNCTIONS
    // *
    var _playerElementIdPrefix = 'smb-vd-player-',
      _showVideoAd = false

    var _bind = function(el, evt, fcn) {
      el[window.addEventListener ? 'addEventListener' : 'attachEvent'](window.addEventListener ? evt : 'on' + evt, fcn, false);
    };

    var _createVideoUnit = function() {
      var adUnitCont = el.create('div', {
        className: widgetVideoContClass
      });
      adUnitCont.style.display = 'block';
      _setupLKQDVideoPlayer();
    };

    // Deconstruct video ad tag for MOAT ids
    var _tagDeconstruct = function() {
      if (widgetConfig.videoTag.indexOf('pubads') > -1)
        return _tagInfo = {
          id: widgetConfig.videoTag.split('/')[6].split('&')[0],
          AdServer: 'DFP'
        };
      else if (widgetConfig.videoTag.indexOf("springserve") > -1)
        return _tagInfo = {
          id: widgetConfig.videoTag.split('/')[4].split('?')[0],
          AdServer: 'SpringServe'
        };
      else if (widgetConfig.videoTag.indexOf("lkqd") > -1)
        return _tagInfo = {
          id: widgetConfig.videoTag.split('=')[2].split('&')[0],
          AdServer: 'LKQD'
        };
      else
        return _tagInfo = {
          id: "",
          AdServer: ""
        };
    };

    var _setupLKQDVideoPlayer = function() {
      if (_isMobileDevice()) {
        widgetConfig.isMuted = true;
      }
      _tagDeconstruct();

      _moatIds = {
        "level1": widgetConfig.partnerName,
        "level2": 'widget/gpt/300x250',
        "level3": _tagInfo.AdServer,
        "level4": _tagInfo.id,
        "slicer1": widgetConfig.videoRequestType
      };

      //var moatApi = null,
      //    moatMute = null;

      var lkqdSettings = {
        pid: 437, //21=lkqd sample
        sid: widgetConfig.videoId, // 71907=lkqd sample,
        //              pid: 21,
        //        			sid: 71907,
        playerContainerId: 'smbPlayer',
        playerId: '',
        playerWidth: 300,
        playerHeight: 250,
        execution: 'inbanner',
        placement: '',
        passbackFirst: false,
        playInitiation: 'auto',
        volume: 0,
        pageUrl: '',
        trackImp: '',
        trackClick: '',
        custom1: '',
        custom2: '',
        custom3: '',
        pubMacros: '',
        dfp: false,
        gdpr: '',
        gdprcs: '',
        lkqdId: new Date().getTime().toString() + Math.round(Math.random() * 1000000000).toString(),
        supplyContentVideo: {
          url: '',
          clickurl: '',
          play: 'pre'
        }
      };

      trace(`LKQD Player init (${widgetConfig.partnerName}) - sid: ${lkqdSettings.sid}`, `info`);
      var creativeData = '';
      if (!document.getElementById(lkqdSettings.playerContainerId)) {
        try {
          if (document.readyState && document.readyState != 'complete' && document.readyState != 'interactive') {
            document.write('<div id=' + lkqdSettings.playerContainerId + '></div>');
          }
        } catch (e) {}
      }
      var environmentVars = {
        slot: document.getElementById(lkqdSettings.playerContainerId),
        videoSlot: document.getElementById(lkqdSettings.playerId),
        videoSlotCanAutoPlay: true,
        lkqdSettings: lkqdSettings
      };

      function onVPAIDLoad() {
        // vpaid EVENTS
        lkqdVPAID.subscribe(function() {
          cLog('LK - AdLoadFailure');
          //trackHit("AdLoadFailure");
        }, 'AdLoadFailure');
        lkqdVPAID.subscribe(function() {
          cLog('LK - AdNotViewable');
          _isVideoContainerViewable = false;
        }, 'AdNotViewable');
        lkqdVPAID.subscribe(function() {
          cLog('LK - Viewability');
        }, 'Viewability');
        lkqdVPAID.subscribe(function() {
          cLog('LK - AdUnmeasurable');
        }, 'AdUnmeasurable');
        //          		lkqdVPAID.subscribe(function(){ cLog('AdOpportunity'); }, 'AdOpportunity');
        lkqdVPAID.subscribe(function() {
          cLog('LK - AdNonOpportunity');
        }, 'AdNonOpportunity');
        lkqdVPAID.subscribe(function() {
          cLog('LK - AdUnavailable');
        }, 'AdUnavailable');
        lkqdVPAID.subscribe(function() {
          cLog('LK - AdAvailable');
        }, 'AdAvailable');
        lkqdVPAID.subscribe(function() {
          cLog('LK - AdUnavailableTimeout');
        }, 'AdUnavailableTimeout');
        lkqdVPAID.subscribe(function() {
          cLog('LK - AdUnavailableNonSuccess');
        }, 'AdUnavailableNonSuccess');
        lkqdVPAID.subscribe(function() {
          cLog('LK - AdUnavailableAborted');
        }, 'AdUnavailableAborted');
        lkqdVPAID.subscribe(function() {
          cLog('LK - AdAvailableHeaderBidding');
        }, 'AdAvailableHeaderBidding');
        lkqdVPAID.subscribe(function() {
          cLog('LK - AdUnavailableHeaderBidding');
        }, 'AdUnavailableHeaderBidding');
        lkqdVPAID.subscribe(function() {
          cLog('LK - ContentVideoStart');
        }, 'ContentVideoStart');
        lkqdVPAID.subscribe(function() {
          cLog('LK - ContentVideoComplete');
        }, 'ContentVideoComplete');

        lkqdVPAID.subscribe(function() {
          cLog('LK - AdViewable');
          _isVideoContainerViewable = true;
          //if (_videoState == 'AdPaused')
          //  lkqdVPAID.resumeAd();
        }, 'AdViewable');

        lkqdVPAID.subscribe(function() {
          cLog('LK - AdOpportunity');
          if (_showVideoAd) // catchall in case AdVideoComplete was not raised and able to hide the video container
            _hideVideoUnit();
        }, 'AdOpportunity');

        lkqdVPAID.subscribe(function() {
          cLog('LK - AdLoaded');
          //                if (_showVideoAd && _videoState=='AdPlaying') {
          //                  cLog('end video hack');
          //                  _endVideoPlay();
          //                }
          _videoState = 'AdLoaded';
          _videoAdIsLoaded = false;
          lkqdVPAID.startAd();
        }, 'AdLoaded');

        lkqdVPAID.subscribe(function() {
          cLog('LK - AdStarted');
          _videoState = 'AdStarted';
          _videoCount++;
          eventLog('AdStarted event -- viewable=' + _isPlayerViewable() + '  //  playerState =' + _videoState  + '  //  cnt =' + _videoCount, `color:blue`);
          _videoAdIsLoaded = true;
          _moatApi = null; // force reinit
          /*          if (!videoFound) {
                      videoFound = true;
                      let nowTime = new Date().getTime();
                      let timediff = (nowTime - videoInitTimeStamp.getTime()) /1000;
                      trackHit(`${_lkqdPlayerId}-1st Vid ${timediff} sec - dispAd Cnt = ${_displayAdRequestCount}`);
                    } */
          if (widgetConfig.isMuted == true)
            lkqdVPAID.setAdVolume(0);

          if (!widgetConfig.startWhenViewable) {
            // showDisplayAd check to see if display is showing, then pause.
            if (_currentFocus == 'displayAd') {
              trace(`Video loaded -- will resume after disp ad - showing now`, `info`);
              //_videoCont.style.display = 'none';
              //pauseVideo();
              _showVideoUnit(); // test
            } else {
              _showVideoUnit(); // ONLY for Play out of view
            }
          } else { // wait until viewable
            if (!_isPlayerViewable()) {
              trace(`Video loaded -- pausing player out of view`, `info`);
              pauseVideo();
              _showVideoUnit(); // will start playing when it comes into view
            } else { // player is viewable
              if (_currentFocus == 'displayAd') {
                _videoCont.style.display = 'none';
                pauseVideo();
                trace(`Video loaded -- will resume after disp ad`, `info`);
              } else
                _showVideoUnit();
            }
          }
        }, 'AdStarted');

        lkqdVPAID.subscribe(function() {
          cLog('LK - AdImpression');
        }, 'AdImpression');

        lkqdVPAID.subscribe(function() {
          cLog('LK - AdVideoStart.  State : ' + _videoState);
          if (_currentFocus != 'videoAd')
            pauseVideo();
        }, 'AdVideoStart');

        lkqdVPAID.subscribe(function() {
          cLog('LK - AdVideoFirstQuartile');
          raiseMoatEvent('AdVideoFirstQuartile', lkqdVPAID.getAdVolume());
        }, 'AdVideoFirstQuartile');
        lkqdVPAID.subscribe(function() {
          cLog('LK - AdVideoMidpoint');
          raiseMoatEvent('AdVideoMidpoint', lkqdVPAID.getAdVolume());
        }, 'AdVideoMidpoint');
        lkqdVPAID.subscribe(function() {
          cLog('LK - AdVideoThirdQuartile');
          raiseMoatEvent('AdVideoThirdQuartile', lkqdVPAID.getAdVolume());
        }, 'AdVideoThirdQuartile');

        lkqdVPAID.subscribe(function() {
          cLog('LK - AdVideoComplete');
          _videoState = 'AdVideoComplete';
          raiseMoatEvent('AdVideoComplete', lkqdVPAID.getAdVolume());
          _hideVideoUnit();
        }, 'AdVideoComplete');

        lkqdVPAID.subscribe(function() {
          cLog('LK - AdPlaying');
          _videoState = 'AdPlaying';
        }, 'AdPlaying');
        lkqdVPAID.subscribe(function() {
          cLog('LK - AdStopped');
          _videoState = 'AdStopped';
        }, 'AdStopped');
        lkqdVPAID.subscribe(function() {
          cLog('LK - AdPaused');
          _videoState = 'AdPaused';
          raiseMoatEvent('AdPaused', lkqdVPAID.getAdVolume());
        }, 'AdPaused');
        lkqdVPAID.subscribe(function() {
          cLog('LK - AdError');
          _videoState = 'AdError';
        }, 'AdError');

      }
      var pauseVideo = function() {
        lkqdVPAID.pauseAd();
        if (_displayAdInterval > 25000)
          _pauseAdTimer = setTimeout(function() {
            lkqdVPAID.pauseAd();
          }, 20000); // hack to deal with player error if ad is pauseed longer than 30 sec.
      };
      vpaidFrame = document.createElement('iframe');
      vpaidFrame.id = lkqdSettings.lkqdId;
      vpaidFrame.name = lkqdSettings.lkqdId;
      vpaidFrame.style.display = 'none';
      /*
            var vpaidFrameLoaded = function() {
              var vpaidLoader = vpaidFrame.contentWindow.document.createElement('script');
              vpaidLoader.src = 'https://ad.lkqd.net/vpaid/formats.js?pid=437&sid=819839';  // https://v.lkqd.net/ad?pid=437&sid=819839
              vpaidLoader.onload = function() {
                lkqdVPAID = vpaidFrame.contentWindow.getVPAIDAd();
                onVPAIDLoad();
                lkqdVPAID.handshakeVersion('2.0');
                lkqdVPAID.initAd(lkqdSettings.playerWidth, lkqdSettings.playerHeight, 'normal', 600, creativeData, environmentVars);
              };
              vpaidFrame.contentWindow.document.body.appendChild(vpaidLoader);
            };
      */
      var vpaidFrameLoaded = function() {
        vpaidFrame.contentWindow.addEventListener('lkqdFormatsLoad', function() {
          lkqdVPAID = vpaidFrame.contentWindow.getVPAIDAd();
          onVPAIDLoad();
          lkqdVPAID.handshakeVersion('2.0');
          setTimeout(function() {
            lkqdVPAID.initAd(lkqdSettings.playerWidth, lkqdSettings.playerHeight, 'normal', 600, creativeData, environmentVars);
          }, widgetConfig.videoInitDelayInMS);

        });
        var vpaidLoader = vpaidFrame.contentWindow.document.createElement('script');
        vpaidLoader.setAttribute('async', 'async');
        vpaidLoader.src = 'https://ad.lkqd.net/vpaid/formats.js';
        vpaidFrame.contentWindow.document.body.appendChild(vpaidLoader);
      };

      var vpaidFrameLoadedError = function() {
        cLog("init err");
        //trackHit(`LKQD Player init error (${widgetConfig.partnerName})`);
      };
      vpaidFrame.onload = vpaidFrameLoaded;
      vpaidFrame.onerror = vpaidFrameLoadedError;
      _videoCont.appendChild(vpaidFrame);
      //document.getElementById("player").appendChild(vpaidFrame);

    }; // end _setupLKQDVideoPlayer

    var _isVideoPlayable = function() {
      return (_videoState == "AdStarted" || _videoState == "AdPlaying" || _videoState == "AdPaused")
    }

    var _showVideoUnit = function() {
      trace('start showVideoUnit', 'info');
      if (widgetConfig.videoAdEnabled) {
        if (_currentFocus == 'displayAd') { // allow display ads to complete
          eventLog('postpone video play until display ad done');
          if (_videoState == 'adPlaying'  || _videoState == 'adStarted')
            lkqdVPAID.pauseAd();
          _videoCont.style.display = 'none';
          return;
        }

/*        if (_displayAdHasRendered) {
          trace('Skipping wait for display ad to finish', `info`);
          _displayAdHasRendered = false;
          //return;
        }
*/
        _stopSlide();
        clearTimer(_displayAdTimeout); // make sure timer is not running.
        clearTimer(_pauseAdTimer);

        cLog('showing video unit. state = ' + _videoState);
        _currentFocus = 'videoAd';
        _showVideoAd = true;
        if (_displayAdCont) {
          _displayAdCont.style.display = 'none';
          _displayAdCont.style.zIndex = _hideZindex;
        }
        _slideShowCont.style.display = "none"; // hide slide container
        _slideShowCont.style.zIndex = _hideZindex;
        _videoCont.style.display = 'block';
        _videoCont.style.zIndex = _showZindex;

        // if (_isPlayerViewable() && playerState == 'paused') { // TEMP
        if (_videoState == 'AdPaused' && (!widgetConfig.startWhenViewable || _isPlayerViewable())) {
          trace('resuming (playing) ready video in showVideoUnit', 'info');
          _initMoatOnAdTime = true;
          lkqdVPAID.resumeAd();
        }

        if (!_moatApi) { //} && _initMoatOnAdTime) {
          _moatApi = initMoatTracking(document.getElementById('smbPlayer'), _moatIds, lkqdVPAID.getAdDuration(), 'saambaajsvidint907431712010', widgetConfig.videoTag); // was e.Tag (FIND THIS)
        }
        raiseMoatEvent('AdVideoStart', lkqdVPAID.getAdVolume());

      } else { // skip video if tag is blank
        cLog('Video not enabled, skipping video');
        _hideVideoUnit();
      }
    };

    var _isSlideShowViewable = function() {
      return (_isElementVisible(document.getElementById(widgetItemContId)));
    }

    var _isPlayerViewable = function() {
        return _isVideoContainerViewable;
    }

    var _isElementVisible = function(el) {
      if (widgetConfig.visibility == '50') {
        var rect = el.getBoundingClientRect(),
          vWidth = window.innerWidth || doc.documentElement.clientWidth,
          vHeight = window.innerHeight || doc.documentElement.clientHeight,
          efp = function(x, y) {
            return document.elementFromPoint(x, y)
          };

        // Return false if it's not in the viewport
        if (rect.right < 0 || rect.bottom < 0 || rect.left > vWidth || rect.top > vHeight)
          return false;

        // Return true if any of its four corners are visible
        return (
          el.contains(efp(rect.left, rect.top)) ||
          el.contains(efp(rect.right, rect.top)) ||
          el.contains(efp(rect.right, rect.bottom)) ||
          el.contains(efp(rect.left, rect.bottom)));
      } else {
        var elemTop = el.getBoundingClientRect().top;
        var elemBottom = el.getBoundingClientRect().bottom;

        var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        return isVisible;
      }
    }

    var _isIphone = function() {
      return ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPad/i)));
    }

    var _hideVideoUnit = function(userHasScrolled = false) {
      trace('Hiding Video', 'info');
      _showVideoAd = false;

      if (_videoCont)
        _videoCont.style.zIndex = _hideZindex;
      _slideShowCont.style.display = 'block';
      if (!userHasScrolled) {
        _nextSlide();
        _requestAds();
      }
    };

    // *
    // WIDGET FUNCTIONS
    // *
    var _getSelectedMarketInfo = function(e) {
      var markets = e && e.target;

      if (e)
        markets = markets.options;
      else
        markets = _marketSelect.options;

      for (var i = 0; i < markets.length; i++) {
        var market = markets[i];

        if (market.selected) {
          var marketInfo = {
            marketId: parseInt(market.value),
            marketName: market.innerHTML
          };
          return marketInfo;
        }
      }
    };

    // support for pause/play the player based on browser tab in view.
    (function() {
      var hidden = "hidden";

      // Standards:
      if (hidden in document)
        document.addEventListener("visibilitychange", onchange);
      else if ((hidden = "mozHidden") in document)
        document.addEventListener("mozvisibilitychange", onchange);
      else if ((hidden = "webkitHidden") in document)
        document.addEventListener("webkitvisibilitychange", onchange);
      else if ((hidden = "msHidden") in document)
        document.addEventListener("msvisibilitychange", onchange); // IE 9 and lower:
      else if ("onfocusin" in document)
        document.onfocusin = document.onfocusout = onchange; // All others:
      else
        window.onpageshow = window.onpagehide = window.onfocus = window.onblur = onchange;

      function onchange(evt) {
        var v = "visible",
          h = "hidden",
          evtMap = {
            focus: v,
            focusin: v,
            pageshow: v,
            blur: h,
            focusout: h,
            pagehide: h
          };

        evt = evt || window.event;

      }

      // set the initial state (but only if browser supports the Page Visibility API)
      if (document[hidden] !== undefined)
        onchange({
          type: document[hidden] ? "blur" : "focus"
        });
    })();

    var _trimString = function(str, len) {
      if (str.length > len)
        return str.substring(0, len);
      else
        return str;
    };

    // EVENTS
    var _displayAdRequestTimeout = function() {
      clearTimer(_requestDisplayAdTimeoutTimer);
      if (widgetConfig.useSession && widgetConfig.maxDisplayAdRequests > 0) { // if session timeout then reset it
        var isoSetTime = Date.now();
        sessionStorage.setItem(_displayAdTimeSessionKey, isoSetTime);
        resetDisplayAdRequestCount();
        widgetConfig.displayAdEnabled = true; // this event could only be fired if enabled by default so re-enable
        _requestDisplayAdTimeoutTimer = setTimeout(_displayAdRequestTimeout, widgetConfig.maxDisplayAdRequestTimeInSec * 1000);
        trace(`Re-set dispAd time to ${isoSetTime}`, 'warn')
      } else {
        trace(`Timeout - Disabling display ad requests`, 'warn')
        widgetConfig.displayAdEnabled = false;
      }
    };

    var _videoAdRequestTimeout = function() {
      clearTimer(_requestVideoTimeoutTimer);
      if (widgetConfig.useSession && widgetConfig.maxVideoAdRequests > 0) { // if session timeout then reset it
        var isoSetTime = Date.now();
        sessionStorage.setItem(_videoAdTimeSessionKey, isoSetTime);
        sessionStorage.setItem(_videoAdRequestCountSessionKey, '0');
        _videoAdRequestCount = 0;
        widgetConfig.videoAdEnabled = true; // this event could only be fired if enabled by default so re-enable
        _requestVideoTimeoutTimer = setTimeout(_videoAdRequestTimeout, widgetConfig.maxVideoAdRequestTimeInSec * 1000);
        trace(`Re-set video time to ${isoSetTime}`, 'warn')
      } else {
        trace(`Timeout - Disabling video ad requests`, 'warn')
        widgetConfig.videoAdEnabled = false;
      }
    };

    var _onMarketChange = function(market) {
      _currentMarketId = market;
      _getPosts();
    };

    var _onSlideChange = function(count) {
      cLog('onSlideChange start');

      _slideShowCont.style.zIndex = _showZindex;

      if (_isValidForVideoAdRequest()) {
        if (isVideoAdReady()) {
          trace('showing ad found between slides', 'info');
          _showVideoUnit();
          return;
        }
      }
      if (_requestAdsAfterLoad() && _widgetLoaded == false) {
        _widgetLoaded = true; // fallback - should only hit this if widget was loaded to late to get the onload event
        //_requestAds();
      }

      var showIdx = count < _slideMaxCount ? count : _slideMaxCount;
      //cLog('Slide count = ' + _slideIndex % showIdx);
      if ((widgetConfig.displayAdEnabled && _displayAdHasRendered)) { // && ((_slideIndex % showIdx === 0) || (_isSlideShowViewable() == false))) {
        if (_showVideoAd == true)
          return; // we are already showing videoad
        _showDisplayAdUnit();
      } else {
        _nextSlide()
        _requestAds();
      }
    };

    var isVideoAdReady = function() {
      try {
        return (_videoAdIsLoaded && _isVideoPlayable()); // _adIsLoaded is used to differentiate between and ad play and black video play.
      } catch (err) {
        return false; // player disabled in config
      }
    };

    var _requestAds = function() {
      if (_widgetLoaded) {
        if ('displayAdEnabled' in widgetConfig && !_displayAdHasRendered) {
          if ('preBidEnabled' in widgetConfig && !_prebidInitialized) {
            _prebidInitialized = true;
            _initPrebid();
          }
          setTimeout(_requestDisplayAd, .5 * 1000);
        }
      } else {
        setTimeout(_requestAds, .5 * 1000);
      }
    };

    var _requestAdsAfterLoad = function() {
      return (widgetConfig.optimizationLevel > 1);
    };

    var _trimString = function(str, len) {
      if (str.length > len)
        return str.substring(0, len);
      else
        return str;
    };

    // PUBLIC
    return {
      // Bootstraps app
      init: function(widget, config) {
        _widget = widget;
        _config = config;
        _createAnalytics();
        _createWidget();
        //trackHit('Widget loaded - ' + _config.partnerName);
      },
    }; // end public
  })(); // end module

  // *
  // Init widget after script dependencies have loaded
  // *
  var cbName = '__smbldr' + Math.round(Math.random() * 1000000), // jsonp callback
    cbConfigName = '__smbcfgldr' + Math.round(Math.random() * 1000000), // jsonp callback
    widgetCont = el.getByClassName(document, widgetClass)[0], // need the widget container to get data src
    widgetConfig = {
      partnerId: 0,
      channelId: 0,
      partnerName: widgetCont.getAttribute('data-smb-partner-id') ? widgetCont.getAttribute('data-smb-partner-id') : '',
      playerId: widgetCont.getAttribute('data-smb-vid-player'),
      defaultSize: widgetCont.getAttribute('data-smb-size') ? widgetCont.getAttribute('data-smb-size') : '',
      marketId: widgetCont.getAttribute('data-dma') ? widgetCont.getAttribute('data-dma') : '0',
      isMuted: 0,
      volume: 1,
      videoRequestType: "vast",
      hoverUnMute: false,
      startWhenViewable: false,
      traceLevel: 0,
      visibility: 50,
      displayAdEnabled: false,
      videoAdEnabled: false,
      preBidEnabled: true,
      useSession: false,
      useAdFilter: false,
      displayAdTimeout: 10 * 1000,
      prebidTimeout: 700,
      maxDisplayAdRequests: 0,
      maxDisplayAdRequestTimeInSec: 0,
      maxVideoAdRequests: 0,
      maxVideoAdRequestTimeInSec: 0,
      maxPosts: 20,
      optimizationLevel: 0,
      analyticsSiteId: 0,
      videoFile: 'https://saambaa-static.azureedge.net/JyRhjVLe-30100108.mp4',
      videoId: '',
      videoTag: '',
      videoInitDelayInMS: 200,
      displayAdId: '',
      displayAdSlot: '',
      bidders: [],
      bidCpms: null,
      slideTimeInSec: 5,
      autoScrollEnabled: true,

    };
  // Load all style assets dynamically
  var stylesToLoad = [{
    id: fontStyleId,
    href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,700'
  }, {
    id: widgetSelecStyleId,
    href: assetBaseUrl + '/assets/select.css'
  }, {
    id: widgetStyleId,
    href: assetBaseUrl + '/assets/smb-dispVidAd_300x250' + widgetConfig.defaultSize + '.css'
  }];
  stylesLoader(stylesToLoad);

  var trackHit = function(msg) {
    if (widgetConfig.traceLevel > 5) {
      //api.saambaa.com/track/hit?adId=5&marketID=1&widget="localstack"
      let marketId = widgetConfig.marketId;
      //if (_currentMarketId && _currentMarketId != 0)
      //	marketId = _currentMarketId;
      let widgetStr = widgetStyle + '-' + msg;
      var pid = (widgetConfig.partnerId == 0 || 1) ? 5 : widgetConfig.partnerId;
      cLog('partnerId=' + pid + ', track = ' + widgetStr);
      _execJsonReq('POST', apiBaseUrl + '/track/hit?adId=' + pid + '&marketID=' + marketId + '&widget=' + widgetStr, function(data) {
        cLog('hit track = ' + JSON.stringify(data));
      });
    }
  };

  var formatBids = function(bids) {
    var preBids = [];
    if (bids && bids.constructor === Array) {
      let sep = '';
      let bidStr = '';
      for (var i in bids) {
        bidStr = bidStr + sep + bids[i].Value;
        sep = ',';
      }
      preBids = JSON.parse(`[${bidStr}]`);
    }
    return preBids;
  };

  var formatCPMs = function(vals) {
    var CPMs = null;
    if (vals && vals.constructor === Array) {
      for (var i in vals) {
        if (typeof vals[i].Key !== "undefined" && vals[i].Key == "BidCpmAdjustment") {
          CPMs = JSON.parse(vals[i].Value);
          break;
        }
      }
    }
    return CPMs;
  };

  var isPrebidEnabled = function(prebidConfig) {
    if (prebidConfig && prebidConfig.constructor === Array)
      return ((prebidConfig.length > 0) && (prebidConfig[0].Key != "undefined") && (prebidConfig[0].Key != "disabled"));
    else
      return false;
  };

  var getVideoIdFromTag = function(str) {
    let vidId = null;
    if (str != null) {
      let idx = str.indexOf('&sid=') + 5;
      if (idx > 0)
        vidId = str.substring(idx, idx + 6);
    }
    return vidId;
  };

  var getPartnerName = function(overrideName) {
    let partnerName = overrideName ? overrideName : location.host.split(".").slice(-2,-1).toString();
    if (!partnerName || (partnerName && partnerName.includes('google'))) {  // account for safeframe
      let domain = document.referrer.split('/')[2];
      partnerName = domain.split(".").slice(-2,-1);
    }
    return partnerName.toString();
  };

  // gets widget configuration settings
  window[cbName] = function(data) {
    widgetConfig.partnerId = 141; //parseInt(data.partner);
    widgetConfig.channelId = 34076; //parseInt(data.channel);
    widgetConfig.marketId = (widgetConfig.marketId == 0) ? parseInt(data.market) : widgetConfig.marketId;
    if (widgetConfig.marketId == 0) {
      cLog('Err setting marketId');
      //trackHit('marketId - geo loc fail');
    }
  };

  window[cbConfigName] = function(data) {
    widgetConfig.partnerId = data.PartnerId;
    widgetConfig.channelId = data.ChannelId;
    widgetConfig.marketId = (data.MarketId != 0) ? data.MarketId : widgetConfig.marketId;
    widgetConfig.isMuted = data.IsMuted;
    widgetConfig.volume = parseInt(data.Volume);
    widgetConfig.videoRequestType = data.VideoRequestType;
    widgetConfig.hoverUnMute = data.HoverUnMute;
    widgetConfig.startWhenViewable = data.StartWhenViewable;
    widgetConfig.preBidEnabled = isPrebidEnabled(data.PreBids);
    widgetConfig.traceLevel = (window.location.href.indexOf('saambaa') > 0) ? 6 : data.TraceLevel;
    widgetConfig.visibility = data.Visibility;
    widgetConfig.videoTag = data.VideoTag;
    widgetConfig.displayAdEnabled = data.IsDisplayAdEnabled;
    widgetConfig.videoAdEnabled = (data.IsVideoEnabled && (widgetConfig.videoTag != null && widgetConfig.videoTag.length > 3));
    widgetConfig.maxDisplayAdRequests = data.MaxDisplayAdRequests;
    widgetConfig.maxDisplayAdRequestTimeInSec = data.MaxDisplayAdRequestTimeInSec;
    widgetConfig.maxVideoAdRequests = data.MaxVideoAdRequests;
    widgetConfig.maxVideoAdRequestTimeInSec = data.MaxVideoAdRequestTimeInSec;
    widgetConfig.maxPosts = data.MaxPosts;
    widgetConfig.optimizationLevel = data.OptimizationLevel;
    widgetConfig.analyticsSiteId = data.AnalyticsSiteId;
    widgetConfig.displayAdId = data.DisplayAdId;
    widgetConfig.displayAdSlot = data.DisplayAdSlot;
    widgetConfig.displayAdTimeout = data.DisplayAdTimeout * 1000;
    widgetConfig.useSession = data.UseSession;
    widgetConfig.useAdFilter = data.UseAdFilter;
    widgetConfig.prebidTimeout = data.PrebidTimeout;
    widgetConfig.slideTimeInSec = data.SlideTimeInSec;
    widgetConfig.autoScrollEnabled = data.SlideTimeInSec != 0;

    //widgetConfig.videoFile = data.VideoFile;  // the black video used after ad
    widgetConfig.videoId = getVideoIdFromTag(data.VideoTag);
    widgetConfig.videoInitDelayInMS = data.OptimizationLevel > 1 ? 2000 : 200;
    widgetConfig.preBids = formatBids(data.PreBids);
    widgetConfig.bidCpms = formatCPMs(data.PreBidConfigs);
    if (widgetConfig.preBids === undefined || widgetConfig.preBids.length == 0) {
      console.error('invalid prebid settings, disabling displayAds!');
      widgetConfig.displayAdEnabled = false;
    }
    //if (widgetConfig.marketId == 0) {
    //	cLog('Err setting marketId');
    //	trackHit('marketId - property fail');
    //}
  };

  widgetConfig.partnerName = getPartnerName(widgetConfig.partnerName);

  widgetConfig.playerId = 'smRnsmTB'; //'nhI3wNRn';
  cLog('PartnerName = ' + widgetConfig.partnerName + ', PlayerId = ' + widgetConfig.playerId);
  let dmaParam = (widgetConfig.marketId != 0) ? '&dma=' + widgetConfig.marketId : '';

  var prebidjsFile = 'smb-prebid.js';
//  if (widgetConfig.partnerName == 'mandatory' || widgetConfig.partnerName == 'ebaumsworld' || widgetConfig.partnerName == 'weatherbug' || widgetConfig.partnerName == 'latimes' || widgetConfig.partnerName == 'dallasnews' ) {
//    testCase = true;
//  }
  scriptsToLoadHead
  var scriptsToLoadHead = [{
    id: cbConfigName,
    src: apiBaseUrl + '/properties/' + widgetConfig.partnerName + '?callback=' + cbConfigName + '&wtype=' + widgetStyle + '&isMobile=' + _isMobileDevice() + dmaParam
  }, {
    id: googTagLibId,
    src: 'https://www.googletagservices.com/tag/js/gpt.js'
  }, {
    id: smbPrebid,
    src: '//saambaa.com/assets/js/' + prebidjsFile
  }, {
    id: cbName,
    src: '//saambaa.com/partner-status?callback=' + cbName + '&dataSrc=' + encodeURIComponent(widgetCont.getAttribute('data-src'))
  }, {
    id: 'googleAnalytics',
    src: 'https://www.google-analytics.com/analytics.js'
  }];

  scriptsLoader(scriptsToLoadHead, function() {
    DisplayWidget.init(widgetCont, widgetConfig);
  });
})();
