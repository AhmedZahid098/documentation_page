document.querySelectorAll(".nav-link").forEach((nav_link) => {
    nav_link.addEventListener("click", (event) => {
        document.querySelectorAll(".main-section > header").forEach((item_des) => {
            if (nav_link.innerText == item_des.innerText) {
                 if (item_des.parentElement.classList.contains("w-0")) {
                    
                    item_des.parentElement.classList.remove("w-0", "h-0")
                    item_des.parentElement.classList.add("w-auto", "h-auto",)
                 }
                 else return
                
            }
            else {
                item_des.parentElement.classList.remove("w-auto", "h-auto",)
                item_des.parentElement.classList.add("w-0", "h-0")
            }
        })
    })
})