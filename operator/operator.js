function cal(){
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    var oper = document.getElementById('operator').value;
    if(oper === '+'){
        var num2 = document.getElementById('result').value = num1+ num2;
    }
    if(oper === '-'){
        var num2 = document.getElementById('result').value = num1- num2;
    }
    if(oper === '*'){
        var num2 = document.getElementById('result').value = num1* num2;
    }
    if(oper === '/'){
        var num2 = document.getElementById('result').value = num1/ num2;
    }




}