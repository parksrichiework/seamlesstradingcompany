// *************************************modal for pop-up form**********************************************


document.querySelector('#pricingRequest').addEventListener('click', openPricing)
document.querySelector('#shippingRequest').addEventListener('click', openShipping)


function openPricing(){

  const form= document.querySelector('#popupFormPricing')
      
  form.style.display= "block"
}

function openShipping(){
  const form= document.querySelector('#popupFormShipping')
  form.style.display= "block"
}


document.querySelector('#closeBtn').addEventListener('click', close)
document.querySelector('#closeBtnShipping').addEventListener('click', closeShipping)


function close(){
  const formPricing= document.querySelector('#popupFormPricing')
  formPricing.style.display= "none"
  
}

function closeShipping(){
  const form= document.querySelector('#popupFormShipping')
  form.style.display= "none"
}

    

document.querySelector('#submitBtnPricing').addEventListener('click', log)

function log(){
  const name= document.querySelector('#namePricing').value
  const company= document.querySelector('#company-namePricing').value
  const email= document.querySelector('#emailPricing').value

  console.log("Pricing quote requested by: " + name + ", " + company + ", " + email)
  alert("Your Pricing Quote information has been submitted!")

  return document.querySelector('#pricingRequest').innerHTML= "<p>Submit Another?</p>"
  }


document.querySelector('#submitBtnShipping').addEventListener('click', log)

function log(){
  const name= document.querySelector('#nameShipping').value
  const company= document.querySelector('#company-nameShipping').value
  const email= document.querySelector('#emailShipping').value

  console.log("Shipping quote requested by: " + name + ", " + company + ", " + email)
  alert("Your Shipping Quote information has been submitted!")

  return document.querySelector('#shippingRequest').innerHTML= "<p>Submit Another?</p>"
  }




  // const synth = window.speechSynthesis;

  // let yellThis = new SpeechSynthesisUtterance(yellText);

















//*************************************MODAL FOR POP UP FORM END********************************************






