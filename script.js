var operations = function() {
    $("#plus").on("click", calc("+"));
    $("#minus").on("click", calc("-"));
    $("#mult").on("click", calc("*"));
    $("#div").on("click", calc("/"));

    function calc(segno) {
        var n1 = $("#1st").val()*1;
        var n2 = $("#2nd").val()*1;
        var res = 0;
        switch(segno) {
            case "+": res = n1+n2;
            case "-": res = n1-n2;
            case "*": res = n1*n2;
            case "/": res = n1/n2;
    };
        $("#res").html(res);
    }
}

document.addEventListener("DOMContentLoaded", operations);