$(document).ready(function () {
    $("#dialog_content").dialog({
        dialogClass: "no-close",
        autoOpen: true,
        maxWidth: 800,
        maxHeight: 350,
        width: 800,
        height: 350,
        modal: true,
        buttons: {
            "OK": function () {
                $(this).dialog("close");
            }
        }
    });
    $("#question").dialog({
        dialogClass: "no-close",
        autoOpen: false,
        maxWidth: 800,
        maxHeight: 350,
        width: 800,
        height: 350,
        modal: true,
        buttons: {
            "再看一次": function () {
                location.reload();
            },
            "返回首页":function () {
                window.location.href=("../index.html");
            },
            "确定&下一个": function () {
                if (document.getElementById("selection2").checked != true) {
                    $("#error").text("wrong");
                    $("#error").css("color", "red");
                }
                else {
                    $("#error").text("Congratulation!!");
                    $("#error").css("color", "blue");
                    setTimeout("close_dialog()", 1000);
                }
            }
        }
    })
});

function show_question() {
    $("#question").dialog("open")
}

function close_dialog() {
    window.location.href=("../html/pre_SR.html")
}

function show_dialog() {
    $("#dialog_content").dialog("open")
}