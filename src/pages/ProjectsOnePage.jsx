import MainLayout from "@/Layouts/MainLayout"
import DetailsCardProject from "@/components/DetailsCardProject";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";

const ProjectOnePage = ()=>{

    const projects = useSelector(state=>state.experiences)
    const [project, setProject] = useState({});

    const {name} = useParams();

    useEffect(()=>{
        setProject(projects.find(p=>p.nombre === name || p.name === name));
    },[]);

    return ( 
        <MainLayout>
            <div className=" p-2 md:p-8">
                <h2 className="text-4xl md:text-5xl mb-8">Mi proyecto o trabajo</h2>
                {/* <h3 className="pr-5 mt-10">Desde la gestión de infraestructuras y la optimización de flujos de trabajo mediante software a medida, <br /> hasta la creación de landing pages para la presencia digital  conectando lógica de negocio <br />y la seguridad de datos con interfaces de usuario intuitivas y eficaces.</h3> */}
            </div>
            {project && project.nombre ? (
                <DetailsCardProject project={project}/>
            ):(
                <PageNotFound/>
            )}
        </MainLayout>
    )
}
export default ProjectOnePage