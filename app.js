let amigos = [];




function agregarAmigo() {
    // 1. Capturar valor del input
    const input = document.getElementById("nombreAmigo");
    const nombre = input.value.trim(); // quitamos espacios al inicio/fin

    // 2. Validar entrada
    if (nombre === "") {
      alert("Por favor, inserte un nombre.");
      return;
    }

    // 3. Actualizar array
    amigos.push(nombre);

    /*4. Mostrarlo en la lista visual
    const lista = document.getElementById("listaAmigos");
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;
    lista.appendChild(nuevoElemento);*/

    // 5. Limpiar el campo
    input.value = "";

    mostrarAmigos();
  }



  function mostrarAmigos() {
    // 1. Obtener el elemento de la lista
    const lista = document.getElementById("listaAmigos");

    // 2. Limpiar la lista existente
    lista.innerHTML = "";

    // 3. Recorrer el array amigos
    for (let i = 0; i < amigos.length; i++) {
      // 4. Crear un elemento <li>
      const li = document.createElement("li");
      li.textContent = amigos[i];

      // Agregarlo a la lista
      lista.appendChild(li);
    }
  }

  function sortearAmigo() {
    // 1. Validar que haya amigos
    if (amigos.length === 0) {
      alert("No hay amigos en la lista para sortear.");
      return;
    }

    // 2. Generar índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // 3. Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // 4. Mostrar el resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `🎉 El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
  }