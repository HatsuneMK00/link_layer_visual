
// linkLayer Widget
var linkLayerWidget = function() {
    var STATUS = 0;
    var LINE = 1;
    var STATUS_r = 2;

    var statelist = new Array();
    var transitionTime = 500; //转换时间
    var currentStep = 0;  //当前步
    var animInterval;  //动画间隔
    var issPlaying; //与isPlaying in viz.js区分
    
    

    this.init = function () {
        var basicState = new Array();
        drawState(basicState);
    };

    drawState = function (stateArr) {
        $('#status p').html(stateArr[STATUS]);//当前代码显示顺序
        $('#status_r p').html(stateArr[STATUS_r]);//当前代码显示顺序
        highlightLine(stateArr[LINE]);
    }
    //乌托邦
    var Media = document.getElementById("video");
    this.beginning = function () {
        //add
        

        basicState = new Array();
        basicState[STATUS] = '设置第一个帧的序号为 1 <br>';
        basicState[STATUS_r] = '等待帧到达<br>';
        basicState[LINE] = [1,11];
        statelist.push(basicState);

        for (var i = 1; i <= 9; i++) {
            basicState = new Array();
            basicState[STATUS] = '发送序号为 {i} 的帧, i++<br>'.replace("{i}", i);
            basicState[LINE] = [3,4,11];
            statelist.push(basicState);

            basicState = new Array();
            basicState[STATUS_r] = '收到序号为 {i} 的帧 <br>'.replace("{i}", i);
            basicState[LINE] = [12];
            statelist.push(basicState);

            basicState = new Array();
            basicState[STATUS_r] = '接收第{i}帧传给网络层 <br>'.replace("{i}", i);
            basicState[LINE] = [13];
            statelist.push(basicState);

            if(i < 9){
                basicState = new Array();
                basicState[STATUS] = '还有需要发送的帧';
                basicState[STATUS_r] = '等待帧到达 <br>';
                basicState[LINE] = [2,5,11];
                statelist.push(basicState);
            }
        }
        basicState = new Array();
        basicState[STATUS] = '传输成功！';
        basicState[STATUS_r] = '接收成功! <br>';
        basicState[LINE] = [];
        statelist.push(basicState);
        basicState = new Array();
        basicState[STATUS] = '传输成功！';
        basicState[STATUS_r] = '接收成功! <br>';
        basicState[LINE] = [];
        statelist.push(basicState);

        basicState = new Array();
        basicState[STATUS] = '传输成功！';
        basicState[STATUS_r] = '接收成功! <br>';
        basicState[LINE] = [];
        statelist.push(basicState);


        this.play();
        /*add*/
        Media.play();
        return true;
    }
    //无错信道
    this.noWrong = function () {

        basicState = new Array();
        basicState[STATUS] = '设置第一个帧的序号为 1 <br>';
        basicState[STATUS_r] = '设置第一个确认帧的序号为 1，并等待帧到达<br>';
        basicState[LINE] = [1,11,12];
        statelist.push(basicState);

        for (var i = 1; i <= 9; i++) {
            basicState = new Array();
            basicState[STATUS] = '发送序号为 {i} 的帧<br>'.replace("{i}", i);
            basicState[STATUS_r] = '等待帧到达<br>';
            basicState[LINE] = [3,12];
            statelist.push(basicState);

            basicState = new Array();
            basicState[STATUS] = '等待序号为 {i} 的确认帧<br>'.replace("{i}", i);
            basicState[STATUS_r] = '收到序号为 {i} 的帧 <br>'.replace("{i}", i);
            basicState[LINE] = [4,13];
            statelist.push(basicState);

            basicState = new Array();
            basicState[STATUS_r] = '接收该帧，并发送序号为 {i} 的确认帧<br>'.replace("{i}", i);
            basicState[LINE] = [4,14,15,16];
            statelist.push(basicState);

            basicState = new Array();
            basicState[STATUS] = '收到序号为 {i} 的确认帧，i++<br>'.replace("{i}", i);
            basicState[STATUS_r] = '等待帧到达<br>';
            basicState[LINE] = [12,5];
            statelist.push(basicState);

            if(i < 9){
                basicState = new Array();
                basicState[STATUS] = '还有需要发送的帧';
                basicState[STATUS_r] = '等待帧到达 <br>';
                basicState[LINE] = [2,6,12];
                statelist.push(basicState);
            }
        }
        basicState = new Array();
        basicState[STATUS] = '传输成功！';
        basicState[STATUS_r] = '接收成功! <br>';
        basicState[LINE] = [];
        statelist.push(basicState);
        basicState = new Array();
        basicState[STATUS] = '传输成功！';
        basicState[STATUS_r] = '接收成功! <br>';
        basicState[LINE] = [];
        statelist.push(basicState);

        basicState = new Array();
        basicState[STATUS] = '传输成功！';
        basicState[STATUS_r] = '接收成功! <br>';
        basicState[LINE] = [];
        statelist.push(basicState);

        this.play();
        //add
        Media.play();
        return true;
    }
    //有错停等
    this.atFault = function () {

        var isSend = true;
        var isReceive = true;

        basicState = new Array();
        basicState[STATUS] = '设置第一个帧的序号为 1 <br>';
        basicState[STATUS_r] = '设置第一个确认帧的序号为 1，并等待帧到达<br>';
        basicState[LINE] = [1,11,12];
        statelist.push(basicState);
        for (var i = 1;i <= 9;i++) {
            basicState = new Array();
            basicState[STATUS] = '发送序号为 {i} 的帧,并设置计时器<br>'.replace("{i}", i);
            basicState[STATUS_r] = '等待帧到达<br>';
            basicState[LINE] = [3,4,12];
            statelist.push(basicState);

            if (isSend == false){
                basicState = new Array();
                basicState[STATUS] = '等待序号为 {i} 的确认帧<br>'.replace("{i}", i);
                basicState[LINE] = [12];
                statelist.push(basicState);

                basicState = new Array();
                basicState[STATUS] = '等待序号为 {i} 的确认帧<br>'.replace("{i}", i);
                basicState[LINE] = [12];
                statelist.push(basicState);

                basicState = new Array();
                basicState[STATUS] = '规定时间未收到序号为 {i} 的确认帧,进入下一轮<br>'.replace("{i}", i);
                basicState[LINE] = [12,5,7];
                statelist.push(basicState);

                i--;
                isSend = true;
            }else {
                basicState = new Array();
                basicState[STATUS] = '等待序号为 {i} 的确认帧<br>'.replace("{i}", i);
                basicState[STATUS_r] = '有帧到达 <br>';
                basicState[LINE] = [13];
                statelist.push(basicState);

                if( i == 7 && isReceive == true ){
                    basicState = new Array();
                    basicState[STATUS_r] = '该帧序号为 {i} != 8 ,不接收该帧并发送确认帧 7<br>'.replace("{i}", i);
                    basicState[LINE] = [14,17];
                    statelist.push(basicState);

                }else{
                    basicState = new Array();
                    basicState[STATUS_r] = '该帧序号为 {i} == i ,接收该帧并发送确认帧 {i}&nbsp;,i++ <br>'.replace("{i}", i).replace("{i}", i);
                    basicState[LINE] = [14,15,16,17];
                    statelist.push(basicState);
                }

                if ( isReceive ==false){
                    basicState = new Array();
                    basicState[STATUS] = '等待序号为 {i} 的确认帧<br>'.replace("{i}", i);
                    basicState[LINE] = [12];
                    statelist.push(basicState);

                    basicState = new Array();
                    basicState[STATUS] = '规定时间未收到序号为 {i} 的确认帧，进入下一轮<br>'.replace("{i}", i);
                    basicState[LINE] = [12,5,7];
                    statelist.push(basicState);

                    i--;
                    isReceive = true;
                }else {
                    basicState = new Array();
                    basicState[STATUS] = '规定时间收到序号为 {i} 的确认帧,i++清空计时器<br>'.replace("{i}", i);
                    basicState[STATUS_r] = '等待帧到达<br>';
                    basicState[LINE] = [12,5,6,7];
                    statelist.push(basicState);


                    if( i == 2 ){
                        isSend = false;
                    }
                    if( i == 6 ){
                        isReceive = false;
                    }
                }
            }

            if(i < 9){
                basicState = new Array();
                basicState[STATUS] = '还有需要发送的帧';
                basicState[STATUS_r] = '等待帧到达 <br>';
                basicState[LINE] = [2,8,12];
                statelist.push(basicState);
            }
        }
        basicState = new Array();
        basicState[STATUS] = '传输成功！';
        basicState[STATUS_r] = '接收成功! <br>';
        basicState[LINE] = [];
        statelist.push(basicState);

        basicState = new Array();
        basicState[STATUS] = '传输成功！';
        basicState[STATUS_r] = '接收成功! <br>';
        basicState[LINE] = [];
        statelist.push(basicState);

        basicState = new Array();
        basicState[STATUS] = '传输成功！';
        basicState[STATUS_r] = '接收成功! <br>';
        basicState[LINE] = [];
        statelist.push(basicState);

        this.play();
        //add
        Media.play();
        return true;
    }
    //滑动窗口
    this.SlidingWindow = function () {

        var isSend = true;
        var isReceive = new Array(0,0,0,0,0,0,1,0,0);
        //j为接收端，期望接收的值
        for (var i = 1,j = 1;i <= 9;i++) {
            basicState = new Array();
            basicState[STATUS] = '发送序号为 {i} 的帧,设置计时器<br>'.replace("{i}", i);
            basicState[STATUS_r] = '等待帧到达<br>';
            basicState[LINE] = [2,3,11];
            statelist.push(basicState);

            if (isSend == false){
                basicState = new Array();
                basicState[STATUS] = '等待序号为 {i} 的确认帧<br>'.replace("{i}", i);
                basicState[LINE] = [11];
                statelist.push(basicState);

                basicState = new Array();
                basicState[STATUS] = '等待序号为 {i} 的确认帧<br>'.replace("{i}", i);
                basicState[LINE] = [11];
                statelist.push(basicState);

                basicState = new Array();
                basicState[STATUS] = '规定时间内,未收到序号为 {i} 的确认帧,进入下一轮<br>'.replace("{i}", i);
                basicState[LINE] = [11,4,7];
                statelist.push(basicState);

                i--;
                isSend = true;
            }else {
                basicState = new Array();
                basicState[STATUS] = '等待序号为 {i} 的确认帧<br>'.replace("{i}", i);
                basicState[STATUS_r] = '有帧到达 <br>';
                basicState[LINE] = [12];
                statelist.push(basicState);

                if( i == j ){
                    basicState = new Array();
                    basicState[STATUS_r] = '该帧序号为{i}==i ,接收并发送确认帧 {i}&nbsp;,滑动窗口 <br>'.replace("{i}", i).replace("{i}", i);
                    basicState[LINE] = [13,14,16,17];
                    statelist.push(basicState);
                    j++;
                }else {
                    basicState = new Array();
                    basicState[STATUS_r] = '该帧序号为 {i} != 8 ,不接收该帧并发送确认帧 7<br>'.replace("{i}", i).replace("{j}", j);
                    basicState[LINE] = [13,17];
                    statelist.push(basicState);

                }

                if ( isReceive[i-1] == 1){
                    basicState = new Array();
                    basicState[STATUS] = '等待序号为 {i} 的确认帧<br>'.replace("{i}", i);
                    basicState[STATUS_r] = '等待帧到达<br>';
                    basicState[LINE] = [11];
                    statelist.push(basicState);

                    basicState = new Array();
                    basicState[STATUS] = '规定时间内,未收到序号为 {i} 的确认帧,进入下一轮<br>'.replace("{i}", i);
                    basicState[LINE] = [11,4,7];
                    statelist.push(basicState);

                    isReceive[i-1]  = 0;
                    i--;
                }else {
                    basicState = new Array();
                    basicState[STATUS] = '收到确认帧{i},滑动发送窗口,停止窗口外计时器<br>'.replace("{i}", i);
                    basicState[STATUS_r] = '等待帧到达<br>';
                    basicState[LINE] = [11,4,5,7];
                    statelist.push(basicState);

                    if( i == 2 ){
                        isSend = false;
                    }
                }
            }

            if(i < 9){
                basicState = new Array();
                basicState[STATUS] = '还有需要发送的帧';
                basicState[STATUS_r] = '等待帧到达 <br>';
                basicState[LINE] = [1,8,11];
                statelist.push(basicState);
            }
        }
        basicState = new Array();
        basicState[STATUS] = '传输成功！';
        basicState[STATUS_r] = '接收成功! <br>';
        basicState[LINE] = [];
        statelist.push(basicState);
        basicState = new Array();
        basicState[STATUS] = '传输成功！';
        basicState[STATUS_r] = '接收成功! <br>';
        basicState[LINE] = [];
        statelist.push(basicState);

        basicState = new Array();
        basicState[STATUS] = '传输成功！';
        basicState[STATUS_r] = '接收成功! <br>';
        basicState[LINE] = [];
        statelist.push(basicState);

        this.play();
        //add
        Media.play();
        return true;
    }
    //回退N帧
    this.rollbackN = function () {
        var i = 0;

        for(i = 0; i < 3; i++){
            basicState = new Array();
            basicState[STATUS] = '依次发送序号为 1 2 3 的帧,并设置计时器<br>';
            basicState[LINE] = [2,3,11];
            basicState[STATUS_r] = '等待帧到达<br>';
            statelist.push(basicState);
        }

        basicState = new Array();
        basicState[STATUS] = '等待序号为 1 的确认帧<br>';
        basicState[LINE] = [11];
        statelist.push(basicState);

        basicState = new Array();
        basicState[STATUS] = '等待序号为 1 的确认帧<br>';
        basicState[STATUS_r] = '收到期望帧 1,接收并发送确认帧 1,滑动接收窗口<br>';
        basicState[LINE] = [12,14,15,17];
        statelist.push(basicState);

        basicState = new Array();
        basicState[STATUS_r] = '收到期望帧 2,接收并发送确认帧 2,滑动接收窗口<br>';
        basicState[LINE] = [12,14,15,17];
        statelist.push(basicState);

        for( i = 1; i < 3 ; i++){
            basicState = new Array();
            basicState[STATUS] = '等待序号为 1 的确认帧<br>';
            basicState[STATUS_r] = '等待帧到达<br>';
            basicState[LINE] = [11];
            statelist.push(basicState);
        }

        for( i = 1; i < 3 ; i++){
            basicState = new Array();
            basicState[STATUS] = '收到期望确认帧 {i},滑动窗口,并发送帧 {i+3}<br>'.replace("{i}", i).replace("{i+3}", i+3);
            basicState[STATUS_r] = '等待帧到达<br>';
            basicState[LINE] = [2,3,4,5,6,11];
            statelist.push(basicState);
        }
        for( i = 1; i < 3 ; i++){
            basicState = new Array();
            basicState[STATUS] = '等待序号为 3 的确认帧<br>';
            basicState[STATUS_r] = '等待帧到达<br>';
            basicState[LINE] = [11];
            statelist.push(basicState);
        }
        for( i = 4; i < 6 ; i++){
            basicState = new Array();
            basicState[STATUS] = '等待序号为 3 的确认帧<br>';
            basicState[STATUS_r] = '帧 {i} 到达，不是期望帧丢弃，发送确认帧 2<br>'.replace("{i}", i);
            basicState[LINE] = [16,17];
            statelist.push(basicState);
        }

        for( i = 0; i < 2 ; i++){
            basicState = new Array();
            basicState[STATUS] = '等待序号为 3 的确认帧<br>';
            basicState[STATUS_r] = '等待帧到达<br>';
            basicState[LINE] = [11];
            statelist.push(basicState);
        }
        for( i = 0; i < 2 ; i++){
            basicState = new Array();
            basicState[STATUS] = '收到非确认帧 2, 丢弃<br>';
            basicState[STATUS_r] = '等待帧到达<br>';
            basicState[LINE] = [9,11];
            statelist.push(basicState);
        }
        for( i = 0; i < 2 ; i++){
            basicState = new Array();
            basicState[STATUS] = '规定时间未收到确认帧 3 <br>';
            basicState[LINE] = [11,7];
            statelist.push(basicState);
        }

        for(i = 0; i < 3; i++){
            basicState = new Array();
            basicState[STATUS] = '重发 3 4 5 帧<br>';
            basicState[LINE] = [11,8];
            statelist.push(basicState);
        }
        basicState = new Array();
        basicState[STATUS] = '等待序号为 3 的确认帧<br>';
        basicState[LINE] = [11];
        statelist.push(basicState);

        for(i = 3; i < 6; i++){
            basicState = new Array();
            basicState[STATUS_r] = '收到期望帧 {i},接收并发送确认帧 {i},滑动接收窗口<br>'.replace("{i}", i).replace("{i}", i);
            basicState[LINE] = [12,14,15,17];
            statelist.push(basicState);
        }
        basicState = new Array();
        basicState[STATUS_r] = '等待帧到达<br>';
        basicState[LINE] = [11];
        statelist.push(basicState);

        for( i = 3; i < 6 ; i++){
            basicState = new Array();
            basicState[STATUS] = '收到期望确认帧 {i},滑动窗口,并发送帧 {i+3}<br>'.replace("{i}", i).replace("{i+3}", i+3);
            basicState[LINE] = [2,3,4,5,6,11];
            statelist.push(basicState);
        }
        basicState = new Array();
        basicState[STATUS_r] = '等待帧到达<br>';
        basicState[STATUS] = '等待序号为 6 的确认帧<br>';
        basicState[LINE] = [11];
        statelist.push(basicState);

        for(i = 6; i < 9; i++){
            basicState = new Array();
            basicState[STATUS_r] = '收到期望帧 {i},接收并发送确认帧 {i},滑动接收窗口<br>'.replace("{i}", i).replace("{i}", i);
            basicState[LINE] = [12,14,15,17];
            statelist.push(basicState);
        }

        basicState = new Array();
        basicState[STATUS_r] = '等待帧到达<br>';
        basicState[STATUS] = '等待序号为 6 的确认帧<br>';
        basicState[LINE] = [11];
        statelist.push(basicState);

        basicState = new Array();
        basicState[STATUS] = '收到期望确认帧 6,滑动窗口,并发送帧 9<br>';
        basicState[LINE] = [2,3,4,5,6,11];
        statelist.push(basicState);

        basicState = new Array();
        basicState[STATUS_r] = '等待帧到达<br>';
        basicState[STATUS] = '等待序号为 7 的确认帧<br>';
        basicState[LINE] = [11];
        statelist.push(basicState);

        basicState = new Array();
        basicState[STATUS] = '收到期望确认帧 8,填充确认帧 7,滑动窗口<br>';
        basicState[LINE] = [4,5,6,11];
        statelist.push(basicState);


        basicState = new Array();
        basicState[STATUS_r] = '等待帧到达<br>';
        basicState[STATUS] = '等待序号为 9 的确认帧<br>';
        basicState[LINE] = [11];
        statelist.push(basicState);


        basicState = new Array();
        basicState[STATUS_r] = '收到期望帧 9,接收并发送确认帧 9,滑动接收窗口<br>';
        basicState[LINE] = [12,14,15,17];
        statelist.push(basicState);

        for(i = 7; i < 9; i++){
            basicState = new Array();
            basicState[STATUS_r] = '等待帧到达<br>';
            basicState[STATUS] = '等待序号为 9 的确认帧<br>';
            basicState[LINE] = [11];
            statelist.push(basicState);
        }

        basicState = new Array();
        basicState[STATUS] = '收到期望确认帧 9,滑动窗口<br>';
        basicState[LINE] = [4,5,6,11];
        statelist.push(basicState);

        basicState = new Array();
        basicState[STATUS] = '传输成功！';
        basicState[STATUS_r] = '接收成功! <br>';
        basicState[LINE] = [];
        statelist.push(basicState);
        basicState = new Array();
        basicState[STATUS] = '传输成功！';
        basicState[STATUS_r] = '接收成功! <br>';
        basicState[LINE] = [];
        statelist.push(basicState);

        basicState = new Array();
        basicState[STATUS] = '传输成功！';
        basicState[STATUS_r] = '接收成功! <br>';
        basicState[LINE] = [];
        statelist.push(basicState);

        this.play();
        //add
        Media.play();
        return true;
    }


    //选择重传
    this.selective_repeat = function () {
        var i = 0;

        for(i = 0; i < 3; i++){
            basicState = new Array();
            basicState[STATUS] = '依次发送序号为 1 2 3 的帧,并设置计时器<br>';
            basicState[LINE] = [2,3,11];
            basicState[STATUS_r] = '等待帧到达<br>';
            statelist.push(basicState);
        }

        basicState = new Array();
        basicState[STATUS] = '等待序号为 1 的确认帧<br>';
        basicState[LINE] = [11];
        statelist.push(basicState);

        basicState = new Array();
        basicState[STATUS] = '等待序号为 1 的确认帧<br>';
        basicState[STATUS_r] = '收到期望帧 1,接收并发送确认帧 1,滑动接收窗口<br>';
        basicState[LINE] = [12,14,15,17];
        statelist.push(basicState);

        basicState = new Array();
        basicState[STATUS_r] = '收到期望帧 2,接收并发送确认帧 2,滑动接收窗口<br>';
        basicState[LINE] = [12,14,15,17];
        statelist.push(basicState);

        for( i = 1; i < 3 ; i++){
            basicState = new Array();
            basicState[STATUS] = '等待序号为 1 的确认帧<br>';
            basicState[STATUS_r] = '等待帧到达<br>';
            basicState[LINE] = [11];
            statelist.push(basicState);
        }

        for( i = 1; i < 3 ; i++){
            basicState = new Array();
            basicState[STATUS] = '收到期望确认帧 {i},滑动窗口,并发送帧 {i+3}<br>'.replace("{i}", i).replace("{i+3}", i+3);
            basicState[STATUS_r] = '等待帧到达<br>';
            basicState[LINE] = [2,3,4,5,6,11];
            statelist.push(basicState);
        }
        for( i = 1; i < 3 ; i++){
            basicState = new Array();
            basicState[STATUS] = '等待序号为 3 的确认帧<br>';
            basicState[STATUS_r] = '等待帧到达<br>';
            basicState[LINE] = [11];
            statelist.push(basicState);
        }
        for( i = 4; i < 6 ; i++){
            basicState = new Array();
            basicState[STATUS] = '等待序号为 3 的确认帧<br>';
            basicState[STATUS_r] = '帧 {i} 到达，缓存该帧，发送确认帧 2<br>'.replace("{i}", i);
            basicState[LINE] = [16,17];
            statelist.push(basicState);
        }

        for( i = 0; i < 2 ; i++){
            basicState = new Array();
            basicState[STATUS] = '等待序号为 3 的确认帧<br>';
            basicState[STATUS_r] = '等待帧到达<br>';
            basicState[LINE] = [11];
            statelist.push(basicState);
        }
        for( i = 0; i < 2 ; i++){
            basicState = new Array();
            basicState[STATUS] = '收到非确认帧 2, 丢弃<br>';
            basicState[STATUS_r] = '等待帧到达<br>';
            basicState[LINE] = [9,11];
            statelist.push(basicState);
        }
        for( i = 0; i < 2 ; i++){
            basicState = new Array();
            basicState[STATUS] = '规定时间未收到确认帧 3 <br>';
            basicState[LINE] = [11,7];
            statelist.push(basicState);
        }


        basicState = new Array();
        basicState[STATUS] = '重发第 3 帧<br>';
        basicState[LINE] = [11,8];
        statelist.push(basicState);

        for(i = 0; i < 3; i++){
            basicState = new Array();
            basicState[STATUS] = '等待序号为 3 的确认帧<br>';
            basicState[LINE] = [11];
            statelist.push(basicState);
        }


        basicState = new Array();
        basicState[STATUS_r] = '收到期望帧 3,接收并发送确认帧 5,滑动接收窗口<br>';
        basicState[LINE] = [12,14,15,17];
        statelist.push(basicState);

        for(i = 0; i < 3; i++){
            basicState = new Array();
            basicState[STATUS_r] = '等待帧到达<br>';
            basicState[LINE] = [11];
            statelist.push(basicState);
        }

        for(i = 0; i < 3; i++){
            basicState = new Array();
            basicState[STATUS] = '收到期望确认帧 5,滑动窗口,并发送帧 6 7 8<br>';
            basicState[LINE] = [2,3,4,5,6,11];
            statelist.push(basicState);
        }

        basicState = new Array();
        basicState[STATUS_r] = '等待帧到达<br>';
        basicState[STATUS] = '等待序号为 6 的确认帧<br>';
        basicState[LINE] = [11];
        statelist.push(basicState);

        for(i = 6; i < 9; i++){
            basicState = new Array();
            basicState[STATUS_r] = '收到期望帧 {i},接收并发送确认帧 {i},滑动接收窗口<br>'.replace("{i}", i).replace("{i}", i);
            basicState[LINE] = [12,14,15,17];
            statelist.push(basicState);
        }

        basicState = new Array();
        basicState[STATUS_r] = '等待帧到达<br>';
        basicState[STATUS] = '等待序号为 6 的确认帧<br>';
        basicState[LINE] = [11];
        statelist.push(basicState);

        basicState = new Array();
        basicState[STATUS] = '收到期望确认帧 6,滑动窗口,并发送帧 9<br>';
        basicState[LINE] = [2,3,4,5,6,11];
        statelist.push(basicState);

        basicState = new Array();
        basicState[STATUS_r] = '等待帧到达<br>';
        basicState[STATUS] = '等待序号为 7 的确认帧<br>';
        basicState[LINE] = [11];
        statelist.push(basicState);

        basicState = new Array();
        basicState[STATUS] = '收到期望确认帧 8,填充确认帧 7,滑动窗口<br>';
        basicState[LINE] = [4,5,6,11];
        statelist.push(basicState);


        basicState = new Array();
        basicState[STATUS_r] = '等待帧到达<br>';
        basicState[STATUS] = '等待序号为 9 的确认帧<br>';
        basicState[LINE] = [11];
        statelist.push(basicState);


        basicState = new Array();
        basicState[STATUS_r] = '收到期望帧 9,接收并发送确认帧 9,滑动接收窗口<br>';
        basicState[LINE] = [12,14,15,17];
        statelist.push(basicState);

        for(i = 7; i < 9; i++){
            basicState = new Array();
            basicState[STATUS_r] = '等待帧到达<br>';
            basicState[STATUS] = '等待序号为 9 的确认帧<br>';
            basicState[LINE] = [11];
            statelist.push(basicState);
        }

        basicState = new Array();
        basicState[STATUS] = '收到期望确认帧 9,滑动窗口<br>';
        basicState[LINE] = [4,5,6,11];
        statelist.push(basicState);

        basicState = new Array();
        basicState[STATUS] = '传输成功！';
        basicState[STATUS_r] = '接收成功! <br>';
        basicState[LINE] = [];
        statelist.push(basicState);
        basicState = new Array();
        basicState[STATUS] = '传输成功！';
        basicState[STATUS_r] = '接收成功! <br>';
        basicState[LINE] = [];
        statelist.push(basicState);

        basicState = new Array();
        basicState[STATUS] = '传输成功！';
        basicState[STATUS_r] = '接收成功! <br>';
        basicState[LINE] = [];
        statelist.push(basicState);

        this.play();
        //add
        Media.play();
        return true;
    }

    drawCurrentState = function () {
        drawState(statelist[currentStep]);
        if (currentStep == (statelist.length - 1)) {
            pause();
        }
    }

    this.getAnimationDuration = function() { return transitionTime; }

    this.setAnimationDuration = function(x) {
        transitionTime = x;
        if (issPlaying) {
            clearInterval(animInterval);
            animInterval = setInterval(function() {
                drawCurrentState();
                if (currentStep < (statelist.length-1))
                    currentStep++;
                else
                    clearInterval(animInterval);
            }, transitionTime);
        }
    }

    this.getCurrentIteration = function() { return currentStep; }

    this.getTotalIteration = function() { return statelist.length; }

    this.forceNext = function() {
        if ((currentStep+1) < (statelist.length))
            currentStep++;
        drawCurrentState();
    }

    this.forcePrevious = function() {
        if ((currentStep-1) >= 0)
            currentStep--;
        drawCurrentState();
    }

    this.jumpToIteration = function(n) {
        currentStep = n;
        drawCurrentState();
    }

    this.play = function() {
        issPlaying = true;
        drawCurrentState();
        //setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭
        animInterval = setInterval(function() {
            drawCurrentState();
            if (currentStep < (statelist.length-1))
                currentStep++;
            else
                clearInterval(animInterval);
        }, transitionTime);
    }


    this.pause = function() {
        issPlaying = false;
        Media.pause();
        clearInterval(animInterval);
    }

    this.replay = function() {
        issPlaying = true;
        currentStep = 0;
        drawCurrentState();
        animInterval = setInterval(function() {
            drawCurrentState();
            if (currentStep < (statelist.length-1))
                currentStep++;
            else
                clearInterval(animInterval);
        }, transitionTime);
    }

    this.stop = function() {
        // issPlaying = false;
        statelist = new Array(); //clear statelist
        currentStep = 0;
    }

}