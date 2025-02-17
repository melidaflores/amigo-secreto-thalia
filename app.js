// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Variables globales
let amigos = [];
let copiaAmigos = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Limpiar el input
    inputAmigo.value = "";

    // Actualizar la lista visible en la interfaz
    actualizarLista();
}

// Función para actualizar la lista de nombres en la interfaz
function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista

    amigos.forEach((nombre) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    });
}

// Función para realizar el sorteo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres para sortear. Por favor, agrega nombres.");
        return;
    }

    // Si es la primera vez que se hace clic en "Sortear amigo", desordenar la lista
    if (copiaAmigos.length === 0) {
        copiaAmigos = [...amigos];
        desordenarArray(copiaAmigos);
    }

    // Obtener el siguiente nombre sorteado
    const nombreSorteado = copiaAmigos.pop();
    mostrarResultado(nombreSorteado);

    // Si ya no quedan nombres, vaciar la lista
    if (copiaAmigos.length === 0) {
        vaciarLista();
    }
}

// Función para desordenar aleatoriamente un array (Fisher-Yates Shuffle)
function desordenarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Función para mostrar el resultado del sorteo
function mostrarResultado(nombre) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.textContent = `Amigo secreto sorteado: ${nombre}`;
}

// Función para vaciar la lista y reiniciar el juego
function vaciarLista() {
    amigos = [];
    copiaAmigos = [];
    actualizarLista();
    document.getElementById("resultado").textContent = "Todos los nombres han sido sorteados. ¡Vuelve a empezar!";
}



