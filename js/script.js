$(function(){

    $('.menu-btn').on('click', function(){
        $('aside, .content').toggleClass('show')
    })

    

    $('.content > div').each(function(){

        if($(window).scrollTop() >= ($(this).offset().top - 15)){

            var currItem = '#' + $(this).attr('id');

            $('.side-menu li a[data-target="' + currItem + '"]').parent('li')
            .addClass('active').siblings('li').removeClass('active')
            
        }
    })

    $(window).on('scroll', function(){
        

            $('.content > div').each(function(){

                if($(window).scrollTop() >= ($(this).offset().top - 15)){

                    var currItem = '#' + $(this).attr('id');

                    $('.side-menu li a[data-target="' + currItem + '"]').parent('li')
                    .addClass('active').siblings('li').removeClass('active')
                    
                }
            })
    })




    $('.side-menu li a').on('click', function(){

        $(this).parent('li').addClass('active').siblings().removeClass('active');
        
        // $('html, body').animate({
        //     scrollTop : ($($(this).data('target')).offset().top) - '15'
        // },1000)

        $('aside, .content').removeClass('show')
    })

   // For Loader ...............
   $(window).on("load" , function(){
    $(".loadoverlay").fadeOut(1000);
})




    $('.gallery > div').hover(function(){
        $(this).find('.front').toggleClass('show-back')
        .end().find('.back img').toggleClass('scale-img')
    })

   

    $(function(){
        
        if(($(this).scrollTop() / 4) <= 90){
            $('.g-left').css('transform', 'rotateZ(' + ($(this).scrollTop() / 4) + 'deg)')
            $('.g-right').css('transform', 'rotateZ(-' + ($(this).scrollTop() / 4) + 'deg)')
        }else if(($(this).scrollTop() / 4) > 90){
            $('.g-left').css('transform', 'rotateZ(90deg)')
            $('.g-right').css('transform', 'rotateZ(-90deg)')
        }
    })

    $('body').on('scroll', function(){
       
       


        if(document.body.scrollTop < 350 ){
            $('#pro').addClass('active').siblings().removeClass('active');
            document.getElementById("scrolltop").style.display = "none";
        }
        if(document.body.scrollTop>350){
            $('#por').addClass('active').siblings().removeClass('active');
            document.getElementById("scrolltop").style.display = "block";
        }if(document.body.scrollTop>1000){
            $('#res').addClass('active').siblings().removeClass('active');
        }if(document.body.scrollTop>2500){
            $('#con').addClass('active').siblings().removeClass('active');
        }

        if(($(this).scrollTop() / 4) <= 90){
            $('.g-left').css('transform', 'rotateZ(' + ($(this).scrollTop() / 4) + 'deg)')
            $('.g-right').css('transform', 'rotateZ(-' + ($(this).scrollTop() / 4) + 'deg)')
            $('.gate span').css('transform', 'rotateZ(' + ($(this).scrollTop()) + 'deg)')
        }else if(($(this).scrollTop() / 4) > 90){
            $('.g-left').css('transform', 'rotateZ(90deg)')
            $('.g-right').css('transform', 'rotateZ(-90deg)')
        }
        
    })


    
// Type Writer

var text = `Hello , I am Ahmed Hassan Mobasher Frontend Web Developer Graduated from Faculty
of Computer & Informatics Zagaig University in 2017 . 
Self Motivated Web Developer with A creative eye of Design , Combine the art of Design with the
power of programing , working on  myself to learn more about web development ,
have a plan for future to study Python & C# . 
Willing to have an oppourtunity to prove my skills . `
 

window.onload = function () {
  var i = 0;
  var typeWriter = setInterval(function () {
    document.getElementById("typewriter").innerHTML += text[i]
    i++;
    if (i > text.length - 1) {
      clearInterval(typeWriter)
    }
  }, 40)
}




});

