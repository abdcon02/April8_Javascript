var romanNumeral = function(input) {
    if (input < 4000){

        var ones = {1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX'};
        var tens = {1: 'X', 2: 'XX', 3: 'XXX', 4: 'XL', 5: 'L', 6: 'LX', 7: 'LXX', 8: 'LXXX', 9: 'XC'};
        var hundreds = {1: 'C', 2: 'CC', 3: 'CCC', 4: 'CD', 5: 'D', 6: 'DC', 7: 'DCC', 8: 'DCCC', 9: 'CM'};
        var thousands = {1: 'M', 2: 'MM', 3: 'MMM'};

        var translate = [];
        var number = input;

        translate.push(thousands[parseInt(number/1000)]);
        number = number % 1000;

        translate.push(hundreds[parseInt(number/100)]);
        number = number % 100;

        translate.push(tens[parseInt(number/10)]);
        number = number % 10;

        translate.push(ones[parseInt(number/1)]);

        return translate.join("");

    } else {
        return "Number is to large to be represented in Roman Numerals";
    }
};



$(document).ready(function() {

    $("form#roman").submit(function(event){
         var enterNumber = $("input#numeral").val();
         var result = romanNumeral(enterNumber);


        $(".result").empty().append(result);
        $(".result").show();
        event.preventDefault();

    });

});
