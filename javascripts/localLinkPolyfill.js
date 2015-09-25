$(function() {
  var localLinkPolyfill = function() {

    // First write a RegExp to match URL parts
    var reURL = /^(?:(https?:)\/\/)?((?:[0-9a-z\.\-]+)(?::(?:\d+))?)/;

    // Then extend jQuery's selector engine to target local links
    $.extend($.expr[':'], {
      "local-link": function(el) {
        var url = reURL.exec(el.href),
        protocol = url[1],
        host = url[2];
        return protocol == location.protocol && host == location.host;
      }
    });

    // Create the polyfill and register the callbacks, that's it!
    Polyfill({ selectors: [":local-link"] })
    .doMatched(function(rules) {
      rules.each(function(rule) {
        $(rule.getSelectors()).css(rule.getDeclaration())
      });
    })
    .undoUnmatched(function(rules) {
      rules.each(function(rule) {
        $(rule.getSelectors()).removeAttr("style")
      });
      localLinkPolyfill.getCurrentMatches().each(function(rule) {
        $(rule.getSelectors()).css(rule.getDeclaration())
      });
    });

  }

  addToObject( localLinkPolyfill );
});