import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
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
import { useDispatch, useSelector } from "react-redux"
import { changeLanguage } from "@/store/action"
import { useState } from "react";
import Loading from "./Loading";

// 1. DICCIONARIO DE TEXTOS (Igual que en NavBar)
const TEXTS = {
  SPANISH: {
    title: "DAVID VALDEZ GRAMAJO",
    portfolio: "Portafolio",
    startProject: "Iniciar proyecto",
    languageLabel: "Idioma",
    spanishOption: "🇪🇸 - Español",
    englishOption: "🇺🇸 - Inglés",
    contactBtn: "Contactarme"
  },
  ENGLISH: {
    title: "DAVID VALDEZ GRAMAJO",
    portfolio: "Portfolio",
    startProject: "Start project",
    languageLabel: "Language",
    spanishOption: "🇪🇸 - Spanish",
    englishOption: "🇺🇸 - English",
    contactBtn: "Contact Me"
  }
}

export function MenuSheet() {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  // Obtenemos idioma (con fallback a 'SPANISH')
  const language = useSelector(state => state.language) || 'SPANISH';
  const t = TEXTS[language];

  // 2. LÓGICA DE CAMBIO DE IDIOMA
  const handleLanguage = (newLanguage)=>{
    if(language != newLanguage){
      setLoader(true)
      setTimeout(() => {
        dispatch(changeLanguage(newLanguage))
        setLoader(false)
      }, 500);
    }
  }  

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild className="p-5">
          <Button variant="outline" className="border-none shadow-none">
            <Menu className="w-6 h-6"/> {/* Quité los ! que pueden dar error de sintaxis en algunos linters */}
          </Button>
        </SheetTrigger>
        
        <SheetContent className="p-5">
          <SheetHeader>
            <SheetTitle>{t.title}</SheetTitle>
          </SheetHeader>
          
          <Separator className="my-4" />
          
          {/* Agregué este div flex para que los links se listen verticalmente con espacio */}
          <div className="flex flex-col gap-4 mb-4">
            <Link to="/portafolio" className="text-sm font-medium">
              {t.portfolio}
            </Link>
            <Link to="/contacto" className="text-sm font-medium">
              {t.startProject}
            </Link>
          </div>

          <Separator/>
          
            <Accordion type="single" collapsible className="w-full" defaultValue="">
              <AccordionItem value="item-1">
                <AccordionTrigger>{t.languageLabel}</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    
                    {/* Opción Español */}
                    <div 
                      className={`font-medium cursor-pointer p-2 rounded hover:bg-slate-100 ${language === 'SPANISH' ? 'bg-slate-100 font-bold' : ''}`}
                      onClick={() => handleLanguage('SPANISH')}
                    >
                      {t.spanishOption}
                    </div>

                    {/* Opción Inglés */}
                    <div 
                      className={`font-medium cursor-pointer p-2 rounded hover:bg-slate-100 ${language === 'ENGLISH' ? 'bg-slate-100 font-bold' : ''}`}
                      onClick={() => handleLanguage('ENGLISH')}
                    >
                      {t.englishOption}
                    </div>

                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
          <Separator className="mt-4"/>
          
          <Link to="/contacto">
            <Button className="mt-4 w-full">{t.contactBtn}</Button>
          </Link>
          
        </SheetContent>
      </Sheet>
      {loader ? <Loading message={language === 'SPANISH' ? "Cambiando idioma..." : "Changing language..."}/> : null}
    </div>
  )
}