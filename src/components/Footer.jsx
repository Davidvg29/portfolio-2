import { Separator } from "./ui/separator"
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import { useSelector } from "react-redux"

const Footer=()=>{
    const year = new Date().getFullYear()
    const language = useSelector(state=>state.language)

    return(
        <footer className=" mt-15 flex flex-col justify-center items-center text-center">
            <Separator/>
            <div className="flex gap-8 m-8"> 
        <a 
            href="https://www.linkedin.com/in/davidvaldezgramajo/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform" 
        >
            <img className="w-8 h-8" src={linkedin} alt="Perfil de LinkedIn" />
        </a>
        
        <a 
            href="https://github.com/Davidvg29" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
        >
            <img className="w-8 h-8" src={github} alt="Perfil de GitHub" />
        </a>
    </div>
            <p className="text-muted-foreground text-sm m-2">
                <span className="font-semibold text-foreground">David Valdez Gramajo</span> 
                <span className="mx-2 opacity-50">|</span> 
                <em className="font-medium">
                    {
                        language === 'SPANISH' 
                        ? 'Desarrollador de Software' 
                        : 'Software Developer'
                    }
                </em>
            </p>
            <p className="m-7 text-muted-foreground text-xs">© {year} David Valdez Gramajo. {
                language === 'SPANISH' 
                ? 'Todos los derechos reservados.' 
                : 'All rights reserved.'
                } Tucumán, Argentina.
</p>
        </footer>
    )
}
export default Footer