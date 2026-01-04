import { Button } from "@/components/ui/button";
import MainLayout from "@/Layouts/MainLayout";
import { SearchX } from 'lucide-react';
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return ( 
        <MainLayout>
             <div className="flex flex-col items-center justify-center text-center">
                <p className="text-6xl font-bold mt-10">404</p>
                <p className="text-lg mt-2">Parece que te perdiste</p>
                <p className="text-lg mt-2">Esta página no existe, pero hay mucho para ver en el sitio.</p>
                <Link to="/" className="mt-4 inline-flex items-center">
                    <Button className="cursor-pointer">
                        <SearchX className=""/>
                        Volver al inicio
                    </Button>
                </Link>
            </div>
        </MainLayout>
     );
}
 
export default PageNotFound;