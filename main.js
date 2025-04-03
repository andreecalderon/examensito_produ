import { cargarMenu } from "./components/header/header.js";
import { cargar_Bloques } from "./components/bloques/bloques.js";

export function cargarDOM() {
    let DOM = document.getElementById("root")
    DOM.appendChild(cargarMenu())
    DOM.appendChild(cargar_Bloques())
    
    

}
cargarDOM()