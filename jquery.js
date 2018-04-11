$( function() {
    $( ".mapWidgetDefault" ).resizable({
        maxHeight: 400,
        maxWidth: 1350,
        minHeight: 300,
        minWidth: 675
      }).draggable({containment: 'window'
      });
  });

  $( function() {
    $ ( ".mapWidgetCollapsed" ).resizable({
        maxHeight: 24,
        maxWidth: 1350,
        minHeight: 24,
        minWidth: 675
      }).draggable({containment: 'window'
      });
  });


$( ".widgetIconCollapse" ).click(function(){
    $ (this).toggleClass("widgetIconExpand")
    $ ( ".mapWidgetDefault" ).toggleClass("mapWidgetCollapsed")
});





  /* 
  $( "#expand" ).click(function() {
    $( "#map" ).animate({
        height: 300
    });
    $("#expand").attr('src',"open-iconic/svg/chevron-top.svg").addClass("collapse").show().click(function() {
        $( "#map" ).animate({
            height: 24
        });
        $("#expand").attr('src',"open-iconic/svg/chevron-bottom.svg").removeClass("collapse");
    });
  });
  */