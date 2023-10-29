"use client"
import React, {useContext, useRef, useState} from "react";
import {useRouter} from "next/navigation";
import Confirmed from "../../../../public/image/website/confirm.svg"
import Image from "next/image";
import {Toast} from "primereact/toast";
import styled from "styled-components";
import { InferType } from 'yup';
import * as yup from 'yup';
import {IFormInput} from "../../../utils/Form/CustomForm";
import OTPTextInput from "../../../utils/Inputs/OTPInput";
import {LayoutContext} from "../../../../layout/context/layoutcontext";
import {Navigation_Style} from "../../../../styles/Styled_component/StyledComponent";
import Logo_Import from "../../../ReusedComponent/LogoIcon";
import {CustomButton} from "../../../ReusedComponent/Styled_Button";



const inputList: Array<IFormInput> = [
    {
        name: 'email',
        as: OTPTextInput,
        format: (value) => value.toLowerCase().replace(/\s/g, ''),
        options: { inputMode: 'email', className: 'w-full md:w-64 lg:w-96 mb-6 ' },
        placeholder: 'Enter address here',
    },

];
const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required()
});

type InputPayLoad = InferType<typeof schema>;




const VerificationConfirmed = ( ) =>{
    const { layoutConfig } = useContext(LayoutContext);
    const toast = useRef<Toast>(null);
    const router = useRouter();
    const [checked, setChecked] = useState()

    const NewRoute = () => {
        router.push("/login");
    };


    return(
        <>
            <div className="flex h-full">
                <Navigation_Style className="hidden md:block w-6 bg-no-repeat bg-cover bg-bluee-500 relative"
                    // style={{ backgroundImage: "url('/website/navigation/img.png')", backgroundSize:"cover"  }}>
                                  style={{ backgroundImage: "url('/image/website/sms2.jpg')",height:"45rem"  }}
                >
                </Navigation_Style>

                <div className="surface-section w-full md:w-6  md:p-8">
                        <Logo_Import/>
                    <div className="text-center capitalize p-3">
                        {/*<p className="text-3xl font-medium text-900 font-bold mb-0">email Verification</p>*/}
                        <p className="text-4xl font-medium text-900 font-bold mt-0"> Successful</p>
                        <Image src={Confirmed} alt='Confirmed' width={310} height={310} />
                        <div className='flex justify-content-center '>
                            <CustomButton
                                label={`Login`}
                                className="custom-blue-button font-bold"
                                icon="add"
                                onClick={NewRoute}
                            />
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}



const ForgotPasswordContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export default VerificationConfirmed