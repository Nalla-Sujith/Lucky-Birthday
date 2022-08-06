var dateref=document.querySelector("#date-label")
var numberref=document.querySelector("#lucky-number")
var checkbutton=document.querySelector("#check-button")
var output_div=document.querySelector("#output-div")
var clickhandler=()=>{
  var inputdate=dateref.value;
  var inputnumber=Number(numberref.value);
  console.log(inputdate,inputnumber)
  let sum=datetonumber(inputdate)
   if(sum%inputnumber === 0)
   {
      output_div.style.color="white";
      output_div.innerText="Your Favourite Number is Lucky Number"
   }
   else
   {
    output_div.style.color="red";
    output_div.innerText="Your Favourite Number is not a Lucky Number !!"
   }
}
var datetonumber=(text)=>{
  var num=text.replaceAll("-","")
  let sum=0;
  for(let i=0;i<num.length;i++)
  {
    sum+=Number(num.charAt(i));
  }
   return sum;
}
checkbutton.addEventListener("click",clickhandler)