const fruitListId = document.getElementById("fruitList")



fruitListId.addEventListener("click", (e)=>{
    console.log(e);

    let element = e.target
    
    if(element.matches("li")){
        element.style.backgroundColor = "red";
    }
})

const newLi = document.createElement("li");
newLi.innerText = "berries";
fruitListId.appendChild(newLi);
