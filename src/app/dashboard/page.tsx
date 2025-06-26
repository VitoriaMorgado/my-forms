"use client";

import { Game } from ".././interface/game";
import { getGames } from "../services/games/get";
import { useEffect, useState } from "react";
import Image from "next/image";

//PAGINA PARA GERENCIAR OS USUÁRIOS (CRUD)
export default function Dashboard() {
  //ESTADO PARA ARMAZENAR A LISTA DE JOGOS
  const [games, setGames] = useState<Game[]>([]);
  //ESTADO PARA EDITAR UM JOGO
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<Partial<Game>>({});

  //CARREGA A LISTA DE JOGOS AO CARREGAR A PÁGINA
  useEffect(() => {
    async function fetchGames() {
      const data = await getGames();
      setGames(data);
    }
    fetchGames();
  }, []);

  //FUNÇÃO PARA DELETAR UM JOGO
  const handleDelete = (id: number) => {
    // Aqui você pode chamar sua função de DELETE, por exemplo:
    // await deleteGame(id);
    setGames((prev) => prev.filter((game) => game.id !== id));
  };

  //FUNÇÃO PARA INICIAR EDIÇÃO
  const handleEdit = (game: Game) => {
    setEditingId(game.id);
    setEditForm(game);
  };

  //FUNÇÃO PARA SALVAR ALTERAÇÕES
  const handleSave = (id: number) => {
    setGames((prev) =>
      prev.map((game) => (game.id === id ? { ...game, ...editForm, id } : game))
    );
    setEditingId(null);
    setEditForm({});
  };

  //FUNÇÃO PARA CANCELAR EDIÇÃO
  const handleCancel = () => {
    setEditingId(null);
    setEditForm({});
  };

  return (
    //DIV PRINCIPAL COM ESTILIZAÇÃO
    <div className=" mx-auto p-4 bg-gray-900 w-full">
      <div className="w-[45%] ml-[25%]">
        {/* Apresentação sobre o que é uma API */}
        <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-gray-100 rounded-2xl p-8 mb-10 shadow-xl max-w-3xl mx-auto border border-gray-700">
          <h2 className="text-2xl font-extrabold mb-4 text-blue-400 flex items-center gap-2">
            <svg
              className="w-7 h-7 text-blue-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
            O que é uma API?
          </h2>
          <p className="mb-4 text-lg leading-relaxed">
            <span className="font-semibold text-blue-300">API</span> significa{" "}
            <span className="font-semibold">
              Interface de Programação de Aplicações
            </span>{" "}
            (<span className="italic">Application Programming Interface</span>).
            No desenvolvimento de software, uma API é uma interface criada para
            que um sistema possa usar funcionalidades de outro sistema,
            compartilhando ferramentas, padrões e protocolos.
          </p>
          <ul className="list-disc pl-8 mb-4 space-y-1 text-base">
            <li>
              <span className="font-semibold text-blue-200">
                APIs não são exclusivas da web
              </span>
              : Elas podem ser usadas em sistemas operacionais, como as APIs do
              Windows, que permitem criar softwares integrados ao sistema,
              controlando arquivos, permissões, redes e dispositivos.
            </li>
            <li>
              <span className="font-semibold text-blue-200">API REST</span>: É
              um tipo de API web que utiliza o protocolo HTTP (versão 1.1),
              aceitando métodos como{" "}
              <span className="text-blue-300 font-semibold">GET</span>,{" "}
              <span className="text-blue-300 font-semibold">POST</span>,{" "}
              <span className="text-blue-300 font-semibold">PUT</span> e{" "}
              <span className="text-blue-300 font-semibold">DELETE</span>,
              tornando as APIs mais padronizadas e completas.
            </li>
            <li>
              <span className="font-semibold text-blue-200">Endpoint</span>: É a
              porta de entrada da API, geralmente uma URL, que define onde o
              serviço está hospedado, como pode ser acessado e o que pode ser
              visto.
            </li>
            <li>
              <span className="font-semibold text-blue-200">Segurança</span>:
              APIs devem ser protegidas. O uso de{" "}
              <span className="text-blue-300 font-semibold">SSL</span> (HTTPS)
              garante comunicação criptografada. A autenticação normalmente é
              feita por{" "}
              <span className="text-blue-300 font-semibold">tokens</span>, que
              funcionam como chaves de acesso.
            </li>
            <li>
              <span className="font-semibold text-blue-200">
                Formato dos dados
              </span>
              : APIs web geralmente retornam dados em{" "}
              <span className="text-blue-300 font-semibold">JSON</span>{" "}
              (JavaScript Object Notation), por ser leve, fácil de transportar e
              suportado por várias linguagens.
            </li>
          </ul>
          <div className="mb-4">
            <h3 className="text-lg font-bold text-blue-300 mb-2">
              Exemplos práticos de uso de APIs:
            </h3>
            <ul className="list-disc pl-8 space-y-1 text-base">
              <li>
                <span className="font-semibold">Mercado Livre</span>: Permite
                que grandes varejistas cadastrem produtos, gerenciem estoque,
                vendas e pagamentos via API.
              </li>
              <li>
                <span className="font-semibold">Serviços específicos</span>: Por
                exemplo, APIs que informam o BPM (batidas por minuto) de uma
                música.
              </li>
              <li>
                <span className="font-semibold">APIs de grandes empresas</span>:
                Google, YouTube, PayPal e outros oferecem APIs para integração
                de funcionalidades.
              </li>
              <li>
                <span className="font-semibold">
                  APIs de sistemas operacionais
                </span>
                : Desenvolvedores usam APIs do Windows para acessar e controlar
                funcionalidades do sistema.
              </li>
            </ul>
          </div>
          <p className="italic text-gray-300">
            <span className="text-blue-400 font-semibold">Resumo:</span> APIs
            são fundamentais para integrar sistemas, compartilhar dados e criar
            soluções inovadoras de forma segura, padronizada e eficiente.
          </p>
        </section>

        <div className="flex flex-col items-center my-10">
          <h2 className="text-3xl font-extrabold text-blue-400 mb-2 text-center drop-shadow-lg">
            Exemplos de Operações com API (CRUD)
          </h2>
          <p className="text-lg text-gray-300 mb-1 text-center">
            Com base no{" "}
            <span className="font-semibold text-blue-300">
              Projeto Integrador
            </span>
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mt-2 mb-2"></div>
        </div>

        <div className="flex justify-center my-4">
          <h1 className="text-2xl font-bold text-white">Gerenciar Jogos</h1>
        </div>

        <div className="flex  gap-3 my-8">
          <div className="w-2 h-8 bg-blue-500 rounded"></div>
          <h1 className="text-2xl font-bold text-blue-400 drop-shadow-lg tracking-wide">
            GET{" "}
            <span className="text-gray-300 font-normal text-lg ml-2">
              - Listar Jogos
            </span>
          </h1>
          <svg
            className="w-7 h-7 text-blue-400 ml-2"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Explicação sobre o método GET */}
        <div className="bg-blue-950 border-l-4 border-blue-400 p-4 mb-6 max-w-3xl mx-auto rounded-lg shadow">
          <h3 className="text-lg font-bold text-blue-300 mb-2 flex items-center gap-2">
            <svg
              className="w-5 h-5 text-blue-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            O que faz o método GET?
          </h3>
          <p className="text-gray-200">
            O método <span className="font-semibold text-blue-300">GET</span> é
            utilizado para <span className="font-semibold">buscar dados</span>{" "}
            de uma API. Ele permite que o frontend solicite informações ao
            backend, como a lista de jogos cadastrados, sem alterar ou excluir
            nada no servidor.
            <br />
            <span className="text-blue-300 font-semibold">Exemplo:</span> Ao
            acessar esta página, é feita uma requisição GET para obter todos os
            jogos e exibi-los na tabela abaixo.
          </p>
        </div>

        {/* TABELA PARA LISTA DE JOGOS */}
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full bg-gray-800 text-gray-200">
            <thead>
              {/* INFORMAÇOES */}
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-gray-700">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-gray-700">
                  Nome
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-gray-700">
                  Desenvolvedor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-gray-700">
                  Gênero
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-gray-700">
                  Preço
                </th>
              </tr>
            </thead>
            <tbody>
              {games.map((game) => (
                // LINHA ONDE TEM AS INFORMAÇOES QUE PUXA DA API , IGUAL NO FORMULÁRIO DO GLAUCO
                <tr key={game.id} className="hover:bg-gray-700 transition">
                  <td className="px-6 py-4">{game.id}</td>
                  <td className="px-6 py-4">{game.nome}</td>
                  <td className="px-6 py-4">{game.desenvolvedor}</td>
                  <td className="px-6 py-4">{game.genero}</td>
                  <td className="px-6 py-4">{game.preco}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Explicação codigo */}

        <div className="w-full max-w-3xl bg-gray-800 rounded-xl shadow-lg p-6 border border-blue-700 mx-auto my-8">
          <h2 className="text-xl font-semibold text-blue-300 mb-3 flex items-center gap-2">
            <svg
              className="w-6 h-6 text-blue-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            Estrutura de Pastas do Projeto
          </h2>
          <div className="flex justify-center">
            <Image
              src="/pastas.png"
              alt="Estrutura de pastas do projeto"
              width={400}
              height={400}
              className="rounded-lg border border-blue-900 shadow"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 my-12">
          <div className="w-full max-w-3xl bg-gray-800 rounded-xl shadow-lg p-6 border border-blue-700">
            <h2 className="text-xl font-semibold text-blue-300 mb-3 flex items-center gap-2">
              <svg
                className="w-6 h-6 text-blue-400"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              Arquivo <span className="font-mono text-blue-200">get.ts</span>{" "}
              (pasta <span className="font-mono">services/games</span>)
            </h2>
            <div className="flex justify-center">
              <Image
                src="/code-get(4).png"
                alt="Código do arquivo get.ts"
                width={800}
                height={400}
                className="rounded-lg border border-blue-900 shadow"
              />
            </div>
          </div>

          <div className="w-full max-w-3xl bg-gray-800 rounded-xl shadow-lg p-6 border border-blue-700">
            <h2 className="text-xl font-semibold text-blue-300 mb-3 flex items-center gap-2">
              <svg
                className="w-6 h-6 text-blue-400"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Importação e uso da função{" "}
              <span className="font-mono text-blue-200">getGames</span> (
              <span className="font-mono">page.tsx</span>)
            </h2>
            <div className="flex justify-center">
              <Image
                src="/code-get(3).png"
                alt="Importação e uso da função getGames"
                width={800}
                height={400}
                className="rounded-lg border border-blue-900 shadow"
              />
            </div>
          </div>

          <div className="w-full max-w-3xl bg-gray-800 rounded-xl shadow-lg p-6 border border-blue-700">
            <h2 className="text-xl font-semibold text-blue-300 mb-3 flex items-center gap-2">
              <svg
                className="w-6 h-6 text-blue-400"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              Exibição dos dados na página
            </h2>
            <div className="flex justify-center">
              <Image
                src="/code-get(5).png"
                alt="Exibição dos dados na página"
                width={800}
                height={400}
                className="rounded-lg border border-blue-900 shadow"
              />
            </div>
          </div>
          <div className="w-full max-w-3xl bg-gray-800 rounded-xl shadow-lg p-6 border border-blue-700">
            <h2 className="text-xl font-semibold text-blue-300 mb-3 flex items-center gap-2">
              <svg
                className="w-6 h-6 text-blue-400"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              Itens colocados no banco fake (
              <span className="font-mono text-blue-200">db.json</span>)
            </h2>
            <div className="flex justify-center">
              <Image
                src="/code-dbjson.png"
                alt="Exemplo de dados no banco fake"
                width={800}
                height={400}
                className="rounded-lg border border-blue-900 shadow"
              />
            </div>
          </div>
        </div>

        {/* SEÇÃO PARA ADICIONAR JOGOS */}

        <div className="flex items-center gap-3 my-8">
          <div className="w-2 h-8 bg-green-500 rounded"></div>
          <h1 className="text-2xl font-bold text-green-400 drop-shadow-lg tracking-wide">
            POST{" "}
            <span className="text-gray-300 font-normal text-lg ml-2">
              - Adicionar Jogo
            </span>
          </h1>
          <svg
            className="w-7 h-7 text-green-400 ml-2"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>

        {/* Explicação sobre o método POST */}
        <div className="bg-green-950 border-l-4 border-green-400 p-4 mb-6 max-w-3xl mx-auto rounded-lg shadow">
          <h3 className="text-lg font-bold text-green-300 mb-2 flex items-center gap-2">
            <svg
              className="w-5 h-5 text-green-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
            O que faz o método POST?
          </h3>
          <p className="text-gray-200">
            O método <span className="font-semibold text-green-300">POST</span>{" "}
            é utilizado para{" "}
            <span className="font-semibold">adicionar novos dados</span> a uma
            API. Ele permite que o frontend envie informações para o backend,
            como os dados de um novo jogo, que será salvo no servidor.
            <br />
            <span className="text-green-300 font-semibold">Exemplo:</span> Ao
            preencher o formulário abaixo e clicar em ADICIONAR JOGO, é feita
            uma requisição POST para cadastrar o novo jogo na lista.
          </p>
        </div>

        {/* FORMULÁRIO PARA ADICIONAR NOVO JOGO */}
        <form
          className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col gap-4 max-w-md mx-auto mt-6"
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const formData = new FormData(form);
            const newGame = {
              nome: formData.get("nome") as string,
              desenvolvedor: formData.get("desenvolvedor") as string,
              genero: formData.get("genero") as string,
              preco: Number(formData.get("preco")),
            };
            // CHAMAR A FUNÇÃO DO POST
            // await postGame(newGame);
            // DEPOIS QUE ELE INSERE O JOGO, ELE VAI ATUALIZAR A LISTA
            setGames((prev) => [
              ...prev,
              {
                ...newGame,
                id: prev.length ? prev[prev.length - 1].id + 1 : 1,
              },
            ]);
            form.reset();
          }}
        >
          <div>
            <label className="block text-gray-200 mb-1" htmlFor="nome">
              Nome
            </label>
            <input
              className="w-full px-3 py-2 rounded bg-gray-700 text-white"
              type="text"
              name="nome"
              id="nome"
              required
            />
          </div>
          <div>
            <label className="block text-gray-200 mb-1" htmlFor="desenvolvedor">
              Desenvolvedor
            </label>
            <input
              className="w-full px-3 py-2 rounded bg-gray-700 text-white"
              type="text"
              name="desenvolvedor"
              id="desenvolvedor"
              required
            />
          </div>
          <div>
            <label className="block text-gray-200 mb-1" htmlFor="genero">
              Gênero
            </label>
            <input
              className="w-full px-3 py-2 rounded bg-gray-700 text-white"
              type="text"
              name="genero"
              id="genero"
              required
            />
          </div>
          <div>
            <label className="block text-gray-200 mb-1" htmlFor="preco">
              Preço
            </label>
            <input
              className="w-full px-3 py-2 rounded bg-gray-700 text-white"
              type="number"
              name="preco"
              id="preco"
              step="0.01"
              min="0"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Adicionar Jogo
          </button>
        </form>

        {/* Explicação do codigo do POST */}
        <div className="w-full max-w-3xl bg-gray-800 rounded-xl shadow-lg p-6 border border-green-700 mx-auto my-8">
          <h2 className="text-xl font-semibold text-green-300 mb-3 flex items-center gap-2">
            <svg
              className="w-6 h-6 text-green-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
            Código do arquivo{" "}
            <span className="font-mono text-green-200">post.ts</span> (pasta{" "}
            <span className="font-mono">services/games</span>)
          </h2>
          <div className="flex justify-center">
            <Image
              src="/code-post.png"
              alt="Código do arquivo post.ts"
              width={800}
              height={400}
              className="rounded-lg border border-green-900 shadow"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 my-8">
          <div className="w-2 h-8 bg-yellow-400 rounded"></div>
          <h1 className="text-2xl font-bold text-yellow-300 drop-shadow-lg tracking-wide">
            PUT{" "}
            <span className="text-gray-300 font-normal text-lg ml-2">
              - Editar Jogo
            </span>
          </h1>
          <svg
            className="w-7 h-7 text-yellow-300 ml-2"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 3.5a2.121 2.121 0 113 3L7 19.5 3 21l1.5-4L16.5 3.5z"
            />
          </svg>
        </div>

        {/* Explicação sobre o método PUT */}
        <div className="bg-yellow-900 border-l-4 border-yellow-400 p-4 mb-6 max-w-3xl mx-auto rounded-lg shadow">
          <h3 className="text-lg font-bold text-yellow-300 mb-2 flex items-center gap-2">
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 3.5a2.121 2.121 0 113 3L7 19.5 3 21l1.5-4L16.5 3.5z"
              />
            </svg>
            O que faz o método PUT?
          </h3>
          <p className="text-gray-200">
            O método <span className="font-semibold text-yellow-300">PUT</span>{" "}
            é utilizado para{" "}
            <span className="font-semibold">atualizar dados existentes</span> em
            uma API. Ele permite que o frontend envie informações modificadas
            para o backend, substituindo os dados antigos por novos.
            <br />
            <span className="text-yellow-300 font-semibold">Exemplo:</span> Ao
            clicar em ALTERAR em um jogo, você pode editar seus dados. Ao
            salvar, é feita uma requisição PUT para atualizar as informações
            desse jogo no servidor.
          </p>
        </div>

        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full bg-gray-800 text-gray-200">
            <thead>
              {/* INFORMAÇOES */}
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-gray-700">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-gray-700">
                  Nome
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-gray-700">
                  Desenvolvedor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-gray-700">
                  Gênero
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-gray-700">
                  Preço
                </th>
                <th className="px-6 py-3 bg-gray-700">Ações</th>
              </tr>
            </thead>
            <tbody>
              {games.map((game) =>
                editingId === game.id ? (
                  // Linha de edição
                  <tr key={game.id} className="bg-gray-700">
                    <td className="px-6 py-4">{game.id}</td>
                    <td className="px-6 py-4">
                      <input
                        className="w-full px-2 py-1 rounded bg-gray-600 text-white"
                        type="text"
                        value={editForm.nome || ""}
                        onChange={(e) =>
                          setEditForm((f) => ({ ...f, nome: e.target.value }))
                        }
                      />
                    </td>
                    <td className="px-6 py-4">
                      <input
                        className="w-full px-2 py-1 rounded bg-gray-600 text-white"
                        type="text"
                        value={editForm.desenvolvedor || ""}
                        onChange={(e) =>
                          setEditForm((f) => ({
                            ...f,
                            desenvolvedor: e.target.value,
                          }))
                        }
                      />
                    </td>
                    <td className="px-6 py-4">
                      <input
                        className="w-full px-2 py-1 rounded bg-gray-600 text-white"
                        type="text"
                        value={editForm.genero || ""}
                        onChange={(e) =>
                          setEditForm((f) => ({
                            ...f,
                            genero: e.target.value,
                          }))
                        }
                      />
                    </td>
                    <td className="px-6 py-4">
                      <input
                        className="w-full px-2 py-1 rounded bg-gray-600 text-white"
                        type="number"
                        value={editForm.preco || ""}
                        onChange={(e) =>
                          setEditForm((f) => ({
                            ...f,
                            preco: Number(e.target.value),
                          }))
                        }
                      />
                    </td>
                    <td className="px-6 py-4 flex gap-2">
                      {/* Botão para salvar alterações */}
                      <button
                        className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
                        onClick={() => handleSave(game.id)}
                        type="button"
                      >
                        Salvar
                      </button>
                      {/* Botão para cancelar edição */}
                      <button
                        className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded"
                        onClick={handleCancel}
                        type="button"
                      >
                        Cancelar
                      </button>
                    </td>
                  </tr>
                ) : (
                  // LINHA ONDE TEM AS INFORMAÇOES QUE PUXA DA API , IGUAL NO FORMULÁRIO DO GLAUCO
                  <tr key={game.id} className="hover:bg-gray-700 transition">
                    <td className="px-6 py-4">{game.id}</td>
                    <td className="</tr>px-6 py-4">{game.nome}</td>
                    <td className="px-6 py-4">{game.desenvolvedor}</td>
                    <td className="px-6 py-4">{game.genero}</td>
                    <td className="px-6 py-4">{game.preco}</td>
                    <td className="px-6 py-4 flex gap-2">
                      {/* Botão para editar */}
                      <button
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                        onClick={() => handleEdit(game)}
                        type="button"
                      >
                        Alterar
                      </button>
                      {/* Botão para deletar */}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>

        {/* Explicação codigo PUT */}
        <div className="w-full max-w-3xl bg-gray-800 rounded-xl shadow-lg p-6 border border-yellow-400 mx-auto my-8">
          <h2 className="text-xl font-semibold text-yellow-300 mb-3 flex items-center gap-2">
            <svg
              className="w-6 h-6 text-yellow-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 3.5a2.121 2.121 0 113 3L7 19.5 3 21l1.5-4L16.5 3.5z"
              />
            </svg>
            Código do arquivo{" "}
            <span className="font-mono text-yellow-200">put.ts</span> (pasta{" "}
            <span className="font-mono">services/games</span>)
          </h2>
          <div className="flex justify-center">
            <Image
              src="/code-put.png"
              alt="Código do arquivo put.ts"
              width={800}
              height={400}
              className="rounded-lg border border-yellow-900 shadow"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 my-8">
          <div className="w-2 h-8 bg-red-500 rounded"></div>
          <h1 className="text-2xl font-bold text-red-400 drop-shadow-lg tracking-wide">
            DELETE{" "}
            <span className="text-gray-300 font-normal text-lg ml-2">
              - Remover Jogo
            </span>
          </h1>
          <svg
            className="w-7 h-7 text-red-400 ml-2"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        {/* Explicação sobre o método DELETE */}
        <div className="bg-red-900 border-l-4 border-red-500 p-4 mb-6 max-w-3xl mx-auto rounded-lg shadow">
          <h3 className="text-lg font-bold text-red-400 mb-2 flex items-center gap-2">
            <svg
              className="w-5 h-5 text-red-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            O que faz o método DELETE?
          </h3>
          <p className="text-gray-200">
            O método <span className="font-semibold text-red-400">DELETE</span>{" "}
            é utilizado para{" "}
            <span className="font-semibold">remover dados existentes</span> em
            uma API. Ele permite que o frontend solicite ao backend a exclusão
            de um recurso, como um jogo cadastrado.
            <br />
            <span className="text-red-400 font-semibold">Exemplo:</span> Ao
            clicar em EXCLUIR em um jogo, é feita uma requisição DELETE para
            remover esse jogo do servidor e da lista exibida.
          </p>
        </div>

        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full bg-gray-800 text-gray-200">
            <thead>
              {/* INFORMAÇOES */}
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-gray-700">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-gray-700">
                  Nome
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-gray-700">
                  Desenvolvedor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-gray-700">
                  Gênero
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-gray-700">
                  Preço
                </th>
                <th className="px-6 py-3 bg-gray-700">Ações</th>
              </tr>
            </thead>
            <tbody>
              {games.map((game) => (
                // LINHA ONDE TEM AS INFORMAÇOES QUE PUXA DA API , IGUAL NO FORMULÁRIO DO GLAUCO
                <tr key={game.id} className="hover:bg-gray-700 transition">
                  <td className="px-6 py-4">{game.id}</td>
                  <td className="px-6 py-4">{game.nome}</td>
                  <td className="px-6 py-4">{game.desenvolvedor}</td>
                  <td className="px-6 py-4">{game.genero}</td>
                  <td className="px-6 py-4">{game.preco}</td>
                  <td className="px-6 py-4 flex gap-2">
                    {/* Botão para deletar */}
                    <button
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                      onClick={() => handleDelete(game.id)}
                      type="button"
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="w-full max-w-3xl bg-gray-800 rounded-xl shadow-lg p-6 border border-red-700 mx-auto my-8">
            <h2 className="text-xl font-semibold text-red-300 mb-3 flex items-center gap-2">
              <svg
                className="w-6 h-6 text-red-400"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Código do arquivo{" "}
              <span className="font-mono text-red-200">delete.ts</span> (pasta{" "}
              <span className="font-mono">services/games</span>)
            </h2>
            <div className="flex justify-center">
              <Image
                src="/code-delete.png"
                alt="Código do arquivo delete.ts"
                width={800}
                height={400}
                className="rounded-lg border border-red-900 shadow"
              />
            </div>
          </div>
        </div>
        {/* DESIGNER DE API */}
        {/* Resumo sobre Designer de API */}
        <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-gray-100 rounded-2xl p-8 mb-10 shadow-xl max-w-3xl mx-auto border border-gray-700 mt-8">
          <h2 className="text-2xl font-extrabold mb-4 text-purple-400 flex items-center gap-2">
            <svg
              className="w-7 h-7 text-purple-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12h8M12 8v8"
              />
            </svg>
            O que é o Design de API?
          </h2>
          <p className="mb-4 text-lg leading-relaxed">
            <span className="font-semibold text-purple-300">Design de API</span>{" "}
            não tem a ver com aparência ou estilização. Ele trata da{" "}
            <span className="font-semibold">estrutura</span> e{" "}
            <span className="font-semibold">organização</span> de como uma API
            funciona.
            <br />
            Uma API (Interface de Programação de Aplicações) é como uma ponte
            que permite que diferentes sistemas “conversem” entre si. O design
            dessa ponte precisa ser bem planejado, seguro, fácil de entender e
            de usar.
          </p>
        </section>

        <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-gray-100 rounded-2xl p-8 mb-10 shadow-xl max-w-3xl mx-auto border border-gray-700 mt-8">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-purple-300 mb-2 flex items-center gap-2">
              O que faz parte do Design de uma API?
            </h3>
            <ul className="list-disc pl-8 space-y-1 text-base">
              <li>
                <span className="font-semibold text-purple-200">
                  Definir os Endpoints:
                </span>
                <span className="text-gray-200">
                  {" "}
                  Exemplo: rotas como{" "}
                  <span className="font-mono text-purple-300">
                    /genero
                  </span> ou{" "}
                  <span className="font-mono text-purple-300">/jogo/123</span>,
                  que indicam onde buscar ou enviar dados.
                </span>
                <div className="flex justify-center mt-2">
                  <Image
                    src="/code-get(1).png"
                    alt="Exemplo de endpoints de API"
                    width={400}
                    height={120}
                    className="rounded-lg border w-[90%] object cover border-purple-900 shadow"
                  />
                </div>
              </li>
              <li className="mt-4">
                <span className="font-semibold text-purple-200">
                  Escolher os verbos HTTP corretos:
                </span>
                <ul className="list-disc pl-8 space-y-0 text-base">
                  <li>
                    <span className="font-mono text-purple-300">GET</span> →
                    buscar dados
                  </li>
                  <li>
                    <span className="font-mono text-purple-300">POST</span> →
                    criar algo novo
                  </li>
                  <li>
                    <span className="font-mono text-purple-300">PUT</span> →
                    atualizar dados existentes
                  </li>
                  <li>
                    <span className="font-mono text-purple-300">DELETE</span> →
                    remover dados
                  </li>
                </ul>
              </li>
              <li className="mt-4">
                <span className="font-semibold text-purple-200">
                  Organizar os dados em formato padrão:
                </span>
                <span className="text-gray-200">
                  {" "}
                  Normalmente{" "}
                  <span className="font-mono text-purple-300">JSON</span>, que é
                  fácil de ler e usar por diferentes sistemas.
                </span>
              </li>
              <li>
                <span className="font-semibold text-purple-200">
                  Implementar segurança:
                </span>
                <span className="text-gray-200">
                  {" "}
                  Com autenticação, tokens e validação para proteger as
                  informações trocadas.
                </span>
              </li>
              <li>
                <span className="font-semibold text-purple-200">
                  Documentar bem a API:
                </span>
                <span className="text-gray-200">
                  {" "}
                  Para que outros desenvolvedores saibam exatamente como usar a
                  API, o que ela faz, e como fazer chamadas corretas.
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-purple-950 border-l-4 border-purple-400 p-4 rounded-lg shadow mb-4">
            <h3 className="text-lg font-bold text-purple-300 mb-2 flex items-center gap-2">
              <span role="img" aria-label="pin">
                📌
              </span>{" "}
              Em resumo:
            </h3>
            <p className="text-gray-200">
              <span className="font-semibold text-purple-300">
                Design de API
              </span>{" "}
              é o planejamento da estrutura, comunicação e regras de uma API.
              <br />É o que garante que ela seja compreensível, segura e útil
              para quem for usar — diferente de algo visual ou estético.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
