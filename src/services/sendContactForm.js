import validationContactForm from "@/validations/validationContactForm";

const sendContactForm = (data) => {
    console.log("mensaje nviado");
    console.log("esta es la data ", data);
    
    validationContactForm(data)
    
}
 
export default sendContactForm;