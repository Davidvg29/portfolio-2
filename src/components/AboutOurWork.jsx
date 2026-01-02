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

const AboutOurWork = ()=>{
    return(
        <div className=" mt-15 p-2 md:p-8" id="aboutOurWork">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">¿Cómo te ayudo?</h2>
            <h3 className="pr-5 mt-10">Con soluciones completas que unen diseño, funcionalidad y seguridad.</h3>
            <div className=" mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3 place-items-center">
                <Card className="w-full h-full rounded-3xl cursor-pointer shadow-lg hover:scale-102 transition delay-150 duration-300 ease-in-out">
                <CardContent>
                    <div className="bg-violet-400 w-12 h-12 rounded-full flex items-center justify-center">
                        <Palette className="text-white" size={26}/>
                    </div>
                </CardContent>
                <CardHeader>
                    <CardTitle className="text-2xl font-bold ">Experiencias que Cautivan</CardTitle>
                    <CardDescription>
                        Diseño sitios web atractivos y fáciles de navegar. Me aseguro de que los clientes tengan una experiencia fluida, ya sea desde una computadora o desde su celular.
                    </CardDescription>
                </CardHeader>
                </Card>

                <Card className="w-full h-full rounded-3xl cursor-pointer shadow-lg hover:scale-102 transition delay-150 duration-300 ease-in-out">
                <CardContent>
                    <div className="bg-violet-400 w-12 h-12 rounded-full flex items-center justify-center">
                        <Cog  className="text-white" size={26}/>
                    </div>
                </CardContent>
                <CardHeader>
                    <CardTitle className="text-2xl font-bold ">El Motor de tu Negocio</CardTitle>
                    <CardDescription>
                        Construyo funcionalidades, desde procesar pagos hasta gestionar usuarios, automatizo tareas repetitivas y construyo sistemas enfocados en crecer, no en gestionar errores.
                    </CardDescription>
                </CardHeader>
                </Card>

                <Card className="w-full h-full rounded-3xl cursor-pointer shadow-lg hover:scale-102 transition delay-150 duration-300 ease-in-out">
                <CardContent>
                    <div className="bg-violet-400 w-12 h-12 rounded-full flex items-center justify-center">
                        <Cloudy   className="text-white" size={26}/>
                    </div>
                </CardContent>
                <CardHeader>
                    <CardTitle className="text-2xl font-bold ">Información Segura y Ordenada</CardTitle>
                    <CardDescription>
                        Más que guardar archivos, estructuro tu información. Garantizo la integridad y seguridad de los datos para que tu información esté siempre protegida, accesible y lista para ser utilizada.
                    </CardDescription>
                </CardHeader>
                </Card>
            </div>
        </div>
    )
}
export default AboutOurWork