import AboutOurWork from "@/components/AboutOurWork";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import LatestProjects from "@/components/LatestProjects";
import Questions from "@/components/Questions";
import MainLayout from "@/Layouts/MainLayout";

const Home = () => {
    return ( 
        <MainLayout>
            <HeroSection/>
            <LatestProjects/>
            <AboutOurWork/>
            <Questions/>
            <ContactSection/>
        </MainLayout>
     );
}
 
export default Home;