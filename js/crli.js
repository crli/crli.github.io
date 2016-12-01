$(function(){

    $.ajax({
        type:"GET",
        url:"cr.html",
        dataType:"html",
        success: function(data){
            var about=$(data).find(".cr1").html();
            $("#about-inf").append(about);
            var skill=$(data).find(".cr2").html();
            $("#skill-info").append(skill);
            var rbi=$(data).find(".cr3").html();
            $(".resume-box-info").append(rbi);
        }
    })
    $('#dowebok').fullpage({
        resize:true,
        css3: true,
        verticalCentered: false,
        sectionsColor: ['#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2','#f2f2f2','#f2f2f2'],
        navigation: true,
        scrollingSpeed: 400,
        anchors: ["page1","page2","page3","page4","page5","page6"],
        afterRender:function(){
            $("#fp-nav").css({'display':'none'});
            $("#home-head").css({'padding-top':'120px'});
            $("#home-motto").css({'opacity':'1'});
            $("#home-motto").next().animate({'opacity':'1'},700);
            $("#header").animate({'opacity':'1'},700,function(){
                myFade($("#lining"),450)
            });
        },
        afterLoad:function(anchorLink,index){
            if(index==1){
              return
            }
            if(index==2){
                $("#about-inf").find("p").each(function(){
                    var $arr=$(this).attr('rel').split(',')
                    $(this).animate({
                        top:$arr[2]+'px',
                        left:$arr[3]+'px'
                    },500);
                });
            }
            if(index==3){
                var arr=[85,85,80,85,75,55,35];
                var aCo=['#000000','#8B0000','blue','green','#8B4513','#800080','#FF4500'];
                var aColor = [];
                for(var i = 0,len = aCo.length;i<len;i++){
                    var j = Math.floor(Math.random()*aCo.length);
                    aColor[i] = aCo[j];
                    aCo.splice(j,1);
                }
                
                for(var key in arr){
                    $(".proBar").eq(key).attr('style','width:'+arr[key]+'%').css('background-Color',aColor[key]).html(arr[key]+'%'); 
                };
            }
            if(index==4){
                $(".demo-item").css({'transform':'scale(1)'});
                $(".demo-item >a").hover(function(){
                  $(this).prev().prev().css('top',73);
                  $(this).prev().css('top',-60);
                },function(){
                  $(this).prev().prev().css('top',1000);
                  $(this).prev().css('top',-2000);
                })
            }
            if(index==5){
                $("#resume-infor p").each(function(){
                  var $arr=$(this).attr('rel').split(',')
                  $(this).animate({
                      top:$arr[2]+'px',
                      left:$arr[3]+'px'
                  },500);
                });
                $("#resume-box").css({'margin-top':'60px'});
            }
            if(index==6){
                var word="热爱前端、专注前端！",number=0;
                $(".contact-tip").html("");
                clearInterval(timer);
                var timer=setInterval(t,150);
                function t(){
                    number++;
                    $(".contact-tip").html(word.substring(0,number)+(number&1?"_":" "));
                    if (number>= word.length) {
                        clearInterval(timer);
                    }
                }
            }
        }
    })  
});
//高度自适应
(function(doc, win) {
    var screenWidth = 0, size = 'M';
    if (window.screen && screen.width) {
        screenWidth = screen.width;
        if (screenWidth > 1920) {
            // 超大屏，例如iMac
            size = 'L';
        } else if (screenWidth < 480) {
            // 小屏，如手机
            size = 'S';
        }
    }
    // 标记JS
    win.SIZE = size;        
})(document, window);
if (window.SIZE == 'S') {
   $(function(){
        $("#home-content").css('padding-top',($('.active').height()-$("#home-content").height())/6);
        $("#about-content").css('padding-top',($('.active').height()-$("#about-content").height())/6);
        $("#skill-content").css('padding-top',($('.active').height()-$("#skill-content").height())/6);
        $("#demo-content").css('padding-top',($('.active').height()-$("#demo-content").height())/6);
        $("#resume-content").css('padding-top',($('.active').height()-$("#resume-content").height())/6);
        $("#contact-content").css('padding-top',($('.active').height()-$("#contact-content").height())/12);
        $("#downpdf").css('top',parseInt($("#contact-content").css('padding-top'))+parseInt($("#downpdf").css('top')));
        $("#contact-panel").css('top',parseInt($("#contact-content").css('padding-top'))+parseInt($("#contact-panel").css('top')));
    });
};

//缓存
window.applicationCache.addEventListener('updateready',function(e){
    if(window.applicationCache.status == window.applicationCache.UPDATEREADY){
        window.applicationCache.swapCache();       
    }
},false)

//demo swiper
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    spaceBetween: 60,
    loop: true
}); 

//fadeIn
var myFade = function (posts,speed,fn){
    posts.fadeIn (speed, function (){
        var nextOne = $ (this).next();
        if (nextOne.length > 0){
            myFade (nextOne,speed);
        }else{
            $("#fp-nav").fadeIn(300)
        }
    });
}


