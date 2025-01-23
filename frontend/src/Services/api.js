import axios from "axios";
import 'dotenv/config'


const api = axios.create({
    baseURL:"http://localhost:3001",
});

async function testApiConnection() {
    try {
        const response = await api.get("/");  // Aqui você pode colocar o endpoint que deseja testar
        if (response.status === 200) {
            console.log("API conectada com sucesso:", response.data);
        } else {
            console.error("API retornou um erro:", response.status);
        }
    } catch (error) {
        console.error("Erro ao tentar conectar com a API:", error.message);
    }
}

testApiConnection();

export default api;