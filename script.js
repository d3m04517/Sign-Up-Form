$(document).ready(function() {
    let pass2 = document.getElementById("confirm");

    $("#confirm").focusout(function() {
        let pass1 = $("#password").val();
        let pass2val = $("#confirm").val();
        if (pass1 != pass2val) {
            $("#confirm").css("border", "solid 1px red");
            $(".pass-warning").css("display", "inline");
        } else {
            $("#confirm").css("border", "solid 1px #E5E7EB");
            $(".pass-warning").css("display", "none");

        }
    });
    $("#password").focusout(function() {
        let pass1 = $("#password").val();
        let pass2val = $("#confirm").val();
        if (pass1 != pass2val) {
            $("#confirm").css("border", "solid 1px red");
            $(".pass-warning").css("display", "inline");
        } else {
            $("#confirm").css("border", "solid 1px #E5E7EB");
            $(".pass-warning").css("display", "none");

        }
    });
});