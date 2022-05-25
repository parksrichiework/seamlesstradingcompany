

// OPEN PRICING AND SHIPPING REQUEST BUTTONS
  document.querySelector('#pricingRequest').addEventListener('click', openPricing)
  document.querySelector('#shippingRequest').addEventListener('click', openShipping)
  document.querySelector('#sampleRequest').addEventListener('click', openSample)
  document.querySelector('#customRequest').addEventListener('click', openCustom)


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

  function openCustom(){
    const form= document.querySelector('#popupFormCustom')
    form.style.display= 'block'
  }

// CLOSE PRICING AND SHIPPING REQUEST BUTTONS
const formPricing= document.querySelector('#popupFormPricing')
const formShipping= document.querySelector('#popupFormShipping')
const formSample= document.querySelector('#popupFormSample')
const formCustom= document.querySelector('#popupFormCustom')

  document.querySelector('#closeBtnPricing').addEventListener('click', closePricing)
  document.querySelector('#closeBtnShipping').addEventListener('click', closeShipping)
  document.querySelector('#closeBtnSample').addEventListener('click', closeSample)
  document.querySelector('#closeBtnCustom').addEventListener('click', closeCustom)


  function closePricing(){    
    formPricing.style.display= "none"    
  }
  function closeShipping(){    
    formShipping.style.display= "none"
  }
  function closeSample(){    
    formSample.style.display= "none"
  }
function closeCustom(){
  formCustom.style.display= "none"
}

let formArray = [formPricing, formShipping, formSample, formCustom]
window.addEventListener('mouseup', function(e){  
  
  for(let i=0; i < formArray.length; i++){
    let form = formArray[i];
    if(e.target != form && e.target.parentNode.parentNode != form){
    form.style.display= "none";    
    }
  }
})
  

//Putting Data into object and saving it to localStorage    
//----------------------------------------------------PRICING QUOTE!!!!
//   let dataPricing =[]

//   const addPricing = (ev)=>{
//   ev.preventDefault() //to stop form from submitting
  
//   let pricing= {
//     id:Date.now(),
//     service: 'Pricing Request',
//     name: document.querySelector('#namePricing').value,
//     company: document.querySelector('#companyPricing').value,
//     address: document.querySelector('#addressPricing').value,
//     city: document.querySelector('#cityPricing').value,
//     zip: document.querySelector('#zipPricing').value,
//     phone: document.querySelector('#phonePricing').value,
//     email: document.querySelector('#emailPricing').value
//   } 
  
//   dataPricing.push(pricing)
//   document.forms[0].reset() //to clear the form for the next entries
//   document.querySelector('form').reset()
  
  

//   //for display purposes
//   console.warn('added', {dataPricing})
//   alert('Your Pricing Quote Request has been sumbitted!')
//   // let pre = document.querySelector('#msg pre')
//   // pre.textContent = '\n' + JSON.stringify(dataForm, '\t', 2)

//   //saving to localStorage
//   localStorage.setItem('PricingRequest', JSON.stringify(dataPricing))
//   }

//   document.addEventListener('DOMContentLoaded', ()=>{
//     document.querySelector('#submitBtnPricing').addEventListener('click', addPricing)

//   })

//   //--------------------------------------------------------shipping quote

//   let dataShipping =[]

//   const addShipping = (ev)=>{
//   ev.preventDefault() //to stop form from submitting
  
   
//   const shipping = {
//       id:Date.now(),
//       service: 'Shipping Request',
//       name: document.querySelector('#nameShipping').value,
//       company: document.querySelector('#companyShipping').value,
//       address: document.querySelector('#addressShipping').value,
//       city: document.querySelector('#cityShipping').value,
//       zip: document.querySelector('#zipShipping').value,
//       phone: document.querySelector('#phoneShipping').value,
//       email: document.querySelector('#emailShipping').value
//     } 

//   dataShipping.push(shipping)
//   document.forms[0].reset() //to clear the form for the next entries
//   // document.querySelector('form').reset()
  

//   //for display purposes
//   console.warn('added', {dataShipping})
//   alert('Your Shipping Quote Request has been sumbitted!')
//   // let pre = document.querySelector('#msg pre')
//   // pre.textContent = '\n' + JSON.stringify(dataForm, '\t', 2)

//   //saving to localStorage
//   localStorage.setItem('ShippingRequest', JSON.stringify(dataShipping))
//   }

//   document.addEventListener('DOMContentLoaded', ()=>{
//     document.querySelector('#submitBtnShipping').addEventListener('click', addShipping)

//   })  

//   //-------------------------------SAMPLE REQUEST!!!!!!!!!!!!!!!!!!!!!!!!!11
//   let dataSample =[]

//   const addSample = (ev)=>{
//   ev.preventDefault() //to stop form from submitting
     
//   let sample = {
//     id: Date.now(),
//     service: 'Sample Request',
//     name: document.querySelector('#nameSample').value,
//     company: document.querySelector('#companySample').value,
//     address: document.querySelector('#addressSample').value,
//     city: document.querySelector('#citySample').value,
//     zip: document.querySelector('#zipSample').value,
//     phone: document.querySelector('#phoneSample').value,
//     email: document.querySelector('#emailSample').value
//   } 

//   dataSample.push(sample)
//   document.forms[0].reset() //to clear the form for the next entries
//   // document.querySelector('form').reset()
  

//   //for display purposes
//   //print a notification to console
//   console.warn('added', {dataSample})
//   alert('Your Sample Request has been sumbitted!')
//   //print notification to the DOM
//   // let pre = document.querySelector('#msg pre')
//   // pre.textContent = '\n' + JSON.stringify(dataSample, '\t', 2)

//   //saving to localStorage
//   localStorage.setItem('SampleRequest', JSON.stringify(dataSample))
//   }

//   document.addEventListener('DOMContentLoaded', ()=>{
//     document.querySelector('#submitBtnSample').addEventListener('click', addSample)

//   })

// //fetch command template
// //   document.querySelector('button').addEventListener('click', getFetch)

// // function getFetch(){
// //   const choice = document.querySelector('input').value
// //   const url = `https://www.dnd5eapi.co/api/spells/${choice}`

// //   fetch(url)
// //       .then(res => res.json()) // parse response as JSON
// //       .then(data => {
// //        console.log(data)
// //       })
// //       .catch(err => {
// //           console.log(`error ${err}`)
// //       });
// // }
  



























//*************************************MODAL FOR POP UP FORM END********************************************






