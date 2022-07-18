
let num1 = null, 
    num2 = null, 
    op1 = null,
    op2 = null,
    displayValue = '0',
    pressedEquals = false;
    
let operation;
const buttons = document.querySelectorAll("button");

function updateDisplay(){
    const display = document.getElementById("display");
    display.innerText = displayValue;
}

updateDisplay();

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if(button.classList.contains('number')){
            let num = e.target.value;
            if(pressedEquals){
                pressedEquals = false;
                displayValue = num;
            }else{
                if(displayValue == 0 || displayValue == num1){
                    displayValue = num;
                }else{
                    displayValue+= num;
                }
            }
            
        }else if(button.classList.contains('operator')){
            let butt = e.target.value;
            if(op1 == null){
                op1 = butt;
                console.log(op1);
                num1 = displayValue;
            }else if(op1 != null){
                op2 = butt;
                num2 = displayValue;
                inputNumbers();
            }
        }else if(button.classList.contains('equals')){
            if(num1 != null){
                num2 = displayValue;
                displayValue = operate(num1,num2);
                num1 = null;
                op1 = null;
                num2 = null;
                op2 = null;
                pressedEquals = true;
            }

        }else if(button.classList.contains('clear')){
            resetCalc();
        }
        updateDisplay();
    });
});


function inputNumbers(){
    console.log(`num1:${num1}\nnum2:${num2}\nop1:${op1}\nop2:${op2}`)

    if(num1 == null){
        num1 = displayValue;
    }else if(num1 != null){
        num1 = operate(num1,num2);
        console.log(`num1: ${num1}`);
        op1 = op2;
        op2 = null;
        displayValue = num1;
        num2 = null;
    }
}

function inputDecimal(){
}

function inputPercent(){
    displayValue = displayValue/100;
}

function resetCalc(){
    num1 = null, 
    num2 = null, 
    op1 = null, 
    op2 = null, 
    displayValue = '0';
}

function changeSign(){

}

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

function operate(x,y){
    let ans = 0;
    x = Number(x);
    y = Number(y);
    console.log(`\n\n OPERATOR: ${op1}`);
    switch(op1){
        case "+":
            ans = add(x,y);
            break;
        case "-":
            ans = subtract(x,y);
            break;
        case "*":
            ans = multiply(x,y);
            break;
        case "/":
            if(y == 0){
                displayValue = "YOU CANNOT DIVIDE BY 0 BOZO"
            }
            else{
                ans = divide(x,y);
            }
            
            break;
    }
    return ans;
}
