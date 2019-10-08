// JavaScript source code
$(document).ready(function () {

    //Start Math Calculator!
    //Toggle Show/Hide Button
    $("#sumCode").hide();
    $("#code").click(function () {
        $("#sumCode").toggle();

        if ($(this).text() == "Show code") {
            $(this).text("Hide code");

        }
        else {
            $(this).text("Show code")
        };
    });
    //Calculator processing!
    $("#main-button").click(function () {
        var num1 = Number($("#input1").val());
        var num2 = Number($("#input2").val());
        var num3 = Number($("#input3").val());
        var num4 = Number($("#input4").val());
        var num5 = Number($("#input5").val());

        //calculations
        var smallest = Math.min(num1, num2, num3, num4, num5);
        var largest = Math.max(num1, num2, num3, num4, num5);
        var sum = num1 + num2 + num3 + num4 + num5;
        var product = num1 * num2 * num3 * num4 * num5;
        var average = sum / 5;

        //Output
        $("#smallest").text("The smallest number is " + smallest);
        $("#largest").text("The largest number is " + largest);
        $("#sum").text("The sum is " + sum);
        $("#product").text("The product is " + product);
        $("#average").text("The average is " + average);
        //Clear output 
        $("#clear").click(function () {
            $("#input1,#input2,#input3,#input4,#input5").val("");
            $("#smallest").text("");
            $("#largest").text("");
            $("#sum").text("");
            $("#product").text("");
            $("#average").text("");

        });

    });
    //End of Calculator!

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
    //Factorial Calculation
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
        $("#factorial").text(`The factorial of ${num} is :` + result);
         //clear results
        $("#factclr").click(function () {
            $("#userInput").val("");
            $("#factorial").text("");
        });
    });
//End of factorial


//Fizzbuzz Challenge
//Toggle Show/Hide Button
    $("#fbCode").hide();
    $("#fizzbuzzCode").click(function () {
    $("#fbCode").toggle();

    if ($(this).text() == "Formula") {
        $(this).text("Hide Code");

    }
    else {
        $(this).text("Formula")
    };
    });
//Fizzbuzz
$("#fizzbuzz").click(function () {
   
    var fizzNum = Number($("#fizz").val());
    var buzzNum = Number($("#buzz").val());
    var finalResult = "";

for (var i = 1; i <= 100; i++) {
    var comma = ", ";
    if (i == 100) {
        comma = " ";
    }
    if (i % fizzNum == 0 && i % buzzNum == 0) {
        finalResult += "<span class='fizzbuzz'>fizzbuzz" + comma + "</span>";
    }

    else if (i % fizzNum == 0) {
        finalResult += "<span class='fizz'>fizz" + comma + "</span>";

    }
    else if (i % buzzNum == 0) {
        finalResult += "<span class='buzz'>buzz" + comma + "</span>";

    }

    else {
        finalResult += i + comma;
         }
}
    $("#fizzBuzzOutput").html(finalResult);
});
    $("#fbClear").click(function () {
        $("#fizz").val("");
        $("#buzz").val("");
        $("#fizzBuzzOutput").html("");
    });
    //End of FizzBuzz
   


//PalindromeChallenge
//Toggle Show/Hide Button

$("#codepalindrome").hide();
$("#palindromecode").click(function () {
    $("#codepalindrome").toggle();

    if ($(this).text() == "Formula") {
        $(this).text("Hide Code");

    }
    else {
        $(this).text("Formula")
    };
});

//palindrome check point!
$("#check").click(function () {
    let userInput = $("#palinInput").val();

    var modified = userInput.toLowerCase().replace(/\s/g, '');

    for (var index = userInput.length - 1, reverse = ""; index >= 0; index--) {
        reverse += userInput.substr(index, 1);
    }
    displayrevword = reverse;
    reverse = reverse.toLowerCase().replace(/\s/g, '');
    var generate = "";
    if (modified == reverse) {
        generate =`${userInput} is a palindrome.`;
    }
    else {
        generate = `${userInput} is a not palindrome.`;
    }

    $("#palinOutput").text(generate);
    //clear result!
    $("#palinClear").click(function () {
        $("#palinInput").val("");
        $("#palinOutput").text("");
    });
   
});












});