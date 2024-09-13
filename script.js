function isPalindrome(str) {
    if (typeof str !== 'string') {
        return "Debes ingresar una cadena de texto";
        
    }
    

    const cleanedStr = str.replace(/[\W_]/g, '').toLocaleLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

function checkPalindrome() {
    const input = document.getElementById("palindromeInput").value;
    const result = isPalindrome(input);
    const resultElement = document.getElementById("palindromeResult");

    if (typeof result === 'boolean') {
        resultElement.textContent = result ? "true" : "False";
        resultElement.style.color = result ? "green" : "red";
                
    }else{
        resultElement.textContent = result;
        resultElement.style.color = "black";
    }
    
}

function getVowelsCount(str) {
    if (typeof str !== 'string') {
        return "Debes ingresar una cadena de texto"
        
    }
    
    if (!/[a-zA-Z]/.test(str)) {
        return "Debes ingresar una cadena de texto";
    }

    const vowels = str.match(/[aeiou]/gi);
    return vowels ? vowels.length : 0;
}

function countVowels() {
    const input = document.getElementById("vowels.Input").value;

    if (input.trim()=== '') {
        document.getElementById("vowelsResult").textContent = "Debes ingresar una cadena de texto";
        return;
        
    }
    
    const result = getVowelsCount(input);

    document.getElementById("vowelsResult").textContent = typeof result === 'number'
    ? `Número de vocales: ${result}`
    : result;
}

function Person(name, age) {
    this.name = name;
    this.age = age;
    
}

Person.prototype.getDetails = function(){
    return `Nombre: ${this.name}, Edad: ${this.age}`;
}

function createPerson() {
    const name = document.getElementById("personName").value.trim();
    const age = document.getElementById("personaAge").value.trim();
    const resultElement = document.getElementById("personDetails");

    if (isNaN(age) || age <= 0) {
        resultElement.textContent = "La edad debe ser un número válido mayor a 0."
        resultElement.style.color = "red";
        return;
        
    }
    if(name === '' || age === ''){
        resultElement.textContent = "Debes completar todos los campos."
        resultElement.style.color = "red";
        return;

    }
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        resultElement.textContent = "El nombre solo debe contener letras.";
        resultElement.style.color = "red";
        return;
    }

    const person = new Person(name,age);
    resultElement.textContent = person.getDetails();
    resultElement.style.color = "black";


}

function multiplicarPorDos(arr) {
    if (!Array.isArray(arr)) {
        return "Debes ingresar un array con dos numeros";
        
    }
    if (arr.length === 0 || arr.every(item => item === '')) {
        return "No podemos calcular elementos vacios";
        
    }
    if (arr.length > 2) {
        return "Solo se admiten dos numeros";
        
    }
    if (arr.some(item => isNaN(item) || item.trim() === '')) {
        return "Ambos elementos deben ser numeros";
        
    }

    return arr.map(item => Number(item) * 2);
    
}

function multiplyByTwo() {
    const input = document.getElementById("multiplyInput").value.split(',').map(item => item.trim());
    const result = multiplicarPorDos(input);
    document.getElementById("multiplyResult").textContent = Array.isArray(result) ? `Resultado: ${result.join(', ')}` : result;
    
}

function filterEvenNumbers(arr) {
    if (!Array.isArray(arr)) {
        return "Ingresa una lista valida";
        
    }

    if (arr.length === 0) {
        return [];
        
    }

    let validNumbers = arr.map(item => item.trim()).filter(item => item !== '').map(Number);

    if (validNumbers.some(isNaN)) {
        return "Deben contener numeros";
        
    }

    let evenNumbers = validNumbers.filter(num => num % 2 === 0);

    return evenNumbers;
    
}

function filterEvenNumbersInput() {

    const input = document.getElementById("evenNumbersInput").value.split(',').map(item => item.trim());
    const result = filterEvenNumbers(input);
    document.getElementById("evenNumbersResult").textContent = Array.isArray(result) ? `Pares: ${result.join(', ')}` : result;
    
}