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
            "返回首页":function () {
                window.location.replace("../html/index.html")
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
    window.location.replace("../html/pre_atFault.html")
}