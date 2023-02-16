document.getElementById('btn-culculate').addEventListener('click',function(){
const totalIncome=common('income-total');
// console.log(totalIncome);


// function
const food=document.getElementById('Food-value').value;
    const FoodString=parseFloat(food);
    const Rent=document.getElementById('Rent-value').value;
    const RentString=parseFloat(Rent);
    const clothes=document.getElementById('clothes-value').value;
    const clothesString=parseFloat(clothes);
    const ExtonsonTotal=FoodString+RentString+clothesString;
    
    const extonsonelement=document.getElementById('total-extension');
    const extonsionvalue=extonsonelement.innerText;
    const extensionvalue=parseFloat(extonsionvalue);
    extonsonelement.innerText=ExtonsonTotal;

  const balanceV=totalIncome-ExtonsonTotal;
//   if(totalIncome > ExtonsonTotal ){
//         return alert('culcolate is not found');
//   }

const balance=document.getElementById('balans');
const balanceTotal=balance.innerText;
balance.innerText=balanceV;


})
document.getElementById('btn-save').addEventListener('click',function(){
    const saving=common('saving-input');
    const savingTotal=common('income-total');
    const totalSaving= (savingTotal *saving) /100;
    

    const savingText=document.getElementById('saving');
    const savingTotalValue=savingText.innerText;
    const savingTextString=parseFloat(savingTotalValue);
    savingText.innerText=totalSaving;

    const balance=document.getElementById('ream');
const balanceTotal=balance.innerText;

const balance2=document.getElementById('balans').innerText;
// const balanceTotal2=balance.innerText;
// const balanxe=parseFloat(balanceTotal2);

const reaiming= balance2-totalSaving;
balance.innerText=reaiming;
})


function common(id){
  const valueInput=  document.getElementById(id).value;
  const Value =parseFloat(valueInput);
  return Value;
}
// function Extonson(){
//     const food=document.getElementById('Food-value').value;
//     const FoodString=parseFloat(food);
//     const Rent=document.getElementById('Rent-value').value;
//     const RentString=parseFloat(Rent);
//     const clothes=document.getElementById('clothes-value').value;
//     const clothesString=parseFloat(clothes);
//     const ExtonsonTotal=FoodString+RentString+clothesString;
//     // return ExtonsonTotal;
//     console.log(ExtonsonTotal);
// }
// Extonson();