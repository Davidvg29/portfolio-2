import MainLayout from "@/Layouts/MainLayout"
import ContactForm from "@/components/ContactForm"


const ContactPage = ()=>{
    return(
       <MainLayout>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Ready to Start <br /> Your Next Project?</h2>
            <ContactForm/>
       </MainLayout>
    )
}
export default ContactPage