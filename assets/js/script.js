const dayOnHeader=document.querySelector("#day-of-the-month");
dayOnHeader.innerHTML=toArabicNumeral(14);
const date=document.querySelector("#date");
date.innerHTML+=toArabicNumeral(1401);


const days=document.querySelector(".days-name");
const item=document.querySelectorAll("li");
const daysTitle=["شنبه","یکشنبه","دوشنبه","سه شنبه","چهارشنبه","پنج شنبه","جمعه"]
for(let i=0;i<=37;i++){
  const li=document.createElement("li");
  if(i<7){
    li.innerHTML=daysTitle[i];
  }
  else
  {
      li.innerHTML=toArabicNumeral(i-6);
  }

  days.appendChild(li);

}
item.forEach(element => {
    element.classList.add("selected");
    days.addEventListener("click",selected);
});


function toArabicNumeral(en) {
  return ("" + en).replace(/[0-9]/g, function(t) {
      return "٠١٢٣٤٥٦٧٨٩".substr(+t, 1);
  });
}
