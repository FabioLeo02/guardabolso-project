"use client";

import CursoItem from "@/components/CursoItem";
import Estatisticas from "@/components/Estatisticas";

export default function Cursos() {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
            {/* Header */}
            <header className="flex justify-between items-center p-6 bg-yellow-600 shadow-md">
                <h1 className="text-2xl font-bold text-white">GuardaBolso</h1>
                <button className="bg-white text-yellow-600 px-4 py-2 rounded font-bold hover:bg-gray-200">
                    Perfil
                </button>
            </header>

            {/* Main Section */}
            <main className="flex-grow flex flex-row p-6 gap-6">
                {/* Curso e tópicos */}
                <div className="flex-grow">
                    <h2 className="text-3xl font-semibold mb-6">Curso 1 - Introdução à Educação Financeira</h2>
                    <div className="relative w-full h-64">
                        {/* Tópicos */}
                        <CursoItem
                            icon="💲"
                            title="O que é Dinheiro?"
                            style="absolute top-20 left-10"
                        />
                        <CursoItem
                            icon="📄"
                            title="Gerenciando os Gastos"
                            style="absolute top-20 left-[549px]"
                        />
                        <CursoItem
                            icon="💰"
                            title="Como fazer um Orçamento"
                            style="absolute top-52 left-72"
                        />
                        <CursoItem
                            icon="🤲"
                            title="Como Economizar"
                            style="absolute top-52 left-[800px]"
                        />
                    </div>
                </div>

                {/* Estatísticas */}
                <Estatisticas />
            </main>
        </div>
    );
}
