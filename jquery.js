
 var elements = 5;

function applyDragResize(selector, config) {
    var horizontal = false;
    var dirString = "se";

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
        containment: "window",
        stack: ".widgets"
      });

    //collapser
      $(selector + " .widgetIconCollapse").click(function(){
        $(this).toggleClass("widgetIconExpand")
        $(selector).toggleClass("collapsed")
    
        if ($(selector).hasClass("collapsed")) {
            $(selector).resizable({
                handles: horizontal ? "e, w" : "s"
            })
        } else {
            $(selector).resizable({
                handles: dirString
            })
        }

        $(selector).css("height", "");
    });

    $(selector + " .ui-widget-header").hover(function() {
        $(this).css("cursor","move")
    });

    $(selector).click(function() {
        elements++
        $(this).css("z-index",elements)
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
    maxWidth: 200,
    minHeight: 137,
    minWidth: 150
});

// Dice Roller Widget //

applyDragResize("#dice", {
    maxHeight: 250,
    maxWidth: 800,
    minHeight: 200,
    minWidth: 550
});

// Character Sheet Widget //

applyDragResize("#character", {
    maxHeight: 300,
    maxWidth: 1350,
    minHeight: 300,
    minWidth: 675
});

// Chat Sample Functionality //
var typing = $("<i></i>").text("User is typing...");

$( "textarea" ).focus(function() {
    $( "#chatBody" ).append("<br />", typing);
  });

$("textarea").focusout(function() {
    $(typing).remove();
});

var chatResponse = ["<b>User:</b></br> Leroyyyy Jenkins!"]

$("#chatButton").click(function() {
    $("#chatBody").append(chatResponse[0])
    $("textarea").val('')
});

$('textarea').keypress(function (e) {
    if (e.which == 13) {
      $('#chatBody').append(chatResponse[0]);
      $("textarea").val('').blur()
      return false;    //<---- Add this line
      
    }
  });