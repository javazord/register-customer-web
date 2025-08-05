import Carousel from "../../components/Carousel";

export default function About() {
  return (
    <div className="shadow-md shadow-slate-700 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Sobre o Projeto
        </h1>

        <p className="text-gray-700 text-lg mb-4">
          Sistema desenvolvido com o objetivo de gerenciar clientes de forma
          simples e eficiente. Utilizei tecnologias modernas para criar uma
          aplicação fullstack funcional, responsiva e com foco em boas práticas
          de desenvolvimento.
        </p>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            🚀 Tecnologias Utilizadas
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center text-sm text-gray-700">
            <div className="bg-gray-100 py-2 px-3 rounded-lg">⚛️ React</div>
            <div className="bg-gray-100 py-2 px-3 rounded-lg">
              🎨 Tailwind CSS
            </div>
            <div className="bg-gray-100 py-2 px-3 rounded-lg">
              ☕ Java (Spring Boot)
            </div>
            <div className="bg-gray-100 py-2 px-3 rounded-lg">🐬 MySQL</div>
            <div className="bg-gray-100 py-2 px-3 rounded-lg">📦 Axios</div>
            <div className="bg-gray-100 py-2 px-3 rounded-lg">🔄 REST API</div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            🧠 Minhas Responsabilidades
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Criação do frontend com React e Tailwind</li>
            <li>Implementação da API REST com Spring Boot</li>
            <li>Modelagem do banco de dados com MySQL</li>
            <li>Integração frontend-backend usando Axios</li>
            <li>Componentização e organização de código</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            💡 Motivação do Projeto
          </h2>
          <p className="text-gray-700">
            Criei este projeto como parte do meu portfólio para demonstrar minha
            capacidade de construir soluções completas utilizando tecnologias
            modernas. Meu foco foi aplicar conceitos de API REST, design
            responsivo e código limpo, simulando um cenário real de aplicação.
          </p>
        </section>

        <Carousel />

        <div className="grid grid-cols-2 gap-2">
          <section className="mt-10 text-center">
            <a
              href="https://github.com/javazord/register-customer-api"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl shadow hover:bg-indigo-700 transition"
            >
              Repositório Back-End
            </a>
          </section>
          <section className="mt-10 text-center">
            <a
              href="https://github.com/javazord/register-customer-web"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl shadow hover:bg-indigo-700 transition"
            >
              Repositório Front-End
            </a>
          </section>
        </div>

        <footer className="mt-12 text-center text-sm text-gray-500">
          Desenvolvido por <strong>Mateus Bastos Marques</strong> ·{" "}
          <a
            href="https://github.com/javazord"
            className="text-indigo-600 underline"
            target="_blank"
          >
            LinkedIn
          </a>
        </footer>
      </div>
    </div>
  );
}
