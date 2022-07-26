function calc(){
    let num1 = document.getElementById('first').value;
    let num2 = document.getElementById('second').value;
    let operator = document.getElementById('op').value;

    if(operator == '+'){
        var result = parseInt(num1) + parseInt(num2);
    }

    if(operator == '-'){
        var result = parseInt(num1) - parseInt(num2);
    }

    if(operator == '*'){
        var result = parseInt(num1) * parseInt(num2);
    }

    if(operator == 'exp'){
        var result = 1;

        for(let i=0; i<parseInt(num2); i++){
            result *= parseInt(num1);
        }
    }

    document.getElementById('result').value = result;
}