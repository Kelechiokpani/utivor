"use client";
import SimpleLayout from "../layout";
import Why_KreativeRock from "../../../Blocks/components/Website/Mobile_texting/Why_KreativeRock";
import HeroSection from "../../../Blocks/components/Website/Mobile_texting/HeroSection";
import KreativeRockMobile_Texting from "../../../Blocks/components/Website/Mobile_texting/KreativeRockMobile_Texting";
import Simple_Texting_Pricing from "../../../Blocks/components/Website/Mobile_texting/Simple_Texting_Pricing";
import Features from "../../../Blocks/components/Website/Mobile_texting/Features";
import UseCase from "../../../Blocks/components/Website/Mobile_texting/useCase";
import Enquiry_with_Image from "../../../Blocks/components/Website/Mobile_texting/Enquiry_with_Image";


const HomeLandingPage = ()=> {
    return (
        <SimpleLayout showFooter={true} showNavBar={true}>
            <HeroSection />
            <Why_KreativeRock />
            <KreativeRockMobile_Texting/>
            <Simple_Texting_Pricing />
            <Features />
            <UseCase/>
            <Enquiry_with_Image/>
        </SimpleLayout>
    );
}

export default HomeLandingPage
