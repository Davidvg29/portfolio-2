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
import { useSelector } from "react-redux"

const ContactSection = ()=>{
    const language = useSelector(state=>state.language)

    return(
        <div className="mt-15 flex justify-center p-2 md:p-8">
            <Card className="w-full max-w-6xl shadow-lg">
                <div className="flex flex-col md:flex-row justify-center p-8 sm:pl-14 sm:pr-14">
                    <div className="w-full md:w-1/2">
                        <CardHeader className="p-0">
                            <CardTitle className="font-bold text-4xl md:text-5xl mb-2">
                                {
                                language === 'SPANISH' 
                                ? <>Tu próxima gran idea <span className="text-primary ">empieza </span>aquí</> 
                                : <>Your next big idea <span className="text-primary ">starts</span> here</>
                            }
                            </CardTitle>
                        </CardHeader>
                        <CardDescription className="mb-8">
                            {
                                language === 'SPANISH' 
                                ? '¿Tienes un proyecto en mente o un problema que necesita una solución digital? Hablemos. No necesitas tener todos los detalles técnicos resueltos para contactarme. Cuéntame tu visión y te ayudaré con una solución real, escalable y efectiva.' 
                                : "Do you have a project in mind or a problem that needs a digital solution? Let's talk. You don't need to have all the technical details sorted out to contact me. Tell me your vision, and I'll help you with a real, scalable, and effective solution.   "
                            }
                        </CardDescription>
                        <CardContent className="p-0 flex flex-col md:flex-row gap-4 md:items-center">
                            <Link to="/contacto" className="pr-2 flex items-center cursor-pointer">
                                <Button className="cursor-pointer text-white">
                                    {
                                        language === 'SPANISH' 
                                        ? 'Iniciar conversación' 
                                        : 'Start conversation'
                                    }
                                </Button>
                            </Link>
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