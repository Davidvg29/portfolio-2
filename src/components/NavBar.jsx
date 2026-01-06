import { Link } from "react-router-dom"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon, Menu, Languages } from "lucide-react"

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

const NavBar =() => {

  const [sizeWidth, setSizeWidth] = useState(window.innerWidth)
  const dispatch = useDispatch()
  const language = useSelector(state => state.language)

  useEffect(() => {
    const handleResize = () => {
      setSizeWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLanguage = ()=>{
    if(language === "SPANISH"){
      dispatch(changeLanguage("ENGLISH"))
      dispatch(alertMessage(true, false, "¡Uy! Lo siento, aún no he configurado la versión en inglés. ¡Inténtalo de nuevo pronto! | Oops! Sorry, I haven't set up the English version yet. Try again soon!."))
    }else{
      dispatch(changeLanguage("SPANISH"))
      dispatch(alertMessage(true, false, "¡Uy! Lo siento, aún no he configurado la versión en inglés. ¡Inténtalo de nuevo pronto! | Oops! Sorry, I haven't set up the English version yet. Try again soon!."))
    }
  }  

  return (
    <>
      {sizeWidth > 767? (
        <NavigationMenu viewport={false}>
      <NavigationMenuList className="flex-wrap">
        {/* portfolio LINK */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/portafolio" className="bg-transparent">Portafolio</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/contacto" className="bg-transparent">Iniciar proyecto</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* language */}
        <NavigationMenuItem className="hidden md:block ">
          <NavigationMenuTrigger className="bg-transparent cursor-pointer"><Languages className="m-2" size={18}/> Idioma</NavigationMenuTrigger>
          <NavigationMenuContent className="mt-10 border-2 ">
            <ul className="grid w-[150px] gap-4 ">
              <li>
                <NavigationMenuLink asChild>
                    <div className="font-medium cursor-pointer" onClick={handleLanguage}>🇪🇸 - Spanish</div>
                </NavigationMenuLink>

                <NavigationMenuLink asChild>
                    <div className="font-medium cursor-pointer" onClick={handleLanguage}>🇺🇸 - English</div>
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
    </>
  )
}

export default NavBar;