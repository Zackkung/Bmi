function calculateBMI() {
  var weight = parseFloat(document.getElementById('weight').value);
  var height = parseFloat(document.getElementById('height').value);
  var bmi = weight / (height * height);
  
  let genderSelect = document.querySelector("#gender").value;
  console.log(genderSelect)
  if (genderSelect == "Male") {
    MaleBmiCalc(bmi);
  }
  else if (genderSelect == "Female") {
    FemaleBmiCalc(bmi);
  }
  var resultElement = document.getElementById('result');
  resultElement.innerHTML = 'Your BMI: ' + bmi.toFixed(5);
}

var calculateButton = document.getElementById('btn');
calculateButton.addEventListener('click', calculateBMI);

function MaleBmiCalc(bmi) {
  var result2 = document.getElementById("result2");
  if (bmi <= 13.30) {
    
  }
  else if (bmi <= 18.57) {
    result2.innerText = "Result: Under weight";
  }
  else if (bmi <= 23.60) {
    result2.innerText = "Result: Normal";
  }
  else if (bmi <= 28.20) {
    result2.innerText = "Result: Over weight";
  }
  else if (bmi >= 28.21) {
    
  }
};

function FemaleBmiCalc(bmi) {
  var result2 = document.getElementById("result2");
  if (bmi <= 13.88) {
    
  }
  else if (bmi <= 20.06) {
    result2.innerText = "Result: Under weight";
  }
  else if (bmi <= 24.34) {
    result2.innerText = "Result: Normal";
  }
  else if (bmi <= 28.47) {
    result2.innerText = "Result: Over weight";
  }
  else if (bmi >= 28.48) {
    
  }
};