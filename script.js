var add = function() {
    $("#plus").on("click", function(){
        console.log(parseInt($("#1st").val()+$("#2nd").val(),10));
    });
}

document.addEventListener("DOMContentLoaded", add);