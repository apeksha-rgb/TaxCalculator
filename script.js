document.addEventListener('DOMContentLoaded', function() {
  // Function to calculate tax
  function calculateTax(grossIncome, extraIncome, deductions, age) {
    let totalIncome = grossIncome + extraIncome - deductions;
    if(totalIncome <= 800000){
      return totalIncome;
    }
    let taxableIncome = totalIncome - 800000
      // Tax rate based on age group
      let taxRate = 0;
      switch (age) {
          case 'less_than_40':
              taxRate = 0.1;
              break;
          case 'between_40_and_60':
              taxRate = 0.2;
              break;
          case 'greater_than_60':
              taxRate = 0.3;
              break;
          default:
              break;
      }

      // // Calculate taxable income
      // let taxableIncome = grossIncome + extraIncome - deductions;

      // Calculate tax
      let tax = taxableIncome * taxRate;

      // Calculate overall income after tax deductions
      let overallIncome = totalIncome - tax;

      return overallIncome;
  }

  // Function to display result
  function displayResult(result) {
      document.getElementById('resultText').textContent = result.toFixed(2);
      document.querySelector('.popup').style.display = 'block';
     
  }

  // Function to close popup
  function closePopup() {
      document.querySelector('.popup').style.display = 'none';
      reinitialize();
  }

  // Event listener for form submission
  document.getElementById('tax-form').addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Get form input values
      let grossIncome = parseFloat(document.getElementById('gross-annual-income').value);
      let extraIncome = parseFloat(document.getElementById('extra-income').value) || 0;
      let deductions = parseFloat(document.getElementById('deductions').value);
      let age = document.getElementById('age').value;

      // Calculate tax
      let result = calculateTax(grossIncome, extraIncome, deductions, age);

      // Display result
      displayResult(result);
  });

  // Event listener for closing popup
  document.getElementById('closebtn').addEventListener('click', function() {
      closePopup();
      
  });
});

function reinitialize(){
  let grossIncome = document.getElementById('gross-annual-income').value = ""; 
      let extraIncome = document.getElementById('extra-income').value ="";
      let deductions = document.getElementById('deductions').value = "";
      let age = document.getElementById('age').value="";

}









































































// $(document).ready(function() {
//     // Show error tooltip on hover
//     $('[data-toggle="tooltip"]').tooltip();
  
//     // Validate form on submit
//     $('#tax-form').submit(function(e) {
//       e.preventDefault();
  
//       // Get form values
//       const grossAnnualIncome = parseFloat($('#gross-annual-income').val());
//       const extraIncome = parseFloat($('#extra-income').val());
//       const deductions = parseFloat($('#deductions').val());
//       const age = $('#age').val();
  
//       // Validate number fields
//       if (isNaN(grossAnnualIncome) || grossAnnualIncome < 0) {
//         $('#gross-annual-income + .error-tooltip').tooltip('show');
//       } else {
//         $('#gross-annual-income + .error-tooltip').tooltip('hide');
//       }
  
//       if (isNaN(extraIncome) || extraIncome < 0) {
//         $('#extra-income + .error-tooltip').tooltip('show');
//       } else {
//         $('#extra-income + .error-tooltip').tooltip('hide');
//       }
  
//       if (isNaN(deductions) || deductions < 0) {
//         $('#deductions + .error-tooltip').tooltip('show');
//       } else {
//         $('#deductions + .error-tooltip').tooltip('hide');
//       }
  
//       // Validate age field
//       if (!age) {
//         $('#age + .error-tooltip').tooltip('show');
//       } else {
//         $('#age + .error-tooltip').tooltip('hide');
//       }
  
//       // Calculate tax
//       const overallIncome = grossAnnualIncome + extraIncome - deductions;
//       let tax = 0;
//       if (overallIncome > 800000) {
//         if (age === 'less_than_40') {
//           tax = 0.3 * (overallIncome - 800000);
//         } else if (age === 'between_40_and_60') {
//           tax = 0.4 * (overallIncome - 800000);
//         } else if (age === 'greater_than_60') {
//           tax = 0.1 * (overallIncome - 800000);
//         }
//       }
  
//       // Show tax calculation in modal
//       $('#tax-message').text(`Overall income: ${overallIncome.toLocaleString()}\nTax: ${tax.toLocaleString()}`);
//       $('#tax-modal').modal('show');
//     });
//   });