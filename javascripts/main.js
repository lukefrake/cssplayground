;(function(init) {

  init(window.jQuery, window, document);

}(function($, window, document) {

  $(function() {

    var editor = ace.edit('csspg-gutter');
    var $dumping_ground = $( '#csspg-dump' );

    editor.getSession().setMode('ace/mode/css');

    editor.on( 'change', function( event ) {
      $dumping_ground.html( editor.getValue() );
      runAllFunctions( window.megaFunctionObject );
    });

  });

}));

window.addToObject = function( functionToAdd ) {
  if( !window.megaFunctionObject ) {
    window.megaFunctionObject = [];
  }
  window.megaFunctionObject.push( functionToAdd );
}

var runAllFunctions = function( megaFunctionObject ) {
  $.each( megaFunctionObject, function( index, functionToRun ) {
    functionToRun();
  } );
}