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
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CardsProjects = ()=>{
    const projects = useSelector(state=>state.experiences)

    return(
        <div className="p-8">
            <div className=" mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3 place-items-center">
                {projects.map((p)=>(
                    <Link to={`/portfolio/project/${p.name}`} className="w-full pt-0 rounded-3xl cursor-pointer shadow-lg hover:scale-102 transition delay-150 duration-300 ease-in-out">
                        <Card>
                            <CardContent className="p-0 rounded-3xl">
                                <img className="w-full h-60 object-contain p-5 rounded-t-3xl" src={p.img[0]} alt="" />
                            </CardContent>
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold">{p.name}</CardTitle>
                                <CardDescription>
                                AI-powered task management platform for teams
                                </CardDescription>
                            </CardHeader>
                            <CardFooter className="mb-5">
                            <Link to="/" className="flex items-center text-sm font-semibold">View Project <ArrowUpRight size={16} className="ml-1"/></Link>
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default CardsProjects