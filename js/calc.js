// JavaScript source code

var calc = new Calculator();
var resetText = true;

$(document).ready(function () {
    var txb = $(".results-text").val("0");
    $(".arithmetic").click(function () {

        onArithmeticClick(this.innerHTML);
    });

    $(".number").click(function () {

        updateCalulatorText(this.innerHTML);
        resetText = false;

    });
    $("#btnReset").click(function () {
        calc = new Calculator();
        write();
    });

    $("#btnEqual").click(function () {

        var number = $(".results-text").val();
        calc.recalculte(parseInt(number));
        write();       
    });
});

function onArithmeticClick(arithmetic) {

    var number = $(".results-text").val();
    calc.updateArithmetic(parseInt(number), arithmetic);
    resetText = true;
    write();    
}

function updateCalulatorText(number) {

    var txb = $(".results-text");
    if (resetText)
        txb.val(number);
    else
        txb.val(txb.val() + number);
}

function write() {

    var txb = $(".results-text");
    txb.val(calc.currentState);
}

function Calculator() {

    this.currentState = 0;
    this.arithmetic = undefined;
    this.chaining = false;
}

Calculator.prototype.updateArithmetic = function (number, arithmetic) {

    this.arithmetic = arithmetic;
    if (this.chaining)
        this.recalculte(number);
    else
        this.currentState = number;
};

Calculator.prototype.recalculte = function (number) {
    switch (this.arithmetic) {
        case "+": this.currentState += number; break;
        case "-": this.currentState -= number; break;
        case "x": this.currentState *= number; break;
        case "&divide;": this.currentState /= number; break;
        case undefined: this.currentState = number;
    }

    this.chaining = true;
}


Calculator.prototype.getFinalResult = function (number) {

    this.recalculte(number);
    return this.currentState;
};








