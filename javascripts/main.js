$(document).ready(function () {
  var editor = ace.edit('cssArea');
  editor.getSession().setMode('ace/mode/css');
  editor.on( 'blur', function( event ) {
    $( '#cssDump' ).html( editor.getValue() );
  } );
});