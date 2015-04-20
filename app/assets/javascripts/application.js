// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require turbolinks
//= require_tree .
//= require bootstrap.min

// Bump in direction (left or right) by
// the specified amount, then return to
// original position.
function bump(bumpee, inDirection, by) {
  // Achieve bump by increasing padding on opposite side.
  if (inDirection === 'left') {
    var prevPadding = bumpee.css('padding-right');
    bumpee.animate({ 'padding-right': by }, 'fast', function() {
      bumpee.animate({ 'padding-right': prevPadding }, 'fast');
    })
  } else if (inDirection === 'right') {
    var prevPadding = bumpee.css('padding-left');
    bumpee.animate({ 'padding-left': by }, 'fast', function() {
      bumpee.animate({ 'padding-left': prevPadding }, 'fast');
    })
  }
}

$(document).ready(function() {
  $('p.note-text').each(function() {
    if ($(this).hasClass('no-bg')) {
      $(this).css('background-color', 'inherit');
    } else {
      bump($(this), 'left', '2em');
    }
  });

  // $('li.note-tab').each(function() {
  //   var isNote = !$(this, 'p.note-text').hasClass('no-bg');
  //   if (isNote) {
  //     $(this).animate({'padding-left': '2em'}, 'slow');
  //   }
  // });
});