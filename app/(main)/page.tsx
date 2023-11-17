"use client"
import SimpleLayout from "./layout";
import HeroSection from "../../Blocks/components/Website/Home/HeroSection";
import Request_a_Callback from "../../Blocks/components/Website/Home/Request_a_Callback";
import WelcomeSection from "../../Blocks/components/Website/Home/Welcome";
import Our_Work_Section from "../../Blocks/components/Website/Home/Our_Work";
import Utivor_Service from "../../Blocks/components/Website/Home/Service";


const HomeLandingPage = () => {
    return (
        <SimpleLayout showNavBar={true} showFooter={true}>
            <HeroSection />
            <WelcomeSection/>
            <Our_Work_Section/>
           <Utivor_Service/>
            <Request_a_Callback />
        </SimpleLayout>
    );
};

export default HomeLandingPage;
