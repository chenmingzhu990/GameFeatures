/* 
* @Author: anchen
* @Date:   2017-05-07 12:29:39
* @Last Modified by:   anchen
* @Last Modified time: 2017-05-22 00:24:52
*/

$(document).ready(function(){
    var speed = 1000;
    var dd = 0;
    var aa = 0;
    var bb = 0;
    var cc = 0;
    var ee = 0;

    
    // 顶部区域
    $('.topbanner ul li.nmr').hover(function() {
        $(this).children('.total').stop().slideToggle();
    });

    var time = setInterval(topbtn, 3000);

        function topbtn(){
            dd ++;
            if(dd >2){
                dd= 1;
                $('.topbanner .percent ul').css('top', '0');
            }

            $('.topbanner .percent ul').stop().animate({'top':-55*dd }, speed);
        }

        $('.topbanner .top-new').hover(function() {
            $(this).children('span').css('display', 'none');
            $(this).children('a').css('display', 'block');
        }, function() {
             $(this).children('span').css('display', 'block');
            $(this).children('a').css('display', 'none');
        });

    // 顶部区域end
    
    
    // main区域
    
    $('.main #first-page .download-part .nie-download .bottons a').hover(function() {
        $(this).children('em').stop().fadeIn(100);
        $(this).children('em').stop().fadeTo(100,0.2);
    }, function() {
        $(this).children('em').stop().fadeTo(100,0);
    });

    
    $('.main #third-page .com-circle a.circle2,.main #third-page .com-circle a.circle3').hover(function() {
        $(this).children('span').css('display', 'block');
    }, function() {
       $(this).children('span').css('display', 'none');
    });

    $('#forth-page .com-circle a.circle-tab2,#forth-page .com-circle a.circle-tab3').hover(function() {
        $(this).children('span').css('display', 'block');
    }, function() {
       $(this).children('span').css('display', 'none');
    }); 


    $('#fifth-page .com-circle a.tab2,#fifth-page .com-circle a.tab3').hover(function() {
        $(this).children('span').css('display', 'block');
    }, function() {
       $(this).children('span').css('display', 'none');
    }); 


     $('#sixth-page .circle-tabs a.tab2,#sixth-page .circle-tabs a.tab3').hover(function() {
        $(this).children('span').css('display', 'block');
    }, function() {
       $(this).children('span').css('display', 'none');
    }); 

     // 右侧导航
    var first = $('#first-page').offset().top;
    var second = $('#third-page').offset().top/2;
    var third = $('#third-page').offset().top/1.2;
    var forth = $('#forth-page').offset().top/1.2;
    var fifth = $('#fifth-page').offset().top/1.2;
    var sixth = $('#sixth-page').offset().top/1.2;
    var ss = $('.topbanner').offset().top;

    if(ss == 0){
        $('.main #first-page .person').addClass('show');
        $('.main #first-page .slogon').addClass('show');
        $('.main #first-page .download-part .nie-download').addClass('show');
    }


     $(window).scroll(function(event) {
        var val = $(document).scrollTop();

        if(val >= first) {
            $('.nav-tab1').addClass('active').siblings().removeClass('active');
            $('#nav-wrap .code-wrap').stop().fadeOut();
         }
         if(val >= third) {
            $('.nav-tab2').addClass('active').siblings().removeClass('active');
            $('#nav-wrap .code-wrap').stop().fadeIn();
            $('.main #third-page .com-title').addClass('show');
            $('.main #third-page .shijieguan').addClass('show');
         }
          if(val >= forth) {
            $('.nav-tab3').addClass('active').siblings().removeClass('active');
            $('#nav-wrap .code-wrap').stop().fadeIn();
            $('#forth-page .com-title2').addClass('show');
            $('#forth-page .jietu-show').addClass('show');
         }
          if(val >= fifth) {
            $('.nav-tab4').addClass('active').siblings().removeClass('active');
            $('#nav-wrap .code-wrap').stop().fadeIn();
            $('#fifth-page .com-title').addClass('show');
            $('#fifth-page .zhujie .com-tab').addClass('show');
            $('#fifth-page .zhujie .com-slide').addClass('show');
         }
          if(val >= sixth) {
            $('.nav-tab5').addClass('active').siblings().removeClass('active');
            $('#nav-wrap .code-wrap').stop().fadeIn();
            $('#sixth-page .com-title').addClass('show');
            $('#sixth-page .tese .pic-contain').addClass('show');
            $('#sixth-page .tese .special').addClass('show');
         }

         if(val >= second) {
            $('#nav-wrap .code-wrap').stop().fadeIn();
         }

     });

     var speed = 1000;

    $('.nav-tab1').click(function(event) {
        $('body,html').stop().animate({'scrollTop':first}, speed);
    });

    $('.nav-tab2').click(function(event) {
        $('body,html').stop().animate({'scrollTop':third}, speed);
     });

    $('.nav-tab3').click(function(event) {
       $('body,html').stop().animate({'scrollTop':forth}, speed);
    });

    $('.nav-tab4').click(function(event) {
        $('body,html').stop().animate({'scrollTop':fifth}, speed);
     });

    $('.nav-tab5').click(function(event) {
        $('body,html').stop().animate({'scrollTop':sixth}, speed);
    });


    $('#fifth-page .zhujie .com-tab a').each(function(index, el) {
         $(this).click(function(event) {
            $(this).addClass('on').siblings().removeClass('on');
            $('#fifth-page .zhujie .com-slide').stop().hide();
            $('#fifth-page .zhujie .com-slide').eq($(this).index()).stop().show();

            if($(this).index() == 1) {
                $('#fifth-page .nav-wrap').stop().show();
            }else if($(this).index() == 0) {
                $('#fifth-page .nav-wrap').stop().hide();
            }
         });
    });


    $('#fifth-page .nav-wrap a.next').click(function(event) {
            cc ++;
            if(cc >2){
                cc=0;
            }
        $('#fifth-page .zhujie .com-slide .com-pic').stop().animate({'left': -cc *310+'px'}, 500);
            ee ++;
            if(ee >2){
                ee= 0;
            }

            $('#fifth-page .nav-wrap ul li').eq(ee).addClass('on').siblings().removeClass('on');
    });

    $('#fifth-page .nav-wrap a.prev').click(function(event) {
            cc --;
            if(cc <0){
                cc= 2;
            }

        $('#fifth-page .zhujie .com-slide .com-pic').stop().animate({'left': -cc *310+'px'}, 500);

            ee --;
            if(ee < 0){
                ee=2;
            }

            $('#fifth-page .nav-wrap ul li').eq(ee).addClass('on').siblings().removeClass('on');
       
    });

    var num = 10;
    $('#forth-page .jietu-show .pic-wrap .pic-list .lightbox img').each(function(index, el) {
         num = num - 1;
        $(this).css('z-index', num);
    });

    $('#forth-page .jietu-show .pic-scroll .tempWrap .pic-btn-contain .pic-btn').each(function(index, el) {
        $(this).click(function(event) {
            $('#forth-page .jietu-show .pic-scroll .tempWrap .pic-btn-contain .pic-btn img').removeClass('on');
            $(this).children('img').addClass('on');
            $('#forth-page .jietu-show .pic-wrap .pic-list .lightbox img').eq($(this).index()).stop().fadeIn().siblings().stop().fadeOut();

        });
    });


    $('#forth-page .jietu-show .pic-scroll .next').click(function(event) {
         aa ++;

        if(aa >5){
            aa = 0;
        }
        $('#forth-page .jietu-show .pic-scroll .tempWrap .pic-btn-contain').stop().animate({'left':-aa*74+'px'}, 100);
    });

    $('#forth-page .jietu-show .pic-scroll .prev').click(function(event) {
        aa --;
        if(aa < 0){
            aa = 5;
        }

        $('#forth-page .jietu-show .pic-scroll .tempWrap .pic-btn-contain').stop().animate({'left': -aa*74+'px'}, 100);    
    });

    var num = 10;
    $('#sixth-page .tese .pic-contain .pic-wrap span').each(function(index, el) {
         num = num - 1;
        $(this).css('z-index', num);
    });

    $('#sixth-page .tese .special .special_btn a').each(function(index, el) {
        $(this).click(function(event) {
            $('#sixth-page .tese .special .special_btn em').removeClass('on');
            $(this).children('em').addClass('on');
        });
    });

    $('#sixth-page .tese .left-btns .special_btn').each(function(index, el) {
        $(this).click(function(event) {
            $('#sixth-page .tese .pic-contain .pic-wrap span').removeClass('on');
            $('#sixth-page .tese .pic-contain .pic-wrap span').eq($(this).index()).addClass('on');
        });
        
    });

    $('#sixth-page .tese .special .btn4').click(function(event) {
        $('#sixth-page .tese .pic-contain .pic-wrap span').removeClass('on');
        $('#sixth-page .tese .pic-contain .pic-wrap span').eq(3).addClass('on');
    });

    $('#sixth-page .tese .special .btn5').click(function(event) {
        $('#sixth-page .tese .pic-contain .pic-wrap span').removeClass('on');
        $('#sixth-page .tese .pic-contain .pic-wrap span').eq(4).addClass('on');
    });

    $('#sixth-page .tese .special .btn6').click(function(event) {
        $('#sixth-page .tese .pic-contain .pic-wrap span').removeClass('on');
        $('#sixth-page .tese .pic-contain .pic-wrap span').eq(5).addClass('on');
    });

    // main区域end

});