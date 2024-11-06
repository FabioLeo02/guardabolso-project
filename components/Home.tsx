export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-white text-gray-800">
            {/* Header */}
            <header className="flex justify-between bg-yellow-600 items-center p-6 shadow-md">
                <div className="text-2xl font-bold text-white">GuardaBolso</div>
                <div className="flex space-x-4">
                    <a href="/login" className="text-white font-bold pt-2 pr-5 hover:text-gray-800">Login</a>
                    <a href="/signup" className="px-4 py-2  bg-yellow-500 text-white rounded font-bold hover:bg-yellow-300">Cadastro</a>
                </div>
            </header>

            {/* Main Section */}
            <main className="flex-grow flex flex-col items-center justify-center text-center p-8">
                <h1 className="text-4xl font-semibold mb-4">
                    Aprenda educação financeira de forma simples e divertida
                </h1>
                <p className="text-gray-700 mb-6">
                    Venha dominar o mundo das finanças com conteúdos acessíveis e interativos.
                </p>
                <button className="px-6 py-3 bg-yellow-500 text-white rounded-full text-lg hover:bg-yellow-300">
                    Comece Agora
                </button>
            </main>

            {/* Footer */}
            <footer className="text-center p-4 bg-gray-100 text-gray-600 border-gray-400">
                © 2024 GuardaBolso. Todos os direitos reservados.
            </footer>
        </div>
    );
}
