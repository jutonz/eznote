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

// Bump in direction (left or right) bythe specified amount,
// then return to original position.
function bump(bumpee, by) {
  var there = {
    'padding-left': ['+=', by].join(''),
    'padding-right': ['+=', by].join('')
  }
  var backAgain = {
    'padding-left': ['-=', by].join(''),
    'padding-right': ['-=', by].join('')
  }
  bumpee.animate(there, 'fast', function() {
    bumpee.animate(backAgain, 'fast');
  });
}

function slideIn(slidee, fromDirection) {
  if (fromDirection === 'right') {
    var paddingRight = slidee.css('padding-right');
    slidee.css('padding-right', '20em');
    slidee.animate({'padding-right': paddingRight}, 'fast');
  }
}

$(document).ready(function() {
  $('p.note-text').each(function() {
    if ($(this).hasClass('no-bg')) {
      $(this).css('background-color', 'inherit');
    } else {
      bump($(this), '1em');
    }
  });

  $('p.note-text').hover( 
    function() {    // mouse in
      $(this).animate({'padding-right': '+=2em'}, 'fast')
    }, function() { // mouse out
      $(this).animate({'padding-right': '-=2em'}, 'fast')
  });

  // $('li.note-tab').each(function() {
  //   var isNote = !$(this, 'p.note-text').hasClass('no-bg');
  //   if (isNote) {
  //     $(this).animate({'padding-left': '2em'}, 'slow');
  //   }
  // });
});