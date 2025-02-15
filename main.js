var bReady;
$(document).ready(function(){
    
    // This pauses the re-stacking until the expand animation is finished
    $(".ps-photoset").hover(function(){
    bReady = false;
    setTimeout(function(){
        bReady = true;
    }, 600);  
    });

    $(".ps-photo").hover(function(){
    if (bReady == true){
        $(".ps-photo").css("z-index", "auto");
        $(this).css("z-index", "4");
    } else {
        // condole.log("stacking temporarily disabled")
    }
    });
  
});
  