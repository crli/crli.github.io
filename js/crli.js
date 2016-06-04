$(function(){
    $('#dowebok').fullpage({
        resize:true,
        verticalCentered: false,
        sectionsColor: ['#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2','#f2f2f2','#f2f2f2'],
        navigation: true,
        scrollingSpeed: 400,
        anchors: ["page1","page2","page3","page4","page5","page6"],
        controlArrowColor:'#777', 
        afterRender:function(){
            $("#home-head").css({'padding-top':'120px'});
            $("#home-motto").css({'opacity':'1'});
            $("#home-motto").next().animate({'opacity':'1'},700);
            $("#header").animate({'opacity':'1'},700,function(){
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
              var arr=[90,65,90,75,70,80,70];
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
    $(window).resize(function(){
        autoScrolling();
        });
    function autoScrolling(){
        var $ww = $(window).width();
        if($ww < 1024){
            $.fn.fullpage.setAutoScrolling(false);
        }else{
            $.fn.fullpage.setAutoScrolling(true);
        }
    }
    autoScrolling();
});

//底部提醒
  $("#contact-panel a:last").click(function(){
    alert("正在努力建设中...");
    return false;
  })



   


