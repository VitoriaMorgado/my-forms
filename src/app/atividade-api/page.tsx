

const AtividadeApi = () => {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 py-12">
                {/* Banner explicativo */}
                <div className="max-w-3xl mx-auto mb-12">
                    <div className="bg-green-700 rounded-2xl shadow-xl p-8 flex flex-col items-center">
                        <h1 className="text-4xl font-extrabold text-white mb-4 drop-shadow-xl text-center">
                            O que é uma API?
                        </h1>
                        <p className="text-lg text-green-100 text-center">
                            API (Interface de Programação de Aplicações) é um conjunto de regras e definições que permite que diferentes sistemas e aplicações se comuniquem entre si. 
                            Elas facilitam a integração, automação e troca de dados de forma segura e padronizada.
                        </p>
                    </div>
                </div>
                {/* Conteúdo principal com imagem ao lado */}
                <div className="flex flex-row gap-8 max-w-5xl mx-auto">
                    {/* Imagem placeholder */}
                    <div className="flex-shrink-0 flex items-center">
                        {/* <Image
                            src="/"
                            alt="API Placeholder"
                            className="rounded-2xl shadow-xl object-cover w-[250px] h-[300px] bg-gray-700"
                        /> */}
                    </div>
                    {/* Conteúdo principal */}
                    <div className="flex flex-col gap-8 flex-1 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl shadow-2xl p-10 border border-green-700">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-green-300">Exemplos de Uso de APIs</h2>
                            <ul className="list-disc list-inside space-y-2 text-lg text-gray-200">
                                <li>Buscar dados do clima em tempo real</li>
                                <li>Autenticação de usuários em aplicativos</li>
                                <li>Integração com redes sociais</li>
                            </ul>
                        </section>
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-green-300">Benefícios das APIs</h2>
                            <ul className="list-disc list-inside space-y-2 text-lg text-gray-200">
                                <li>Facilitam integrações entre sistemas</li>
                                <li>Automatizam processos</li>
                                <li>Permitem escalabilidade e inovação</li>
                            </ul>
                        </section>
                        <div className="flex justify-end">
                            <hr className="border-t border-green-700 w-full my-4" />
                        </div>
                        
                    </div>
                </div>
            </div>
            <footer className="bg-gray-900 text-gray-400 py-6 mt-12">
                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-sm">© 2023 APIs Online. Todos os direitos reservados.</p>
                    <p className="text-sm mt-2">Desenvolvido por [Seu Nome]</p>
                </div>
            </footer>
        </>
    );
};

export default AtividadeApi;
