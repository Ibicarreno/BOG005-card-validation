const validator = {
  isValid,
  maskify,
};

function maskify(numberCard){
  var maskifyNumber = numberCard;
  var finalNumber = '';
  for (var i = 0; i < maskifyNumber.length; i++) {
    if (i < maskifyNumber.length - 4) {
      finalNumber = finalNumber + '#';
    } else {
      finalNumber = finalNumber + (maskifyNumber[i]); 
    }     
  }
  return finalNumber;
}

function isValid(cardNumber){ /* Funcion para la validacion del numero de tarjeta ingresada*/ 
    var arrayCardNumber = cardNumber.split(""); /** Se convierte el string en un array utilizando .split */
    var reverseArrayCardNumber = arrayCardNumber.reverse(); /** Se invierten los numeros del array con .reverse */
    var sumNumbers=0; /** se crea variable que contenga todos las cantidades finales de los pares y los impares con el algoritmo de luhn */
    
    for(var i=0; i<reverseArrayCardNumber.length; i++){ /** Ciclo for para que cuente desde la posicion 0 hasta el largo de la tajeta de credito */
      var operateNumber; /** se crea variable para hacer las respectivas operaciones */
      if(i%2==0){ /** Condicional para que selecciones las posiciones pares  */
        operateNumber = reverseArrayCardNumber[i]; /** En esta variable se guardan los numeros pares del array */
      }
      else {
        var multipliedByTwo = reverseArrayCardNumber[i]*2; /** Los numeros impares se multiplican por 2 */
        var multipliedByTwoString = multipliedByTwo.toString(); /** El resultado de la operacion anterior se convierte a string */
        var arrayMultipliedByTwoString = multipliedByTwoString.split(""); /** El string anteior se convierte en array */

        operateNumber = 0;
        for (var j=0; j<arrayMultipliedByTwoString.length; j++){ /** Ciclo for para que se sumen los digitos de cada uno de los numeros impares */
          operateNumber=operateNumber+ parseInt(arrayMultipliedByTwoString[j]); 
         
        }
      }
      sumNumbers=sumNumbers + parseInt(operateNumber);
    }
    if (sumNumbers%10 ==0){
      return true;
    }
    else{
      return false;
    }
}


export default validator;
