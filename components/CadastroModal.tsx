"use client";

import { useState } from "react";
import Modal from "./Modal";

export default function CadastroModal() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Botão para abrir o modal */}
            <button
                onClick={toggleModal}
                className="px-4 py-2 bg-yellow-500 text-white rounded font-bold hover:bg-yellow-300"
            >
                Cadastro
            </button>

            {/* Modal */}
            <Modal isOpen={isOpen} onClose={toggleModal}>
                <h2 className="text-2xl font-bold text-center text-black mb-6">Cadastro</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 mb-2">
                            Nome:
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Digite seu nome"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 mb-2">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Digite seu email"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 mb-2">
                            Senha:
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Digite sua senha"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirm-password" className="block text-gray-700 mb-2">
                            Confirmar Senha:
                        </label>
                        <input
                            type="password"
                            id="confirm-password"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Confirme sua senha"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-yellow-500 text-white font-bold rounded hover:bg-yellow-300"
                    >
                        Criar Conta
                    </button>
                </form>
            </Modal>
        </>
    );
}
