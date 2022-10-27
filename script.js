wow = new WOW(
    {
    boxClass:     'animate__animated',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  ).init();
let acc = document.querySelectorAll(".mainBg .row .secondCol .acc"),
    p = document.querySelectorAll(".mainBg .row .secondCol .acc p"),
    img = document.querySelectorAll(".mainBg .row .secondCol .acc .arrow");
$(document).ready(function(){
    for(let i = 0; i<acc.length; i++){
        $(acc[i]).click(function(){
            $(p[i]).slideToggle(1000);
            $(img[i]).toggleClass("rotate");
        });
        $(acc[i]).hover(function(){
            $(".mainBg .row .secondCol .acc h4").eq(i).css("font-weight", "700");
        }, function(){
            $(".mainBg .row .secondCol .acc h4").eq(i).css("font-weight", "400");
        });
    }
});