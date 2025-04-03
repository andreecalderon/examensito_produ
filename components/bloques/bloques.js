export function cargar_Bloques() {
    let contenedor = document.createElement("div")
    contenedor.className= "bloques"
    contenedor.innerText = "cuadros"

    contenedor.appendChild(cuadro1())

    return contenedor
    
}

function cuadro1(){
    let cuadro1 = document.createElement("div")
    cuadro1.className = "cuadrito"


    let btn = document.createElement("button")
    btn.className = "check"
    btn.innerText = "chi"
    cuadro1.appendChild(btn)
}