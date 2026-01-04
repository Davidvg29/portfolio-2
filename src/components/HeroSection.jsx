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
import img from "@/assets/imgPresentation.svg"

const HeroSection = ()=>{
    return(
        <div className="flex justify-center p-2 md:p-8 ">
            <Card className="w-full max-w-6xl shadow-lg ">
                <div className="flex flex-col md:flex-row justify-center p-8 sm:pl-14 sm:pr-14">
                    <div className="w-full md:w-1/2">
                        <CardHeader className="p-0 text-4xl md:text-5xl font-bold mb-8">Hola, soy David. <br /> Desarrollador <br /> de Software.</CardHeader>
                        <CardDescription className="mb-8">Construyo sitios web, sistemas y automatizo tus procesos. <br /> Soluciones a medida, fáciles de usar y efectivas, <br /> para optimizar tu tiempo y recursos.</CardDescription>
                        <CardContent className="p-0 flex flex-col md:flex-row gap-4 md:items-center">
                            <Link to="/contacto" className="pr-2 flex items-center"><Button>¡Empecemos un proyecto!</Button></Link>
                            <a href="#aboutOurWork" className="pl-2 text-sm font-semibold">Leer más</a>
                        </CardContent>
                    </div>
                    <div className=" w-1/2 flex justify-center items-center ">
                        <img className="w-82 h-82 max-md:hidden" src={img} alt="" />
                    </div>
                </div>
            </Card>
        </div>
    )
}
export default HeroSection