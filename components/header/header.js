export function cargarMenu(){
    let menu = document.createElement("div")
    menu.className = "contenedor_menu"
    menu.innerText= "HOLAMUNDO"
    

    let total = document.createElement("div")
    total.className = "contenedor-de-total"
    total.innerText = "TOTAL x = "
    menu.appendChild(total)


    return menu;
}

