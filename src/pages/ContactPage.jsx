import MainLayout from "@/Layouts/MainLayout"
import ContactForm from "@/components/ContactForm"
import { Languages } from "lucide-react"
import { useSelector } from "react-redux"

const ContactPage = ()=>{
    const languages = useSelector((state)=>state.language)

    return(
       <MainLayout>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
                {
                    languages === "SPANISH" 
                    ?  <>¿Listo para <span className="text-primary">comenzar</span> <br /> tu próximo proyecto?</>
                    : <>Ready to <span className="text-primary">start</span> <br/> your next project?</>
                }
            </h2>
            <ContactForm/>
       </MainLayout>
    )
}
export default ContactPage