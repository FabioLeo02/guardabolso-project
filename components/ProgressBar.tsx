"use client";

interface ProgressBarProps {
    progress: number; // Porcentagem do progresso (0 a 100)
}

export default function ProgressBar({ progress }: ProgressBarProps) {
    return (
        <div className="w-full bg-gray-300 rounded-full h-4 mt-6 shadow-inner">
            <div
                className="bg-yellow-500 h-4 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
}
