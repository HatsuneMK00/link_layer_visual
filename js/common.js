var surpriseColour = "#52bc69";
var colourTheSecond = "#d65775";
var colourTheThird = "#2ebbd1";
var colourTheFourth = "#d9513c";

var actionsWidth = 50;
var statusCodetraceWidth = 300;

var isPlaying = false;
//Opening and closing panels
var isActionsOpen = true;
var isStatusOpen = false;
var isStatusOpen_r = false;
var isCodetraceOpen_r = false;
var isCodetraceOpen = false;

// 翻转箭头，并掩藏/显示代码/创建框
function showActionsPanel() {
    if (!isActionsOpen) {
        $('#actions-hide img').removeClass('rotateLeft').addClass('rotateRight');
        $('#actions').animate({
            width: "+=" + actionsWidth,
        });
        isActionsOpen = true;
    }
}
function hideActionsPanel() {
    if (isActionsOpen) {
        $('#actions-hide img').removeClass('rotateRight').addClass('rotateLeft');
        $('#actions').animate({
            width: "-=" + actionsWidth,
        });
        isActionsOpen = false;
    }
}
function showStatusPanel() {
    if (!isStatusOpen) {
        $('#status-hide img').removeClass('rotateLeft').addClass('rotateRight');
        $('#status').animate({
            width: "+=" + statusCodetraceWidth,
        });
        isStatusOpen = true;
    }
}
function hideStatusPanel() {
    if (isStatusOpen) {
        $('#status-hide img').removeClass('rotateRight').addClass('rotateLeft');
        $('#status').animate({
            width: "-=" + statusCodetraceWidth,
        });
        isStatusOpen = false;
    }
}

function showStatusPanel_r() {
    if (!isStatusOpen_r) {
        $('#status-hide_r img').removeClass('rotateLeft').addClass('rotateRight');
        $('#status_r').animate({
            width: "+=" + statusCodetraceWidth,
        });
        isStatusOpen_r = true;
    }
}
function hideStatusPanel_r() {
    if (isStatusOpen_r) {
        $('#status-hide_r img').removeClass('rotateRight').addClass('rotateLeft');
        $('#status_r').animate({
            width: "-=" + statusCodetraceWidth,
        });
        isStatusOpen_r = false;
    }
}
////翻转箭头，并显示代码框
function showCodetracePanel() {
    if (!isCodetraceOpen) {
        $('#codetrace-hide img').removeClass('rotateLeft').addClass('rotateRight');
        $('#codetrace').animate({
            width: "+=" + statusCodetraceWidth,
        });
        isCodetraceOpen = true;
    }
}
//翻转箭头，并掩藏代码框
function hideCodetracePanel() {
    if (isCodetraceOpen) {
        $('#codetrace-hide img').removeClass('rotateRight').addClass('rotateLeft');
        $('#codetrace').animate({
            width: "-=" + statusCodetraceWidth,
        });
        isCodetraceOpen = false;
    }
}
function showCodetracePanel_r() {
    if (!isCodetraceOpen_r) {
        $('#codetrace-hide_r img').removeClass('rotateLeft').addClass('rotateRight');
        $('#codetrace_r').animate({
            width: "+=" + statusCodetraceWidth,
        });
        isCodetraceOpen_r = true;
    }
}

function hideCodetracePanel_r() {
    if (isCodetraceOpen_r) {
        $('#codetrace-hide_r img').removeClass('rotateRight').addClass('rotateLeft');
        $('#codetrace_r').animate({
            width: "-=" + statusCodetraceWidth,
        });
        isCodetraceOpen_r = false;
    }
}
function triggerRightPanels() {
    //把创建藏起来，代码显示出来
    hideActionsPanel();
    showStatusPanel();
    showStatusPanel_r();
    showCodetracePanel();
    showCodetracePanel_r();
}

