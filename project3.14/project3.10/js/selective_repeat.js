$(document).ready(function(){
    $(".affirm,.timer,.new-blocks,.no,#lost").hide();
  $("#selective_repeat").click(function(){
      
/*******************************************************/
       
      $(".blocks,.affirm,.new-blocks,.timer").delay(1500);//延迟1500ms后动画开始
      $("#timer0").fadeIn(500);
      var block0 = $("#blocks0");
      block0.animate({bottom:'420px'},2000,function(){$("#affirm0").toggle(0).animate({top:'420px'},2000);});//砖头2s运输到程序狗

      $("#blocks1").delay(200).animate({bottom:'420px'},2000,function(){
          $("#affirm1").toggle(0).animate({top:'420px'},2000);
      });
      
      $("#blocks2").delay(400).animate({bottom:'210px'},1500).fadeOut(250);//运动210px为路程一半
      $("#timer1").delay(8400).fadeIn(0).animate({top:'-2px'},100).animate({left:'-2px'},100).animate({top:'2px'},100).animate({left:'2px'},100).delay(400).fadeOut(250);//计时器时间为8000ms,与timer1同时发生的事情有：确认帧和接收方收到的帧丢掉
      $("#no1").delay(3850).fadeIn(0).delay(500).fadeOut(250);
//      $("#lost").delay(4500).fadeIn(0).delay(500).fadeOut(250);
      
    $("#newBlocks2").delay(9400).fadeIn(250).animate({bottom:'420px'},2000,function(){$("#affirm4").toggle(0).animate({top:'420px'},2000);});//计时器作用后，1s后生成新帧，并发送给接收方。接收方接受帧后回发确认帧。
    $("#newAffirm2").delay(13650).toggle(0).fadeIn(4000);
    $("#newAffirm3").animate({top:'420px'},2000).delay(11650).toggle(0).fadeIn(4000);

      $("#blocks3").delay(4000).animate({bottom:'420px'},2000,function(){
//         $("#affirm3").toggle(0).animate({top:'420px'},2000);
      });
      $("#newAffirm11").delay(6000).toggle(0).animate({top:'420px'},2000);
      $("#newAffirm12").delay(6200).toggle(0).animate({top:'420px'},2000);
      
      $("#blocks4").delay(4200).animate({bottom:'420px'},2000,function(){
//         $("#affirm4").toggle(0).animate({top:'420px'},2000);
      });
      
      
//      $("#newBlocks3").delay(9600).fadeIn(250).animate({bottom:'420px'},2000,function(){$("#newAffirm3").toggle(0).animate({top:'420px'},2000);});
      
//      $("#blocks4").delay(4200).animate({bottom:'420px'},2000,function(){
//          $("#affirm4").toggle(0).animate({top:'420px'},2000);
//      });
//      $("#blocks4").delay(3500).animate({bottom:'+=50px',opacity:0},500);
//      $("#affirm4").delay(3500).animate({bottom:'-=50px',opacity:0},500);
//      $("#newBlocks4").delay(9800).fadeIn(250).animate({bottom:'420px'},2000,function(){$("#newAffirm4").toggle(0).animate({top:'420px'},2000);});
      
/********************************************************************************/
      
      $("#blocks5").delay(13600).animate({bottom:'420px'},2000,function(){
          $("#affirm5").toggle(0).animate({top:'420px'},2000);
      });
      
      var block6 = $("#blocks6");
      block6.delay(13800).animate({bottom:'420px'},2000,function(){
          $("#affirm6").toggle(0).animate({top:'200px'},2000).fadeOut(250);
      });
      
      $("#timer2").delay(21800).fadeIn(0).animate({top:'-2px'},100).animate({left:'-2px'},100).animate({top:'2px'},100).animate({left:'2px'},100).delay(400).fadeOut(250);
      $("#no2").delay(19900).fadeIn(0).delay(500).fadeOut(250);
//      $("#timer2").animate({top:'2px'},62.5,function(){
//            $("#timer2").animate({right:'2px'},62.5,function(){
//             $("#timer2").animate({top:'-2px'},62.5,function(){$("#timer2").animate({left:'2px'},62.5)});
//            });
//        });//闹钟的抖动效果
//      $("#timer2").delay(250).fadeOut(250);
      $("#newBlocks6").delay(22800).fadeIn(250).animate({bottom:'420px'},2000,function(){
          $("#newAffirm6").fadeIn(250).animate({bottom:'-420px'},2000);
      });
      
       $("#blocks7").delay(14000).animate({bottom:'420px'},2000,function(){
          $("#affirm7").toggle(0).animate({top:'420px'},2000);
      });
//      $("#newBlocks7").delay(23000).fadeIn(250).animate({bottom:'420px'},2000,function(){$("#newAffirm7").delay(250).toggle(0).animate({top:'420px'},2000);});
     
      $("#blocks8").delay(17600).animate({bottom:'420px'},2000,function(){
          $("#affirm8").toggle(0).animate({top:'420px'},2000);
      });
//      $("#newBlocks8").delay(23200).fadeIn(250).animate({bottom:'420px'},2000,function(){$("#newAffirm8").delay(250).toggle(0).animate({top:'420px'},2000);});
      
/***********************************window move***********************************/
      var win = $("#window1");
      win.delay(5300);
      win.animate({left:'75px'},300);
      win.animate({left:'+=75px'},300);
      win.delay(8900).animate({left:'+=150px'},300);
      win.animate({left:'+=75px'},300);
      win.delay(3400).animate({left:'+=75px'},300);
      
//      win.delay(8500).animate({left:'+=75px'},50);
//      win.delay(1900).animate({left:'+=75px'},50);
      
//      $(this).next().animate({left:'100px'},1000);
//      win.animate({left:'1px'},1000);
//      win.animate({left:'100px'},1000);
//      win.animate({left:'1px'},1000);
//      win.animate({left:'100px'},1000);
//      win.animate({left:'1px'},1000);
//      win.animate({left:'100px'},1000);
//      win.animate({left:'1px'},1000);
//      win.animate({left:'100px'},1000);                                         
//    setTimeout(function(){win.animate({left:'100px'},500);},1000)
//      setTimeout(function(){win.animate({left:'100px'},500);},1000)
//      setInterval(function(){win.animate({left:'100px'},500);},1000)
//      var win = $("#window1");
//      win.animate({left:'100px'},500);
//      win.delay(1000);
//      win.animate({left:'100px'},500);
//      
      
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