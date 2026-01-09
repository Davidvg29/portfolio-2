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

const HeroSection = ()=>{
    const language = useSelector((state) => state.language);

    return(
        <div className="flex justify-center p-2 md:p-8 ">
            <Card className="w-full max-w-6xl shadow-lg ">
                <div className="flex flex-col md:flex-row justify-center p-8 sm:pl-14 sm:pr-14">
                    <div className="w-full md:w-1/2">
                        <CardHeader className="p-0 text-4xl md:text-5xl font-bold mb-8">
                            {
                                language === 'SPANISH' 
                                ? <div>Hola, soy <span className="text-primary">David</span>
                                . <br /> Desarrollador <br /> de Software.</div> 
                                : <div>Hi, I'm <span className="relative inline-block p-2">
                                        <span className="absolute inset-0 -skew-x-12 bg-primary rounded-md"></span>
                                        <span className="relative"> David</span>
                                    </span>. <br /> Software <br /> Developer.</div>
                            }
                        </CardHeader>
                        <CardDescription className="mb-8">
                            {
                                language === 'SPANISH' 
                                ? <>Construyo sitios web, sistemas y automatizo tus procesos. <br /> Soluciones a medida, fáciles de usar y efectivas, <br /> para optimizar tu tiempo y recursos.</> 
                                : <>I build websites, systems, and automate your processes. <br /> Custom, user-friendly, and effective solutions <br /> to optimize your time and resources.</>
                            }
                        </CardDescription>
                        <CardContent className="p-0 flex flex-col md:flex-row gap-4 md:items-center">
                            <Link to="/contacto" className="pr-2 flex items-center">
                                <Button className="cursor-pointer text-white">
                                    {
                                        language === 'SPANISH' 
                                        ? '¡Empecemos un proyecto!' 
                                        : "Let's start a project!"
                                    }    
                                </Button>
                            </Link>
                            <a href="#aboutOurWork" className="pl-2 text-sm font-semibold">
                                {
                                    language === 'SPANISH' 
                                    ? 'Leer más' 
                                    : 'Read more'
                                }
                            </a>
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