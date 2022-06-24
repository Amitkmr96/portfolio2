$(".line").each(function () {
    $(this).css(
      {
        width: $(this).attr("data-progress") + "%",
      }
      
    );
    
  });

  $(".view-btn").click(function(){
    if ($("#projects .row").hasClass("hide-row"))
    { $("#projects .row").removeClass("hide-row");
      $("#projects .row").addClass("show");
      $(".project-btn").addClass("hide-row");
    }
  });

