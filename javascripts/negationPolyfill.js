$(function() {
  var negationPolyfill = function() {
    Polyfill({
      selectors: [":not"]
    }).doMatched(function (rules) {
      rules.each(function (rule) {
        $(rule.getSelectors()).css(rule.getDeclaration());
      });
    });
  }

  addToObject( negationPolyfill );
});