const submitBtn = document.getElementById("submit-btn");

function calculate() {
  const bill = parseFloat(document.getElementById("bill").value);
  const category = parseFloat(document.getElementById("category").value);
  const peopleNumber = parseFloat(document.getElementById("people").value);
  const tipAmount = document.getElementById("tipAmount");

  // Check if input values are valid
  if (
    isNaN(bill) ||
    isNaN(category) ||
    isNaN(peopleNumber) ||
    bill <= 0 ||
    peopleNumber <= 0
  ) {
    tipAmount.innerHTML = "Please enter correct values";
    tipAmount.style.color = "red";
    return;
  }

  // Calculate tip per person
  let tip = bill * category;
  let finalResult = tip / peopleNumber;

  // Display result
  tipAmount.innerHTML = finalResult.toFixed(2) + "$";
  tipAmount.style.color = "blue";
}

// Prevent form submission and calculate tip on button click
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  calculate();
});
