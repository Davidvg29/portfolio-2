import CardsProjects from "@/components/CardsProjects";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainLayout from "@/Layouts/MainLayout";

const ProjectsPage = () => {
    return ( 
        <MainLayout>
            <Header/>
            <div className="mt-5  p-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Portfolio</h2>
                <h3 className="pr-5 mt-10">Explore our latest projects and case studies. From AI-driven automation to custom <br /> marketplaces, our work helps businesses scale smarter.</h3>
            </div>
            <CardsProjects/>
            <Footer/>
        </MainLayout>
     );
}
 
export default ProjectsPage;