import validator from './validator.js';


function validateForm(){
    var cardNumberInput= document.getElementById("cardNumberId");
    var monthInput= document.getElementById("monthId");
    var yearInput= document.getElementById("yearId");
    var ccvInput= document.getElementById("ccvId");

    if (cardNumberInput.checkValidity()==false){
        return false;
    }
    if (monthInput.checkValidity()==false){
        return false;
    }
    if (yearInput.checkValidity()==false){
        return false;
    }
    if (ccvInput.checkValidity()==false){
        return false;
    }
    return true;
}

window.validateCard = function validateCard(){

    if (validateForm()==true){
        var inputCardNumber = document.getElementById("cardNumberId").value;
        var cardStatus = validator.validationCard(inputCardNumber);
        var maskChange= validator.maskify(inputCardNumber);
        var message;
        if (cardStatus==true){
            message = "Tu tarjeta "+ maskChange + " es valida";
        }
        else{
            message = "Tu tarjeta " + maskChange + " es invalida";
        }
        document.getElementById("cardStatusId").innerHTML=message;
    }
    else{
        document.getElementById("cardStatusId").innerHTML="Digita tus datos";
    }
    document.getElementById("cardNumberId").value=maskChange;
}
