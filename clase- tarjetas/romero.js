function elegirdivs() {
    let selector=document.getElementById("seleccion");
    let opcion=parseInt(selector.value);

    let divs=document.querySelectorAll('.tarjeta');
    for (i=0; i<divs.length; i++) {
        if(i<opcion) {
        divs [i].classList.remove("hidden");
        } else {
            divs[i].classList.add("hidden");
        }
    }
}