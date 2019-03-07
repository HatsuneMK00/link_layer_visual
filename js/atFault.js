$(document).ready(function(){
    $(".affirm,.timer,.new-blocks,.no,.lost").hide();
    $("#AtFault").click(function(){
        var timer = $("#timer");


        /*******************************************************/

        $(".blocks,.affirm,.lost,.no,.timer").delay(1500);//延迟1500ms后动画开始
        $("#blocks0").animate({bottom:'420px'},500);//砖头运输到程序狗
        $("#affirm0").delay(1000).toggle(0);//延时500ms后，确认帧出现
        $("#affirm0").animate({top:'420px'},500);//确认帧发送给程序猿

        $("#blocks1").delay(2500);
        $("#blocks1").animate({bottom:'420px'},500);
        $("#affirm1").delay(3500).toggle(0);
        $("#affirm1").animate({top:'420px'},500);

        $("#blocks2").delay(5000);
        $("#blocks2").animate({bottom:'210px'},500);//运动210px为路程一半
        $("#blocks2").fadeOut(0);//blocks2消失
        $("#lost").delay(5500).fadeIn(250).delay(500).fadeOut(250);//2000ms后二号帧运动到路程一半并消失，“哎呀妈呀我丢失了”语句出现，渐入效果250ms，延迟250ms后淡出效果250ms
        $("#timer1").delay(6500).fadeIn(0);
//      $("#timer1").animate({top:'2px'},62.5,function(){
//            $("#timer1").animate({right:'2px'},62.5,function(){
//             $("#timer1").animate({top:'-2px'},62.5,function(){$("#timer1").animate({left:'2px'},62.5)});
//            });
//        });//闹钟的抖动效果
        $("#timer1").delay(500).fadeOut(0);
        $("#newBlocks2").delay(7000).fadeIn(250).delay(250).animate({bottom:'420px'},500);//等待前面动画完毕，延时4500ms，newBlocks2重新生成并且运往monkey。
        $("#affirm2").delay(8500).toggle(0);//等待000ms后，确认帧出现
        $("#affirm2").animate({top:'420px'},500);//确认帧运往程序猿



        $("#blocks3").delay(10000);
        $("#blocks3").animate({bottom:'420px'},500);
        $("#affirm3").delay(11000).toggle(0);
        $("#affirm3").animate({top:'420px'},500);

        $("#blocks4").delay(12500);
        $("#blocks4").animate({bottom:'420px'},500);
        $("#affirm4").delay(13500).toggle(0);
        $("#affirm4").animate({top:'420px'},500);

        $("#blocks5").delay(15000);
        $("#blocks5").animate({bottom:'420px'},500);
        $("#affirm5").delay(16000).toggle(0);
        $("#affirm5").animate({top:'420px'},500);


        $("#blocks6").delay(17500);
        $("#blocks6").animate({bottom:'420px'},500);
        $("#affirm6").delay(18500).toggle(0);
        $("#affirm6").animate({top:'200px'},500);
        $("#affirm6").fadeOut(0);
        $("#no2").delay(19000).fadeIn(0).delay(500).fadeOut(0);
        $("#timer2").delay(19500).fadeIn(0);
//      $("#timer2").animate({top:'2px'},62.5,function(){
//            $("#timer2").animate({right:'2px'},62.5,function(){
//             $("#timer2").animate({top:'-2px'},62.5,function(){$("#timer2").animate({left:'2px'},62.5)});
//            });
//        });//闹钟的抖动效果
        $("#timer2").delay(500).fadeOut(0);
        $("#newBlocks6").delay(20000).fadeIn(250).delay(250).animate({bottom:'420px'},500);
        $("#newAffirm6").delay(21500).fadeIn(0).animate({bottom:'-420px'},500);

        $("#blocks7").delay(23000);
        $("#blocks7").animate({bottom:'420px'},500);
        $("#affirm7").delay(24000).toggle(0);
        $("#affirm7").animate({top:'420px'},500);

        $("#blocks8").delay(25500);
        $("#blocks8").animate({bottom:'420px'},500);
        $("#affirm8").delay(26500).toggle(0);
        $("#affirm8").animate({top:'420px'},500);


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