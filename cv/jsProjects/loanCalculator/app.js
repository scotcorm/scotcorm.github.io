// Listen for Submit button
// you can use id or query selector
// listen for submit then call the function calculateResults
document.getElementById('loan-form').addEventListener('submit', function (e) {
  //hide results
  document.getElementById('results').style.display = 'none';

  // show the loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults, 2000);  // call calculateResults after 2 secs

  e.preventDefault();
});

//Calculate results
function calculateResults() {
  //test everything then then take the e out fromcalculateResults(e) and allow default
  console.log('Calculating...');
  // UI Vars
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  //compute monthly payments
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

    //show results 
    document.getElementById('results').style.display = 'block';

    // hide loader
    document.getElementById('loading').style.display = 'none';
  } else {
    //test
    //console.log('Please check your numbers');
    showError('Please check your numbers');
  }

  //e.preventDefault()
}
// e for event, and since it is a form submit you want to prevent default behavior

//Show Error
function showError(error) {
  //hide results 
  document.getElementById('results').style.display = 'none';

  // hide loader
  document.getElementById('loading').style.display = 'none';

  // create a div
  const errorDiv = document.createElement('div'); 

  // get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // add class
  errorDiv.className = 'alert alert-danger';

  //create textnode and append to div
  errorDiv.appendChild(document.createTextNode(error));

  //insert error div above heading 
  card.insertBefore(errorDiv, heading);

  // clear error after 3 seconds
  setTimeout(clearError, 3000);
}

// clear error function
function clearError() {
  document.querySelector('.alert').remove();
}