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
            $("#home-head").css({'padding-top':'120px'});
            $("#home-motto").css({'opacity':'1'});
            $("#home-motto").next().animate({'opacity':'1'},700);
            $("#header").animate({'opacity':'0.9'},700,function(){
                $("#lining").fadeIn(450,function(){
                    $(this).next().fadeIn(450,function(){
                        $(this).next().fadeIn(450,function(){
                            $(this).next().fadeIn(450,function(){
                                $(this).next().fadeIn(450,function(){
                                    $("#fp-nav").fadeIn(300)
                                })
                            });
                        });
                    });
                });
            });
        },
        afterLoad:function(anchorLink,index){
            if(index==1){
              $("#header").animate({'opacity':'1'},400);
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
                var arr=[90,65,85,75,70,80,70];
                for(var key in arr){
                    var color='#'+Math.floor(Math.random()*0xffffff).toString(16);
                    $(".proBar").eq(key).attr('style','width:'+arr[key]+'%').css('background-Color',color).html(arr[key]+'%'); 
                };
            }
            if(index==4){
                $(".demo-item").css({'transform':'scale(1)'});
                $(".demo-item >a").hover(function(){
                  $(this).prev().prev().css('top',73);
                  $(this).prev().css('top',60);
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
                var number=0;
                var word=$("#contact-info-none").html();
                var timer=setInterval(t,70);
                function t(){
                    if(number!=word.length){
                        $("#contact-info").html(word.substring(0,number++));
                    }else{
                        clearInterval(timer)
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
        $("#contact-content").css('padding-top',($('.active').height()-$("#contact-content").height())/12)
        $("#contact-panel").css('top',parseInt($("#contact-content").css('padding-top'))+parseInt($("#contact-panel").css('top')));
    });
};
//底部提醒
$("#contact-panel a:last").click(function(){
    alert("正在努力建设中...");
    return false;
});



   


