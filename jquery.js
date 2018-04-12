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
        maxHeight: 300,
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
