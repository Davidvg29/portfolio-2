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
import { Link } from "react-router-dom"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Questions = ()=>{
    return(
        <div className="mt-10 flex justify-center p-2 md:p-8">
            <Card className="w-full max-w-6xl shadow-lg">
                <div className="flex flex-col justify-center p-8 sm:pl-14 sm:pr-14">
                    <h2 className="text-4xl md:text-5xl font-bold ">Frequently Asked <br /> Questions</h2>
                    <h3 className="pr-5 mt-10">Have questions about our services? Find answers to the most common questions and learn how our team can enhance your creative process.</h3>
                    <div className="mt-5">
                        <Accordion type="single" collapsible className="w-full" defaultValue="">
                        <AccordionItem value="item-1" className="mb-3">
                            <AccordionTrigger className="cursor-pointer">What can I expect when we work together?</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>We start with a discovery call to understand your needs, then provide a detailed proposal with timeline and cost estimates. Once approved, we begin development with regular updates and feedback sessions.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="mb-3">
                            <AccordionTrigger className="cursor-pointer">How long do projects take to build?</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>Project timelines vary based on complexity. Simple websites might take 2-4 weeks, while complex platforms can take 3-6 months. We provide detailed timelines during the proposal phase.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="mb-3">
                            <AccordionTrigger className="cursor-pointer">What tools do you use to build?</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>We use modern frameworks like React, Next.js, and Node.js, along with AI tools and cloud services. Our stack is tailored to each project's specific requirements.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4" className="mb-3">
                            <AccordionTrigger className="cursor-pointer">How much does a typical project cost?</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>Project costs vary widely based on requirements. Simple websites start around $5,000, while complex platforms can range from $25,000 to $100,000+. We provide detailed quotes after our discovery process.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5" className="mb-3">
                            <AccordionTrigger className="cursor-pointer">How do you manage payments?</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>We typically work with a 50% upfront deposit and the remaining 50% upon project completion. For larger projects, we may establish milestone-based payment schedules.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6" className="mb-3">
                            <AccordionTrigger className="cursor-pointer">Can you manage my app's technical support with users?</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>Yes, we offer ongoing technical support and maintenance packages. These can include user support, bug fixes, feature updates, and performance monitoring.</p>
                            </AccordionContent>
                        </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </Card>
        </div>
    )
}
export default Questions