function theme(mode){
 document.body.className = mode==="b" ? "plan-b" : "";
 document.querySelectorAll(".switch button").forEach(b=>{
   b.classList.toggle("active",b.dataset.mode===mode)
 })
 localStorage.setItem("adl-theme",mode)
}
theme(localStorage.getItem("adl-theme")||"a")

document.addEventListener("DOMContentLoaded",()=>{
 document.querySelectorAll("a[href]").forEach(a=>{
   a.addEventListener("click",(e)=>{
     const target=a.getAttribute("href");
     if(target && target.endsWith(".html")){
       document.body.classList.add("page-leave");
     }
   })
 })
});
