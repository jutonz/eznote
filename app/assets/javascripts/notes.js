
$(document).ready(function() {
  $('.note').each(function(index) {
    $(this).delay(50 * index).animate({'margin-left': '+=1em'}, 'fast', function() {
      $(this).animate({ 'margin-left': '-=1em' }, 'fast');
    });
  })
})