/* 
* @Author: anchen
* @Date:   2017-04-30 16:48:34
* @Last Modified by:   anchen
* @Last Modified time: 2017-05-20 20:05:26
*/


    $(document).ready(function() {
        var speed = 1000;
        var dd = 0;


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
    

    //顶部区域end

    $(document).ready(function(){
        var speed = 1000;
        var key = 0;
        var circle = 0;
        var aa = 0;
        var bb = 0;
         var cc = $('.main .top').offset().top;

        // 内容区域
      
       
        $(window).scroll(function(event) {
            
            var val = $(document).scrollTop();

            if(val >= cc){
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



        $('.content .content-main .list-nav em').each(function(index, el) {
            $(this).hover(function() {
                $('.content .content-main .list-nav em').removeClass('current');
                $(this).addClass('current');
            });
        });
     

        $('.sider .slide-main .hd ul li').each(function(index, el) {
            $(this).hover(function() {
                $(this).addClass('current').siblings().removeClass('current');
                $('.sider .slide-main .hot-banner ul').css('left', -270 *$(this).index());
                key = $(this).index();
                circle = $(this).index();
            });
        });

        var timer = setInterval(autoPlay, 3000);

            function autoPlay(){
                key++;
                if(key >5){
                    key =1;
                    $('.sider .slide-main .hot-banner ul').css('left', 0);
                }
                $('.sider .slide-main .hot-banner ul').stop().animate({'left': -270* key}, speed);

                circle ++;
                if(circle >4){
                    circle = 0;
                }

                $('.sider .slide-main .hd ul li').eq(circle).addClass('current').siblings().removeClass('current');
            }

        $('.sider .slide-main .hot-banner .hr').hover(function() {
            clearInterval(timer);
        }, function() {
            timer = setInterval(autoPlay, 5000);
        });



        $('.sider .slide-main .tong-banner .hr ul li').each(function(index, el) {
            $(this).hover(function() {
                $(this).addClass('current').siblings().removeClass('current');
                $('.sider .slide-main .tong-banner .temp ul').css('left', -270 *$(this).index());
                aa = $(this).index();
                bb = $(this).index();
            });
        });

        var user = setInterval(zidong, 5000);

            function zidong(){
                aa++;
                if(aa >4){
                    aa =1;
                    $('.sider .slide-main .tong-banner .temp ul').css('left', 0);
                }
                $('.sider .slide-main .tong-banner .temp ul').stop().animate({'left': -270* aa}, speed);

                bb ++;
                if(bb >3){
                    bb = 0;
                }

                $('.sider .slide-main .tong-banner .hr ul li').eq(bb).addClass('current').siblings().removeClass('current');
            }

        $('.sider .slide-main .tong-banner .temp ').hover(function() {
            clearInterval(user);
        }, function() {
            user = setInterval(zidong, 5000);
        });
        });

        $('.content .content-main .list-nav a').each(function(index, el) {
            $('.content .content-main .list-nav a').click(function(event) {
                $(this).stop().addClass('current').siblings().stop().removeClass('current');
                $('.content .content-main .new-list').eq($(this).index()).stop().addClass('on').siblings().stop().removeClass('on');
            });
        });

        $('.sider .slide-main .media-box .media-tit .pop').each(function(index, el) {
            $(this).hover(function() {
                $(this).addClass('on').siblings().removeClass('on');
                $('.sider .slide-main .media-box .media-wrap .cur').eq($(this).index()).addClass('on').siblings().removeClass('on');
            });
        });

        $('.content .sider .btn-close').click(function(event) {
            // $('.content .sider .slide').css('transition', 'all 0.3s linear');
            // $('.content .sider .slide-main').css('opacity', '0');
            $('.content .sider').css('opacity', '0');
            $(this).css('display', 'none');
        });
        

        // 内容区域

    });