$(document).ready(function() {
    var codetrace_rHeight = ($('#codetrace_r p').length) * 18 + 10;
    $('#codetrace_r').css('height', codetrace_rHeight);
    $('#status-hide_r').css('top', codetrace_rHeight+59);
    $('#status_r').css('top', codetrace_rHeight+59);
    codetrace_rHeight -= 16;
    codetrace_rHeight = codetrace_rHeight/2;
    $('#codetrace-hide_r').css('padding-top', codetrace_rHeight);
    $('#codetrace-hide_r').css('padding-bottom', codetrace_rHeight);

    var codetraceHeight = ($('#codetrace p').length) * 18 + 10;
    $('#codetrace').css('height', codetraceHeight);
    $('#status').css('bottom', codetraceHeight+55);
    $('#status-hide').css('bottom', codetraceHeight+55);
    codetraceHeight -= 16;
    codetraceHeight = codetraceHeight/2;
    $('#codetrace-hide').css('padding-top', codetraceHeight);
    $('#codetrace-hide').css('padding-bottom', codetraceHeight);


    $('#actions-hide img').addClass('rotateRight');

    //附上颜色
    $('#actions').css("background-color", colourTheSecond);
    $('#actions-hide').css("background-color", colourTheSecond);
    $('.codetrace').css("background-color", colourTheThird);
    $('.codetrace-hide').css("background-color", colourTheThird);
    $('.status').css("background-color", colourTheFourth);
    $('.status-hide').css("background-color", colourTheFourth);

    //用箭头打开或关闭
    $('#status-hide').click(function() {
        if (isStatusOpen) {hideStatusPanel();}
        else {showStatusPanel();}
    });
    $('#status-hide_r').click(function() {
        if (isStatusOpen_r) {hideStatusPanel_r();}
        else {showStatusPanel_r();}
    });
    $('#codetrace-hide').click(function() {
        if (isCodetraceOpen) {hideCodetracePanel();}
        else {showCodetracePanel();}
    });
    $('#codetrace-hide_r').click(function() {
        if (isCodetraceOpen_r) {hideCodetracePanel_r();}
        else {showCodetracePanel_r();}
    });
    $('#actions-hide').click(function() {
        if (isActionsOpen) {hideActionsPanel();}
        else {showActionsPanel();}
    });
});

var mode = "exploration";
var codetraceColor = 'white';

//将代码高亮
function highlightLine(lineNumbers,lineNumbers_r) {
    //先赋值为代码框原色
    $('#codetrace p').css('background-color', colourTheThird).css('color', codetraceColor);
    $('#codetrace_r p').css('background-color', colourTheThird).css('color', codetraceColor);
    //判断 lineNumbers 是否为数组
    if (lineNumbers instanceof Array) {
        for (var i = 0; i < lineNumbers.length; i++) {
            if (lineNumbers[i] != 0) {
                $('#code' + lineNumbers[i]).css('background-color', 'black').css('color', 'white');
            }
        }
    } else {
        $('#code' + lineNumbers).css('background-color', 'black').css('color', 'white');
    }
}

var isPaused=false;

function isAtEnd(){
    return(ly.getCurrentIteration()==(ly.getTotalIteration()-1));
}
function pause(){
    if(isPlaying){
        isPaused = true;
        ly.pause();
        $('#play').show();
        $('#pause').hide();
    }
}
function play(){
    if(isPlaying){
        isPaused=false;
        $('#pause').show();
        $('#play').hide();
        if(isAtEnd()){
            ly.replay();
        }
        else{
            ly.play();
        }
    }
}
function stepForward(){
    if(isPlaying){
        pause();
        ly.forceNext(250);
    }
}
function stepBackward(){
    if(isPlaying){
        pause();
        ly.forcePrevious(250);
    }
}
function goToBeginning(){
    if(isPlaying){ly.jumpToIteration(0,0);
        pause();
    }
}
function goToEnd(){
    if(isPlaying){
        ly.jumpToIteration(ly.getTotalIteration()-1,0);
        pause();
    }
}
function stop(){
    try{
        ly.stop();
    } catch(err){}
    isPaused=false;
    isPlaying=false;
    $('#pause').show();
    $('#play').hide();
}
