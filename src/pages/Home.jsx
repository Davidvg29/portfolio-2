import AboutOurWork from "@/components/AboutOurWork";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LatestProjects from "@/components/LatestProjects";
import Questions from "@/components/Questions";

const Home = () => {
    return ( 
        <div>
            <Header />
            <HeroSection/>
            <LatestProjects/>
            <AboutOurWork/>
            <Questions/>
        </div>
     );
}
 
export default Home;