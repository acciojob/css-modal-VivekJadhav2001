//your JS code here. If required.
const openModalBtn=document.getElementById("openModal");
const modal=document.querySelector(".modal");
const closeBtn=document.querySelector(".close-modal");

openModalBtn.addEventListener("click",()=>{
	modal.style.display="block";
})
closeBtn.addEventListener("click",()=>{
	modal.style.display="none";
})

window.addEventListener("click",(e)=>{
    
	if (modal.style.display === "block" && modal.contains(e.target)) {
	    modal.style.display = "none";
	}          
})