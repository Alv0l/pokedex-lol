import { getChampionsData } from "./championData.js";


const VERSION = "13.18.1";
const IMAGE_BASE_URL = `https://ddragon.leagueoflegends.com/cdn/${VERSION}/img/champion/`;

// Función para renderizar los campeones en el DOM
const renderChampions = async () => {
    try {
        const champions = await getChampionsData();
        const championList = document.getElementById("champion-list");

        championList.innerHTML = ""; // Limpiar la lista antes de llenarla

        Object.values(champions).forEach(champ => {
            const listItem = document.createElement("li");
            listItem.classList.add("champion-item");

             // Crear imagen
             const champImg = document.createElement("img");
             champImg.src = `${IMAGE_BASE_URL}${champ.id}.png`;
             champImg.alt = champ.name;
             champImg.width = 50; // Ajusta el tamaño según tus necesidades
             champImg.height = 50;
             champImg.classList.add("champion-image");


             // Crear texto
            const champText = document.createElement("span");
            champText.textContent = ` ${champ.name} - ${champ.title}`;
            champText.classList.add("champion-text");

             // Animación de entrada
             listItem.style.opacity = "0";
             listItem.style.transform = "translateY(20px)";
             setTimeout(() => {
                 listItem.style.opacity = "1";
                 listItem.style.transform = "translateY(0)";
             }, 100 * Object.keys(champions).indexOf(champ.id)); // Retraso escalonado
 
             // Agregar efecto "hover"
             listItem.addEventListener("mouseenter", () => {
                 listItem.style.backgroundColor = "#f0f0f0";
                 listItem.style.transform = "scale(1.05)";
                 listItem.style.transition = "all 0.3s ease";
             });
             listItem.addEventListener("mouseleave", () => {
                 listItem.style.backgroundColor = "transparent";
                 listItem.style.transform = "scale(1)";
                 listItem.style.transition = "all 0.3s ease";
             });
 
             // Agregar evento de selección
             listItem.addEventListener("click", () => {
                 alert(`Has seleccionado a ${champ.name}: ${champ.title}`);
             });


             // Agregar imagen y texto al <li>
             listItem.appendChild(champImg);
             listItem.appendChild(champText);
 
             // Agregar el <li> a la lista
             championList.appendChild(listItem);
         
        });
    } catch (error) {
        console.error("Error al renderizar los campeones:", error);
    }
};

// Llamar a la función para renderizar la lista de campeones
renderChampions();


