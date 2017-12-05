// JavaScript source code

var calc = new Calculator();

$(document).ready(function () {

    write();

    $(".arithmetic").click(function () {
        calc.arithmetic = this.innerHTML;
    });
    $(".number").click(function () {

        var txb = $(".results-text");
        if (txb.val() !== "0")
            txb.val(txb.val() + this.innerHTML);
        else
            txb.val(this.innerHTML);
    });
    $("#btn-ac").click(function () {
        calc = new Calculator(); write();
    });

});

function write() {

    var txb = $(".results-text");
    txb.val(calc.getResult());
}

function Calculator() {

    this.currentState = 0;
    this.arithmetic = undefined;
}

Calculator.prototype.getResult = function () {
    return this.currentState;
};

Calculator.prototype.add = function (value) {
    this.currentState += value;
};

Calculator.prototype.subtraction = function (value) {
    this.currentState -= value;
}




