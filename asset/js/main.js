
	$(document).ready(function(){
   
      $('.next').on('click', function(){

      	var currentImg=$('.active-img');
      	var nextImg=currentImg.next();

      	if(nextImg.length){
      		currentImg.removeClass('active-img').css('z-index',-10);
      		nextImg.addClass('active-img').css('z-index',10);
      	}

      });
       $('.prev').on('click', function(){

      	var currentImg=$('.active-img');
      	var prevImg=currentImg.prev();

      	if(prevImg.length){
      		currentImg.removeClass('active-img').css('z-index',-10);
      		prevImg.addClass('active-img').css('z-index',10);
      	}

      });
       $('#menu').slicknav({
          label:'',

       });

       // owl carouse
      $('.header-slider').owlCarousel({
        items:2,
        loop:true,
        autoplay:true,
        nav:true,
        autoplayTimeout:3000,
        responsive: {
                  0: {
                    items: 1
                  },
                  280: {
                    items: 1
                  },
                  320: {
                    items: 1
                  },
                  640: {
                    items: 1
                  },
                  960: {
                    items: 1
                  },
                  1200: {
                    items: 1
                  }
                }
      });
      $( ".owl-prev").html('<i class="fa fa-angle-double-left"></i>');
      $( ".owl-next").html('<i class="fa fa-angle-double-right"></i>');
      // homepage slider animation support
      $(".header-slider").on("translate.owl.carousel", function(){
        $(".inside-caption h2, .inside-caption p").removeClass("animated fadeInUp").css({'opacity':'0'});
        $(".inside-caption a").removeClass("animated fadeInDown").css({'opacity':'0'});
      });
      
      $(".header-slider").on("translated.owl.carousel", function(){
        $(".inside-caption h2, .inside-caption p").addClass("animated fadeInUp").css({'opacity':'0'});
        $(".inside-caption a").addClass("animated fadeInDown").css({'opacity':'0'});
      });


      $('.project-slider').owlCarousel({
        items:4,
        loop:true,
        margin:30,
        width:262.5,
        responsive: {
                  0: {
                    items: 1
                  },
                  280: {
                    items: 1
                  },
                  320: {
                    items: 2
                  },
                  640: {
                    items: 2
                  },
                  800:{
                    items:3
                  },
                  960: {
                    items: 4
                  },
                  1200: {
                    items: 4
                  }
                }
      });
      $('.testimonials-slider').owlCarousel({
        items:3,
        loop:true,
        margin:30,
        nav:true,
        responsive: {
                  0: {
                    items: 1
                  },
                  280: {
                    items: 1
                  },
                  320: {
                    items: 2
                  },
                  640: {
                    items: 2
                  },
                  800:{
                    items:2
                  },
                  960: {
                    items: 3
                  },
                  1200: {
                    items: 3
                  }
                }
      });
       $( ".owl-prev").html('<i class="fa fa-angle-double-left"></i>');
       $( ".owl-next").html('<i class="fa fa-angle-double-right"></i>');
      $('.clients-slider').owlCarousel({
        items:7,
        loop:true,
        margin:30,
        responsive: {
                  0: {
                    items: 1
                  },
                  280: {
                    items: 2
                  },

                  320: {
                    items: 2
                  },
                  392:{
                    items:2
                  },
                  420:{
                    items:3
                  },
                  640: {
                    items: 4
                  },
                  800:{
                    items:5
                  },
                  960: {
                    items: 5
                  },
                  1200: {
                    items: 7
                  }
                }
      });
      

      $('.item-1').on('click',function(){
        $('.content-01').addClass('active-p');
        $(".content-01").siblings().removeClass('active-p');
        $('.item-1').addClass('testimonial-item-bg');
        $('.item-2,.iteam-3,.item-4').removeClass('testimonial-item-bg');
        $('.grade1').addClass('grade-color');
        $('.grade2,.grade3,.grade4').removeClass('grade-color');
      })
      $('.item-2').on('click',function(){
        $('.content-02').addClass('active-p');
        $(".content-02").siblings().removeClass('active-p');
        $('.item-2').addClass('testimonial-item-bg');
        $('.item-1,.item-3,.item-4').removeClass('testimonial-item-bg');
        $('.grade2').addClass('grade-color');
        $('.grade1,.grade3,.grade4').removeClass('grade-color');
      })
      $('.item-3').on('click',function(){
        $('.content-03').addClass('active-p')
         $(".content-03").siblings().removeClass('active-p');
         $('.item-3').addClass('testimonial-item-bg');
        $('.item-1,.item-2,.item-4').removeClass('testimonial-item-bg');
        $('.grade3').addClass('grade-color');
        $('.grade1,.grade2,.grade4').removeClass('grade-color');
      })
      $('.item-4').on('click',function(){
        $('.content-04').addClass('active-p');
        $(".content-04").siblings().removeClass('active-p');
        $('.item-4').addClass('testimonial-item-bg');
        $('.item-1,.item-2,.item-3').removeClass('testimonial-item-bg');
        $('.grade4').addClass('grade-color');
        $('.grade1,.grade2,.grade3').removeClass('grade-color');
      })
      
	});
 