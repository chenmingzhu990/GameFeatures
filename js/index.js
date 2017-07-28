/* 
* @Author: anchen
* @Date:   2017-04-23 06:30:06
* @Last Modified by:   anchen
* @Last Modified time: 2017-05-22 13:22:05
*/

$(document).ready(function(){
    var speed = 1000;
    var key = 0;
    var circle = 0;
    var hey = 0;
    var bay = 0;
    var aa = $('.main .top').offset().top;
    var cc = 0;
    var dd = 0;
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

 
    // 主要区域
    $(window).scroll(function(event) {
        
        var val = $(document).scrollTop();

        if(val >= aa){
            $('.main .top').css({
                position: 'fixed',
                top: 0 ,
                background : 'rgba(255, 255, 255, 0.9)'
            });

            $('.main .top .load').css('display', 'block');
            $('.main .logo span').addClass('hide');

        }else {
            $('.main .top').css({
                position: 'absolute',
                background: 'rgba(255, 255, 255, 0)'
            });
            $('.main .top .load').css('display', 'none');
            $('.main .logo span').removeClass('hide');
        }
    });

   
   $('.main .role a.dir').click(function(event) {
        cc ++;

        $('.main .role ul li.role3,.main .role ul li.role4').css('display', 'block');
        $('.main .role ul li.role1,.main .role ul li.role2').css('display', 'none');

        if(cc >1){
            cc =0;
        $('.main .role ul li.role1,.main .role ul li.role2').css('display', 'block');
        $('.main .role ul li.role3,.main .role ul li.role4').css('display', 'none');   
        }
      
   });

   $('.main .download span').hover(function() {
        $(this).children('em').stop().fadeIn(100);
        $(this).children('em').stop().fadeTo(100,0.2);
   }, function() {
        $(this).children('em').stop().fadeTo(100,0);
        
     });


   $('.main .calendar span.item8').hover(function() {

        $('.main .calendar span.item8 .random').stop().slideToggle();
   }); 


   $('.main .top .index li:nth-child(5)').mouseenter(function(event) {
        $(this).children('.nav-tongren').stop().animate({'height':'200px'}, 500);
        $('.main .index li .nav-tongren .tongren').css('display', 'block');
        $('.main .index li em').addClass('on');
        $('.main .top').css('background', 'rgba(255, 255, 255, 0.9)');
   });

   $('.main .top .index li:nth-child(5)').mouseleave(function(event) {
        $(this).children('.nav-tongren').stop().animate({'height':'0'}, 500);
        $('.main .index li .nav-tongren .tongren').css('display', 'none');
        $('.main .index li em').removeClass('on');
        $('.main .top').css('background', 'rgba(255, 255, 255, 0)');
   });

   $('.main .top .index li:nth-child(6)').mouseenter(function(event) {
        $(this).children('.nav-tongren').stop().animate({'height':'200px'}, 500);
        $('.main .index li .nav-tongren .tongren-bot').css('display', 'block');
        $('.main .index li i').addClass('on');
        $('.main .top').css('background', 'rgba(255, 255, 255, 0.9)');
   });

   $('.main .top .index li:nth-child(6)').mouseleave(function(event) {
        $(this).children('.nav-tongren').stop().animate({'height':'0'}, 500);
        $('.main .index li .nav-tongren .tongren-bot').css('display', 'none');
        $('.main .index li i').removeClass('on');
        $('.main .top').css('background', 'rgba(255, 255, 255, 0)');
   });
   
    // 主要区域end  

    // 消息区域
    
    $('.new .friend .friend-in ol li').each(function(index, el) {
        $(this).hover(function() {
            $(this).addClass('current').siblings().removeClass('current');
            $('.new .friend .friend-in ul').css('left', -360 *$(this).index());
            key = $(this).index();
            circle = $(this).index();
        });
    });

        var timer = setInterval(autoPlay, 5000);

            function autoPlay(){
                key++;
                if(key >4){
                    key =1;
                    $('.new .friend .friend-in ul').css('left', 0);
                }
                $('.new .friend .friend-in ul').stop().animate({'left': -360* key}, speed);

                circle ++;
                if(circle >3){
                    circle = 0;
                }
                $('.new .friend .friend-in ol li').eq(circle).addClass('current').siblings().removeClass('current');
            }

        $('.new .friend').hover(function() {
            clearInterval(timer);
        }, function() {
            timer = setInterval(autoPlay, 5000);
        });

        $('.new .messages .up ul li a').hover(function() {
            $('.new .messages .up ul li em').removeClass('current');
            $(this).children('em').addClass('current');
        });

        $('.new .messages .up ul li').each(function(index, el) {
            $(this).hover(function() {
               
                $('.new .messages .bottom .bottom-in ').stop().animate({'left':-500 *$(this).index()}, 500);
            });
        });

    // 消息区域end
    
    
    // 角色区域 

        $('.person .tour ul li a').each(function(index, el) {
            $(this).click(function(event) {
                $('.person .tour ul li a').removeClass('on');
                $(this).addClass('on');
            });
        });

        $('.person .tour ul li #onchange').click(function(event) {
            $('.person .center').addClass('current');
            $('.person .lead').removeClass('current');

        });

         $('.person .tour ul li #change').click(function(event) {
            $('.person .lead').addClass('current');
            $('.person .center').removeClass('current');
         });


    $('.person .center .top ul li').each(function(index, el) {
         $(this).click(function(event) {
            $(this).addClass('current').siblings().removeClass('current');
            $('#youbian-right').css('display', 'none');
            $('#youbian-left').css('display', 'none');
            $('#youbian-right').eq($(this).index(0)).css('display', 'block');
            $('.person .center .bottom .long div').eq($(this).index()).addClass('show').siblings().removeClass('show');
         });
    });


    $('#youbian-right').click(function(event) {
        ee ++;

        if(ee >= 6) {
            ee = 6;

            $('#youbian-right').css('display', 'none');
            $('#youbian-left').css('display', 'block');
        }

            $('#youbian-left').css('display', 'block');

            $('.person .center .bottom div u').stop().animate({'left': -800 *ee}, 200);
    });


    $('#youbian-left').click(function(event) {
        ee --;

        if(ee <= 0) {
            ee = 0;

            $('#youbian-left').css('display', 'none');
            $('#youbian-right').css('display', 'block');
               
        }

            $('#youbian-right').css('display', 'block');
            $('.person .center .bottom div u').stop().animate({'left': -800 *ee}, 200);
    });



    $('.person .center .bottom ul li a span').hover(function() {
        $(this).css('background', 'rgba(0, 0, 0, 0.5)');
        $(this).children('em').css('display', 'block');
    }, function() {
         $(this).css('background', 'rgba(0, 0, 0, 0)');
         $(this).children('em').css('display', 'none');
    });

    $('.person .lead .name a').each(function(index, el) {
        $(this).click(function(event) {
            $(this).addClass('current').siblings().removeClass('current');
            $('.person .lead .toright').eq($(this).index()).addClass('on').siblings().removeClass('on');
        });
        
    });


    // 角色区域end
    

    //攻略区域 
    
    $('.list .care .top ol li').each(function(index, el) {
        $(this).hover(function() {
            $(this).addClass('current').siblings().removeClass('current');
            $('.list .care .top ul').stop().animate({'left': -368*$(this).index()}, speed);
            hey = $(this).index();
            bay= $(this).index();
        });
        
    });

    var user = setInterval(fun, 5000);

        function fun(){
            hey ++;
            if(hey >2){
                hey = 1;
                $('.list .care .top ul').css('left', 0);
            }
            $('.list .care .top ul').stop().animate({'left': -368 *hey}, speed); 

            bay ++;
            if (bay >1){
                bay = 0;
            }
            $('.list .care .top ol li').eq(bay).addClass('current').siblings().removeClass('current');
        }

        $('.list .care .top ').hover(function() {
            clearInterval(user);
        }, function() {
            user = setInterval(fun, 5000);
        });

    $('.list .more .top a').each(function(index, el) {
        $(this).hover(function() {
            $('.list .more .top a span').removeClass('current');
            $(this).children('span').addClass('current');
            $('.more .bottom .totle ').stop().animate({'left':-385 *$(this).index()}, 500);
        });
    });
    

    //攻略区域end /
    
    
    // 同人专区
    
    $('.same .top .select ul li em#text').each(function(index, el) {
        var num = index * -155;
        $(this).css('background-position', num+'px '+0);
    });

    $('.same .top .select ul li a').hover(function() {
        $('.same .top .select ul li em').removeClass('current');
        $(this).children('em').addClass('current');
        $('.same .top .select ul li span').removeClass('current');
        $(this).children('span').addClass('current');
    });


    $('.same .top .select ul li#cc').each(function(index, el) {
        $(this).hover(function() {
            $('.same .bottom .auto').stop().animate({'left': -1200 * $(this).index()}, 1000);
        });
    });

    $('.same .bottom ul li a').hover(function() {
        $(this).children('span').css('background', 'rgba(0, 0, 0, 0.5)');
        $(this).children('i').css('display', 'block');
        
    }, function() {
        $(this).children('span').css('background', 'rgba(0, 0, 0, 0)');
        $(this).children('i').css('display', 'none');
    });
    // 同人专区end
    
    // 阴阳师视频专区
    $('.video ul li a').hover(function() {
        $(this).children('img').stop().animate({width : 297, height : 169,'marginLeft':'-14px','marginTop':'-8px'}, 200);


    }, function() {
        $(this).children('img').stop().animate({width : 270, height : 154,'marginLeft':'0','marginTop':'0'}, 200);

    });

    // 阴阳师视频专区end

    // 活动专区
    $('.active ul li a').hover(function() {
        $(this).children('img').stop().animate({width : 283, height : 161,'marginLeft':'-7px','marginTop':'-5px'}, 200);

    }, function() {
        $(this).children('img').stop().animate({ width : 270, height: 153,'marginLeft':'0','marginTop':'0'}, 200);
    });

    // 活动专区end
   
    // 远远不止区域
    $('.notOnly a').hover(function() {
        $(this).children('span.item1').stop().animate({'marginBottom':'-40px'}, 500);
        $(this).children('span.item2').css('display', 'none');
        $(this).children('span.item3').stop().animate({'marginTop':'-75px'}, 500);
        $(this).children('div').fadeIn();
        $('.notOnly div').stop().animate({'marginTop':'-10px','opacity':1}, 500);
    }, function() {
        $(this).children('span.item1').stop().animate({'marginBottom':'0'}, 500);
        $(this).children('span.item2').css('display', 'block');
        $(this).children('span.item3').stop().animate({'marginTop':'0'}, 500);
        $(this).children('div').fadeOut();
        $(this).children('div').stop().animate({'marginTop':'0','opacity':0}, 500);
    });
    // 远远不止区域end

    // 官方二维码区域
    $('#goBack').click(function(event) {
        $('body').stop().animate({'scrollTop':0}, 1000);
    });

    // 官方二维码区域end

});
