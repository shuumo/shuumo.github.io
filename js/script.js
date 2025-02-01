function HelloWorld() {                                     
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    const resultDiv = document.getElementById('result');
    
    if (value1 === '' || value2 === '') {
        resultDiv.textContent = "Please only enter integers (trust me bro)";
        resultDiv.classList.add('show');
        resultDiv.style.fontSize = "15px";
        return;
    }
    resultDiv.textContent = "Hello World";
    
    if (value1 === '69' && value2 === '69') { 
        resultDiv.style.fontSize = "60px";
    } else {
        resultDiv.style.fontSize = "15px";
    } 

    resultDiv.classList.add('show');
}
