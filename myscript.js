$(document).ready(function(){
  
var pic1="withborder";
    $(".menu-pic-1").click(function() {
        if( pic1 == "withborder"){
            $(".info-1").toggle(1000);
            $(this).css({"border":"8px solid pink" , "box-shadow":"0px 0px 3px 3px #3d3a35"});
            return pic1="withoutborder";
        } else if( pic1 == "withoutborder") {
            $(".info-1").toggle(1000);
            $(this).css({"border":"0px solid pink" , "box-shadow":"0px 0px 0px 0px white"});
            return pic1="withborder";  }
    });
    var pic2="withborder";
    $(".menu-pic-2").click(function() {
        if( pic2 == "withborder"){
            $(".info-2").toggle(1000);
            $(this).css({"border":"8px solid pink" , "box-shadow":"0px 0px 3px 3px #3d3a35"});
            return pic2="withoutborder";
        } else if( pic2 == "withoutborder") {
            $(".info-2").toggle(1000);
            $(this).css({"border":"0px solid pink" , "box-shadow":"0px 0px 0px 0px white"});
            return pic2="withborder";  }
    });

    var pic3="withborder";
    $(".menu-pic-3").click(function() {
        if( pic3 == "withborder"){
            $(".info-3").toggle(1000);
            $(this).css({"border":"8px solid pink" , "box-shadow":"0px 0px 3px 3px #3d3a35"});
            return pic3="withoutborder";
        } else if( pic3 == "withoutborder") {
            $(".info-3").toggle(1000);
            $(this).css({"border":"0px solid pink" , "box-shadow":"0px 0px 0px 0px white"});
            return pic3="withborder";  }
    });
  
  
} ) ;

