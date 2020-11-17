$(document).ready(function(){
	wow = new WOW(
      {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    }
    )
    wow.init();

     /*click PC submenu*/
    $( ".menu ul li.js-sub-menu" ).click(function(e) {
      $(this).toggleClass('show');
    });

    if ($(window).innerWidth() <= 960) {

      $(".js-sub-menu").click(function(e) {
        //e.preventDefault();
        $(this).removeClass('show');
        $('.js-sub-menu i.d-none').toggleClass('active');
        $('.sub-menu').slideToggle(400);

      })
    }
    
	/*sp Menu*/
	$( ".bar" ).click(function() {
		$('.header-menu').toggleClass('active');
	});
	

	/*tit h2 run*/
		var text_effect = function() {
	    var offset = $(window).scrollTop() + $(window).height(),
	        $animatables = $('.title h2');
	    if ($animatables.length == 0) {
	        $(window).off('scroll', text_effect);
	    }
	    $animatables.each(function(i) {
	        var $animatable = $(this);
	        if (($animatable.offset().top + $animatable.height() - 20) < offset) {
	            $animatable.removeClass('animatable').addClass('animated');
	        }
	    });

	};
	$(window).on('scroll', text_effect);
	$(window).trigger('scroll'); /*end*/


   /*Min - height box -*/
  $('.ser-list').each(function(){  
    var highestBox = 0;
    $('.ser-inf .desc', this).each(function(){
      if($(this).height() > highestBox) {
        highestBox = $(this).height(); 
      }
    });    
    $('.ser-inf .desc',this).height(highestBox);        
  });

  /*sp bunner*/
  var offs,
      wWindow = $(window).outerWidth();

  $(window).scroll(function() {
    wWindow = $(window).outerWidth();
    offs = $(this).scrollTop();
    if (offs > 1000 && wWindow <= 768) {
        $('.js-bunder').fadeOut();
    } else {
        $('.js-bunder').fadeIn();
    }
  });

   /*max-height*/
   $('.box-info-news p').matchHeight();
   $('.gui-box p').matchHeight();
   $('.service-other-page .desc').matchHeight();
   $('.service-other-page .desc').matchHeight();
   $('.step .step-info .desc').matchHeight();
   $('.step .step-info h4').matchHeight();
   $('.inf-tab p').matchHeight();
   $('.info-box-3 p').matchHeight();
   
/*   $('.ser-list .desc').matchHeight();*/

  /*changer color text select-option*/
   $("select").change(function(){
    if ($(this).val()=="") $(this).css({color: "#1a1a1a"});
    else $(this).css({color: "#ccc"});
  });

    /*Dropdown Menu*/
    $('.dropdown').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
    $('.dropdown').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(300);
    });
    $('.dropdown .dropdown-menu li').click(function () {
        $(this).parents('.dropdown').find('span').text($(this).text());
        $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
    });
    /*reset*/
    $( "#reset" ).click(function() {
      document.getElementById('rs-id-01').innerHTML ='都道府県で絞り込む';
      document.getElementById('rs-id-02').innerHTML ='業種で絞り込む';
      document.getElementById('rs-id-03').innerHTML ='ご利用プランで絞り込む';
    });
    
    /*my page sp*/
    $('.toggle-btn').click(function () {
      if ($('body').hasClass('toggle-show')) {
        $('body').removeClass('toggle-show');
        $('.toggle-title .text').text('マイページメニュー');
        $('aside .search-box').slideUp(500);
      } else {
        $('body').addClass('toggle-show');
        $('.toggle-title .text').text('閉じる');
        $('aside .search-box').slideDown(500);
      }
    });

    /*information*/
     /*click PC information-submenu*/
     $('#list-tab-01').show();
     $('#list-tab-02').hide();
     $('#list-tab-03').hide();
     $('#list-tab-04').hide();

    $( ".list-tab-information li" ).click(function(e) {
      e.preventDefault();
      $('.list-tab-information li.active').removeClass('active');
      $(this).addClass('active');
    });
    $( ".list-tab-information li:nth-child(1)" ).click(function() {
      $('#list-tab-01').show();
      $('#list-tab-02').hide();
      $('#list-tab-03').hide();
      $('#list-tab-04').hide();
    });
    $( ".list-tab-information li:nth-child(2)" ).click(function() {
      $('#list-tab-02').show();
      $('#list-tab-01').hide();
      $('#list-tab-03').hide();
      $('#list-tab-04').hide();
    });
    $( ".list-tab-information li:nth-child(3)" ).click(function() {
      $('#list-tab-03').show();
      $('#list-tab-01').hide();
      $('#list-tab-02').hide();
      $('#list-tab-04').hide();
    });
    $( ".list-tab-information li:nth-child(4)" ).click(function() {
      $('#list-tab-04').show();
      $('#list-tab-01').hide();
      $('#list-tab-02').hide();
      $('#list-tab-03').hide();
    });

    /*check box mutyple*/
    var check01Top = document.getElementsByName("form-contact-info");
    var check1 = 0;
    for(i=0;i<check01Top.length;i++){
      if(check01Top[i].checked){
        check1++;
        break;
      }
    }
    var check02Top = document.getElementsByName("form-contact-info-gr02");
    var check2 = 0;
    for(i=0;i<check02Top.length;i++){
      if(check02Top[i].checked){
        check2++;
        break;
      }
    }
    if(check1 && check2){
    }else{
      return false;
    }
    /*singin checkbox*/
    var singin01 = document.getElementsByName("singin-01");
    var check1 = 0;
    for(i=0;i<singin01.length;i++){
      if(singin01[i].checked){
        check1++;
        break;
      }
    }
    var singin02 = document.getElementsByName("singin-02");
    var check2 = 0;
    for(i=0;i<singin02.length;i++){
      if(singin02[i].checked){
        check2++;
        break;
      }
    }
    var singin03 = document.getElementsByName("singin-03");
    var check3 = 0;
    for(i=0;i<singin03.length;i++){
      if(singin03[i].checked){
        check3++;
        break;
      }
    }
    if(check1 && check2 && check3){
    }else{
      return false;
    }

})

