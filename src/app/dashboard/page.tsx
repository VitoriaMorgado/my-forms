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
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          O que é uma API?
        </h2>
        <p className="mb-4 text-lg leading-relaxed">
          <span className="font-semibold text-blue-300">API</span> significa{" "}
          <span className="font-semibold">
            Application Programming Interface
          </span>{" "}
          (Interface de Programação de Aplicações). É um conjunto de regras e
          definições que permite que diferentes sistemas, aplicações ou
          componentes de software se comuniquem entre si.
        </p>
        <ul className="list-disc pl-8 mb-4 space-y-1 text-base">
          <li>Permite integração entre diferentes plataformas e linguagens.</li>
          <li>
            Facilita o acesso a funcionalidades ou dados de um sistema de forma
            controlada.
          </li>
          <li>
            É muito utilizada em aplicações web para conectar{" "}
            <span className="text-blue-300">frontend</span> e{" "}
            <span className="text-blue-300">backend</span>.
          </li>
        </ul>
        <p className="italic text-gray-300">
          <span className="text-blue-400 font-semibold">Exemplo:</span> Um site
          pode usar uma API para buscar dados de jogos em um servidor e
          exibi-los para o usuário, como nesta página de dashboard.
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

      <h1 className="text-2xl font-bold text-white mb-6">Gerenciar Jogos</h1>

      <div className="flex items-center gap-3 my-8">
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
          utilizado para <span className="font-semibold">buscar dados</span> de
          uma API. Ele permite que o frontend solicite informações ao backend,
          como a lista de jogos cadastrados, sem alterar ou excluir nada no
          servidor.
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
              src="/code-get.png"
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
          O método <span className="font-semibold text-green-300">POST</span> é
          utilizado para{" "}
          <span className="font-semibold">adicionar novos dados</span> a uma
          API. Ele permite que o frontend envie informações para o backend, como
          os dados de um novo jogo, que será salvo no servidor.
          <br />
          <span className="text-green-300 font-semibold">Exemplo:</span> Ao
          preencher o formulário abaixo e clicar em ADICIONAR JOGO, é feita uma
          requisição POST para cadastrar o novo jogo na lista.
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
          // Aqui você pode chamar sua função de POST, por exemplo:
          // await postGame(newGame);
          // Atualize a lista de jogos após inserir
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
          O método <span className="font-semibold text-yellow-300">PUT</span> é
          utilizado para{" "}
          <span className="font-semibold">atualizar dados existentes</span> em
          uma API. Ele permite que o frontend envie informações modificadas para
          o backend, substituindo os dados antigos por novos.
          <br />
          <span className="text-yellow-300 font-semibold">Exemplo:</span> Ao
          clicar em ALTERAR em um jogo, você pode editar seus dados. Ao salvar,
          é feita uma requisição PUT para atualizar as informações desse jogo no
          servidor.
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
          O método <span className="font-semibold text-red-400">DELETE</span> é
          utilizado para{" "}
          <span className="font-semibold">remover dados existentes</span> em uma
          API. Ele permite que o frontend solicite ao backend a exclusão de um
          recurso, como um jogo cadastrado.
          <br />
          <span className="text-red-400 font-semibold">Exemplo:</span> Ao clicar
          em EXCLUIR em um jogo, é feita uma requisição DELETE para remover esse
          jogo do servidor e da lista exibida.
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
          O que é Designer de API?
        </h2>
        <p className="mb-4 text-lg leading-relaxed">
          <span className="font-semibold text-purple-300">Designer de API</span>{" "}
          refere-se ao processo de planejar, estruturar e documentar como uma
          API será construída e utilizada. Um bom design garante que a API seja{" "}
          <span className="font-semibold">fácil de entender</span>,{" "}
          <span className="font-semibold">consistente</span> e{" "}
          <span className="font-semibold">segura</span> para desenvolvedores e
          sistemas que irão utilizá-la.
        </p>
        <ul className="list-disc pl-8 mb-4 space-y-1 text-base">
          <li>
            Define os <span className="text-purple-300">endpoints</span>,
            métodos HTTP e formatos de dados.
          </li>
          <li>Facilita a integração entre diferentes aplicações e equipes.</li>
          <li>
            Ajuda a evitar ambiguidades e erros de comunicação entre frontend e
            backend.
          </li>
          <li>
            Inclui boas práticas como versionamento, documentação clara e
            tratamento de erros.
          </li>
        </ul>
        <p className="italic text-gray-300">
          <span className="text-purple-400 font-semibold">Exemplo:</span> Antes
          de implementar a API de jogos, é importante definir como serão as
          rotas, quais dados cada operação espera e retorna, e como os erros
          serão tratados, garantindo uma experiência melhor para quem consome a
          API.
        </p>
      </section>
    </div>
  );
}
