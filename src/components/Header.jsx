import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Header = () => {
  return ( 
    <>
      <div className="h-24 md:p-10 flex items-center justify-between ">
        <Link to="/"><p className="text-2xl font-bold tracking-tight text-balance">AUTOMATIC</p></Link>
        <NavBar/>
      </div>
    </>
   );
}
 
export default Header;