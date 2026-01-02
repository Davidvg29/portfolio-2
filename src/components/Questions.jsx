import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Questions = ()=>{
    return(
        <div className="mt-10 flex justify-center p-2 md:p-8">
            <Card className="w-full max-w-6xl shadow-lg">
                <div className="flex flex-col justify-center p-8 sm:pl-14 sm:pr-14">
                    <h2 className="text-4xl md:text-5xl font-bold ">Preguntas frecuentes</h2>
                    <h3 className="pr-5 mt-10">Respuestas rápidas a las dudas más comunes.</h3>
                    <div className="mt-5">
                        <Accordion type="single" collapsible className="w-full" defaultValue="">
                        <AccordionItem value="item-1" className="mb-3">
                            <AccordionTrigger className="cursor-pointer">¿Cómo puedo pedir un presupuesto o empezar un proyecto?</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>¡Es muy fácil! Puedes contactarme a través del formulario haciendo <Link to="/contacto" className="font-medium underline">click aquí</Link> Cuéntame brevemente tu idea y agendaremos una llamada para definir los detalles.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="mb-3">
                            <AccordionTrigger className="cursor-pointer">¿Cuánto tiempo tarda en estar listo mi sitio web o aplicación? </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>Depende de la complejidad del proyecto. Una web informativa puede tomar una semana, mientras que una plataforma personalizada puede requerir más tiempo. En nuestra primera charla, te daré un cronograma estimado y realista.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="mb-3">
                            <AccordionTrigger className="cursor-pointer">¿Qué pasa cuando terminamos el desarrollo? ¿Ofreces soporte?</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>No te dejaré solo. Al finalizar, te enseñaré cómo administrar tu sitio. Además, ofrezco planes de mantenimiento para asegurarnos de que todo siga funcionando, actualizado y seguro con el paso del tiempo.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4" className="mb-3">
                            <AccordionTrigger className="cursor-pointer">¿Necesito tener los textos y fotos listos antes de empezar?</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p> No es obligatorio para iniciar, pero sí ayuda mucho. Si aún no tienes el contenido, puedo guiarte sobre qué necesitamos o podemos trabajar con estructuras provisorias mientras preparas tu material.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5" className="mb-3">
                            <AccordionTrigger className="cursor-pointer">¿Mi sitio web se verá bien en celulares?</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>Absolutamente. Diseño con un enfoque 'Mobile First' (móvil primero). Tu sitio se adaptará perfectamente a celulares, tablets y computadoras, garantizando que tus clientes tengan una excelente experiencia sin importar desde dónde lo vean.</p>
                            </AccordionContent>
                        </AccordionItem>
                        
                        </Accordion>
                    </div>
                </div>
            </Card>
        </div>
    )
}
export default Questions