import Image from "next/image";
import PriceImg from "../../../../public/image/website/pricing/pricing.png";
import React from "react";
import Form_Input from "../../../ReusedComponent/Form_Input";
import {Hero_section} from "../../../../styles/Styled_component/StyledComponent";


const Pricing = ( )=>{
    return(
        <>
            <Hero_section className=" px-4 py-6 md:px-6 lg:px-2">
                <div className="grid ">
                    <div className="col-12 md:col-5 relative">
                        <Image src={PriceImg} alt="Image" className="hidden lg:block lg:w-30 ml-5 " />
                    </div>
                    <div className="col-12 md:col-7 md:pl-4">
                        <div className="col-12 lg:col-10">
                            <Form_Input/>
                        </div>
                    </div>
                </div>
            </Hero_section>
        </>
    )
}


export default Pricing