$(document).ready(function(){
    $("#affirm0,#affirm1,#affirm2,#affirm3,#affirm4,#affirm5,#affirm6,#affirm7,#affirm8").hide();
  $("#noWrong").click(function(){
      $(".blocks,.affirm").delay(1500);//延迟1500ms后动画开始
      $("#blocks0").animate({bottom:'420px'},500);//砖头运输到程序狗
      $("#affirm0").delay(500).toggle(0);//延时500ms后，确认帧出现
      $("#affirm0").animate({top:'420px'},500);//确认帧发送给程序猿

      $("#blocks1").delay(1000);
      $("#blocks1").animate({bottom:'420px'},500);
      $("#affirm1").delay(1500).toggle(0);
      $("#affirm1").animate({top:'420px'},500);
      
      $("#blocks2").delay(2000);
      $("#blocks2").animate({bottom:'420px'},500);
      $("#affirm2").delay(2500).toggle(0);
      $("#affirm2").animate({top:'420px'},500);
      
      $("#blocks3").delay(3000);
      $("#blocks3").animate({bottom:'420px'},500);
      $("#affirm3").delay(3500).toggle(0);
      $("#affirm3").animate({top:'420px'},500);
      
      $("#blocks4").delay(4000);
      $("#blocks4").animate({bottom:'420px'},500);
      $("#affirm4").delay(4500).toggle(0);
      $("#affirm4").animate({top:'420px'},500);
      
      $("#blocks5").delay(5000);
      $("#blocks5").animate({bottom:'420px'},500);
      $("#affirm5").delay(5500).toggle(0);
      $("#affirm5").animate({top:'420px'},500);
      
      $("#blocks6").delay(6000);
      $("#blocks6").animate({bottom:'420px'},500);
      $("#affirm6").delay(6500).toggle(0);
      $("#affirm6").animate({top:'420px'},500);
      
      $("#blocks7").delay(7000);
      $("#blocks7").animate({bottom:'420px'},500);
      $("#affirm7").delay(7500).toggle(0);
      $("#affirm7").animate({top:'420px'},500);
      
      $("#blocks8").delay(8000);
      $("#blocks8").animate({bottom:'420px'},500);
      $("#affirm8").delay(8500).toggle(0);
      $("#affirm8").animate({top:'420px'},500);

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