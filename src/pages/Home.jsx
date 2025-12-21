import AboutOurWork from "@/components/AboutOurWork";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LatestProjects from "@/components/LatestProjects";
import Questions from "@/components/Questions";
import MainLayout from "@/Layouts/MainLayout";

const Home = () => {
    return ( 
        <MainLayout>
            <Header />
            <HeroSection/>
            <LatestProjects/>
            <AboutOurWork/>
            <Questions/>
            <ContactSection/>
            <Footer/>
        </MainLayout>
     );
}
 
export default Home;