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
import { useSelector } from "react-redux";

const CardProject = ({project, index}) => {
    const language = useSelector(state=>state.language)

    return ( 
            <Link to={`/portafolio/proyecto/${
                language === 'SPANISH' 
                ? project.nombre 
                : project.name}`
            } key={index} className="w-full pt-0 rounded-3xl cursor-pointer shadow-lg hover:scale-102 transition delay-150 duration-300 ease-in-out" >
                <Card className="relative">
                    <CardContent className="p-0 rounded-3xl">
                        {/* <div className="flex justify-end px-5 h-5"> */}
                            {project.actually ? (
                                <Badge variant="default" className=" bg-green-200 absolute right-3 top-3 text-green-800">{language === 'SPANISH' ? 'Actualmente': 'Currently'}</Badge>
                            ) : false}
                        {/* </div> */}
                            <img className="w-full h-50 object-contain p-5 rounded-t-3xl" src={project.img[0]} alt="" />
                        </CardContent>
                        <CardHeader>
                            <CardTitle className="text-2xl h-15 overflow-auto">
                                {
                                    language === 'SPANISH' 
                                    ? project.nombre 
                                    : project.name
                                }
                            </CardTitle>
                            <CardDescription className="line-clamp-2">
                                {
                                    language === 'SPANISH' 
                                    ? project.descripcion 
                                    : project.description
                                }
                            </CardDescription>
                        </CardHeader>
                    <CardFooter className="mb-5">
                        <p className="flex items-center text-sm font-semibold text-primary">
                            {
                                language === 'SPANISH'
                                ? 'Ver proyecto'
                                : 'View project'
                            }
                            <ArrowUpRight size={16} className="ml-1"/>
                        </p>
                    </CardFooter>
                </Card>
            </Link>
     );
}
 
export default CardProject;