import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { ArrowUpRight } from 'lucide-react';
import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge"

const CardProject = ({project, index}) => {
    return ( 
            <Link to={`/portafolio/proyecto/${project.nombre}`} key={index} className="w-full pt-0 rounded-3xl cursor-pointer shadow-lg hover:scale-102 transition delay-150 duration-300 ease-in-out" >
        <Card className="relative">
            <CardContent className="p-0 rounded-3xl">
                {/* <div className="flex justify-end px-5 h-5"> */}
                    {project.actually ? (
                        <Badge variant="default" className=" bg-green-200 absolute right-3 top-3 text-green-800">Actualmente</Badge>
                    ) : false}
                {/* </div> */}
                    <img className="w-full h-50 object-contain p-5 rounded-t-3xl" src={project.img[0]} alt="" />
                </CardContent>
                <CardHeader>
                    <CardTitle className="text-2xl font-bold h-15 overflow-auto">{project.nombre}</CardTitle>
                    <CardDescription className="h-15 overflow-auto">{project.descripcion}</CardDescription>
                </CardHeader>
            <CardFooter className="mb-5">
                <p className="flex items-center text-sm font-semibold">Ver proyecto <ArrowUpRight size={16} className="ml-1"/></p>
            </CardFooter>
        </Card>
            </Link>
     );
}
 
export default CardProject;