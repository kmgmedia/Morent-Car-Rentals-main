const form=document.getElementByld('payment-form');
const paymentStatus=mdocument.getElementByld('payment-status');
form.addEventListener('submit',(e)=>{
e.preventDefault();
const cardType=document.getElementByld('card-type').value;
const cardNumber=document.getElementByld('card-number').value;
const expirationDate=document.getElementByld('expiration-date').value;
const nameOnCard=document.getElementByld('name-on-card').value;
//Validate form data
if(!cardType//!cardNumber//!expirationDate/!cvv//!nameOnCard){
 ) paymentStatus.textContent="Please fill in all fields.";
 return;
}
//Process payment (replace with actual payment gateway API)
,paymentStatus.textContent='Payment successful!')
form.reset();
},2000;
});