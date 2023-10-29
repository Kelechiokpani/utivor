"use client"

import styled from "styled-components";
import {useRouter} from "next/navigation";
import {Header_Top, Header_Top_Description} from "../../../ReusedComponent/Text_Typography";
import {CustomButton} from "../../../ReusedComponent/Styled_Button";


const Simple_Texting_Pricing = ( )=>{
    const router = useRouter();

    const NewRoute = () => {
        router.push('/sign_up');
    };


    return (
        <Container className="surface-0 lg:p-8 p-2 bg-gray-500">
            <div className='p-2'>
                <Header_Top label='Simple Texting Pricing'/>
                <Header_Top_Description label='Pricing that scales with your business immediately..'/>
            </div>
            <div className="grid lg:p-6 p-1">
                <div className="col-12 lg:col-4">
                    <div className="p-3 h-full">
                        <div className="shadow-2 p-6 h-full flex flex-column bg-white-alpha-50" style={{ borderRadius: '6px' }}>
                            <span className="text-900 text-md font-bold">Standard</span>
                            <h1 className="text-900 mb-2">Free</h1>
                            <div className="text-600 text-sm">Basic features for up to 10 users.</div>
                            <hr className="mb-3 border-top-1 border-bottom-none border-300 mt-auto" />
                            <CustomButton label={`Get Started`} className="btn w-full" icon="add" onClick={NewRoute} />
                            <CustomButton label={`Learn More`} className="btn w-full mt-3 bg-gray-200 text-900" icon="add" onClick={NewRoute} />
                            <hr className="my-3 border-top-1 border-bottom-none border-300" />
                            <ul className="list-none p-0 m-0 flex-grow-1">
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle text-white bg-green-500 border-circle mr-2"></i>
                                    <span>Sending ID</span>
                                </li>
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle text-white bg-green-500 border-circle mr-2"></i>
                                    <span>Contact Upload</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-12 lg:col-4">
                    <div className="p-3 h-full">
                        <div className="shadow-2 p-6 h-full flex flex-column bg-white-alpha-50" style={{ borderRadius: '6px' }}>
                       <div className='flex justify-content-between mb-3'>
                           <span className="text-900 text-md font-bold">Premium</span>
                           <span className="text-900 text-xs font-bold border-round-xl p-1 text-white bg-orange-600">POPULAR</span>
                       </div>
                            <div className="flex align-items-center">
                                <h1 className="text-900"><span className='text-sm font-bold'>₦</span>2.95</h1>
                                <span className="ml-2 font-medium text-600">per sms</span>
                            </div>
                            <div className="text-600 text-sm">Basic features for up to 30 users.</div>
                            <hr className="mb-3 border-top-1 border-bottom-none border-300 mt-auto" />
                            <CustomButton label={`Get Started`} className="btn w-full" icon="add" onClick={NewRoute} />
                            <CustomButton label={`Learn More`} className="btn w-full mt-3 bg-gray-200 text-900" icon="add" onClick={NewRoute} />
                            <hr className="my-3 border-top-1 border-bottom-none border-300" />
                            <ul className="list-none p-0 m-0 flex-grow-1">
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle text-white bg-orange-500 border-circle mr-2"></i>
                                    <span>Sending ID</span>
                                </li>
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle text-white bg-orange-500 border-circle mr-2"></i>
                                    <span>Contact Upload</span>
                                </li>
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle text-white bg-orange-500 border-circle mr-2"></i>
                                    <span>500 Contacts – 9,999 Contacts</span>
                                </li>
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle text-white bg-orange-500 border-circle mr-2"></i>
                                    <span>10,00 Contacts – 49,999 Contacts</span>
                                </li>
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle text-white bg-orange-500 border-circle mr-2"></i>
                                    <span>50,00 Contacts & Above</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-12 lg:col-4">
                    <div className="p-3 h-full">
                        <div className="shadow-2 p-6 h-full flex flex-column bg-white-alpha-50" style={{ borderRadius: '6px' }}>
                            <div className='flex justify-content-between mb-3'>
                                <span className="text-900 text-md font-bold">Business</span>
                            </div>
                            <div className="flex align-items-center">
                                <h1 className="text-900"><span className='text-sm font-bold'>₦</span>4.95</h1>
                                <span className="ml-2 font-medium text-600">per sms</span>
                            </div>
                            <div className="text-600 text-sm">Basic features for up to 100 users.</div>
                            <hr className="mb-3 border-top-1 border-bottom-none border-300 mt-auto" />
                            <CustomButton label={`Get Started`} className="btn w-full" icon="add" onClick={NewRoute} />
                            <CustomButton label={`Learn More`} className="btn w-full mt-3 bg-gray-200 text-900" icon="add" onClick={NewRoute} />
                            <hr className="my-3 border-top-1 border-bottom-none border-300" />
                            <ul className="list-none p-0 m-0 flex-grow-1">
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle text-white bg-green-500 border-circle mr-2"></i>
                                    <span>Sending ID</span>
                                </li>
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle text-white bg-green-500 border-circle mr-2"></i>
                                    <span>Contact Upload</span>
                                </li>
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle text-white bg-green-500 border-circle mr-2"></i>
                                    <span>500 Contacts – 9,999 Contacts</span>
                                </li>
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle text-white bg-green-500 border-circle mr-2"></i>
                                    <span>10,00 Contacts – 49,999 Contacts</span>
                                </li>
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-check-circle text-white bg-green-500 border-circle mr-2"></i>
                                    <span>50,00 Contacts & Above</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Container>

    )
}


const Container = styled.div`
  background: radial-gradient(50% 50% at 50% 50%, rgba(247, 248, 249, 0.00) 0%, #F7F8F9 100%);
  
  
  .btn{
    border-radius: 8px;
  }
`

export default Simple_Texting_Pricing