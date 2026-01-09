import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Palette, Cloudy, Cog  } from 'lucide-react';
import { useSelector } from "react-redux";

const AboutOurWork = ()=>{
    const language = useSelector(state=>state.language)
    
    return(
        <div className=" mt-15 p-2 md:p-8" id="aboutOurWork">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
                {
                    language === 'SPANISH' 
                    ? <>¿Cómo <span className="text-primary">te ayudo?</span></>
                    : <>How can I <span className="text-primary">help you?</span></>
                }
            </h2>
            <h3 className="pr-5 mt-10">
                {
                    language === 'SPANISH' 
                    ? 'Con soluciones completas que unen diseño, funcionalidad y seguridad.' 
                    : 'With complete solutions that combine design, functionality and safety.'
                }
            </h3>
            <div className=" mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3 place-items-center">
                <Card className="w-full h-full rounded-3xl cursor-pointer shadow-lg hover:scale-102 transition delay-150 duration-300 ease-in-out">
                <CardContent>
                    <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center">
                        <Palette className="text-white" size={26}/>
                    </div>
                </CardContent>
                <CardHeader>
                    <CardTitle className="text-2xl font-bold ">
                        {
                            language === 'SPANISH'
                            ? 'Experiencias que Cautivan'
                            : 'Captivating Experiences'
                        }
                    </CardTitle>
                    <CardDescription>
                        {
                            language === 'SPANISH'
                            ? 'Diseño sitios web atractivos y fáciles de navegar. Me aseguro de que los clientes tengan una experiencia fluida, ya sea desde una computadora o desde su celular.'
                            : "I design attractive and easy-to-navigate websites. I ensure that clients have a seamless experience, whether they're using a computer or a mobile phone."
                        }
                    </CardDescription>
                </CardHeader>
                </Card>

                <Card className="w-full h-full rounded-3xl cursor-pointer shadow-lg hover:scale-102 transition delay-150 duration-300 ease-in-out">
                <CardContent>
                    <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center">
                        <Cog  className="text-white" size={26}/>
                    </div>
                </CardContent>
                <CardHeader>
                    <CardTitle className="text-2xl font-bold ">
                        {
                            language === 'SPANISH'
                            ? 'El Motor de tu Negocio'
                            : 'The Engine of Your Business'
                        }
                    </CardTitle>
                    <CardDescription>
                        {
                            language === 'SPANISH'
                            ? 'Construyo funcionalidades, desde procesar pagos hasta gestionar usuarios, automatizo tareas repetitivas y construyo sistemas enfocados en crecer, no en gestionar errores.'
                            : 'I build functionalities, from processing payments to managing users, I automate repetitive tasks, and I build systems focused on growth, not on managing errors.'
                        }
                    </CardDescription>
                </CardHeader>
                </Card>

                <Card className="w-full h-full rounded-3xl cursor-pointer shadow-lg hover:scale-102 transition delay-150 duration-300 ease-in-out">
                <CardContent>
                    <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center">
                        <Cloudy   className="text-white" size={26}/>
                    </div>
                </CardContent>
                <CardHeader>
                    <CardTitle className="text-2xl font-bold ">
                        {
                            language === 'SPANISH'
                            ? 'Información Segura y Ordenada'
                            : 'Secure and Organized Information'
                        }
                    </CardTitle>
                    <CardDescription>
                        {
                            language === 'SPANISH'
                            ? 'Más que guardar archivos, estructuro tu información. Garantizo la integridad y seguridad de los datos para que tu información esté siempre protegida, accesible y lista para ser utilizada.'
                            : 'More than just storing files, I structure your information. I guarantee data integrity and security so your information is always protected, accessible, and ready to use.'
                        }
                    </CardDescription>
                </CardHeader>
                </Card>
            </div>
        </div>
    )
}
export default AboutOurWork