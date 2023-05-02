document.querySelector("button").addEventListener("click", addNote);

let body = document.querySelector("body");

let checkbox = document.getElementById("important");

//luodaan functio addNote
function addNote(){
    let h3 = document.createElement("h3");

    let p1 = document.createElement("viesti1");
    p1.textContent = Date() + "  " + viesti1.value;

    let p2 = document.createElement("viesti2");
    p2.textContent = "   " + viesti2.value;

    //onko checkboxissa täppä vai ei
    if(checkbox.checked){
        h3.classList.add("important");
        p1.classList.add("important");
        p2.classList.add("important");
    }
    //kaikki elementit bodyn sisälle
    body.append(h3,p1,p2, document.createElement("hr"));
}
