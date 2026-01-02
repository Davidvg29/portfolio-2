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

import { ArrowRight } from 'lucide-react';

import { Textarea } from "@/components/ui/textarea"
import sendContactForm from "@/services/sendContactForm";
import { useState } from "react";

const ContactForm = ()=>{

    const [data, setData] = useState({})

    const changeInputs = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendContactForm(data)
    }

    return(
        <div className="flex justify-center mb-10">
                <Card className="w-full sm:w-1/2 p-5 md:m-5  bg-zinc-600 text-white">
                    <CardHeader className="mt-5">Completa el formulario con tus datos, cuéntame brevemente tu idea o desafío y analicemos juntos cómo hacerlo realidad.</CardHeader>
                    <form action="" className="ml-5 mr-5">
                        <div className="grid w-full items-center gap-3">
                            <Label htmlFor="name">¿Cuál es tu nombre?</Label>
                            <Input type="text" id="name" name="name" onChange={changeInputs} className="h-10 bg-zinc-500" />
                        </div>

                        <div className="grid w-full items-center gap-3 mt-6">
                            <Label htmlFor="email">¿Cuál es tu correo electrónico?</Label>
                            <Input type="email" id="email" name="email" onChange={changeInputs} className="h-10 bg-zinc-500" />
                        </div>

                        <div className="grid w-full items-center gap-3 mt-6">
                            <Label htmlFor="phone">¿Cuál es tu número de teléfono?</Label>
                            <Input 
                                type="tel" 
                                id="phone" 
                                name="phone"
                                onChange={changeInputs}
                                className="h-10 bg-zinc-500" 
                            />
                        </div>

                        <div className="grid w-full gap-3 mt-6">
                            <Label htmlFor="message">Escribe aquí tu idea y/o consulta</Label>
                            <Textarea id="message" name="message"onChange={changeInputs}  className="max-h-30 resize-none bg-zinc-500"/>
                        </div>

                        <div className="grid w-full items-center gap-3 mt-10 mb-5">
                            <Button className="w-32 bg-white text-black hover:text-white cursor-pointer" onClick={handleSubmit}>Enviar <ArrowRight/></Button>
                        </div>
                    </form>
                </Card>
            </div>
    )
}
export default ContactForm