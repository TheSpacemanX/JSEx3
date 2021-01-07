var operations = function() {
    $("#plus").click(function () {calc("+")});
    $("#minus").click(function () {calc("-")});
    $("#mult").click(function () {calc("*")});
    $("#div").click(function () {calc("/")});

    var lastOp = localStorage.getItem("operation");
    if(!(typeof lastOp === undefined || typeof lastOp === null)) {
        $("#res").append(lastOp);   
    }

    function calc(segno) {
        var sign = segno;
        var n1 = $("#1st").val()*1;
        var n2 = $("#2nd").val()*1;
        var res = 0;
        switch(sign) {
            case "+": res = n1+n2; break;
            case "-": res = n1-n2; break;
            case "*": res = n1*n2; break;
            case "/": res = n1/n2; break;
        };

        $("#res").append("<tr><td>"+n1+"</td><td>"+n2+"</td><td>"+sign+"</td><td>"+res+"</td><td><button class=\"btnDelete\">Delete</button></td></tr>");

        var str = "<tr><td>"+n1+"</td><td>"+n2+"</td><td>"+sign+"</td><td>"+res+"</td><td><button class=\"btnDelete\">Delete</button></td></tr>";
        localStorage.setItem("operation", str);
        
    }

    $("#res").on('click', '.btnDelete', function () {
        $(this).closest('tr').remove();
    });
}

document.addEventListener("DOMContentLoaded", operations);