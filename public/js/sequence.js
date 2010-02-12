$(document).ready(function(){   
  function updateListCounts() {
    $("#grid li").each(function() {
      var li = this;
      var count = $('li').index($(li)) + 1;
      $(li).find('.digit').text(count);
    });
  };
  
  $("#grid ul").sortable(
    { opacity: 0.8,
      cursor: 'move',
      update: function() { updateListCounts(); }
    }
  );
  
  $('.zoom-minus').click(function(){
    $('#grid .cell')
      .css('width', $('#grid .cell').width() - 50 + 'px')
      .css('height', $('#grid .cell').height() - 50 + 'px');
  });
  
  $('.zoom-plus').click(function(){
    $('#grid .cell')
      .css('width', $('#grid .cell').width() + 50 + 'px')
      .css('height', $('#grid .cell').height() + 50 + 'px');
  });
  
  updateListCounts();
});