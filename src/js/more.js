document.querySelector(".toggle-button").addEventListener("click", function () {
    const content = document.querySelector(".content");
    const button = document.querySelector(".toggle-button");

    // Comprobar si el contenido está oculto
    if (content.classList.contains("hidden")) {
        // Si está oculto, mostrarlo y cambiar el texto del botón a "Cerrar"
        content.classList.remove("hidden");
        button.textContent = "Cerrar";
    } else {
        // Si está visible, ocultarlo y cambiar el texto del botón a "Mostrar Contenido"
        content.classList.add("hidden");
        button.textContent = "Mas...";
    }
});

document.querySelector(".toggle-button2").addEventListener("click", function () {
    const content = document.querySelector(".content2");
    const button = document.querySelector(".toggle-button2");

    // Comprobar si el contenido está oculto
    if (content.classList.contains("hidden2")) {
        // Si está oculto, mostrarlo y cambiar el texto del botón a "Cerrar"
        content.classList.remove("hidden2");
        button.textContent = "Cerrar";
    } else {
        // Si está visible, ocultarlo y cambiar el texto del botón a "Mostrar Contenido"
        content.classList.add("hidden2");
        button.textContent = "Leer Mas...";
    }
});
