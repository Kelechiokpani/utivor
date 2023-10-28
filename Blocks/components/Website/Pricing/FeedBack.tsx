"use client"
import Message from "../../../../public/image/website/pricing/msg.png"
import Image from "next/image";
import {useRouter} from "next/navigation";
import {Hero_section} from "../../../../styles/Styled_component/StyledComponent";
import {CustomButton} from "../../../ReusedComponent/Styled_Button";

const FeedBack = ( )=>{
    const router = useRouter();

    const NewRoute = () => {
        router.push("/pricing");
    };

    return(
        <Hero_section className=" px-4 py-8 md:px-6 lg:px-8 p-8 ">
            <div className="flex flex-wrap justify-content-center align-content-center text-center">

                <div className="w-full xl:w-5 p-3 pr-5">
                        <Image src={Message} alt="Message" style={{width:"20rem", height:"20rem"}}/>
                </div>

                <div className="w-full xl:w-6 p-3 pr-5 mt-6 text-left">
                    <h2 className=" font-bold  text-6xl  mb-6 text-900 mb-4 block">Form Sent</h2>
                    <p className=" text-700 line-height-8 text-md">Your form has been sent and one of our Rep</p>

                    <p className=" text-700 line-height-8 text-md"> will get in touch with you within the next 24hrs on the next step.</p>

                    <CustomButton
                        label={`Submit another form`}
                        className="custom-blue-button capitalize mt-7 mb-8"
                        icon="add"
                        onClick={NewRoute}
                    />
                </div>

            </div>
        </Hero_section>

    )
}


export default FeedBack