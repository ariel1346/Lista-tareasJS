const perro = document.querySelector("input");
const button = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");


button.addEventListener ("click",(e) => {
    e.preventDefault();
    
    const text = perro.value;
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;
    
    li.appendChild(p);
    li.appendChild(addDeleteBtn())
    ul.appendChild(li);

    perro.value = "";
    empty.stlyle.display = "none";
});

function addDeleteBtn () {
    const deleteBtn = document.createElement("button");
    
    deleteBtn.textContent = "X";
    deleteBtn.className = "btn-delete";

    deleteBtn.addEventListener("click", (e) =>{
        const item = e.target.parentElement;
        ul.removeChild(item);
    })
    return deleteBtn;
}

const pito = document.createElement("A");

console.log(pito) 