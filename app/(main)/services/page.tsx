"use client";
import SimpleLayout from "../layout";
import {Header} from "../../../Blocks/ReusedComponent/Text_Typography";
import Service_Hero from "../../../Blocks/components/Website/Serives/Service_Hero";
import Utivor_Service from "../../../Blocks/components/Website/Home/Service";


const HomeLandingPage = ()=> {
    return (
        <SimpleLayout showFooter={true} showNavBar={true}>
            <Header label="SERVICES"/>
            <Service_Hero/>
            <Utivor_Service/>
        </SimpleLayout>
    );
}

export default HomeLandingPage
