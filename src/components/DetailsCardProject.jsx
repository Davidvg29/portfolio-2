import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { ArrowUpRight, Github  } from 'lucide-react';

const DetailsCardProject = ({project}) => {
    console.log(project);
    
    const demos = Array.isArray(project.demo)
  ? project.demo
  : project.demo
  ? [project.demo]
  : []


    return ( 
        <div className="flex justify-center">
                <Card className="w-full md:w-3xl pt-0 rounded-3xl shadow-lg">
                    <CardContent className="p-0 rounded-3xl">
                        {/* <img className="w-full h-100 p-5  object-contain rounded-t-3xl" src={project.img[0]} alt="" /> */}
                        <Carousel className="bg-gray-100 rounded-t-3xl shadow-md">
                            <CarouselContent>
                                {project.img.map((image, index)=>(
                                    <CarouselItem key={index}>
                                        <img className="w-full max-h-100 p-7 object-contain rounded-t-3xl" src={image} alt="" />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            {project.img.length > 1 ? (
                                <>
                                    <CarouselPrevious className="cursor-pointer absolute sm:left-10 left-2 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full "/>
                                    <CarouselNext className="cursor-pointer absolute sm:right-10 right-2 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full " />
                                </>
                            ): null}
                        </Carousel>
                    </CardContent>
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">{project.nombre}</CardTitle>
                        <p>{project.subtitle}</p>
                        <CardDescription>{project.descripcion}</CardDescription>
                        <p>{project.technologies}</p>
                    </CardHeader>
                    <CardFooter className="mb-5 flex flex-wrap">
                    {demos.length > 0 && (
                        demos.length > 1 ? (
                            demos.map((demoLink, index) => (
                            <Button key={index} className="mb-2 md:mr-2">
                                <a
                                href={demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-sm font-semibold"
                                >
                                Visitar proyecto {index + 1}
                                <ArrowUpRight size={16} className="ml-1" />
                                </a>
                            </Button>
                            ))
                        ) : (
                            <Button className="mb-2 md:mr-2">
                            <a
                                href={demos[0]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-sm font-semibold"
                            >
                                Visitar proyecto
                                <ArrowUpRight size={16} className="ml-1" />
                            </a>
                            </Button>
                        )
                        )}
                    {project.github != "" ? (
                        <Button className="mb-2 md:mr-2">
                            <a href={project.github} className="flex items-center text-sm font-semibold">GitHub<Github  size={16} className="ml-1"/></a>
                        </Button>
                    ): false}
                    </CardFooter>
                    </Card>
            </div>
     );
}
 
export default DetailsCardProject;