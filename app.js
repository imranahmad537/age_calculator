function calculateAge() {
    var dobInput = document.getElementById('dob').value;
    var dob = new Date(dobInput);
    var today = new Date();
  
    var age = today.getFullYear() - dob.getFullYear();
    var monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
  
    var resultDiv = document.getElementById('result');
    resultDiv.innerText = "Your age is: " + age;
  }
  