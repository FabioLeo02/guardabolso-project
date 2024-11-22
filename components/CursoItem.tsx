"use client";

interface CursoItemProps {
    icon: string;
    title: string;
    style?: string; // Estilo adicional para posicionamento dinâmico
}

export default function CursoItem({ icon, title, style }: CursoItemProps) {
    return (
        <div
            className={`flex flex-col items-center justify-center bg-yellow-500 w-44 h-40 rounded-full shadow-md text-center transition-all duration-300 ease-in-out hover:shadow-lg hover:translate-y-[-5px] hover:bg-yellow-600 ${style}`}
        >
            <span className="text-3xl text-white">{icon}</span>
            <p className="mt-2 text-sm font-bold text-white">{title}</p>
        </div>
    );
}
