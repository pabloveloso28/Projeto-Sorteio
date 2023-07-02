const buttonSortear = document.querySelector(".button-sortear")

function luck() {
    const numberResult = document.querySelector(".number-result")
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)
    
    if (min > max) {
        alert("O valor minimo tem que ser MENOR que o máximo.")
        
    } else{
        const result = Math.floor(Math.random() * (max - min) + min)

        numberResult.innerHTML = result
    } 

}

buttonSortear.addEventListener("click",luck )