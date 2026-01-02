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
import { Link } from "react-router-dom"
import img from "@/assets/imgPresentation.svg"

const ContactSection = ()=>{
    return(
        <div className="mt-15 flex justify-center p-2 md:p-8">
            <Card className="w-full max-w-6xl shadow-lg">
                <div className="flex flex-col md:flex-row justify-center p-8 sm:pl-14 sm:pr-14">
                    <div className="w-full md:w-1/2">
                        <CardHeader className="text-4xl md:text-5xl font-bold p-0">Tu próxima gran idea empieza aquí</CardHeader>
                        <CardDescription className="mb-8">¿Tienes un proyecto en mente o un problema que necesita una solución digital? Hablemos. No necesitas tener todos los detalles técnicos resueltos para contactarme. Cuéntame tu visión y te ayudaré con una solución real, escalable y efectiva.</CardDescription>
                        <CardContent className="p-0 flex flex-col md:flex-row gap-4 md:items-center">
                            <Link to="/contacto" className="pr-2 flex items-center cursor-pointer"><Button className="cursor-pointer">Iniciar conversación</Button></Link>
                        </CardContent>
                    </div>
                    <div className=" w-1/2 flex justify-center items-center m-0">
                        <img className="w-60 h-60 max-md:hidden " src={img} alt="" />
                    </div>
                </div>
            </Card>
        </div>
    )
}
export default ContactSection