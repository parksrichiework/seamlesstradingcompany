

// OPEN PRICING AND SHIPPING REQUEST BUTTONS
  document.querySelector('#pricingRequest').addEventListener('click', openPricing)
  document.querySelector('#shippingRequest').addEventListener('click', openShipping)
  document.querySelector('#sampleRequest').addEventListener('click', openSample)


  function openPricing(){

    const form= document.querySelector('#popupFormPricing')
        
    form.style.display= "block"
  }

  function openShipping(){
    const form= document.querySelector('#popupFormShipping')
    form.style.display= "block"
  }

  function openSample(){
    const form= document.querySelector('#popupFormSample')
    form.style.display= 'block'
  }

// CLOSE PRICING AND SHIPPING REQUEST BUTTONS
  document.querySelector('#closeBtn').addEventListener('click', close)
  document.querySelector('#closeBtnShipping').addEventListener('click', closeShipping)
  document.querySelector('#closeBtnSample').addEventListener('click', closeSample)


  function close(){
    const formPricing= document.querySelector('#popupFormPricing')
    formPricing.style.display= "none"
    
  }

  function closeShipping(){
    const form= document.querySelector('#popupFormShipping')
    form.style.display= "none"
  }

  function closeSample(){
    const form= document.querySelector('#popupFormSample')
    form.style.display= "none"
  }

    
// LOGGING THE INFORMATION FROM THE PRICING AND SHIPPING REQUEST BUTTONS
  document.querySelector('#submitBtnPricing').addEventListener('click', logPricing)

  function logPricing(){
    const name= document.querySelector('#namePricing').value
    const company= document.querySelector('#company-namePricing').value
    const email= document.querySelector('#emailPricing').value

    console.log(`Pricing request from ${name}, ${company}, ${email}`)
    alert("Your Pricing Quote information has been submitted!")

    return document.querySelector('#pricingRequest').innerHTML= "<p>Submit Another Pricing Quote?</p>"
    }


  document.querySelector('#submitBtnShipping').addEventListener('click', logShipping)

  function logShipping(){
    const name= document.querySelector('#nameShipping').value
    const company= document.querySelector('#company-nameShipping').value
    const email= document.querySelector('#emailShipping').value

    console.log(`Shipping request from ${name}, ${company}, ${email}`)
    alert("Your Shipping Quote information has been submitted!")

    return document.querySelector('#shippingRequest').innerHTML= "<p>Submit Another Shipping Quote?</p>"
    }

      document.querySelector('#submitBtnSample').addEventListener('click', logSample)

  function logSample(){
    const name= document.querySelector('#nameSample').value
    const company= document.querySelector('#companySample').value
    const email= document.querySelector('#emailSample').value

    console.log(`Sample request from ${name}, ${company}, ${email}`)
    alert("Your Sample request information has been submitted!")

    return document.querySelector('#sampleRequest').innerHTML= "Submit Another Sample Order?"
  }

























//*************************************MODAL FOR POP UP FORM END********************************************






