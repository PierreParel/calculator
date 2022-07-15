
let num1, num2, ans;
let operation;


function add(x,y){
    return x+y;
}

function subtract(x, y){
    return x-y;
}

function multiply(x,y){
    return x*y;
}

function divide(x,y){
    return x/y;
}

function operate(op,x,y){
    let ans = 0;
    switch (op){
        case "add":
            ans = add(x,y);
            break;
        case "subtract":
            ans = subtract(x,y);
            break;
        case "multiply":
            ans = multiply(x,y);
            break;
        case "divide":
            ans = divide(x,y);
            break;
    }

    return ans;
}