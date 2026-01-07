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
import { useSelector } from "react-redux"

const Questions = ()=>{
    const language = useSelector(state=>state.language)

    return(
        <div className="mt-10 flex justify-center p-2 md:p-8">
            <Card className="w-full max-w-6xl shadow-lg">
                <div className="flex flex-col justify-center p-8 sm:pl-14 sm:pr-14">
                    <h2 className="text-4xl md:text-5xl font-bold ">
                        {
                            language === 'SPANISH' 
                            ? 'Preguntas Frecuentes' 
                            : 'Frequently Asked Questions'
                        }
                    </h2>
                    <h3 className="pr-5 mt-10">
                        {
                            language === 'SPANISH' 
                            ? 'Respuestas rápidas a las dudas más comunes.' 
                            : 'Quick answers to the most common questions.'
                        }
                    </h3>
                    <div className="mt-5">
                        <Accordion type="single" collapsible className="w-full" defaultValue="">
                        <AccordionItem value="item-1" className="mb-3">
                            <AccordionTrigger className="cursor-pointer">
                                {
                                    language === 'SPANISH' 
                                    ? '¿Cómo puedo pedir un presupuesto o empezar un proyecto?' 
                                    : 'How can I request a quote or start a project?'
                                }
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>
                                    {
                                        language === 'SPANISH' 
                                        ? <>¡Es muy fácil! Puedes contactarme a través del formulario haciendo <Link to="/contacto" className="font-medium underline">click aquí</Link> Cuéntame brevemente tu idea y agendaremos una llamada para definir los detalles.</>
                                        : <>It's very easy! You can contact me through the form by <Link to="/contacto" className="font-medium underline">clicking here</Link>. Briefly tell me about your idea and we'll schedule a call to define the details.</>
                                    }
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="mb-3">
                            <AccordionTrigger className="cursor-pointer">
                                {
                                    language === 'SPANISH' 
                                    ? '¿Cuánto tiempo tarda en estar listo mi sitio web o aplicación?' 
                                    : 'How long does it take for my website or app to be ready?'
                                }
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>
                                    {
                                        language === 'SPANISH' 
                                        ? 'Depende de la complejidad del proyecto. Una web informativa puede tomar una semana, mientras que una plataforma personalizada puede requerir más tiempo. En nuestra primera charla, te daré un cronograma estimado y realista.'
                                        : "It depends on the complexity of the project. An informational website might take a week, while a custom platform could require more time. In our first conversation, I'll give you a realistic estimated timeline."
                                    }
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="mb-3">
                            <AccordionTrigger className="cursor-pointer">
                                {
                                    language === 'SPANISH' 
                                    ? '¿Qué pasa cuando terminamos el desarrollo? ¿Ofreces soporte?' 
                                    : 'What happens when we finish development? Do you offer support?'
                                }
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>
                                    {
                                        language === 'SPANISH' 
                                        ? 'No te dejaré solo. Al finalizar, te enseñaré cómo administrar tu sitio. Además, ofrezco planes de mantenimiento para asegurarnos de que todo siga funcionando, actualizado y seguro con el paso del tiempo.'
                                        : "I won't leave you on your own. At the end, I'll teach you how to manage your site. I also offer maintenance plans to ensure everything stays up-to-date, secure, and running smoothly over time."
                                    }
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4" className="mb-3">
                            <AccordionTrigger className="cursor-pointer">
                                {
                                    language === 'SPANISH' 
                                    ? '¿Necesito tener los textos, imagenes y fotos listos antes de empezar?' 
                                    : 'Do I need to have the texts, images, and photos ready before starting?'
                                }
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p> 
                                    {
                                        language === 'SPANISH' 
                                        ? 'No es obligatorio para iniciar, pero sí ayuda mucho. Si aún no tienes el contenido, puedo guiarte sobre qué necesitamos o podemos trabajar con estructuras provisorias mientras preparas tu material.'
                                        : "It's not mandatory to get started, but it helps a lot. If you don't have the content yet, I can guide you on what we need, or we can work with temporary structures while you prepare your material."
                                    }
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5" className="mb-3">
                            <AccordionTrigger className="cursor-pointer">
                                {
                                    language === 'SPANISH' 
                                    ? '¿Mi sitio web se verá bien en celulares?' 
                                    : 'Will my website look good on mobile phones?'
                                }
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>
                                    {
                                        language === 'SPANISH' 
                                        ? "Absolutamente. Diseño con un enfoque 'Mobile First' (móvil primero). Tu sitio se adaptará perfectamente a celulares, tablets y computadoras, garantizando que tus clientes tengan una excelente experiencia sin importar desde dónde lo vean."
                                        : "Absolutely. Mobile-first design. Your site will adapt perfectly to mobile phones, tablets, and computers, ensuring your customers have an excellent experience no matter where they view it from."
                                    }
                                </p>
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