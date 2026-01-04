import CardsProjects from "@/components/CardsProjects";
import MainLayout from "@/Layouts/MainLayout";

const ProjectsPage = () => {
    return ( 
        <MainLayout>
            <div className="mt-5 p-2 md:p-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Mi Portafolio</h2>
                <h3 className="pr-5 mt-10">Desde la gestión de infraestructuras y la optimización de flujos de trabajo mediante software a medida, <br /> hasta la creación de landing pages para la presencia digital  conectando lógica de negocio <br />y la seguridad de datos con interfaces de usuario intuitivas y eficaces.</h3>
            </div>
            <CardsProjects/>
        </MainLayout>
     );
}
 
export default ProjectsPage;