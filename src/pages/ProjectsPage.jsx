import CardsProjects from "@/components/CardsProjects";
import MainLayout from "@/Layouts/MainLayout";
import { useSelector } from "react-redux";

const ProjectsPage = () => {
    const language = useSelector((state) => state.language);

    return ( 
        <MainLayout>
            <div className="mt-5 p-2 md:p-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                    {
                        language === 'SPANISH'
                        ? 'Mi Portafolio'
                        : 'My Portfolio'
                    }
                </h2>
                <h3 className="pr-5 mt-10">
                    {
                        language === 'SPANISH'
                        ? <>Desde la gestión de infraestructuras y la optimización de flujos de trabajo mediante software a medida, <br /> hasta la creación de landing pages para la presencia digital  conectando lógica de negocio <br />y la seguridad de datos con interfaces de usuario intuitivas y eficaces.</>
                        : <>From infrastructure management and workflow optimization using custom software, <br /> to the creation of landing pages for digital presence, connecting business logic <br /> and data security with intuitive and efficient user interfaces.</>
                    }
                </h3>
            </div>
            <CardsProjects/>
        </MainLayout>
     );
}
 
export default ProjectsPage;