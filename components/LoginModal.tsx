"use client";

import { useState } from "react";
import Modal from "./Modal";

export default function LoginModal() {
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
                Login
            </button>

            {/* Modal */}
            <Modal isOpen={isOpen} onClose={toggleModal}>
                <h2 className="text-2xl font-bold text-center text-black mb-6">Login</h2>
                <form>
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
                    <button
                        type="submit"
                        className="w-full py-2 bg-yellow-500 text-white font-bold rounded hover:bg-yellow-300"
                    >
                        Entrar
                    </button>
                </form>
                <div className="text-center mt-4">
                    <a href="/forgot-password" className="text-sm text-yellow-500 hover:underline">
                        Esqueceu sua senha?
                    </a>
                </div>
            </Modal>
        </>
    );
}
