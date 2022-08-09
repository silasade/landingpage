let Manu= document.querySelector("#menu")
let gist= document.querySelector("#list")
let cancel= document.querySelector("#close")
Manu.addEventListener('click', (event)=>{
    gist.style.display="flex"
    
})
cancel.addEventListener('click', (event)=>{
    gist.style.display="none"
})