import NavBar from "./NavBar";

const Header = () => {
  return ( 
    <>
      <div className="h-24 md:p-10 flex items-center justify-between ">
        <p className="text-2xl font-bold tracking-tight text-balance">AUTOMATIC</p>
        <NavBar/>
      </div>
    </>
   );
}
 
export default Header;