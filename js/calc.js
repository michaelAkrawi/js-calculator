// JavaScript source code

var calc = new Calculator();

$(document).ready(function () {

    write();

    $(".arithmetic").click(function () {
        calc.arithmetic = this.innerHTML;
    });
    $(".number").click(function () {

        updateCalulatorText(this.innerHTML);
        var number = $(".results-text").val();
        calc.reCalculate(parseInt(number));


    });
    $("#btn-ac").click(function () {
        calc = new Calculator();
        write();
    });

    $("#btnEqual").click(function () {
        write();
    });

});
function updateCalulatorText(number) {

    var txb = $(".results-text");
    var val = txb.val();
    if (val == "0" || calc.arithmetic != undefined)
        txb.val(number);
    else
        txb.val(txb.val() + number);
}

function write() {

    var txb = $(".results-text");
    txb.val(calc.getResult());
}

function Calculator() {

    this.currentState = 0;
    this.arithmetic = undefined;
}

Calculator.prototype.reCalculate = function (number) {

    switch (this.arithmetic) {
        case "+": this.currentState += number; break;
        case "-": this.currentState -= number; break;
        case "x": this.currentState *= number; break;
        case "&divide;": this.currentState /= number; break;
        case undefined: this.currentState = number;
    }


};

Calculator.prototype.getResult = function () {
    return this.currentState;
};

Calculator.prototype.add = function (value) {
    this.currentState += value;
};

Calculator.prototype.subtraction = function (value) {
    this.currentState -= value;
}






