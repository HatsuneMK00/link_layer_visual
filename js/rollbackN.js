$(document).ready(function(){
    $(".affirm,.timer,.new-blocks,.no,.lost").hide();
  $("#rollbackN").click(function(){
      
/*******************************************************/
       
      $(".blocks,.affirm,.new-blocks,.timer,.lost,.no").delay(1000);//延迟1500ms后动画开始,右边导航栏划出。
      $("#timer0").fadeIn(500);
      $("#blocks0").animate({bottom:'420px'},2000,function(){$("#affirm0").toggle(0).animate({top:'420px'},2000);});//0号砖头2s运输到程序狗，程序狗回发确认帧2s

      $("#blocks1").delay(500).animate({bottom:'420px'},2000,function(){
          $("#affirm1").toggle(0).animate({top:'420px'},2000);
      });//1号砖头2s运输到程序狗，程序狗回发确认帧2s
      
      $("#blocks2").delay(1000).animate({bottom:'210px'},1000).fadeOut(250);//2号砖头运动210px为路程一半，250ms后消失
      $("#lost").delay(2250).fadeIn(0).delay(500).fadeOut(250);//2000ms后二号帧运动到路程一半并消失，“哎呀妈呀我丢失了”语句出现，渐入效果250ms，延迟250ms后淡出效果250ms
      $("#no1").delay(3000).fadeIn(0).delay(500).fadeOut(0);//感叹号出现500ms后消失

      $("#blocks3").delay(4000).animate({bottom:'420px'},2000,function(){
        /*本来blocks3按照原来时间顺序发帧*/ //$("#affirm3").toggle(0).animate({top:'420px'},2000).delay(1500).animate({bottom:'-=50px',opacity:0},500);/*3号确认帧在接收方收到帧后出现并且成功运送，1500ms后消失*/
      }).delay(0).animate({bottom:'+=50px',opacity:0},500);//blocks3延迟3500ms后消失
      
      $("#blocks4").delay(4500).animate({bottom:'420px'},2000,function(){
    //$("#affirm4").toggle(0).animate({top:'420px'},2000).delay(1300).animate({bottom:'-=50px',opacity:0},500);
      }).delay(0).animate({bottom:'+=50px',opacity:0},500);

      $("#newAffirm11").delay(6000).toggle(0).animate({top:'420px'},2000);
      $("#newAffirm12").delay(6500).toggle(0).animate({top:'420px'},2000);

      $("#timer1").delay(9000).fadeIn(0).animate({top:'-2px'},100).animate({left:'-2px'},100).animate({top:'2px'},100).animate({left:'2px'},100).delay(350).fadeOut(250);//8500=6500+2000   注此闹钟停了一秒 还要再延时500
      //计时器时间为8000ms,8400ms = 400ms（二号帧开始运动的时间） + 8000ms定时器时间。与timer1同时发生的事情有：3号4号确认帧和接收方收到的帧丢掉

      $("#newBlocks2").delay(9750).fadeIn(250).animate({bottom:'420px'},2000,function(){$("#affirm2").toggle(0).animate({top:'420px'},2000);});//计时器作用后，1s后生成新帧，并发送给接收方2s，接收方接受帧后回发确认帧2s。

      $("#newBlocks3").delay(9750).fadeIn(250).delay(500).animate({bottom:'420px'},2000,function(){$("#newAffirm3").toggle(0).animate({top:'420px'},2000);});
      
//      $("#blocks4").delay(4200).animate({bottom:'420px'},2000,function(){
//          $("#affirm4").toggle(0).animate({top:'420px'},2000);
//      });
//      $("#blocks4").delay(3500).animate({bottom:'+=50px',opacity:0},500);
//      $("#affirm4").delay(3500).animate({bottom:'-=50px',opacity:0},500);
      $("#newBlocks4").delay(9750).fadeIn(250).delay(1000).animate({bottom:'420px'},2000,function(){$("#newAffirm4").toggle(0).animate({top:'420px'},2000);});
      
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

      //  $("#blocks7").delay(14500).animate({bottom:'420px'},2000,function(){
      //     $("#affirm7").toggle(0).animate({top:'420px'},2000).delay(4500).animate({bottom:'-=50px',opacity:0},500);
      // }).delay(6000).animate({bottom:'+=50px',opacity:0},500);

      $("#blocks7").delay(15000).animate({bottom:'420px'},2000,function(){
          $("#affirm7").toggle(0).animate({top:'420px'},2000);
          $("#newAffirm6").delay(2000).toggle(0).fadeIn(0).animate({top:'420px'},0);
      });


      $("#blocks8").delay(18000).animate({bottom:'420px'},2000,function(){
          $("#affirm8").toggle(0).animate({top:'420px'},2000);
      });

      setTimeout("show_question()",24000);
     
      // $("#blocks8").delay(17600).animate({bottom:'420px'},2000,function(){
      //     $("#affirm8").toggle(0).animate({top:'420px'},2000).delay(1000).animate({bottom:'-=50px',opacity:0},500);
      // }).delay(2500).animate({bottom:'+=50px',opacity:0},500);



/***********************************window move***********************************/
      var win = $("#window1");
      win.delay(5000);
      win.animate({left:'75px'},100).delay(400);//1滑到2
      win.animate({left:'+=75px'},100).delay(400);//2滑到3 6000
      win.delay(9000).animate({left:'+=75px'},100).delay(400);//3滑到4 15500
      win.animate({left:'+=75px'},100).delay(400);//4滑到5
      win.animate({left:'+=75px'},100).delay(400);//5滑到6  16500
      win.delay(2500).animate({left:'+=75px'},100).delay(400);//6滑到7  19500
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