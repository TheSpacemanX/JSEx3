var operations = function() {
    $("#plus").click(function () {calc("+")});
    $("#minus").click(function () {calc("-")});
    $("#mult").click(function () {calc("*")});
    $("#div").click(function () {calc("/")});

    if ($("td").length === 0) {
        var arrayLine = JSON.parse(localStorage.getItem("array") || "[]");
        if (arrayLine !== []) {
          console.log("Printing elements:");
          arrayLine.forEach(function (item) {
            console.log(item);
          });
          console.log("Filling table:");
          arrayLine.forEach(function (item) {
            $("#res").append(item);
          });
        }
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

        var str = "<tr><td>"+n1+"</td><td>"+n2+"</td><td>"+sign+"</td><td>"+res+"</td><td><button class=\"btnDelete\">Delete</button></td></tr>";
        $("#res").append(str);
        var arrayLine = JSON.parse(localStorage.getItem("array") || "[]");
        arrayLine.push(str);
        localStorage.setItem("array", JSON.stringify(arrayLine));
        
    }

    $("#res").on('click', '.btnDelete', function () {
        $(this).parent().parent().remove();
    });
}

document.addEventListener("DOMContentLoaded", operations);