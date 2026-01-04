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
            <SheetTitle>DAVID VALDEZ GRAMAJO</SheetTitle>
          </SheetHeader>
          
          <Separator />
          <Link to="/portafolio" className="text-sm font-medium">Portafolio</Link>
          <Link to="/contacto" className="text-sm font-medium">Iniciar proyecto</Link>
          <Separator/>
            <Accordion type="single" collapsible className="w-full" defaultValue="">
              <AccordionItem value="item-1">
                <AccordionTrigger>Idioma</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <Link to="#">
                    <div className="font-medium">🇪🇸 - Español</div>
                  </Link>
                  <Link to="#">
                    <div className="font-medium">🇺🇸 - Ingles</div>
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          <Separator/>
          <Link to="/contacto"><Button className="mt-4 w-full">Contactarme</Button></Link>
        </SheetContent>
      </Sheet>
    </div>
  )
}
