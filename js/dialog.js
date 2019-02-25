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
    })
});