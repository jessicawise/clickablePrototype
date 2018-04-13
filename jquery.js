
function applyDragResize(selector, config) {
    var horizontal = false;
    var dirString = "se"

    if (config.maxWidth > config.minWidth) {
        horizontal = true;
        dirString += ", e, w"
    }

    if (config.maxHeight > config.minHeight) {
        dirString += ", n, s"
    }

    //resizor
    $(selector).resizable({
        maxHeight: config.maxHeight,
        maxWidth: config.maxWidth,
        minHeight: config.minHeight,
        minWidth: config.minWidth,
        handles: dirString
      }).draggable({
        containment: 'window'
      });

    //collapser
      $(selector + " .widgetIconCollapse").click(function(){
        $(this).toggleClass("widgetIconExpand")
        $(selector).toggleClass("collapsed")
    
        if ($(selector).hasClass("collapsed")) {
            $(selector).resizable({
                handles: horizontal ? 'e, w' : 'se'
            })
        } else {
            $(selector).resizable({
                handles: dirString
            })
        }

        $(selector).css("height", "");
    });
}

// Map Widget //

applyDragResize("#map", {
    maxHeight: 650,
    maxWidth: 1350,
    minHeight: 300,
    minWidth: 675
});

// Video Widget //

applyDragResize("#video", {
    maxHeight: 350,
    maxWidth: 150,
    minHeight: 150,
    minWidth: 150
});

// Chat Widget //

applyDragResize("#chat", {
    maxHeight: 350,
    maxWidth: 250,
    minHeight: 150,
    minWidth: 250
});

// Turn Order Widget //

applyDragResize("#turn", {
    maxHeight: 350,
    maxWidth: 150,
    minHeight: 137,
    minWidth: 150
});