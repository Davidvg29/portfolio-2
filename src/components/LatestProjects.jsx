import { Button } from "@/components/ui/button"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardProject from "./CardProject";

const LatestProjects = ()=>{
    const projects = useSelector(state=>state.experiences)

    return(
        <div className="mt-10 p-2 md:p-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Explora mis trabajos y <br /> últimos proyectos</h2>
            {/* <h3 className="pr-5 mt-10">Desde la gestión de infraestructuras y la optimización de flujos de trabajo mediante software a medida, <br /> hasta la creación de landing pages para la presencia digital  conectando lógica de negocio <br />y la seguridad de datos con interfaces de usuario intuitivas y eficaces.</h3> */}
            <div className=" mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3 place-items-center">
                {projects.slice(0,3).map((project, index)=>(
                    <CardProject key={index} project={project}/>
                ))}
            </div>
            <div className="flex justify-center mt-10">
                <Link to="/portafolio"><Button className="cursor-pointer">Ver todos los proyectos</Button></Link>
            </div>
        </div>
    )
}
export default LatestProjects;