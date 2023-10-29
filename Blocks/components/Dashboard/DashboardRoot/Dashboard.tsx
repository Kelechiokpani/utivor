'use client'
import React from "react";
import TextSMS from "../../../../public/image/dashboard/Home/Texting-bro 2.svg"
import TextSMS2 from "../../../../public/image/dashboard/Home/SocialStrategy.svg"
import voice from "../../../../public/image/dashboard/Home/texting.svg"
import question from "../../../../public/image/dashboard/Home/questionnaire.svg"


import Image from "next/image";
import {useRouter} from "next/navigation";
import {CustomButton} from "../../../ReusedComponent/Styled_Button";
import {Button} from "primereact/button";



const
    Dashboard = ( )=> {

    const router = useRouter();
    const WhatsappRoute = () => {
        router.push("/home/interactiveSms");
    };


    const SmsRoute = () => {
        router.push("/home/sms");
    };


    return (
            <div className="surface-ground px-4 py-8 pb-8  md:px-6 lg:px-10 mt-6">
                <div className="py-5 flex flex-wrap gap-3 justify-content-between align-items-center mb-6">
                    <div className="flex flex-column gap-2 ">
                        <h1 className="m-0 text-900 text-2xl font-medium line-height-3">Welcome back Bube!</h1>
                        <p className="mt-0 mb-0 text-600 text-sm">Here what is happening in your account today </p>
                    </div>
                </div>

                <div className="grid">
                    <div className="col-12 md:col-6 lg:col-4">
                        <div className="surface-card h-10rem shadow-2 p-3 border-round">
                            <div className="flex justify-content-between mb-3">
                                <div>
                                    <span className="block text-500 font-medium mb-3">Earning</span>
                                    <div className="text-900 font-medium text-xl mt-6">N330</div>
                                </div>
                                <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                    <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
                                </div>
                            </div>
                            <span className="text-green-500 font-medium">24 new </span>
                            <span className="text-500">vs last month</span>
                        </div>
                    </div>
                    <div className="col-12 md:col-6 lg:col-4">
                        <div className="surface-card h-10rem shadow-2 p-3 border-round">
                            <div className="flex justify-content-between mb-3">
                                <div>
                                    <span className="block text-500 font-medium mb-3">Current Balance</span>
                                    <div className="text-900 font-medium text-xl mt-6">N345.20</div>
                                </div>
                                <div className="flex align-items-center justify-content-center bg-orange-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                    <i className="pi pi-map-marker text-orange-500 text-xl"></i>
                                </div>
                            </div>
                            <span className="text-green-500 font-medium">%52+ </span>
                            <span className="text-500">since last week</span>
                        </div>
                    </div>
                    <div className="col-12 md:col-6 lg:col-4">
                        <div className="surface-card h-10rem shadow-2 p-3 border-round">
                            <div className="flex justify-content-between mb-3">
                                <div>
                                    <span className="block text-500 font-medium mb-3">Failed Messages</span>
                                    <div className="text-900 font-medium text-xl mt-6">23k</div>
                                </div>
                                <div className="flex align-items-center justify-content-center bg-cyan-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                    <i className="pi pi-inbox text-cyan-500 text-xl"></i>
                                </div>
                            </div>
                            <span className="text-green-500 font-medium ">520  </span>
                            <span className="text-500">newly registered</span>
                        </div>
                    </div>
                </div>

                {/* Services  Grouping  ----- */}
                <div className="grid mt-5">
                    <div className="col-12 md:col-6 lg:col-4 ">
                        <div className="h-14rem shadow-2 bg-orange-50  p-3 border-round">
                            <div className="flex justify-content-between">
                                <div className="py-6 px-3 flex flex-column align-items-start">
                                    <div className="text-900 font-medium mb-3 text-xl"> Voice campaign management </div>
                                    <CustomButton
                                        label={`voice`}
                                        className="capitalize"
                                        icon="add"
                                        onClick={WhatsappRoute}
                                    />
                                </div>
                                <div className="hidden lg:flex align-items-center justify-content-center">
                                    <Image src={voice} alt="Image" className="mx-auto block  w-12rem h-12rem  " />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 md:col-6 lg:col-4 ">
                        <div className="h-14rem shadow-2 bg-orange-50  p-3 border-round">
                            <div className="flex justify-content-between">
                                <div className="py-6 px-3 flex flex-column align-items-start">
                                    <div className="text-900 font-medium mb-3 text-xl"> Mobile Texting campaign </div>
                                    <CustomButton
                                        label={`Mobile Texting`}
                                        className="capitalize"
                                        icon="add"
                                        onClick={SmsRoute}
                                    />
                                </div>
                                <div className="hidden lg:flex align-items-center justify-content-center">
                                    <Image src={TextSMS2} alt="Image" className="mx-auto block  w-12rem h-12rem  " />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 md:col-6 lg:col-4 ">
                        <div className="h-14rem shadow-2 bg-orange-50  p-3 border-round">
                            <div className="flex justify-content-between">
                                <div className="py-6 px-3 flex flex-column align-items-start">
                                    <div className="text-900 font-medium mb-3 text-xl"> Two Way (2) Interactive campaign </div>
                                    <CustomButton
                                        label={`two way texting`}
                                        className="capitalize"
                                        icon="add"
                                        onClick={WhatsappRoute}
                                    />
                                </div>
                                <div className="hidden lg:flex align-items-center justify-content-center">
                                    <Image src={TextSMS} alt="Image" className="mx-auto block  w-12rem h-12rem  " />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 md:col-6 lg:col-4 ">
                        <div className="h-14rem shadow-2 bg-orange-50  p-3 border-round">
                            <div className="flex justify-content-between">
                                <div className="py-6 px-3 flex flex-column align-items-start">
                                    <div className="text-900 font-medium mb-3 text-xl"> Custom Questionaire campaign </div>
                                    <CustomButton
                                        label={`Questionaire`}
                                        className="capitalize"
                                        icon="add"
                                        onClick={WhatsappRoute}
                                    />
                                </div>
                                <div className="hidden lg:flex align-items-center justify-content-center">
                                    <Image src={question} alt="Image" className="mx-auto block  w-12rem h-12rem  " />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
    )
}



export default Dashboard