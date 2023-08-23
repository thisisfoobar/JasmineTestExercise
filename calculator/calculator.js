window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");

  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const loanAmount = document.getElementById("loan-amount");
  const loanYears = document.getElementById("loan-years");
  const loanRate = document.getElementById("loan-rate");
  loanAmount.value = 100000;
  loanYears.value = 10;
  loanRate.value = 6;

  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let monthlyRate = values.rate / 100 / 12;
  let months = values.years * 12;

  return (
    (values.amount * monthlyRate) /
    (1 - Math.pow(1 + monthlyRate, -1 * months))
  )
    .toFixed(2)
    .toString();
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayment = document.getElementById("monthly-payment");

  monthlyPayment.innerText = "$" + monthly;
}
