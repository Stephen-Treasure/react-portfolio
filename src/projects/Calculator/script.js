let currentValue = "";
let operatorValue = "";
let nextValue = "";

const btns = document.querySelectorAll(".btn");
console.log(btns);
const operators = document.querySelectorAll(".operator");
const dot = document.getElementById(".");

const equal = document.getElementById("=");
let input = document.getElementById("input");

const clear = document.getElementById("C");

const calculate = (op, num1, num2) => {
    switch (op) {
        case "+":
            return parseFloat(num1) + parseFloat(num2);
        case "-":
            return parseFloat(num1) - parseFloat(num2);
        case "*":
            return parseFloat(num1) * parseFloat(num2);
        case "/":
            return parseFloat(num1) / parseFloat(num2);
        case "%":
    }
};

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (
            currentValue.toString().includes(".") ||
            nextValue.toString().includes(".")
        ) {
            dot.value = "";
            console.log("d", dot.value);
        }

        if (operatorValue === "") {
            // dot.value = ".";
            currentValue += btn.value;
            console.log("c", currentValue);
            input.value = currentValue;
        } else {
            dot.value = ".";
            if (nextValue.includes(".")) {
                dot.value = "";
            }
            nextValue += btn.value.toString();
            console.log("n", nextValue);
            input.value = nextValue.toString();
        }
    });
});

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        if (currentValue !== "" && operatorValue !== "" && nextValue !== "") {
            input.value = currentValue;
            currentValue = calculate(operatorValue, currentValue, nextValue);
            operatorValue = "";
            nextValue = "";
            dot.value = ".";
        }

        operatorValue = operator.value;
        console.log(operatorValue);
        input.value = operatorValue;
        console.log("o", input.value);
    });
});

equal.addEventListener("click", () => {
    console.log(calculate(operatorValue, currentValue, nextValue));

    input.value = calculate(operatorValue, currentValue, nextValue);

    currentValue = calculate(operatorValue, currentValue, nextValue);
    operatorValue = "";
    nextValue = "";
    dot.value = ".";
});

clear.addEventListener("click", () => {
    currentValue = "";
    operatorValue = "";
    nextValue = "";
    input.value = "";
    dot.value = ".";
});
