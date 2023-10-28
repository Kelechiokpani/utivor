"use client"
import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import styled from "styled-components";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {GeneralService} from "../../../../public/DemoData";
import {Wallet} from "../../../../types/dashboard";
import {CustomButton} from "../../../ReusedComponent/Styled_Button";




const WalletScreen = ( )=> {
    const router = useRouter();
    const [wallet, setWallet] = useState<Wallet[]>([]);
    const [showForm, setShowForm] = useState(false);


    useEffect(() => {
        GeneralService?.getWalletDetails()
            .then((data:any) => {
                // Handle the response data
                setWallet(data);
            })
            .catch((error:any) => {
                // Handle errors if any
                console.error("An error occurred:", error);
            });
    }, []);


    const toggleForm = () => {
        setShowForm(!showForm);
    };


    const Pay = () => {
        router.push("/home/wallet/fund");
    };


    return(
        <Wrapper className="surface-ground px-4 py-5 md:px-6 lg:px-8 mt-6">
            <div className="  py-5 flex flex-wrap gap-3 justify-content-between align-items-center mb-2">
                <div className="flex flex-column gap-2 ">
                    <h1 className="m-0 text-900 text-2xl font-medium line-height-3">Wallet</h1>
                    <p className="mt-0 mb-0 text-600 text-sm">Get detail information about your wallet </p>
                </div>

            </div>
            <div className="grid mb-4">
                <div className="col-12 md:col-6 lg:col-4">
                    <div className="surface-card  p-3 border-round">
                        <div className="flex justify-content-between">
                            <div>
                                <div className="flex align-items-center text-2xl justify-content-center bg-blue-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                    ₦
                                </div>

                                <div className="text-900 font-medium text-xl mt-6">
                                    <span className="block text-500 font-medium text-sm">Total Balance</span>
                                    <span className="block text-900 font-bold mt-2">₦345.20</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 md:col-6 lg:col-4">
                    <div className="surface-card  p-3 border-round">
                        <div className="flex justify-content-between">
                            <div>
                                <div className="flex align-items-center text-2xl justify-content-center bg-blue-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                    ₦
                                </div>

                                <div className="text-900 font-medium text-xl mt-6">
                                    <span className="block text-500 font-medium text-sm">Current Balance</span>
                                    <span className="block text-900 font-bold mt-2">₦345.20</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div className="flex flex-column gap-2 ">
                <span className="m-0 text-900 text-1xl mt-3 font-bold line-height-3">Fund Wallet</span>
                <CustomButton
                    label={`Fund Account`}
                    className=""
                    icon="add"
                    onClick={Pay}
                    style={{ borderRadius:" 37rem"}}
                />
            </div>


          <div className='card mt-4'>
              <span className='font-bold text-2xl ml-2'>History</span>
              <DataTable value={wallet} tableStyle={{ minWidth: '50rem' }} className='mt-5 text-sm'>
                  <Column field="transactionId" header="Transaction-ID"></Column>
                  <Column field="name" header="Name"></Column>
                  <Column field="amount" header="Amount"></Column>
                  <Column field="status" header="Status"></Column>
                  <Column field="gateway" header="Gateway"></Column>
                  <Column field="date" header="Date"></Column>
              </DataTable>
          </div>

        </Wrapper>
    )
}


const Wrapper = styled.div`
 .dashboard{
    //border-radius: 3rem;
   font-weight:bold;
   height:2.7rem;
   border-radius:10px
  }

  .card{
    padding:10px;
    border-radius:4px
  }
  .p-inputtext:enabled:hover {
    border-color: #495057;
  }

  .p-inputtext:enabled:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: none;
    border-color: #495057;
  }

  .PhoneInputCountry {
    background: #ffffff;
    margin-right: 0.02em;
    padding: 8px 16px;
    border-radius: 15px 1px 1px 15px;
    border: 1px solid #ced4da;
  }

  .PhoneInputCountrySelect {
    padding: 0.5rem;
  }

  .PhoneInputInput {
    padding: 15px;
    border-radius: 1px 15px 15px 1px;
    border: 0.7px solid #ced4da;
  }
  .PhoneInputInput:enabled:focus {
    border: 0.1px solid #495057;
  }
`;

export const Forms_Style = styled.div`

`;


export default WalletScreen