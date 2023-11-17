"use client";
import SimpleLayout from "../layout";
import {Header} from "../../../Blocks/ReusedComponent/Text_Typography";
import About_Hero from "../../../Blocks/components/Website/About/Hero1";


const HomeLandingPage = ()=> {
    return (
        <SimpleLayout showFooter={true} showNavBar={true}>
            <Header label="ABOUT"/>
               <About_Hero/>
        </SimpleLayout>
    );
}

export default HomeLandingPage
