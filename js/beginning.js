
$(document).ready(function(){
    $("#beginning").click(function(){
        $(".blocks").delay(1500);//延迟1500ms后动画开始
        $("#blocks0").animate({bottom:'420px'},500);//砖头运输到程序狗

        $("#blocks1").delay(2000);
        $("#blocks1").animate({bottom:'420px'},500);

        $("#blocks2").delay(4000);
        $("#blocks2").animate({bottom:'420px'},500);

        $("#blocks3").delay(6000);
        $("#blocks3").animate({bottom:'420px'},500);

        $("#blocks4").delay(8000);
        $("#blocks4").animate({bottom:'420px'},500);

        $("#blocks5").delay(10000);
        $("#blocks5").animate({bottom:'420px'},500);

        $("#blocks6").delay(12000);
        $("#blocks6").animate({bottom:'420px'},500);

        $("#blocks7").delay(14000);
        $("#blocks7").animate({bottom:'420px'},500);

        $("#blocks8").delay(16000);
        $("#blocks8").animate({bottom:'420px'},500);

    });
});