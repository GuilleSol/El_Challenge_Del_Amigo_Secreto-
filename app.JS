let amigos = [];

/**
 * Agrega un nuevo amigo al array de amigos.
 * Valida que el nombre no esté vacío antes de agregarlo y actualiza la lista visual.
 */
function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value;
  if (nombreAmigo.trim() === "") {
    alert("Por favor, inserte un nombre");
  } else {
    amigos.push(nombreAmigo);
    document.querySelector("#amigo").value = "";
    mostrarListaAmigo();
    console.log(amigos);
  }
}

/**
 * Actualiza la visualización de la lista de amigos en el DOM, creando elementos <li> para cada amigo.
 */
function mostrarListaAmigo() {
  let listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = "";

  amigos.forEach(function(amigo) {
    let li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

/**
 * Sortea y muestra un amigo de la lista de amigos de manera aleatoria.
 * Verifica que la lista no esté vacía antes de realizar el sorteo.
 */
function sortearAmigo() {
  let cantidadAmigos = amigos.length;
  if (cantidadAmigos === 0) {
    alert("La lista de amigos está vacía. Agrega al menos un amigo antes de sortear.");
  } else {
    let indiceAleatorio = Math.floor(Math.random() * cantidadAmigos);
    let amigoSorteado = amigos[indiceAleatorio];
    alert(`El amigo sorteado es: ${amigoSorteado}`);
  }
}