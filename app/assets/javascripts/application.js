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

$(document).ready(function() {
  $('p.note-text').each(function() {
    if ($(this).hasClass('no-bg')) {
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

  $('p.note-text').first(function() {
    var height = $(this).css('height');
    $('p.note-text.no-bg').each(function() {
      $(this).css('height', height);
      console.log('hello')
    })
  })

  $('#fav-button').click(function (event) {
    // event.preventDefault(); // Prevent link from following its href
    if ($(this).hasClass('back')) { 
      $('.note-tab-column-left').animate({ width: $('.note-tab-column-left').data('width') }, 'slow');
      $('.note-tab-column-right').animate({ width: $('.note-tab-column-left').data('width') }, 'slow')
      $('.main-content').animate({ opacity: '1', height: $('.main-content').data('height') }, 'slow');
      $(this).removeClass('back');
    } else {
      // var width = $(this)
      $('.note-tab-column-left').data('width', $('.note-tab-column-left').css('width'));
      $('.main-content').data('height', $('.main-content').css('height'));    
      $('.main-content').animate({ opacity: '0' }, 'fast', function() {
        $('.main-content').animate({ height: '95%' }, 'slow');
      });
      $('.note-tab-column-left').animate({ width: '45%' }, 'slow');
      $('.note-tab-column-right').animate({ width: '45%' }, 'slow');
      $(this).addClass('back');
    }
  });

  $('#fav-button.back').click(function (event) {

  })
});