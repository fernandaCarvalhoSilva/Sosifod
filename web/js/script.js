
$(function () {
    $("emailMessageError").hide();
    $("passwordMessageError").hide();

    var errorName = false;
    var errorEmail = false;


    $("#inputEmail").focusout(function () {
        checkEmail();
    });
    $("#inputPassword").focusout(function () {
        checkPassword();
    });
});


function checkEmail() {
    var emailLenght = $("#inputName").val().length;

    if (emailLenght == "") {
        $("#emailMessageError").html("Por favor, insira o e-mail.");
        $("#emailMessageError").show;
        errorEmail = true;
    } else {
        $("emailMessageError").hide();
    }
}

  $("#register").submit(function () {
    errorEmail = false;

    checkEmail();

});