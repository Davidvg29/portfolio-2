import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Separator } from "@/components/ui/separator"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { Menu } from 'lucide-react';
import { Link } from "react-router-dom"

export function MenuSheet() {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild className="p-5">
          <Button variant="outline" className="border-none shadow-none"><Menu className="w-6! h-6!"/></Button>
        </SheetTrigger>
        <SheetContent className="p-5">
          <SheetHeader>
            <SheetTitle>AUTOMATIC</SheetTitle>
          </SheetHeader>
          <Separator/>
            <Accordion type="single" collapsible className="w-full" defaultValue="">
              <AccordionItem value="item-1">
                <AccordionTrigger>Resource</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>Our flagship product combines cutting-edge technology with sleek
                    design. Built with premium materials, it offers unparalleled
                    performance and reliability.</p>
                  <p>Key features include advanced processing capabilities, and an
                    intuitive user interface designed for both beginners and experts.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          <Separator />
          <Link to="/" className="text-sm font-medium">Portfolio</Link>
          <Link to="/" className="text-sm font-medium">Start Project</Link>
          <Separator/>
          <Button className="mt-4 w-full">Contact Us</Button>
        </SheetContent>
      </Sheet>
    </div>
  )
}
