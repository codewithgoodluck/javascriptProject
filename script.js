
var panels=document.querySelectorAll(".panel")

panels.forEach((panel)=>{
    panel.addEventListener("click",()=>{
        removeClasslist()
        panel.classList.add("active")
    })
})


function removeClasslist(){
    panels.forEach((panel)=>{
        panel.classList.remove("active")
    })
}



