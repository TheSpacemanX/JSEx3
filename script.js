var operations = function() {
    $("#plus").on("click", function(){
        $("#res").html($("#1st").val()*1+$("#2nd").val()*1);
    });

    $("#minus").on("click", function(){
        $("#res").html($("#1st").val()*1-$("#2nd").val()*1);
    });

    $("#mult").on("click", function(){
        $("#res").html($("#1st").val()*$("#2nd").val());
    });

    $("#div").on("click", function(){
        $("#res").html($("#1st").val()/$("#2nd").val());
    });
}

document.addEventListener("DOMContentLoaded", operations);