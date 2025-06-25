import { Game } from "../../interface/game"; 
const API_URL = "http://localhost:3000/games"; 
//URL DA API


//MESMA FUNÇÃO DO GET POREM PAR AO POST
//PARTIAL SIGNIFICA QUE PODE SER ENVIADO DADOS PARCIAIS DO JOGO
export async function postGames(gameData: Partial<Game>): Promise<Game[]> { 
    // E ENTÃO RETORNA A LISTA DE JOGOS ATUALIZADA
    try {
        const response = await fetch(API_URL, { 
            //FAZ A REQUESIÇÃO PARA A API
            method: "POST", // DEFINE PARA POST
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(gameData), // CONVERTOR PRA JSON
        });
        if (!response.ok) { // VERIFICAÇÃO DA AULA DE HJ
            throw new Error("Erro na requesição: ${response.status}"); // LANÇA O ERRO
        }
        return await response.json(); 
    
    } catch (error) {
        throw error; // PROPAGA O ERRO
    }  finally {
        // FINALIZA A REQUISIÇÃO COMO SE FOSSE FECHAR A PORTA DO BANCO DE DADOS
        console.log("Requisição POST finalizada")
    }
}
