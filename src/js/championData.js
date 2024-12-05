// URL con los datos de campeones
const CHAMPIONS_URL = "https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json";

// Función para obtener los datos de los campeones
export const getChampionsData = async () => {
    try {
        const response = await fetch(CHAMPIONS_URL);
        if (!response.ok) throw new Error(`Error al obtener campeones: ${response.statusText}`);
        const data = await response.json();
        return data.data; // Devuelve los campeones como un objeto
    } catch (error) {
        console.error("Error al obtener los datos de campeones:", error);
        throw error;
    }
};