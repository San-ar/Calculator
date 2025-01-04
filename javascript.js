let a;
let operator;
let b;
let eq;
const display_txt = document.querySelector(".display-text");
const dec_btn = document.querySelector("#dec");

function add(a, b) {
    return Math.round(a + b);
}

function subtract(a, b) {
    return Math.round(a - b);
}

function multiply(a, b) {
    return Math.round(a * b);
}

function divide(a, b) {
    if (a == 0 || b == 0) {
        return "S T U P I D";
    } else {
        return Math.round(a / b);
    }
}

function operate(arr) {
    console.log(arr);
    a = +arr[0];
    operator = arr[1];
    b = +arr[2];
    
    if (operator == "+") {
        display_txt.textContent = add(a, b);
    } else if (operator === "-") {
        display_txt.textContent = subtract(a, b);
    } else if (operator === "×") {
        display_txt.textContent = multiply(a, b);
    } else if (operator === "÷") {
        display_txt.textContent = divide(a, b);
    }
}

function digit_pressed(digit) {
    console.log("pressed: " + digit);

    if (digit === "AC") {
        display_txt.textContent = "";
    } else if (digit === "C"){
        eq = eq.trim().slice(0, -1);
        display_txt.textContent = eq.trim();
    } else if (digit !== "=" && digit !== "AC" && digit !== "C") {
        display_txt.textContent += digit;
        eq = display_txt.textContent;
        console.log(eq);

        if (digit === ".") {
            dec_btn.disabled = true;
        } else if ([" + ", " - ", " × ", " ÷ "].includes(digit)) {
            if (dec_btn) dec_btn.disabled = false; // Enable decimal button when operator is pressed
        }
        
    } else if (digit == '='){
        let arr = eq.split(" ");
        operate(arr);
    }
}

document.querySelectorAll('.button').forEach((e) => {
    e.addEventListener('click', () => {
        digit_pressed((e).textContent);
    });
})

document.addEventListener('keydown', (e) => {
    
    if ((e).key == "/") {
        digit_pressed(" ÷ ");
    } else if ((e).key == "*") {
        digit_pressed(" × ");
    } else if ((e).key == "+") {
        digit_pressed(" + ");
    } else if ((e).key == "-") {
        digit_pressed(" - ");
    } else if ((e).key == "Backspace") {
        digit_pressed("C");
    } else if ((e).key == "Enter") {
        digit_pressed("=");
    } else if (["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."].includes((e).key)){
        digit_pressed((e).key);
    }
});