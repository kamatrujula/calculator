function calc(){
    let num1 = document.getElementById('first').value;
    let num2 = document.getElementById('second').value;
    let operator = document.getElementById('op').value;

    if(operator == '+'){
        var result = parseFloat(num1) + parseFloat(num2);
    }

    if(operator == '-'){
        var result = parseFloat(num1) - parseFloat(num2);
    }

    if(operator == '*'){
        var result = parseFloat(num1) * parseFloat(num2);
    }

    if(operator == 'exp'){
        var result = 1;
        if(parseFloat(num2)<0){
            alert('Instructions not followed. Enter positive power.')
        }

        for(let i=0; i<parseFloat(num2); i++){
            result *= parseFloat(num1);
        }
    }

    document.getElementById('result').value = result;
}