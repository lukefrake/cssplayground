$(function() {
  var hasPolyfill = function() {
    Polyfill({
      selectors: [":has"]
    }).doMatched(function (rules) {
      rules.each(function (rule) {
        $(rule.getSelectors()).css(rule.getDeclaration());
      });
    });
  }

  addToObject( hasPolyfill );
});