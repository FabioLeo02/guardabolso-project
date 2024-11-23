"use client";

interface PerguntaContainerProps {
    questionText: string;
    descriptionText?: string; // Opção para texto adicional (opcional)
}

export default function PerguntaContainer({
    questionText,
    descriptionText,
}: PerguntaContainerProps) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">{questionText}</h2>
            {descriptionText && <p className="text-gray-700">{descriptionText}</p>}
        </div>
    );
}
