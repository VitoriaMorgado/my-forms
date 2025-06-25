

// FUNÇÃO PARA DELETAR UM GAME PELO ID DELE
//BOOLEAN SIGNIFICA QUE RETORNA TRUE OU FALSE PRA CONTROLE DE FLUXO

//FUNÇÃO DELETE PARA DELETAR UM JOGO EXISTENTE
export async function deleteGame(id: number): Promise<boolean> {
    try {
        // FAZ UMA REQUISIÇÃO DELETE PARA A API
        const response = await fetch(`http://localhost:3001/games/${id}`, { //URL COM ID DO JOGO
            method: "DELETE", //ALTERADO PRA DELETE
            headers: {
                "Content-Type": "application/json",
            },
        });

        // VERIFICA SE A RESPOSTA FOI BEM-SUCEDIDA MESMA COISA DE ANTES
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        // RETORNA TRUE SE DELETOU COM SUCESSO
        return true;
    } catch (error) {
        // CAPTURA QUALQUER ERRO QUE OCORRA
        console.error("Erro ao deletar game:", error);
        return false;
    } finally {
        // FINALIZA A REQUISIÇÃO, OU SEJA....EXATAMENTE IGUAL O OUTRO

        console.log("Requisição DELETE finalizada");
    }
}