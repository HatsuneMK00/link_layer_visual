
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
    this.beginning = function () {

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

        this.play();
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

        this.play();
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

        this.play();
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

        this.play();
        return true;
    }
    //回退N帧
    this.rollbackN = function () {
        //发送端期望接收的确认帧序号，和接收端期望接收的帧的序号
        var expectation_s = 1,expectation_r = 1;
        var isSend = new Array(0,0,1,0,0,0,0,0,0);//是否发送失败
        var isReceive = new Array(0,0,0,0,0,0,1,0,0);//确认帧是否丢失
        var window_position = new Array(1,2,3);//滑动窗口位置
        var just_sent = new Array(0,0,0); //刚刚发送的帧
        var just_receive = new Array(0,0,0);//刚刚发送的确认帧

        var issend = new Array(1,0,0,0,0,0,0,0,0,0);//接收端成功接收该帧
        var issReceive = new Array(1,0,0,0,0,0,0,0,0,0);//发送端成功接收其确认帧
        var m,over,j;//over为若全部帧都已发送则为1
        for (var i = 1 ;i <= 11;i++) {
            over = 1 ;
            //检查窗口内是否都已发送完毕
            for ( var k = 0; k < 3; k++ ) {
                m = window_position[k];
                if(issend[m] == 0){
                    over = 0 ;
                }
            }
            //还有需要继续发送的帧
            if(over == 0 ){
                basicState = new Array();
                basicState[STATUS] = '依次发送序号为';
                for ( var k = 0; k < 3; k++ ) {
                    m = window_position[k];
                    if(issend[m] == 0){
                        basicState[STATUS] += '{m} '.replace("{m}", m);
                        issend[m] = 1;
                        just_sent[2] = just_sent[1];
                        just_sent[1] = just_sent[0];
                        just_sent[0] = window_position[k];
                    }
                }
                basicState[STATUS] += '的帧,并设置计时器<br>';
                basicState[LINE] = [2,3,11];
                basicState[STATUS_r] = '等待帧到达<br>';
                statelist.push(basicState);
            }


            if (isSend[i-1] == 1){
                basicState = new Array();
                basicState[STATUS] = '等待序号为 {expectation_s} 的确认帧<br>'.replace("{expectation_s}", expectation_s);
                basicState[LINE] = [11];
                statelist.push(basicState);

                basicState = new Array();
                basicState[STATUS] = '规定时间内,未收到序号为 {expectation_s} 的确认帧<br>'.replace("{expectation_s}", expectation_s);
                basicState[LINE] = [11,7];
                statelist.push(basicState);

                basicState = new Array();
                basicState[STATUS] = '规定时间未收到确认帧 {expectation_s} ,重发该帧及{expectation_s+1},{expectation_s+2}帧<br>'.replace("{expectation_s}", expectation_s).replace("{expectation_s+1}", expectation_s+1).replace("{expectation_s+2}", expectation_s+2);
                basicState[LINE] = [11,8];
                statelist.push(basicState);
                isSend[i-1] = 0;
                //调整发送顺序
                just_sent[2] = just_sent[1];
                just_sent[1] = just_sent[0];
                just_sent[0] = expectation_s;
            }

            basicState = new Array();
            basicState[STATUS] = '等待序号为 {expectation_s} 的确认帧<br>'.replace("{expectation_s}", expectation_s);
            basicState[STATUS_r] = '有帧到达 <br>';
            basicState[LINE] = [12];
            statelist.push(basicState);

            if( expectation_r == just_sent[2] ){
                basicState = new Array();
                basicState[STATUS_r] = '该帧序号为 {just_sent[2]} == {expectation_r} 为期望接收的帧<br>'.replace("{just_sent[2]}", just_sent[2]).replace("{expectation_r}", expectation_r);
                basicState[LINE] = [13];
                statelist.push(basicState);

                basicState = new Array();
                basicState[STATUS_r] = '接收该帧,发送序号为 {just_sent[2]} 的确认帧,滑动接收窗口<br>'.replace("{just_sent[2]}", just_sent[2]);
                basicState[LINE] = [14,15,17];
                statelist.push(basicState);

                issReceive[just_sent[2]] = 1;
                just_receive[0] = expectation_r;
                expectation_r ++;

            }else{
                basicState = new Array();
                basicState[STATUS_r] = '该帧序号为 {just_sent[2]} != {expectation_r} 丢弃该帧<br>'.replace("{just_sent[2]}", just_sent[2]).replace("{expectation_r}",expectation_r);
                basicState[LINE] = [16];
                statelist.push(basicState);

                basicState = new Array();
                basicState[STATUS_r] = '不滑动接收窗口，发送序号为{expectation_r-1}的确认帧'.replace("{expectation_r-1}", expectation_r-1);
                basicState[LINE] = [17];
                statelist.push(basicState);

                issReceive[just_sent[2]] = 1;
                just_receive[0]=expectation_r-1;
                m=just_sent[2];
                just_sent[2] = just_sent[1];
                just_sent[1] = just_sent[0];
                just_sent[0] = m;
            }

            if ( isReceive[expectation_s-1] == 1){
                basicState = new Array();
                basicState[STATUS] = '等待序号为 {expectation_s} 的确认帧<br>'.replace("{expectation_s}", expectation_s);
                basicState[STATUS_r] = '等待帧到达<br>';
                basicState[LINE] = [11];
                statelist.push(basicState);

                basicState = new Array();
                basicState[STATUS] = '规定时间未收到序号为 {expectation_s} 确认帧,重发该帧及{expectation_s+1},{expectation_s+2}<br>'.replace("{expectation_s}", expectation_s).replace("{expectation_s+1}", expectation_s+1).replace("{expectation_s+2}", expectation_s+2);
                basicState[LINE] = [11,7,8];
                statelist.push(basicState);
                isReceive[expectation_s-1] = 0;
                just_sent[2] = just_sent[1];
                just_sent[1] = just_sent[0];
                just_sent[0] = expectation_s;
            }else{
                if(expectation_s <= just_receive[0]){
                    basicState = new Array();
                    basicState[STATUS] = '收到确认帧{just_receive[0]},滑动发送窗口至{just_receive[0]+1},{just_receive[0]+2},{just_receive[0]+3}<br>'.replace("{just_receive[0]}", just_receive[0]).replace("{just_receive[0]+3}", just_receive[0]+3).replace("{just_receive[0]+1}", just_receive[0]+1).replace("{just_receive[0]+2}", just_receive[0]+2);
                    basicState[STATUS_r] = '等待帧到达<br>';
                    basicState[LINE] = [11,4,5,6];
                    statelist.push(basicState);
                    expectation_s = just_receive[0]+1;
                    //滑动窗口
                    window_position[0] = just_receive[0]+1;
                    window_position[1] = just_receive[0]+2;
                    window_position[2] = just_receive[0]+3;
                }
                else{
                    basicState = new Array();
                    basicState[STATUS] = '收到确认帧{just_receive[0]},不是期望的确认帧,丢弃<br>'.replace("{just_receive[0]}", just_receive[0]);
                    basicState[STATUS_r] = '等待帧到达<br>';
                    basicState[LINE] = [11,9];
                    statelist.push(basicState);
                }
            }
            if( i == 10 ){
                just_sent[2] = 9;
            }
            if( i == 11 ){
                basicState = new Array();
                basicState[STATUS] = '传输成功！<br>';
                basicState[STATUS_r] = '有帧到达 <br>';
                basicState[LINE] = [12];
                statelist.push(basicState);

                basicState = new Array();
                basicState[STATUS_r] = '该帧序号为7为重传帧,发送序号为9的确认帧<br>';
                basicState[LINE] = [16,17];
                statelist.push(basicState);

                basicState = new Array();
                basicState[STATUS] = '收到确认帧 9 ,不是期望的确认帧,丢弃<br>';
                basicState[STATUS_r] = '等待帧到达<br>';
                basicState[LINE] = [9,11];
                statelist.push(basicState);
            }


            if(i < 11){
                basicState = new Array();
                basicState[STATUS] = '还有帧未传输成功';
                basicState[STATUS_r] = '等待帧到达 <br>';
                basicState[LINE] = [1,10,11];
                statelist.push(basicState);
            }
        }
        basicState = new Array();
        basicState[STATUS] = '传输成功！';
        basicState[STATUS_r] = '接收成功! <br>';
        basicState[LINE] = [];
        statelist.push(basicState);

        this.play();
        return true;
    }


    //选择重传
    this.selective_repeat = function () {
        //发送端期望接收的确认帧序号，和接收端期望接收的帧的序号
        var expectation_s = 1,expectation_r = 1;
        var isSend = new Array(0,0,1,0,0,0,0,0,0);//是否发送失败
        var isReceive = new Array(0,0,0,0,0,0,1,0,0);//确认帧是否丢失
        var window_position = new Array(1,2,3);//滑动窗口位置
        var just_sent = new Array(0,0,0); //刚刚发送的帧
        var just_receive = new Array(0,0,0);//刚刚发送的确认帧

        var issend = new Array(1,0,0,0,0,0,0,0,0,0);//接收端成功接收该帧
        var issReceive = new Array(1,0,0,0,0,0,0,0,0,0);//发送端成功接收其确认帧
        var m,over,j=1;//over为若全部帧都已发送则为1
        for (var i = 1 ;i <= 9;i++) {
            over = 1 ;
            //检查窗口内是否都已发送完毕
            for ( var k = 0; k < 3; k++ ) {
                m = window_position[k];
                if(issend[m] == 0){
                    over = 0 ;
                }
            }
            //还有需要继续发送的帧
            if(over == 0 ){
                basicState = new Array();
                basicState[STATUS] = '依次发送序号为';
                for ( var k = 0; k < 3; k++ ) {
                    m = window_position[k];
                    if(issend[m] == 0){
                        basicState[STATUS] += '{m} '.replace("{m}", m);
                        issend[m] = 1;
                        just_sent[2] = just_sent[1];
                        just_sent[1] = just_sent[0];
                        just_sent[0] = window_position[k];
                    }
                }
                basicState[STATUS] += '的帧,并设置计时器<br>';
                basicState[LINE] = [2,3,11];
                basicState[STATUS_r] = '等待帧到达<br>';
                statelist.push(basicState);
            }

            if (isSend[i-1] == 1){
                basicState = new Array();
                basicState[STATUS] = '等待序号为 {expectation_s} 的确认帧<br>'.replace("{expectation_s}", expectation_s);
                basicState[LINE] = [11];
                statelist.push(basicState);

                basicState = new Array();
                basicState[STATUS] = '规定时间内,未收到序号为 {expectation_s} 的确认帧<br>'.replace("{expectation_s}", expectation_s);
                basicState[LINE] = [11,8];
                statelist.push(basicState);

                basicState = new Array();
                basicState[STATUS] = '重发序号为{expectation_s}的帧,并重设计时器<br>'.replace("{expectation_s}", expectation_s);
                basicState[LINE] = [11,9];
                statelist.push(basicState);
                isSend[i-1] = 0;
                //调整发送顺序
                just_sent[2] = just_sent[1];
                just_sent[1] = just_sent[0];
                just_sent[0] = expectation_s;
            }

            basicState = new Array();
            basicState[STATUS] = '等待序号为 {expectation_s} 的确认帧<br>'.replace("{expectation_s}", expectation_s);
            basicState[STATUS_r] = '有帧到达 <br>';
            basicState[LINE] = [12];
            statelist.push(basicState);

            if( expectation_r == just_sent[2] ){
                basicState = new Array();
                basicState[STATUS_r] = '该帧序号为 {just_sent[2]} == {expectation_r} 为期望接收的帧<br>'.replace("{just_sent[2]}", just_sent[2]).replace("{expectation_r}", expectation_r);
                basicState[LINE] = [13];
                statelist.push(basicState);

                basicState = new Array();
                basicState[STATUS_r] = '接收该帧,发送序号为 {just_sent[2]} 的确认帧,滑动接收窗口<br>'.replace("{just_sent[2]}", just_sent[2]);
                basicState[LINE] = [14,15,16,19];
                statelist.push(basicState);

                just_receive[0] = just_sent[2];
                issReceive[just_sent[2]] = 1;
                j=1;
                for( ; j < 10; j++){
                    if(issReceive[j] == 0)break;
                }
                expectation_r = j;
                just_receive[0] = expectation_r - 1;
            }else{
                basicState = new Array();
                basicState[STATUS_r] = '该帧序号为 {just_sent[2]} != {expectation_r} 但落在接收窗口内<br>'.replace("{just_sent[2]}", just_sent[2]).replace("{expectation_r}",expectation_r);
                basicState[LINE] = [17];
                statelist.push(basicState);

                basicState = new Array();
                basicState[STATUS_r] = '不滑动接收窗口，发送序号为{expectation_r-1}的确认帧'.replace("{expectation_r-1}", expectation_r-1);
                basicState[LINE] = [18,19];
                statelist.push(basicState);

                issReceive[just_sent[2]] = 1;
                just_receive[0]=expectation_r-1;
                just_sent[2] = just_sent[1];
                just_sent[1] = just_sent[0];
            }

            if ( isReceive[i-1] == 1){
                basicState = new Array();
                basicState[STATUS] = '等待序号为 {expectation_s} 的确认帧<br>'.replace("{expectation_s}", expectation_s);
                basicState[STATUS_r] = '等待帧到达<br>';
                basicState[LINE] = [11];
                statelist.push(basicState);

                basicState = new Array();
                basicState[STATUS] = '规定时间内,未收到序号为 {expectation_s} 的确认帧,重发该帧<br>'.replace("{expectation_s}", expectation_s);
                basicState[LINE] = [11,8,9];
                statelist.push(basicState);
                just_sent[2] = just_sent[1];
                just_sent[1] = just_sent[0];
                just_sent[0] = expectation_s;
                isReceive[i-1]  = 0;
            }else{
                if(expectation_s <= just_receive[0]){
                    basicState = new Array();
                    basicState[STATUS] = '收到确认帧{just_receive[0]},滑动发送窗口,停止窗口外帧的计时器<br>'.replace("{just_receive[0]}", just_receive[0]);
                    basicState[STATUS_r] = '等待帧到达<br>';
                    basicState[LINE] = [11,4,5,6];
                    statelist.push(basicState);
                    expectation_s = just_receive[0]+1;
                    //滑动窗口
                    window_position[0] = just_receive[0]+1;
                    window_position[1] = just_receive[0]+2;
                    window_position[2] = just_receive[0]+3;
                } else{
                    basicState = new Array();
                    basicState[STATUS] = '收到确认帧{just_receive[0]},不是期望的确认帧<br>'.replace("{just_receive[0]}", just_receive[0]);
                    basicState[STATUS_r] = '等待帧到达<br>';
                    basicState[LINE] = [11];
                    statelist.push(basicState);
                }
            }
            if( i == 8 ){
                just_sent[2] = 9;
            }
            if( i == 9 ){
                basicState = new Array();
                basicState[STATUS] = '传输成功！<br>';
                basicState[STATUS_r] = '有帧到达 <br>';
                basicState[LINE] = [12];
                statelist.push(basicState);

                basicState = new Array();
                basicState[STATUS_r] = '该帧序号为7为重传帧,发送序号为9的确认帧<br>';
                basicState[LINE] = [19];
                statelist.push(basicState);

            }

            if(i < 9){
                basicState = new Array();
                basicState[STATUS] = '还有帧未传输成功';
                basicState[STATUS_r] = '等待帧到达 <br>';
                basicState[LINE] = [1,10,11];
                statelist.push(basicState);
            }
        }
        basicState = new Array();
        basicState[STATUS] = '传输成功！';
        basicState[STATUS_r] = '接收成功! <br>';
        basicState[LINE] = [];
        statelist.push(basicState);

        this.play();
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
        issPlaying = false;
        statelist = new Array(); //clear statelist
        currentStep = 0;
    }

}