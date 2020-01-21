//MyCustom JS
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
        //Conditions
        if (num1 == 0 && num2 == 0 && num3 == 0 && num4 == 0 && num5 == 0) {
            $("#product").text("Please fill each box with non zero numbers!");

        } else if (num1 == 0 || num2 == 0 || num3 == 0 || num4 == 0 || num5 == 0)
        {
            $("#product").text("Please fill each box with non zero numbers!");
        }
        else {
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

                }
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


    ////Factorial Calculation
    $("#calculate").click(function () {

        var num = parseInt($("#userInput").val());
      

        if (num >= 0) {
            var result = 1;
            for (let i = 2; i <= num; i++) {
                var result = result * i;
            }
            
        }  else if (num === NaN) {
            result = undefined;
            
        }
        if (result == undefined) {

            $("#factorial").text(`The factorial of ${num} is: ` + result + ', please enter any positive number.');
        } else
        {

            $("#factorial").text(`The factorial of ${num} is: ` + result);
        }

        //clear results
        $("#factclr").click(function () {
            $("#userInput").val("");
            $("#factorial").text("");
        });
    });
    ////End of factorial




    //Fizzbuzz Challenge

    //Toggle Show/Hide Button
    $("#fbCode").hide();
    $("#fizzbuzzCode").click(function () {
    $("#fbCode").toggle();

    if ($(this).text() == "ShowCode") {
        $(this).text("HideCode");

    }
    else {
        $(this).text("ShowCode")
    };
    });
    //Fizzbuzz
    $("#fizzbuzz").click(function () {
   
        var fizzNum = Number($("#fizz").val());
        var buzzNum = Number($("#buzz").val());
        var finalResult = "";
        if (fizzNum == 0 && buzzNum == 0)
        {
            finalResult += "Please enter number between 1 and 100 to reveal FizzBuzz.";
        } else {
            for (var i = 1; i <= 100; i++) {
                var comma = ", ";
                if (i == 100)
                {
                    comma = " ";
                }

                if (i % fizzNum == 0 && i % buzzNum == 0) {
                    finalResult += "<span class='fizzbuzz'>fizzbuzz" + comma + "</span > ";
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

        if ($(this).text() == "showCode") {
            $(this).text("hideCode");

        }
        else {
            $(this).text("showCode")
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
        if (modified == "")
        {
            generate = `Please Enter to try.`;
        }
        else if(modified == reverse)
        {
            generate = `${userInput} is a palindrome.`;
        }
   
        else
        {
            generate = `${userInput} is not a palindrome.`;

             }

        $("#palinOutput").text(generate);
        //clear result!
        $("#palinClear").click(function () {
            $("#palinInput").val("");
            $("#palinOutput").text("");
        });
   
    });

});