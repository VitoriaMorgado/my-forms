import { Game } from "../../interface/game";

const API_URL = "http://localhost:3000/games";

// ATUALIZAR O PUT PARA UM JOGO JA EXISTENTE


// O PARTIAL ENVIA OS DADOS QUE VÃO SER ATUALIZADOS
// A FUNÇÃO PUT É USADA PARA ATUALIZAR UM JOGO EXISTENTE
export async function putGame(id: number, gameData: Partial<Game>): Promise<Game> {
    try {
        const response = await fetch(`${API_URL}/${id}`, { //ELE PUXA O ID PARA ALTERAR O JOGO ESPECÍFICO
            //FAZ A REQUISIÇÃO PARA A API
            method: "PUT", //ALTERAÇÃO DO METODO PARA PUT
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(gameData),
        });
        if (!response.ok) { //AS MESMAS COISA DE TUDO
            throw new Error(`Erro na requisição: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        throw error;
    } finally {
        console.log("Requisição PUT finalizada");
    }
}