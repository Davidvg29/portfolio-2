import { Spinner } from "@/components/ui/spinner"
import { createPortal } from "react-dom"

const Loading = ({ message }) => {

    // Definimos el contenido
    const content = (
        <>
            {/* 1. Definimos la animación CSS aquí mismo (In-Out) */}
            <style>
                {`
                    @keyframes fadeInOut {
                        0% { opacity: 0; transform: scale(0.95); }
                        15% { opacity: 1; transform: scale(1); }
                        85% { opacity: 1; transform: scale(1); }
                        100% { opacity: 0; transform: scale(0.95); }
                    }
                    
                    .loader-animation {
                        /* La duración debe coincidir o ser un poquito menor a tu setTimeout (500ms) */
                        animation: fadeInOut 1s ease-in-out forwards;
                    }
                `}
            </style>

            {/* 2. Aplicamos la clase 'loader-animation' */}
            <div className="loader-animation fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
                <Spinner className="w-12 h-12 text-primary" />
                <p className="mt-4 font-medium text-slate-700">{message}</p>
            </div>
        </>
    );

    return createPortal(content, document.body);
}

export default Loading;