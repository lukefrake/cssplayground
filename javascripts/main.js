$(document).ready(function () {
  $('#main_content').headsmart()
  $( '#cssArea' ).on('blur', function() {
    
  } );
  var editor = ace.edit('cssArea');
  editor.getSession().setMode('ace/mode/css');
  editor.on( 'blur', function( event ) {
    $( '#cssDump' ).html( editor.getValue() );
  } );
});