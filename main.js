var gReady;
$(document).ready(function(){
    
    // This pauses the re-stacking until the expand animation is finished
    $(".gPhotoset").hover(function(){
    gReady = false;
    setTimeout(function(){
        gReady = true;
    }, 600);  
    });

    $(".gPhoto").hover(function(){
    if (gReady == true){
        $(".gPhoto").css("z-index", "auto");
        $(this).css("z-index", "4");
    } else {
        // condole.log("stacking temporarily disabled")
    }
    });
  
});
  