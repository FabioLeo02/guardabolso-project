"use client";

import { useRouter } from "next/navigation";
import RespostaButton from "@/components/RespostaButton";
import ProgressBar from "@/components/ProgressBar";
import PerguntaContainer from "@/components/PerguntaContainer";

export default function Atividade1() {
    const router = useRouter();

    const handleAnswer = (answer: string) => {
        alert(`Você escolheu: ${answer}`);
        // Aqui você pode implementar a lógica de verificar a resposta ou ir para a próxima questão.
    };

    return (
        <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
            {/* Header */}
            <header className="flex justify-between items-center p-4 bg-yellow-600 shadow-md">
                <h1 className="text-2xl font-bold text-white">GuardaBolso</h1>
                <button
                    onClick={() => router.push("/cursos")}
                    className="bg-white text-yellow-600 px-4 py-2 rounded font-bold hover:bg-gray-200"
                >
                    Perfil
                </button>
            </header>

            {/* Barra de Progresso */}
            <div className="px-6">
                <ProgressBar progress={50} />
            </div>

            {/* Main Content */}
            <main className="flex-grow flex flex-col items-center justify-center text-center p-8">
                {/* Enunciado da Pergunta */}
                <PerguntaContainer
                    questionText="O que é Dinheiro? - Questão 2º"
                    descriptionText="Antigamente, as pessoas trocavam coisas, como comida e objetos, porque não existia dinheiro. Um dia, elas tiveram a ideia de usar algo mais fácil para todo mundo."
                />

                {/* Pergunta Específica */}
                <p className="font-bold mb-8">
                    O que elas usaram para criar o <span className="text-yellow-600">dinheiro</span>?
                </p>

                {/* Respostas */}
                <div className="relative w-full h-56">
                    <RespostaButton
                        text="Pedras"
                        onClick={() => handleAnswer("Pedras")}
                        style="relative w-64 h-24 top-36 left-[240px]"
                    />
                    <RespostaButton
                        text="Frutas"
                        onClick={() => handleAnswer("Frutas")}
                        style="relative w-64 h-24 top-6 right-4"
                    />
                    <RespostaButton
                        text="Metal"
                        onClick={() => handleAnswer("Metal")}
                        style="relative w-64 h-24 top-6 left-1"
                    />
                    <RespostaButton
                        text="Madeira"
                        onClick={() => handleAnswer("Madeira")}
                        style="relative w-64 h-24 top-36 right-[250px]"
                    />
                </div>
            </main>
        </div>
    );
}
