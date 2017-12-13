// JavaScript source code

var calc = new Calculator();
var resetText = true;

$(document).ready(function () {

    resetCalculator();
    bindEvents();

});

function bindEvents() {

    $(".arithmetic").click(function () {

        onArithmeticClick(this.innerHTML);
    });

    $(".number").click(function () {

        updateCalulatorText(this.innerHTML);
        resetText = false;

    });
    $("#btnReset").click(function () {
        resetCalculator();
    });

    $("#btnEqual").click(function () {
        resetText = true;
        write();
        calc.currentState = 0;
        calc.chaining = true;
    });
}

function resetCalculator() {

    var txb = $(".results-text").val("0");
    calc = new Calculator();
    resetText = true;
    write();
}

function onArithmeticClick(arithmetic) {

    if (calc.chaining) {       
        write();
        calc.currentState = 0;
    }

    calc.arithmetic = arithmetic;
    resetText = true;
    calc.chaining = true;
}

function updateCalulatorText(number) {

    var txb = $(".results-text");
    if (txb.val().indexOf(".") != -1 && number === ".") {
        return;
    }

    if (resetText && number != ".") {
        calc.currentState = parseFloat(txb.val());
        txb.val(number);
    }
    else
        txb.val(txb.val() + number);
}

function write() {

    var numberOnScreen = $(".results-text").val();
    var result = calc.getArithmetic(parseFloat(numberOnScreen));
    $(".results-text").val(result);
}

function Calculator() {

    this.currentState = 0;
    this.arithmetic = undefined;
    this.chaining = false;
}

Calculator.prototype.getArithmetic = function (number) {

    return this.recalculte(number);

};

Calculator.prototype.recalculte = function (number) {
    switch (this.arithmetic) {
        case "+": return this.currentState + number;
        case "-": return this.currentState - number;
        case "x": return this.currentState * number;
        case "&divide;": return this.currentState / number;
        case "%": return this.currentState % number;
        case undefined: return number;
    }

    ;
}








