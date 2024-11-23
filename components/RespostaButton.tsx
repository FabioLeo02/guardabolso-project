"use client";

interface RespostaButtonProps {
    text: string;
    onClick: () => void;
    style?: string; // Estilos personalizados (classes Tailwind ou inline)
}

export default function RespostaButton({ text, onClick, style }: RespostaButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`bg-yellow-500 text-white py-4 px-6 rounded-lg font-bold transition-all duration-300 ease-in-out hover:bg-yellow-600 hover:shadow-lg hover:translate-y-[-5px] ${style}`}
        >
            {text}
        </button>
    );
}
