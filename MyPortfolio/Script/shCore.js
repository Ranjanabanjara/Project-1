// JavaScript source code
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
   
})


//Pallindrone Challenge
$("#main-button").click(function (word) {
    var word = $("#UI").val()
    for (let i = 0; i < word.length; i++) {
        $(word).substr(i,1);
        i++
        

    }
        






})

    
  

    
