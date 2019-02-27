$(document).ready(function(){
    $(".affirm,.timer,#newBlocks2,#newBlocks6").hide();
  $("#AtFault").click(function(){
var timer = $("#timer");
      
  
/*******************************************************/
       
      $(".blocks,.affirm").delay(1500);//延迟1500ms后动画开始
      $("#blocks0").animate({bottom:'420px'},1000);//砖头运输到程序狗
      $("#affirm0").delay(1000).toggle(0);//延时1000ms后，确认帧出现
      $("#affirm0").animate({top:'420px'},1000);//确认帧发送给程序猿

      $("#blocks1").delay(2000);
      $("#blocks1").animate({bottom:'420px'},1000);
      $("#affirm1").delay(3000).toggle(0);
      $("#affirm1").animate({top:'420px'},1000);
      
      $("#blocks2").delay(4000);
      $("#blocks2").animate({bottom:'210px'},500);//运动210px为路程一半
      $("#blocks2").fadeOut(250);//blocks2消失
      $("#timer1").delay(8750).fadeIn(0);
//      $("#timer1").animate({top:'2px'},62.5,function(){
//            $("#timer1").animate({right:'2px'},62.5,function(){
//             $("#timer1").animate({top:'-2px'},62.5,function(){$("#timer1").animate({left:'2px'},62.5)});
//            });
//        });//闹钟的抖动效果
     $("#timer1").delay(250).fadeOut(250); $("#newBlocks2").delay(7750).fadeIn(250).animate({bottom:'420px'},1000);//等待前面动画完毕，延时4500ms，newBlocks2重新生成并且运往monkey。
      $("#affirm2").delay(9000).toggle(0);//等待000ms后，确认帧出现
      $("#affirm2").animate({top:'420px'},1000);//确认帧运往程序猿
      
      
      
      $("#blocks3").delay(10000);
      $("#blocks3").animate({bottom:'420px'},1000);
      $("#affirm3").delay(11000).toggle(0);
      $("#affirm3").animate({top:'420px'},1000);
      
      $("#blocks4").delay(12000);
      $("#blocks4").animate({bottom:'420px'},1000);
      $("#affirm4").delay(13000).toggle(0);
      $("#affirm4").animate({top:'420px'},1000);
      
      $("#blocks5").delay(14000);
      $("#blocks5").animate({bottom:'420px'},1000);
      $("#affirm5").delay(15000).toggle(0);
      $("#affirm5").animate({top:'420px'},1000);
      
      
      $("#blocks6").delay(16000);//数值应为15000
      $("#blocks6").animate({bottom:'420px'},1000);
      $("#affirm6").delay(17000).toggle(0);
      $("#affirm6").animate({top:'200px'},1000);
      $("#affirm6").fadeOut(250);
      $("#timer2").delay(22250).fadeIn(0);
//      $("#timer2").animate({top:'2px'},62.5,function(){
//            $("#timer2").animate({right:'2px'},62.5,function(){
//             $("#timer2").animate({top:'-2px'},62.5,function(){$("#timer2").animate({left:'2px'},62.5)});
//            });
//        });//闹钟的抖动效果
      $("#timer2").delay(250).fadeOut(250);
      $("#newBlocks6").delay(22250).fadeIn(250).animate({bottom:'420px'},1000);
      $("#newAffirm6").delay(23250).fadeIn(250).animate({bottom:'-420px'},1000);
      
      $("#blocks7").delay(24250);
      $("#blocks7").animate({bottom:'420px'},1000);
      $("#affirm7").delay(25250).toggle(0);
      $("#affirm7").animate({top:'420px'},1000);
      
      $("#blocks8").delay(26250);
      $("#blocks8").animate({bottom:'420px'},1000);
      $("#affirm8").delay(27250).toggle(0);
      $("#affirm8").animate({top:'420px'},1000);
      setTimeout("show_question()",28260);


      
      
/*************************************************************************/
//      $("#blocks0").animate({bottom:'420px'},500,function(){
//          $("#blocks1").animate({bottom:'420px'},500,function(){
//               $("#blocks2").animate({bottom:'420px'},500,function(){
//                     $("#blocks3").animate({bottom:'420px'},500,function(){
//                         $("#blocks4").animate({bottom:'420px'},500,function(){
//                             $("#blocks5").animate({bottom:'420px'},500,function(){
//                                 $("#blocks6").animate({bottom:'420px'},500,function(){
//                                     $("#blocks7").animate({bottom:'420px'},500,function(){
//                                         $("#blocks8").animate({bottom:'420px'},500,function(){});
//                                     });
//                                 });
//                             });
//                         });
//                     });             
//               });
//          });
//      });
    });
});