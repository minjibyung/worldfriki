document.addEventListener("keyup", e=>{
    if (e.target.matches("#search")){
  
      if(e.key === "escape")e.target.value = ""
  
      document.querySelectorAll(".Aside1").forEach(elementos=>{
  
  
      
              elementos.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ?elementos.classList.remove("filtro")
                :elementos.classList.add("filtro")
      
    })
  
    }
  })