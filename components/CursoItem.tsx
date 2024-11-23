"use client";

import { useRouter } from "next/navigation";

interface CursoItemProps {
    icon: string;
    title: string;
    style?: string; // Estilo adicional para posicionamento dinâmico
    link?: string; // Link para redirecionar (opcional)
}

export default function CursoItem({ icon, title, style, link }: CursoItemProps) {
    const router = useRouter();

    const handleClick = () => {
        if (link) {
            router.push(link);
        }
    };

    return (
        <div
            onClick={handleClick}
            className={`cursor-pointer flex flex-col items-center justify-center bg-yellow-500 w-44 h-40 rounded-full shadow-md text-center transition-all duration-300 ease-in-out hover:shadow-lg hover:translate-y-[-5px] hover:bg-yellow-600 ${style}`}
        >
            <span className="text-3xl text-white">{icon}</span>
            <p className="mt-2 text-sm font-bold text-white">{title}</p>
        </div>
    );
}
