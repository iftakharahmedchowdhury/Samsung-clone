
const RefrigeratorFun=()=>{
    const mainDiv= document.getElementById('appliance');
    // <img class="applianceImg"  src="image/refrigerator/01reg.web" alt="">
 mainDiv.innerHTML=`
 <div class="Refrigerators RefrigeratorsImg">
 <img class="applianceImg"  src="image/refrigerator/01reg.webp" alt="">
 </div>
 <div class="applianceGradiant">
 <div class="refTittle">

     <h1 class="ApplianceH1">Endless Innovation</h1>
 <div class="refP">
     <a class="lelarnMore" href="">Learn more</a>
     <a class="seeAllRefrigerator" href="">See all refrigerator</a>
 </div>
 </div>
 </div>

 `;
 }
 RefrigeratorFun();
 
 const washerFun=()=>{
     // console.log(2);
     const mainDiv= document.getElementById('appliance');
     mainDiv.innerHTML="";
    //  <img class="applianceImg"  src="image/refrigerator/02washerimg.jp" alt="">
     mainDiv.innerHTML=`
     <div class="Refrigerators washerImg">
     <img class="applianceImg "  src="image/refrigerator/02washerimg.jpg" alt="">
     
 </div>
 <div class="applianceGradiant">
 <div class="refTittle">
         <h1 class="ApplianceH1">Washer machines</h1>
     <div class="refP">
         <a class="lelarnMore" href="">Learn more</a>
         <a class="seeAllRefrigerator" href="">See all refrigerator</a>
     </div>
     </div>
     </div>
     `;
 
 }


 function playVideo()
{
    document.getElementById("vid").play();
}
