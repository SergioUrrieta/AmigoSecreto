# 🎉 Lista de Amigos con Sorteo

Este proyecto es una aplicación sencilla en **HTML + JavaScript** que permite:

- Agregar nombres de amigos a una lista.
- Mostrar la lista en pantalla sin duplicados.
- Sortear un amigo al azar usando `Math.random()` y `Math.floor()`.

---

## 📌 Características

1. **Agregar amigos**  
   - El usuario escribe un nombre en un campo de texto y lo agrega a la lista.  
   - Se valida que el campo no esté vacío (si lo está, muestra un `alert`).  
   - El nombre se guarda en un array y se muestra en pantalla dentro de un `<ul>`.  

2. **Mostrar lista**  
   - La lista se limpia cada vez con `innerHTML = ""` para evitar duplicados.  
   - Se recorre el array de amigos y se crean elementos `<li>` dinámicamente.  

3. **Sortear un amigo**  
   - Antes de sortear, se valida que el array no esté vacío.  
   - Se genera un índice aleatorio con:  
     ```js
     const indiceAleatorio = Math.floor(Math.random() * amigos.length);
     ```  
   - Se obtiene y muestra el amigo sorteado en un `<p id="resultado">`.

---

## 🚀 Cómo usarlo

1. Clona este repositorio o copia el código en un archivo `index.html`.  
2. Abre el archivo en tu navegador.  
3. Ingresa nombres en el campo de texto y haz clic en **Agregar**.  
4. Cuando tengas amigos en la lista, presiona **Sortear** para elegir uno al azar.  

---



