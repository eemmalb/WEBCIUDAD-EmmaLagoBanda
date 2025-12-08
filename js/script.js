// aqui definimos la funcion de definir el menu con clic del icono del menu de hamburguesa
// el codigo js no se puede probar hasta que no este terminado
function openMenu() {
    // prueba para ver si está funcionando, muestra el mensaje en la consola, no en la pantalla. cuando hay errores, saldrá tambien en el apartado de consola, en lo de inspeccionar en el navegador
    // los console no son necesarios pero me ayuda a mi como desarrollador 
    console.log("Funcion openMenu");
    // seleccionamos directamente el ul del menú
    document.querySelector("#menu .opciones-menu ul").style.right = "0";
}

// creamos la funcion para cerrar el menu on clic de la x
function closeMenu() {
    console.log("Función closeMenu");
    document.querySelector("#menu .opciones-menu ul").style.right = "-100%";
}


// para que cuando el ususario seleccione alguna de las opciones del menubar, onclik de alguna de esas opciones, va a llamar la funcion de closeMenu, asi no hay que crear una nueva funcion, para eso en el html tambien se les añade la funcion onclic closeMenu
