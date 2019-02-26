$(document).ready(function () {
    $("#dialog_content").dialog({
        dialogClass: "no-close",
        autoOpen: true,
        maxWidth:800,
        maxHeight: 350,
        width: 800,
        height: 350,
        modal: true,
        buttons: {
            "OK": function() {
                $(this).dialog("close");
            }
        }
    });
    $("#question").dialog({
        dialogClass:"no-close",
        autoOpen:false,
        maxWidth:800,
        maxHeight: 350,
        width: 800,
        height: 350,
        modal: true,
        buttons: {
            "确定": function () {
                if (document.getElementById("selection2").checked != true) {
                    $(this).after("wrong")
                }
                else {
                    $(this).dialog("close")
                }
            }
        }
    })
});
function show_question() {
    $("#question").dialog("open")
}