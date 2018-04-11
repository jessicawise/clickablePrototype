$(function() {
    $(".mapWidgetDefault").resizable({
        maxHeight: 400,
        maxWidth: 1350,
        minHeight: 300,
        minWidth: 675
      }).draggable({containment: 'window'
      });
  });


$( ".widgetIconCollapse" ).click(function(){
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
