let conselho = document.getElementById("conselho")

let conselho_gerado = document.getElementById("conselho-gerado")

conselho.addEventListener("click", function(){
    fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
        conselho_gerado.innerText = data.slip.advice
    })
})
  

