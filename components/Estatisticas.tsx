"use client";

export default function Estatisticas() {
    return (
        <aside className="w-80 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Estatísticas</h3>
            <div className="mb-4">
                <p className="text-gray-600">EXP:</p>
                <div className="bg-gray-300 rounded-full h-4 w-full mt-1">
                    <div className="bg-yellow-500 h-4 rounded-full" style={{ width: "20%" }}></div>
                </div>
                <p className="text-sm mt-1 text-gray-600">Nível 3</p>
            </div>
            <div>
                <p className="text-gray-600">Medalhas:</p>
                <div className="flex gap-4 mt-2">
                    <div className="w-12 h-12 bg-yellow-200 flex items-center justify-center rounded-full border-2 border-yellow-500">
                        <span className="text-xl font-bold text-yellow-600">#1</span>
                    </div>
                    <div className="w-12 h-12 bg-yellow-200 flex items-center justify-center rounded-full border-2 border-yellow-500">
                        <span className="text-xl text-yellow-600">⭐</span>
                    </div>
                </div>
            </div>
        </aside>
    );
}
