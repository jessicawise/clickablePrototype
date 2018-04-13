// Map Widget //

$(function() {
    $(".mapWidgetDefault").resizable({
        maxHeight: 650,
        maxWidth: 1350,
        minHeight: 300,
        minWidth: 675
      }).draggable({containment: 'window'
      });
  });


$( "#mapIcon" ).click(function(){
    $(this).toggleClass("widgetIconExpand")
    $(".mapWidgetDefault").toggleClass("mapWidgetCollapsed")

    if ($(".mapWidgetDefault").hasClass('mapWidgetCollapsed')) {
        $(".mapWidgetDefault").resizable({
            handles: 'e, w'
        })
    } else {
        $(".mapWidgetDefault").resizable({
            handles: 'e, w, n, s, se'
        })
    }

    $('#map').css("height", "");
});

// Video Widget //

$(function() {
    $(".videoWidgetDefault").resizable({
        maxHeight: 350,
        maxWidth: 150,
        minHeight: 150,
        minWidth: 150
      }).draggable({containment: 'window'
      });
  });


$( "#videoIcon" ).click(function(){
    $(this).toggleClass("widgetIconExpand")
    $(".videoWidgetDefault").toggleClass("videoWidgetCollapsed")

    if ($(".videoWidgetDefault").hasClass('videoWidgetCollapsed')) {
        $(".videoWidgetDefault").resizable({
            handles: 'e, w'
        })
    } else {
        $(".videoWidgetDefault").resizable({
            handles: 'e, w, n, s, se'
        })
    }

    $('#video').css("height", "");
});

// Chat Widget //

$(function() {
    $(".chatWidgetDefault").resizable({
        maxHeight: 350,
        maxWidth: 250,
        minHeight: 150,
        minWidth: 250
      }).draggable({containment: 'window'
      });
  });


$( "#chatIcon" ).click(function(){
    $(this).toggleClass("widgetIconExpand")
    $(".chatWidgetDefault").toggleClass("chatWidgetCollapsed")

    if ($(".chatWidgetDefault").hasClass('chatWidgetCollapsed')) {
        $(".chatWidgetDefault").resizable({
            handles: 'e, w'
        })
    } else {
        $(".chatWidgetDefault").resizable({
            handles: 'e, w, n, s, se'
        })
    }

    $('#chat').css("height", "");
});

// Turn Order Widget //

$(function() {
    $(".turnWidgetDefault").resizable({
        maxHeight: 350,
        maxWidth: 150,
        minHeight: 137,
        minWidth: 150
      }).draggable({containment: 'window'
      });
  });


$( "#turnIcon" ).click(function(){
    $(this).toggleClass("widgetIconExpand")
    $(".turnWidgetDefault").toggleClass("turnWidgetCollapsed")

    if ($(".turnWidgetDefault").hasClass('turnWidgetCollapsed')) {
        $(".turnWidgetDefault").resizable({
            handles: 'e, w'
        })
    } else {
        $(".turnWidgetDefault").resizable({
            handles: 'e, w, n, s, se'
        })
    }

    $('#turn').css("height", "");
});