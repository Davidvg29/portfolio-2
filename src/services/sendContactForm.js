import validationContactForm from "@/validations/validationContactForm";
import emailjs from '@emailjs/browser';

const sendContactForm = async (data) => {
     try {
        await Promise.all([
            emailjs.send('service_pb4tg1b', 'template_o18otlw', data, {publicKey: '9csmCETj1GHCthZR6'}),
            emailjs.send('service_pb4tg1b', 'template_b2jerwa', data, {publicKey: '9csmCETj1GHCthZR6'})
        ])
        return true
     } catch (error) {
        throw error
     }
}
 
export default sendContactForm;