"use client"
import Enquiry from "../../../../public/image/website/mobile_texting/Enquiry.png"
import Image from "next/image";
import React from "react";
import {useRouter} from "next/navigation";
import {Container} from "../../../../styles/Styled_component/StyledComponent";
import Form_Input from "../../../ReusedComponent/Form_Input";
import {Header_Top} from "../../../ReusedComponent/Text_Typography";





type InputTextareaProps = {
    id: string;
    type: 'text' | 'password' | 'email';
    rows: number;
    autoResize: boolean;
};



const Enquiry_with_Image = ( )=>{

    const router = useRouter();

    const NewRoute = () => {
        router.push("/sign_up");
    };

    return(
        <Container>
        <div className=" px-4 py-6 md:px-6 lg:px-2">
            <div className="grid surface-section">
                <div className="hidden lg:flex col-12 md:col-5 relative">
                    <Image src={Enquiry} alt="Image" className="w-full" style={{height:"40rem"}} />
                    <div className="Enquiry_text_header">Enquiry <span className='text-teal-400'>Form</span></div>
                    <div className="Enquiry_text">Text Or email us</div>
                </div>
                <div className="col-12 md:col-7 md:pl-4">
                    <div className="mt-3">
                    <Header_Top label="Request A Callback"  />
                    </div>
                    <div className="col-12 lg:col-10">
                          <Form_Input/>
                    </div>
                </div>
            </div>
        </div>
        </Container>
    )
}


export default Enquiry_with_Image