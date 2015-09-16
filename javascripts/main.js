;(function(init) {

  init(window.jQuery, window, document);

}(function($, window, document) {

  $(function() {

    var editor = ace.edit('cssArea');
    var $dumping_ground = $( '#cssDump' );

    editor.getSession().setMode('ace/mode/css');

    editor.on( 'change', function( event ) {
      $dumping_ground.html( editor.getValue() );
    });

  });

}));
