import { useSelector } from "react-redux";
import CardProject from "./CardProject";

const CardsProjects = ()=>{
    const projects = useSelector(state=>state.experiences)
    console.log(projects);
    
    return(
        <div className="p-8">
            <div className=" mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3 place-items-center">
                {projects.map((project, index)=>(
                    <CardProject key={index} project={project}/>
                ))}
            </div>
        </div>
    )
}
export default CardsProjects