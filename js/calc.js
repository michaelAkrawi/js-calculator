// JavaScript source code

var calc = new Calculator();

$(document).ready(function () {
    write();
});

function write() {
    
    var txb = $(".results-text");
    txb.val(calc.getResult());

}

function Calculator() {

    this.currentState = 0;
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




