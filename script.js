$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleclass('fa-times');
        $('header').toggleclass('toggle');
    });


$(window).on('scroll load',function(){
    $(this).toggleclass('fa-times');
    $('header').toggleclass('toggle');
});

//smooth scrolling
$('a[href*="#"]').on('click',function(e){
 e.preventDefault();
 $('html,body').animate({
    scrolltop : $($(this).attr('href')).offset().top,
 },
 500,
 'linear'
 );
});
});  
   