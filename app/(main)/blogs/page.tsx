"use client";
import SimpleLayout from "../layout";
import {Header} from "../../../Blocks/ReusedComponent/Text_Typography";
import About_Hero from "../../../Blocks/components/Website/About/Hero1";
import Blog_Hero from "../../../Blocks/components/Website/Blogs/Blog_Hero";


const HomeLandingPage = ()=> {
    return (
        <SimpleLayout showFooter={true} showNavBar={true}>
            <Header label="BLOG"/>
            <Blog_Hero/>
        </SimpleLayout>
    );
}

export default HomeLandingPage
