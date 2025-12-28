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
            {project && project.nombre ? (
                <DetailsCardProject project={project}/>
            ):(
                <PageNotFound/>
            )}
        </MainLayout>
    )
}
export default ProjectOnePage