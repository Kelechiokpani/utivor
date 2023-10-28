
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";
import React from "react";
import styled from "styled-components";
import {useRouter} from "next/navigation";
import FlutterPay from "../../../../../public/image/dashboard/Home/flutterwave.svg"
import PayPal from "../../../../../public/image/dashboard/Home/paypal.svg"
import Image from "next/image";

const FundWallet = ( )=>{
    const router = useRouter();


    return(
        <>
            <div className="surface-section mt-8">
                <div className="grid grid-nogutter">
                    <div className="col-12 lg:col-6 h-full px-4 py-8 md:px-6 lg:px-8">
                     <h6>Top up Current account</h6>
                        <div className="grid formgrid mt-8">

                            <div className="col-12 lg:col-8 field mb-5">
                                <label htmlFor="fullName" className="font-medium text-900 text-md">
                                  Amount
                                </label>
                                <InputText id="amount" placeholder="Amount" type="text" className="p-inputtext w-full p-3" />
                            </div>



                            <div className="col-12 flex flex-column lg:flex-row justify-content-center align-items-center lg:justify-content-end mt-6">
                                <Button className="p-button-text  mt-3 lg:mt-0 w-full lg:w-auto lg:px-6 flex-order-2 lg:flex-order-1 lg:mr-4" >
                                        <a href='/home/wallet'>Return to Wallet</a>
                                </Button>
                            </div>


                          <div>
                              <p className='font-bold'> Tips:</p>
                              <p>  Additional fees might apply for your every payment from PAYPAL</p>
                          </div>


                        </div>
                    </div>

                    <div className="col-12 lg:col-6 px-4 py-8 md:px-6 lg:px-8 surface-50">
                        <div className="border-bottom-1 pb-3 surface-border">
                            <span className="text-900 font-bold text-xl">Payment GateWay</span>
                        </div>

                        <h6>Choose a payment Method to Continue</h6>
                        <ButtonStyle className="col-12 flex flex-column lg:flex-column justify-content-end align-items-end lg:justify-content-end mt-6">

                            <Button className=' px-6 shadow-2'>
                                <picture>
                                    <Image className='' src={FlutterPay} alt='pay' width={100}/>
                                </picture>
                            </Button>

                            <Button className=' px-6 py-2 shadow-2'>
                                <picture>
                                    <Image className='' src={PayPal} alt='pay' width={100}/>
                                </picture>
                            </Button>



                        </ButtonStyle>

                    </div>
                </div>
            </div>

        </>
    )
 }

 const ButtonStyle = styled.div`
   .p-button {
     background: white;
     border: none;
     font-size: 1rem;
     transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
     border-radius: 16px;
     margin-top:1rem
   }
   .p-button:hover{
     background: #FADABF1F;
     //border: 0.4px solid #ff7900;
   }
   .p-button:active{
     background: #FADABF1F;
     box-shadow: none;
   }
   .p-button:focus {
     box-shadow: 0 0 0 1px #ffffff, 0 0 0 1px #ff7900, 0 1px 1px 0 rgb(0, 0, 0);
   }

 `

 export default FundWallet