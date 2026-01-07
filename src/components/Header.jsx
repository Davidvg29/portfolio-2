import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";

const Header = () => {

  const language = useSelector((state) => state.language);

  return ( 
    <header className="fixed top-0 left-0 z-5 w-full bg-white/90 backdrop-blur-xs border-b shadow-xs px-5">
      <div className="h-20 md:p-10 flex items-center justify-between ">
        <Link to="/">
          <p className="text-2xl font-bold tracking-tight text-balance">DAVID VALDEZ GRAMAJO</p>
          <p className="text-md">
            {language === 'SPANISH' ? 'Desarrollador de software' : 'Software Developer'}
          </p>
        </Link>
        <NavBar/>
      </div>
    </header>
   );
}
 
export default Header;