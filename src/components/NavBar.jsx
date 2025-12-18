import { Link } from "react-router-dom"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon, Menu } from "lucide-react"

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

        {/* LIST */}
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>Resource</NavigationMenuTrigger>
          <NavigationMenuContent className="mt-10 border-2">
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link to="#">
                    <div className="font-medium">Resource</div>
                    <div className="text-muted-foreground">
                      Browse all components in the library.
                    </div>
                  </Link>
                </NavigationMenuLink>

                <NavigationMenuLink asChild>
                  <Link to="#">
                    <div className="font-medium">Documentation</div>
                    <div className="text-muted-foreground">
                      Learn how to use the library.
                    </div>
                  </Link>
                </NavigationMenuLink>

                <NavigationMenuLink asChild>
                  <Link to="#">
                    <div className="font-medium">Blog</div>
                    <div className="text-muted-foreground">
                      Read our latest blog posts.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* DOCS LINK */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/portfolio">Portfolio</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/docs">Start Project</Link>
          </NavigationMenuLink>
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