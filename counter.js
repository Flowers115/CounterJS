let contatore = 0;

function plus() {
    contatore++;
    document.getElementById("number").innerHTML = contatore;
}

function minus() {
    if (contatore !=0) {
        contatore--;
    }
    document.getElementById("number").innerHTML = contatore;
}

