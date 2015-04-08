var coin = function(amount) {

    var change = amount*100;
    var output = [0,0,0,0];

    var quarters = Math.floor(change/25);
    output[3] = quarters;
    change = change % 25;

    var dimes = Math.floor(change/10);
    output[2] = dimes;
    change = change % 10;

    var nickels = Math.floor(change/5);
    output[1] = nickels;
    change = change % 5;

    var pennies = Math.floor(change/1);
    output[0] = pennies;

    return output;

};

$(document).ready(function() {

    $("form#coin").submit(function(event){
        var amount = ($("input#change").val());
        var result = coin(amount);

        $('#pennies').text(result[0] + " pennies");
        $('#nickels').text(result[1] + " nickels");
        $('#dimes').text(result[2] + " dimes");
        $('#quarters').text(result[3] + " quarters");

        $(".result").show();
        event.preventDefault();

    });

});
