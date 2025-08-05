import Carousel from "../../components/carousel/Carousel";

export default function About() {
  return (
    <div className="shadow-md shadow-slate-700 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          About this project
        </h1>

        <p className="text-gray-700 text-lg mb-4">
          System desenvolved with management objective customers of shape simple
          and efficient. Utilizing modern technologies to created one functional
          application fullstack, responsive with focus in goods practies of
          developed.
        </p>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            🚀 Technologies used
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
            🧠 My Responsabilities
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Frontend created with React and Tailwind</li>
            <li>API REST implementation with Spring Boot</li>
            <li>Data base modelation with MySQL</li>
            <li>Frontend-backend integration using by axios</li>
            <li>Componentization and organization of the code</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            💡 Motivation of the project
          </h2>
          <p className="text-gray-700">
            Creating this project as part of my data base in github (portfolio),
            to demonstrate my capacities of construct completies solutions,
            utilizing modern technologies. My focus was to applied concepts of
            API REST, responde design and clean code, simulator one real
            scenario of application.
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
              Back-End Repository
            </a>
          </section>
          <section className="mt-10 text-center">
            <a
              href="https://github.com/javazord/register-customer-web"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl shadow hover:bg-indigo-700 transition"
            >
              Front-End Repository
            </a>
          </section>
        </div>

        <footer className="mt-12 text-center text-sm text-gray-500">
          Desenvolved by <strong>Mateus Bastos Marques</strong> ·{" "}
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
