"use client"
import React, {useContext, useRef, useState} from "react";
import {Divider} from "primereact/divider";
import {useRouter} from "next/navigation";
import Logo from "../../../public/layout/logo-dark.svg"
import Image from "next/image";
import {Toast} from "primereact/toast";
import Link from "next/link";
import styled from "styled-components";
import { InferType } from 'yup';
import * as yup from 'yup';
import CustomForm, {IFormInput, IFormValues} from "../../../utils/Form/CustomForm";
import TextInput from "../../../utils/Inputs/TextInput";
import {LayoutContext} from "../../../../layout/context/layoutcontext";
import {Navigation_Style} from "../../../../styles/Styled_component/StyledComponent";
import Logo_Import from "../../../ReusedComponent/LogoIcon";



const inputList: Array<IFormInput> = [
    {
        name: 'email',
        as: TextInput,
        format: (value) => value.toLowerCase().replace(/\s/g, ''),
        options: { inputMode: 'email', className: 'w-full md:w-64 lg:w-96 mb-6 ' },
        placeholder: 'Enter address here',
        label: 'Email Address'
    },

];
const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required()
});

type InputPayLoad = InferType<typeof schema>;




const ForgotPassword  = ( ) =>{
    const { layoutConfig } = useContext(LayoutContext);
    const toast = useRef<Toast>(null);
    const router = useRouter();
    const [checked, setChecked] = useState()

    const NewRoute = () => {
        router.push("/sakai");
    };

    const loginAdmin = (InputPayLoad: IFormValues<InputPayLoad>) => {
        router.push("/forgotpasswordotp");
        // handleLogin({
        //     password: InputPayLoad.password as unknown as string,
        //     email: InputPayLoad.email as unknown as string
        // });
    };

    // const { handleLogin, error, data, isLoading } = useLogin({
    //     onComplete: (data:any) => {
    //         router.replace('/');
    //     },
    //
    //     onError: (e:any) => {
    //         const error = ['auth/user-not-found', 'auth/wrong-password'].includes(e.code) ? 'Invalid email or password' : 'Unable to login please try again later';
    //         toast.current?.show({ severity: 'error', summary: 'Error', detail: error });
    //     }
    // });




    return(
        <>
            <div className="flex">
                <Navigation_Style className="hidden md:block w-6  bg-no-repeat bg-fill bg-bluee-500 relative"
                    // style={{ backgroundImage: "url('/website/navigation/img.png')", backgroundSize:"cover"  }}>
                                  style={{ backgroundImage: "url('/image/website/sms2.jpg')", height:"50rem" }}>
                </Navigation_Style>

                <div className="surface-section w-full md:w-6 p-6 md:p-8">
                    <div className="mb-8">
                        <Logo_Import/>
                        <div className="text-900 text-3xl font-medium mb-3">Forgot Password</div>
                        <span className="text-600 font-medium mr-2">Please enter your Registered email to recieve a code! </span>
                    </div>
                    <div className='h-14rem'>
                    <CustomForm
                        removeRestButton
                        enableReinitialize
                        initialValues={{ email: '', password: '' }}
                        // validationSchema={schema}
                        onSubmitFunction={loginAdmin}
                        // loading={isLoading}
                        formButtonProps={{
                            className: 'lg:w-4 w-full p-3 text-lg mb-8'
                        }}
                        // BeforeSubmitButton={<BeforeSubmitButton />}
                        // AfterSubmitButton={savedAccount && <AfterSubmitButton/>}
                        submitButtonText="Contunie"
                        formInputs={inputList}
                    />
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

export default ForgotPassword