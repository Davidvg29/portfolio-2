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

const NavBar =() => {

  const [sizeWidth, setSizeWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setSizeWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {sizeWidth > 767? (
        <NavigationMenu viewport={false}>
      <NavigationMenuList className="flex-wrap">

        

        {/* portfolio LINK */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/portfolio" className="bg-transparent">Portfolio</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/contact" className="bg-transparent">Start Project</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* language */}
        <NavigationMenuItem className="hidden md:block ">
          <NavigationMenuTrigger className="bg-transparent"><Languages className="m-2" size={18}/> Language</NavigationMenuTrigger>
          <NavigationMenuContent className="mt-10 border-2 ">
            <ul className="grid w-[150px] gap-4 ">
              <li>
                <NavigationMenuLink asChild>
                  <Link to="#">
                    <div className="font-medium">🇪🇸 - Spanish</div>
                    
                  </Link>
                </NavigationMenuLink>

                <NavigationMenuLink asChild>
                  <Link to="#">
                    <div className="font-medium">🇺🇸 - English</div>
                    
                  </Link>
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