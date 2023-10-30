"use client"

import F6 from "../../../../public/image/website/mobile_texting/F6.svg"
import F5 from "../../../../public/image/website/mobile_texting/F5.svg"
import F4 from "../../../../public/image/website/mobile_texting/F4.svg"
import F3 from "../../../../public/image/website/mobile_texting/F3.svg"
import F2 from "../../../../public/image/website/mobile_texting/F2.svg"
import F1 from "../../../../public/image/website/mobile_texting/F1.svg"

import {Header_Top, Header_Top_Description} from "../../../ReusedComponent/Text_Typography";
import {Container} from "../../../../styles/Styled_component/StyledComponent";



const FeatureItems = [
    {
        id:1,
        icon:F1.src,
        title:"Simple Texting",
        description:"Send text messages in mass or to a few of your contacts in real time."
    },
    {
        id:2,
        icon:F2.src,
        title:"Interactive Texting ",
        description:"  Engage in real-time or automated conversations with customers through text messaging. Send and receive text messages"
    },
    {
        id:3,
        icon:F3.src,
        title:" Sender ID",
        description:" Customize your sender ID to engage your audience better. "
    },
    {
        id:4,
        icon:F4.src,
        title:"Keyword & Inbox ",
        description:"View and manage all incoming text messages from customers. Monitor and respond to text messages in real-time. and Set-up specific word or phrase to trigger a message or response"
    },
    {
        id:5,
        icon:F5.src,
        title:"Personalization",
        description:"Customize messages with the recipient's details or other information."
    },
    {
        id:6,
        icon:F6.src,
        title:"Analytics & reporting",
        description:"Whether you think you can or you think you can’t, you’re right."
    },

]


const Features = ( ) => {
    return (
        <Container>
        <div className="px-2 py-8 md:px-6 lg:px-8 text-center lg:m-5">
            <div className='p-2 m-2'>
                <Header_Top label='Features'/>
                <Header_Top_Description label='Highly running your business across all digital channels.'/>
            </div>
            <div className="grid text-center mt-4 p-2 mr-2">
                {FeatureItems?.map((data:any)=> (
                        <div className="feature_cards col-12 lg:col-3  md:col-3  mb-4 py-6" key={data?.id}>
                            <span className="inline-block  border-circle w-4rem h-4rem mb-3 mt-3" style={{ background:"#FFF2F2" }}>
                                <img src={data?.icon} alt='data?.icon' key={data?.id} className='mt-3'/>
                            </span>
                            <div className="text-800 text-xl mb-5 font-medium">{data?.title}</div>
                            <span className="text-800 text-md line-height-3 p-4">{data?.description}</span>
                        </div>
                ))}
            </div>
        </div>
        </Container>
    )
}






export default Features