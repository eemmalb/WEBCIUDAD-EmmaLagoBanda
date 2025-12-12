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




// slideshow para la sección turismo
$(function () {
    var $slide = $(".slide"), // selecciona todas las slides
        $slideGroup = $(".slide-group"), // selecciona el ul que contiene las slides
        $bullet = $(".bullet"); // selecciona los bullets que marcan en que slide estoy

    var slidesTotal = $slide.length - 1, // calcula como el numero máximo de slides hasta donde puede avanzar antes de volver al inicio (por eso -1, porque si por ejemplo tengo 5 slides (length = 5), el índice máximo es 4 (5 - 1))
        current = 0, // empieza en la primera slide
        isAutoSliding = true; // es un booleano, indica que al iniciar la pagina pase el slideshow de manera automatica

    $bullet.first().addClass("current"); // el primer bullet
    $slide.hide().eq(current).show(); // oculta todas y muestra la primera


    // si current = slidesTotal tiene que volver al inicio
    var updateIndex = function (target) {
        if (isAutoSliding) { // si es automático
            current = current === slidesTotal ? 0 : current + 1; // si current está en la última slide (current = slidesTotal), lo pone a 0 para volver al inicio, si no, suma 1 (current + 1) para ir a la siguiente

        // cuando hago clic isAutoSliding está en false, entonces usa el índice que le pasas al clicar (target) y lo asigna a current, es decir, salta directamente a esa slide en lugar de seguir avanzando en automático
        } else { // si es manual
            current = target;
        }


        $bullet.removeClass("current"); // limpia los bullets activos
        $bullet.eq(current).addClass("current"); // activa el bullet de la slide actual
        transition(current); // transición a esa slide
    };


    // para q cuando se pase de una slide a otra haya una animación
    var transition = function (pos) { // pos es la posición de la slide
        $slide.stop(true, true).fadeOut(400) // detiene animaciones para q no haya dos a la vez ni nada y hace fade out
              .eq(pos).fadeIn(400); // hace fade in de la slide destino
    };

    // esta funcion se ejecuta al hacerle clic a un bullet
    var clickSlide = function () {
        clearInterval(autoSlide); // detiene el autoplay
        isAutoSliding = false; // modo manual 
        var index = $bullet.index($(this)); // obtiene la posición (index) del bullet clicado
        updateIndex(index); // actualiza la slide a la que le has dado
    };

    $bullet.on("click", clickSlide); // es como que engancha la funcion clicksSlide al evento click de cada bullet, entonces al pulsar uno, se detiene el autoplay y se salta a esa slide
    var autoSlide = setInterval(updateIndex, 3000); // temporizador que llama a updateIndex cada 3 segundos para avanzar automáticamente por las slides si no hay clic
});
