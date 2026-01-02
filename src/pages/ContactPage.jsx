import MainLayout from "@/Layouts/MainLayout"
import ContactForm from "@/components/ContactForm"

const ContactPage = ()=>{
    return(
       <MainLayout>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">¿Listo para comenzar <br /> tu próximo proyecto?</h2>
            <ContactForm/>
       </MainLayout>
    )
}
export default ContactPage