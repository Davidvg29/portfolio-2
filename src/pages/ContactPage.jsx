import MainLayout from "@/Layouts/MainLayout"
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

const ContactPage = ()=>{
    return(
       <MainLayout>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Ready to Start <br /> Your Next Project?</h2>
            <div className="flex justify-center mb-10">
                <Card className="w-1/2 p-5 m-5">
                    <CardHeader>Answer some quick questions about your project and then schedule a call with your project manager.</CardHeader>
                    <form action="" className="ml-5 mr-5">
                        <div className="grid w-full items-center gap-3">
                            <Label htmlFor="text">What is your first name? *</Label>
                            <Input type="name" id="name" className="h-10" />
                        </div>

                        <div className="grid w-full items-center gap-3 mt-6">
                            <Label htmlFor="email">What is your email? *</Label>
                            <Input type="email" id="email" className="h-10" />
                        </div>

                        <div className="grid w-full items-center gap-3 mt-6">
                            <Label htmlFor="phone">Your phone number</Label>
                            <Input type="number" id="phone" className="h-10 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                        </div>

                        <div className="grid w-full items-center gap-3 mt-10 mb-5">
                            <Button className="w-30">Next <ArrowRight/></Button>
                        </div>
                    </form>
                </Card>
            </div>
       </MainLayout>
    )
}
export default ContactPage