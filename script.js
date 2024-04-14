const form = document.querySelector("form")


form.addEventListener("submit",function(e){
  e.preventDefault()
  
  let age = document.querySelector("#age")
  let tax ;
  let resultText = document.querySelector("#resultText")
  const grossAnnualIncome =parseInt(document.querySelector("#gross-annual-income").value)
  const extraIncome =parseInt(document.querySelector("#extra-income").value)
  const deduction =parseInt(document.querySelector("#deductions").value)
  const overallIncome = parseInt((grossAnnualIncome + extraIncome) - deduction)
  console.log(overallIncome)

  if(age.value === "less_than_40"){
    if(overallIncome <= 800000){
      resultText.innerHTML =" No tax is payable"
    }else if(overallIncome > 800000){
      tax = Math.max(0, (overallIncome - 800000) * 0.3)
      resultText.innerHTML = `Tax is applicable. the tax amour is ${tax}`
    }
  }else if(age.value === "between_40_and_60"){
    if(overallIncome <= 800000){
      resultText.innerHTML =" No tax is payable"
    }else if(overallIncome > 800000){
      tax = Math.max(0, (overallIncome - 800000) * 0.4)
      resultText.innerHTML = `Tax is applicable. the tax amour is ${tax}`
    }
  }
  if(age.value === "greater_than_60"){
    if(overallIncome <= 800000){
      resultText.innerHTML =" No tax is payable"
    }else if(overallIncome > 800000){
      tax = Math.max(0, (overallIncome - 800000) * 0.1)
      resultText.innerHTML = `Tax is applicable. The tax amount is ${tax}`
    }
  }
  let closebtn = document.querySelector("#closebtn")
  let popUp = document.querySelector(".popup")
  popUp.classList.add("open-popup")

  
  closebtn.addEventListener("click",function(){
   
    popUp.classList.add("close-popup");
    document.querySelector("#gross-annual-income").value = 0;
  document.querySelector("#extra-income").value = 0;
  document.querySelector("#deductions").value = 0;
  document.querySelector("#age").value = "";
  document.querySelector("#resultText").innerHTML = "";
  

    
  })
 
  
})











 // if(overallIncome <=800000){
  //   console.log("no tax")
  // }else  if(overallIncome > 800000){
  //   console.log("tax is applicable")
  //   if(age <40){
  //     tax =Math.max(0, (overallIncome - 800000) * 0.3)
      
  //   }else if(age >=40 && age <60){
  //     tax = Math.max(0, (overallIncome - 800000) * 0.4)
  //   }else if(age >= 60){
  //     tax = Math.max(0, (overallIncome - 800000) * 0.1)
  //   }


























































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