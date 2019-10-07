// JavaScript source code
$(document).ready(function () {








    //Sum of Numbers Exercise


    $("#main-button").click(function () {
        var num1 = Number($("#input1").val());
        var num2 = Number($("#input2").val());
        var num3 = Number($("#input3").val());
        var num4 = Number($("#input4").val());
        var num5 = Number($("#input5").val());
        var sum = num1 + num2 + num3 + num4 + num5;
        var output = `The sum of the five numbers you entered is :  ${sum}`;
        $("#results").text(output);

    });

    //Factorial Challenge
    //Toggle Show/Hide Button
    $("#factCode").hide();
    $("#showCode").click(function () {
        $("#factCode").toggle();

        if ($(this).text() == "Show Code") {
            $(this).text("Hide Code");

        }
        else {
            $(this).text("Show Code")
        };
    });


    $("#calculate").click(function () {

        var num = Number($("#userInput").val());
        if (num != 0) {
            var result = 1;
            for (let i = 2; i <= num; i++) {
                var result = result * i;
            }
        } else {
            result = 1;
        }
        $("#factorial").text(result);
    });
});