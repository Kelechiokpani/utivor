"use client"
import SimpleLayout from "./layout";
import HeroSection from "../../Blocks/components/Website/Home/HeroSection";
import Why_Use_KreativeRock from "../../Blocks/components/Website/Home/Why_Use_KreativeRock";
import Our_Services from "../../Blocks/components/Website/Home/Our_Services";
import Our_Clients from "../../Blocks/components/Website/Home/Our_Clients";
import Request_a_Callback from "../../Blocks/components/Website/Home/Request_a_Callback";

const HomeLandingPage = () => {
    return (
        <SimpleLayout showNavBar={true} showFooter={true}>
            <HeroSection />
            <Why_Use_KreativeRock />
            <Our_Services />
            <Our_Clients />
            <Request_a_Callback />
        </SimpleLayout>
    );
};

export default HomeLandingPage;
