     
  

//   function multiplyThree(q,w,e){
//     return q * w * e
//   }

// console.log(multiplyThree(3*2*2))

 
// h1Holder.addEventListener('click', sum);
//     function sum(){
//         console.log(num + Number(inputedVal))
//     };


// inputHolder.addEventListener('click', log)

//     function log(){
//         console.log()
//     }


// var formInputs= document.querySelector('.input')

// console.log(formInputs)

// modal for pop-up form


  function openForm() {
        document.getElementById("popupForm").style.display = "block";
      }
      function closeForm() {
        document.getElementById("popupForm").style.display = "none";
      }


      //MODAL FOR POP UP FORM END


const nameInput = document.querySelectorAll('#popupForm input').value;
const submitInfo= document.querySelectorAll('btn submit-info');


;

submitInfo.addEventListener('click', function(){
  console.log(nameInput)
})