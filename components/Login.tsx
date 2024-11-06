export default function Login() {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="text-center p-24 border rounded-lg bg-yellow-200">
                <div className="mb-4 text-5xl text-black font-extrabold">Guarda Bolso</div>
                <div className="mb-4 text-xl font-semibold text-black">Login</div>
                <div className="mb-2 pr-36 text-black font-semibold">Email: </div>
                <input className="border px-2 py-1 mb-4 rounded-lg border-gray-400 text-black" type="email" />
                <div className="mb-2 pr-36 text-black font-semibold">Senha: </div>
                <input className="border px-2 py-1 rounded-lg mb-4 border-gray-400 text-black" type="password" />
                <div>
                    <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded">Entrar</button>
                </div>
            </div>
        </div>
    );
}
