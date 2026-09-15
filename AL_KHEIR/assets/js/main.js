
document.addEventListener("DOMContentLoaded",function(){
 const top=document.getElementById("backTop");
 window.addEventListener("scroll",()=>{if(top)top.classList.toggle("show",scrollY>450)});
 if(top)top.addEventListener("click",e=>{e.preventDefault();scrollTo({top:0,behavior:"smooth"})});
 document.querySelectorAll("[data-year]").forEach(e=>e.textContent=new Date().getFullYear());
 const page=location.pathname.split("/").pop()||"index.html";
 document.querySelectorAll(".navbar .nav-link,.dropdown-menu a").forEach(a=>{
   if(a.getAttribute("href")===page){a.classList.add("active");a.closest(".dropdown")?.querySelector(".nav-link")?.classList.add("active")}
 });
 ["quoteForm","contactForm"].forEach(id=>{
   const f=document.getElementById(id);
   if(f)f.addEventListener("submit",e=>{e.preventDefault();f.querySelector(".alert")?.classList.remove("d-none");f.reset()});
 });
});
