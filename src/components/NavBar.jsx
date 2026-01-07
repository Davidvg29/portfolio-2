import { Link } from "react-router-dom"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon, Menu, Languages, Check } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { useEffect, useState } from "react"
import { MenuSheet } from "./MenuSheet"
import { useDispatch, useSelector } from "react-redux"
import { alertMessage, changeLanguage } from "@/store/action"
import Loading from "./Loading"

const NavBar =() => {

  const [sizeWidth, setSizeWidth] = useState(window.innerWidth)
  const dispatch = useDispatch()
  const language = useSelector(state => state.language)
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setSizeWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLanguage = (newLanguage)=>{
    if(language != newLanguage){
      setLoader(true)
      setTimeout(() => {
        dispatch(changeLanguage(newLanguage))
        setLoader(false)
      }, 500);
    }
  }  

  const TEXTS = {
    SPANISH: {
      portfolio: "Portafolio",
      startProject: "Iniciar proyecto",
      languageLabel: "Idioma",
      spanishOption: "🇪🇸 - Español",
      englishOption: "🇺🇸 - Inglés",
    },
    ENGLISH: {
      portfolio: "Portfolio",
      startProject: "Start project",
      languageLabel: "Language",
      spanishOption: "🇪🇸 - Spanish",
      englishOption: "🇺🇸 - English",
    }
  }

  const t = TEXTS[language];

  return (
    <>
      {sizeWidth > 767? (
        <NavigationMenu viewport={false}>
      <NavigationMenuList className="flex-wrap">
        {/* portfolio LINK */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/portafolio" className="bg-transparent">
              {t.portfolio}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/contacto" className="bg-transparent">
            {t.startProject}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* language */}
        <NavigationMenuItem className="hidden md:block ">
          <NavigationMenuTrigger className="bg-transparent cursor-pointer"><Languages className="m-2" size={18}/>
            {t.languageLabel}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="mt-10 border-2 ">
            <ul className="grid w-[150px] gap-4 ">
              <li>
                <NavigationMenuLink asChild>
                    <div className="font-medium cursor-pointer flex flex-row justify-between items-center" onClick={()=>{handleLanguage('SPANISH')}}> 
                        {t.spanishOption}
                        {language === 'SPANISH' ? <Check size={16} className="ml-2 text-green-600"/> : null}
                    </div>
                </NavigationMenuLink>

                <NavigationMenuLink asChild>
                    <div className="font-medium cursor-pointer flex flex-row justify-between items-center" onClick={()=>{handleLanguage('ENGLISH')}}>
                      {t.englishOption}
                      {language === 'ENGLISH' ? <Check size={16} className="ml-2 text-green-600"/> : null}
                    </div>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
      ) : (
        <MenuSheet/>
      )}
      {loader ? <Loading message={language === 'SPANISH' ? "Cambiando idioma..." : "Changing language..."}/> : null}
    </>
  )
}

export default NavBar;