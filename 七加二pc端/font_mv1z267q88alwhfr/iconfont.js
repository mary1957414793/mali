;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-shuaxin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M985.1958 406.6762l-248.2526-74.2131L792.2661 282.9474c-66.5196-81.408-167.3566-133.6051-280.6973-133.6051-200.5288 0-363.0754 162.56-363.0754 363.0888 0 200.5423 162.5465 363.0888 363.0754 363.0888s363.0888-162.5465 363.0888-363.0888c0-3.3415-0.4042-6.5886-0.4985-9.9032l109.2177 38.5482c-14.8211 247.7406-220.3486 444.1061-471.8215 444.1061-261.0931 0-472.7512-211.6581-472.7512-472.7646 0-261.0931 211.6581-472.7512 472.7512-472.7512 145.7853 0 276.0623 66.0749 362.7924 169.8223l68.8236-61.6152L985.1958 406.6762z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-search1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M910.252865 846.468654 741.313198 677.527964c45.934169-59.95244 73.253374-134.922922 73.253374-216.288045 0-196.584284-159.360498-355.943758-355.944781-355.943758s-355.944781 159.359474-355.944781 355.943758S262.037507 817.184701 458.62179 817.184701c83.984786 0 161.166633-29.104875 222.042095-77.753875l168.313404 168.319543c8.463766 8.456602 19.545148 12.687974 30.640857 12.687974 11.083429 0 22.178115-4.232394 30.634718-12.687974C927.179372 890.823861 927.179372 863.395162 910.252865 846.468654L910.252865 846.468654zM268.205996 651.656737c-50.862411-50.861388-78.871325-118.486578-78.871325-190.416817 0-71.930239 28.008914-139.553383 78.871325-190.415794s118.485555-78.870302 190.415794-78.870302 139.553383 28.015054 190.408631 78.870302c50.862411 50.862411 78.877465 118.485555 78.877465 190.415794 0 71.930239-28.015054 139.554406-78.870302 190.416817-50.862411 50.854225-118.485555 78.869279-190.415794 78.869279S319.068408 702.510962 268.205996 651.656737L268.205996 651.656737zM268.205996 651.656737"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-arrow_up" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M492.737796 287.401686 71.547011 708.594517c0.071631-0.001023 0.151449 0.005117 0.224104 0.004093-4.548596 3.868097-7.442506 9.623171-7.442506 16.063861 0 11.650341 9.444093 21.094434 21.095457 21.094434 6.640234 0 12.555967-3.075035 16.423041-7.872295l0.021489 0.031722 393.575844-393.575844c18.107403-13.616112 33.409924 0.182149 33.534767 0.292666l392.724453 392.724453 0.146333-0.190335c3.855818 5.024433 9.903557 8.277524 16.726963 8.277524 11.651364 0 21.094434-9.444093 21.094434-21.094434 0-5.350868-2.007727-10.221806-5.291516-13.9405l0.023536 0-0.272199-0.272199c-0.426719-0.466628-0.873903-0.914836-1.340531-1.341554L528.647657 284.658202l-0.14224 0.107447c-4.380774-4.036943-10.213619-6.523577-16.638959-6.523577C504.133334 278.243095 497.243413 281.820574 492.737796 287.401686z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangxia2" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M510.015809 832.411497 62.885236 393.44486 91.561345 364.235608 509.891989 774.929318 924.561243 364.29803 953.362196 393.382439Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)