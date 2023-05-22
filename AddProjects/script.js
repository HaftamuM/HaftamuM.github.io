$('.resume-print').click(function() {
  window.print();
});
// Change to JS
$(document).ready(function(){
  var zindex = 10;
  
  $("div.card").click(function(e){
    e.preventDefault();

    var isShowing = false;

    if ($(this).hasClass("show")) {
      isShowing = true
    }

    if ($("div.cards").hasClass("showing")) {
      // a card is already in view
      $("div.card.show")
        .removeClass("show");

      if (isShowing) {
        // this card was showing - reset the grid
        $("div.cards")
          .removeClass("showing");
      } else {
        // this card isn't showing - get in with it
        $(this)
          .css({zIndex: zindex})
          .addClass("show");

      }

      zindex++;

    } else {
      // no cards in view
      $("div.cards")
        .addClass("showing");
      $(this)
        .css({zIndex:zindex})
        .addClass("show");

      zindex++;
    }
    
  });
});

// Add on the table for baro 
/**
 * Created by Kupletsky Sergey on 05.11.14.
 *
 * Material Design Responsive Table
 * Tested on Win8.1 with browsers: Chrome 37, Firefox 32, Opera 25, IE 11, Safari 5.1.7
 * You can use this table in Bootstrap (v3) projects. Material Design Responsive Table CSS-style will override basic bootstrap style.
 * JS used only for table constructor: you don't need it in your project
 */

$(document).ready(function() {

  var table = $('#table');

  // Table bordered
  $('#table-bordered').change(function() {
      var value = $( this ).val();
      table.removeClass('table-bordered').addClass(value);
  });

  // Table striped
  $('#table-striped').change(function() {
      var value = $( this ).val();
      table.removeClass('table-striped').addClass(value);
  });

  // Table hover
  $('#table-hover').change(function() {
      var value = $( this ).val();
      table.removeClass('table-hover').addClass(value);
  });

  // Table color
  $('#table-color').change(function() {
      var value = $(this).val();
      table.removeClass(/^table-mc-/).addClass(value);
  });
});

// jQuery’s hasClass and removeClass on steroids
// by Nikita Vasilyev
// https://github.com/NV/jquery-regexp-classes
(function(removeClass) {

jQuery.fn.removeClass = function( value ) {
  if ( value && typeof value.test === "function" ) {
    for ( var i = 0, l = this.length; i < l; i++ ) {
      var elem = this[i];
      if ( elem.nodeType === 1 && elem.className ) {
        var classNames = elem.className.split( /\s+/ );

        for ( var n = classNames.length; n--; ) {
          if ( value.test(classNames[n]) ) {
            classNames.splice(n, 1);
          }
        }
        elem.className = jQuery.trim( classNames.join(" ") );
      }
    }
  } else {
    removeClass.call(this, value);
  }
  return this;
}

})(jQuery.fn.removeClass);