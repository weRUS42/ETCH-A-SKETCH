let container = document.getElementById("container");
console.log(container);

for(let i=0; i<256; i++) {
    let div = document.createElement("div");
    div.classList.add("element");
    container.append(div);
}

let elements = document.getElementsByClassName("element");
// console.log(element);

document.addEventListener("mouseover", (e) => {
    if (e.target.classList.value == "element") {
        e.target.classList.add("mouseover");
    } else {
        e.target.classList.remove("mouseover");
    };
});

let btn = document.getElementById("btn");

document.addEventListener("click", (e) => {
    if (btn == e.target) {
        for (let a = 0; a < elements.length; ) {
            elements[a].remove();
        }
        countNewElements();

    } else return;
})

function countNewElements() {
    let newElements = +prompt("how many new elements");
    if (newElements<65 && newElements>0) {
        for(let i=0; i<newElements*newElements; i++) {
            let div = document.createElement("div");
            div.classList.add("element");
            container.append(div);
            div.setAttribute("style",`max-width:calc(100%/${newElements}); max-height:calc(100%/${newElements});`)
        }
        return;
    } else {
        return countNewElements();
    }
}