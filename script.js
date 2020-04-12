

const advice=document.querySelector(".advice");
const inputLang=document.getElementById("inputState");
const outputLang=document.getElementById("outputState");
const msg=document.getElementById("text");
const btn=document.getElementById("submit");
const result=document.getElementById("result");

const key="trnsl.1.1.20200412T124218Z.f3e7faff4d8afff7.60cac1decdf534ca0893be787e976d77278e0208";
const url = "https://translate.yandex.net/api/v1.5/tr.json/translate?";

const Translate =() =>
{
  if(msg.value === "")
  {
    result.innerHTML="The message should not be empty";
  }
  else
  {
    btn.innerHTML="Translating...";
    axios.get(url +"key=" +key +"&text=" +msg.value +"&lang=" +inputLang.value +"-" +outputLang.value)
 .then(response => {
   console.log(response);
   if(response.data.code==200)
   {
    result.innerHTML=response.data.text[0];
   }
   else
   {
    result.innerHTML="OOPS some error occured";
   }
   btn.innerHTML="Translate";

 })
 .catch(error => console.error(error));
  }
  
}

btn.addEventListener("click",Translate);




