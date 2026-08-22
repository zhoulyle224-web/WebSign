
const root=document.body;
const saved=localStorage.getItem("adl-theme")||"a";
setTheme(saved);
function setTheme(t){
 root.className=t==="b"?"theme-b":"theme-a";
 document.querySelectorAll("[data-theme]").forEach(x=>{
   x.classList.toggle("active",x.dataset.theme===t);
 });
 localStorage.setItem("adl-theme",t);
}
