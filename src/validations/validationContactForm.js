const validationContactForm = ({name, email, phone, message}, language) => {
    
    let error;
    if(language === "SPANISH"){
        if(name === undefined || name.length < 2){return error='El nombre es obligatorio y debe tener al menos 2 caracteres.'};
        if(email === undefined || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)){return error='El correo electrónico es obligatorio y debe tener un formato válido.'};
        if(phone === undefined || !/^\+?[0-9]{7,15}$/.test(phone)){return error='El número de teléfono es obligatorio y debe tener un formato válido.'}
        if(message === undefined || message.length < 10){return error='El mensaje es obligatorio y debe tener al menos 10 caracteres.'};
    }
    else{
        if(name === undefined || name.length < 2){return error='The name is required and must be at least 2 characters long.'};
        if(email === undefined || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)){return error='Email is required and must be in a valid format.'};
        if(phone === undefined || !/^\+?[0-9]{7,15}$/.test(phone)){return error='The phone number is required and must be in a valid format.'}
        if(message === undefined || message.length < 10){return error='The message is required and must be at least 10 characters long.'};
    }
    return true
}
 
export default validationContactForm;