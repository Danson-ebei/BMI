

function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);  height = height/100;

    let bmiResult = document.getElementById("bmiResult");
    let bmiMessage = document.getElementById("bmiMessage");



    

    
    bmiResult.textContent = "";
    bmiMessage.textContent = "";

    
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        bmiResult.textContent = "Please enter valid values for both weight and height.";
        return;
    }

    
    let bmi = (weight / (height * height)).toFixed(1);

    
    bmiResult.textContent = `Your BMI is ${bmi}`;

   
    if (bmi < 18.5) {
        bmiMessage.textContent = "Category: Underweight";
        bmiMessage.style.color = "lightblue";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiMessage.textContent = "Category: Normal weight";
        bmiMessage.style.color = "green";
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiMessage.textContent = "Category: Overweight";
        bmiMessage.style.color = "yellow";
    } else  {
        bmiMessage.textContent = "Category: Obese";
        bmiMessage.style.color = "red";
    }
}

function resetFields() {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("bmiResult").textContent = "";
    document.getElementById("bmiMessage").textContent = "";
}



