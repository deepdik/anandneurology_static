$(document).on('ready', function() {  
$('.histroy').owlCarousel({
    loop:true,
    margin:20,
    nav: true,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    dots: false,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
});
 

