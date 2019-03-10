$(document).ready(function(){
    $(".affirm,.timer,.new-blocks,.no,#lost").hide();
  $("#selective_repeat").click(function(){
      
/*******************************************************/
       
      $(".blocks,.affirm,.new-blocks,.timer,.lost,.no").delay(1000);//延迟1500ms后动画开始
      $("#timer0").fadeIn(500);
      $("#blocks0").animate({bottom:'420px'},2000,function(){$("#affirm0").toggle(0).animate({top:'420px'},2000);});//0号砖头2s运输到程序狗，程序狗回发确认帧2s

      $("#blocks1").delay(500).animate({bottom:'420px'},2000,function(){
          $("#affirm1").toggle(0).animate({top:'420px'},2000);
      });//1号砖头2s运输到程序狗，程序狗回发确认帧2s

      $("#blocks2").delay(1000).animate({bottom:'210px'},1000).fadeOut(250);//2号砖头运动210px为路程一半，250ms后消失
      $("#lost").delay(2250).fadeIn(0).delay(500).fadeOut(250);//2000ms后二号帧运动到路程一半并消失，“哎呀妈呀我丢失了”语句出现，渐入效果250ms，延迟250ms后淡出效果250ms
      $("#no1").delay(3000).fadeIn(0).delay(500).fadeOut(0);//感叹号出现500ms后消失
//      $("#lost").delay(4500).fadeIn(0).delay(500).fadeOut(250);

      $("#blocks3").delay(4000).animate({bottom:'420px'},2000,function(){
//         $("#affirm3").toggle(0).animate({top:'420px'},2000);
      });

      
      $("#blocks4").delay(4500).animate({bottom:'420px'},2000,function(){
//         $("#affirm4").toggle(0).animate({top:'420px'},2000);
      });

      $("#newAffirm11").delay(6000).toggle(0).animate({top:'420px'},2000);
      $("#newAffirm12").delay(6500).toggle(0).animate({top:'420px'},2000);

      $("#timer1").delay(9000).fadeIn(0).animate({top:'-2px'},100).animate({left:'-2px'},100).animate({top:'2px'},100).animate({left:'2px'},100).delay(350).fadeOut(250);//8500=6500+2000   注此闹钟停了一秒 还要再延时500

      $("#newBlocks2").delay(9750).fadeIn(250).animate({bottom:'420px'},2000,function(){$("#affirm4").toggle(0).animate({top:'420px'},2000);});//计时器作用后，1s后生成新帧，并发送给接收方。接收方接受帧后回发确认帧。
      $("#newAffirm2").delay(14000).toggle(0).fadeIn(100);
      $("#newAffirm3").animate({top:'420px'},0).delay(14000).toggle(0).fadeIn(100);
      
      
//      $("#newBlocks3").delay(9600).fadeIn(250).animate({bottom:'420px'},2000,function(){$("#newAffirm3").toggle(0).animate({top:'420px'},2000);});
      
//      $("#blocks4").delay(4200).animate({bottom:'420px'},2000,function(){
//          $("#affirm4").toggle(0).animate({top:'420px'},2000);
//      });
//      $("#blocks4").delay(3500).animate({bottom:'+=50px',opacity:0},500);
//      $("#affirm4").delay(3500).animate({bottom:'-=50px',opacity:0},500);
//      $("#newBlocks4").delay(9800).fadeIn(250).animate({bottom:'420px'},2000,function(){$("#newAffirm4").toggle(0).animate({top:'420px'},2000);});
      
/********************************************************************************/

      $("#blocks5").delay(14000).animate({bottom:'420px'},2000,function(){
          $("#affirm5").toggle(0).animate({top:'420px'},2000);
      });

      var block6 = $("#blocks6");
      block6.delay(14500).animate({bottom:'420px'},2000,function(){
          $("#affirm6").toggle(0).animate({top:'200px'},1000).fadeOut(250);
      });

      $("#no2").delay(17750).fadeIn(0).delay(500).fadeOut(250);
//      $("#timer2").animate({top:'2px'},62.5,function(){
//            $("#timer2").animate({right:'2px'},62.5,function(){
//             $("#timer2").animate({top:'-2px'},62.5,function(){$("#timer2").animate({left:'2px'},62.5)});
//            });
//        });//闹钟的抖动效果
//      $("#timer2").delay(250).fadeOut(250);

      $("#blocks7").delay(15000).animate({bottom:'420px'},2000,function(){
          $("#affirm7").toggle(0).animate({top:'420px'},2000);
          $("#newAffirm6").delay(2000).toggle(0).fadeIn(0).animate({top:'420px'},0);
      });


      $("#blocks8").delay(18000).animate({bottom:'420px'},2000,function(){
          $("#affirm8").toggle(0).animate({top:'420px'},2000);
      });
//      $("#newBlocks7").delay(23000).fadeIn(250).animate({bottom:'420px'},2000,function(){$("#newAffirm7").delay(250).toggle(0).animate({top:'420px'},2000);});

//      $("#newBlocks8").delay(23200).fadeIn(250).animate({bottom:'420px'},2000,function(){$("#newAffirm8").delay(250).toggle(0).animate({top:'420px'},2000);});
      
/***********************************window move***********************************/
      var win = $("#window1");
      win.delay(5000);
      win.animate({left:'75px'},100).delay(400);//1滑到2
      win.animate({left:'+=75px'},100).delay(400);//2滑到3 6000
      win.delay(9000).animate({left:'+=225px'},300).delay(200);//3滑到6 15500
      win.delay(3500).animate({left:'+=75px'},100).delay(400);//6滑到7 19500
      win.delay(500).animate({left:'+=150px'},200).delay(300);//7滑到9 20500
      win.delay(2500).fadeOut(0);//9滑出
      
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