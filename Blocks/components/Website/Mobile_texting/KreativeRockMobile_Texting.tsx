"use client"

import TS1 from "../../../../public/image/website/mobile_texting/TS1.svg";
import TS2 from "../../../../public/image/website/mobile_texting/TS2.svg";
import TS3 from "../../../../public/image/website/mobile_texting/TS3.svg";

import {Header_Top, HR_Line} from "../../../ReusedComponent/Text_Typography";
import {Container} from "../../../../styles/Styled_component/StyledComponent";




const TextingServiceItems = [
    {
        id:1,
        icon:TS1.src,
        title:"Interactive Texting Solutions (2-Way SMS",
        description:"Send and receive SMS globally. Engage in rich, simplified, purposeful and interactive conversation with your customers. Stay in touch with them & show them your care.."
    },
    {
        id:2,
        icon:TS2.src,
        title:"Simple Texting Solutions (1-Way SMS)",
        description:"Customize your Senders ID & \n" +
            "personalize communications with your audience. Send text SMS worldwide and monitor your SMS delivery with our real time reporting."
    },
    {
        id:3,
        icon:TS3.src,
        title:"Enterprise Texting Solutions (Bulk SMS)",
        description:" Communicate & build stronger \n" +
            "relationships with unlimited number of contacts and scale your business faster.Save time, efforts and access the world \n" +
            "faster.. "
    },

]

const KreativeRockMobile_Texting = ( )=>{

    return (
        <Container>
            <div className="px-4  md:px-6 lg:px-8" >
                {/*<div className='p-2 m-6'>*/}
                    <div className='lg:p-8 p-2'>
                    <Header_Top label='KreativeRock Mobile Texting Services'/>
                     <HR_Line/>
                   </div>

                <div className="grid mt-7">
                    {TextingServiceItems?.map((data:any)=> (
                        <div className="col-12 md:col-4" key={data?.id}>
                            <div className="shadow-1 lg:p-7 p-4 surface-card text-center border-round-2xl">
                                <div className="border-circle bg-blue-50 p-4 inline-flex justify-content-center align-items-center mb-4">
                                    <img src={data?.icon} alt='data?.icon' key={data?.id} className=''/>
                                </div>
                                <div className="text-900 font-bold text-lg  mb-4">{data?.title}</div>
                                <div className="text-700 mb-4 line-height-3">{data?.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    )
}


export default KreativeRockMobile_Texting