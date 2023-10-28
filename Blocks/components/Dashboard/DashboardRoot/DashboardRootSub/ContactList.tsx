"use client"
import React, {useEffect, useRef, useState} from "react";
import {useRouter} from "next/navigation";
import styled from "styled-components";
import {InputText} from "primereact/inputtext";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Button} from "primereact/button";
import { Dialog } from 'primereact/dialog';
import { Menu } from 'primereact/menu';
import {InputTextarea} from "primereact/inputtextarea";
import {GeneralService} from "../../../../../public/DemoData";
import {ContactGroup} from "../../../../../types/dashboard";



const ContactListing = ({id}:any) => {
    const router = useRouter();

    const [contactGroup, setContactGroup] = useState<ContactGroup | any>([]);
    const [visible, setVisible] = useState(false);
    const [activeTabAction, setActiveTabAction] = useState(0);

    const menuRight = useRef<Menu>(null);



    useEffect(() => {
        GeneralService?.getContactGroupDetails()
            .then((data:any) => {
                setContactGroup(data);
            })
            .catch((error:any) => {
                console.error("An error occurred:", error);
            });
    }, []);


    const Pay = () => {
        router.push("/home/wallet/fund");
    };


    const items = [
        {
            label: 'group_options',
            items: [
                {
                    label: 'Update',
                    icon: 'pi pi-pencil',
                    command: () => {
                    }
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times',
                    command: () => {
                    }
                } ,
            ]
        },

    ];

    const handleTabClick = (index: number) => {
        setActiveTabAction(index);
    };


    const tabs = [
        "Contact List",
        "Add Manually",
        "Upload",
    ];



    const viewOptions = (rowData: ContactGroup) => {
        return(
            <Button  icon="pi pi-align-right" className="mr-2"
                     onClick={(event) => menuRight?.current?.toggle(event)} aria-controls="popup_menu_right" aria-haspopup >
                <Menu model={items} popup ref={menuRight} id="popup_menu_right" popupAlignment="right" />
            </Button>
        )
    };



    return(
        <Wrapper className="surface-ground px-4 py-5 md:px-6 lg:px-8 mt-6">
            <div className="  py-5 flex flex-wrap gap-3 justify-content-between align-items-center mb-2 grid">
                <div className="flex flex-column gap-2 ">
                    <h1 className="m-0 text-900 text-2xl font-medium line-height-3">Welcome back Bube!</h1>
                    <p className="mt-0 mb-0 text-600 text-sm">Grouping helps you to quickly send messages to a segmented portion of your contacts.
                        Select a group from the drop down below. </p>
                </div>
            </div>


            <div className="col-12 flex flex-column lg:flex-row  mt-6">
                <Button className="p-button-text   mt-3 lg:mt-0 w-full lg:w-auto  " >
                    <a className='text-orange-600' href='/home/contact'> Return to Contact List</a>
                </Button>
            </div>


                    <div className="flex justify-content-between align-content-center align-items-center flex-auto mt-3 ">
                        <div className="p-input-icon-left w-4 p-input-filled">
                            <i className="pi pi-search"></i>
                            <InputText type="text" className="w-full" placeholder="Contact search" />
                        </div>

                    </div>
                    <div className='card mt-4'>
                        <h5 className='font-bold text-1xl ml-2 mt-4'>Contact List</h5>
                        <DataTable value={contactGroup.contactDetails}  tableStyle={{ minWidth: '50rem' }} className='mt-5 text-sm'>
                            <Column field="id" header="ID" style={{ width: "20%" }}></Column>
                            <Column field="fullName" header="Name" style={{ width: "20%" }}></Column>
                            <Column field="email" header="Email" style={{ width: "20%" }} />
                            <Column field="phone" header="Phone" style={{ width: "20%" }} />
                            <Column field="date" header="Date" style={{ width: "20%" }} />
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
  
  .p-button {
    background:transparent;
    color:orangered;
    border:none
  }
  .p-button:hover {
    background:transparent;
    color:orangered;
    border:none
  }
  
  .p-button:focus {
    box-shadow:none;
    background:transparent;
    color:orangered;
    border:none
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

type TabButtonProps = {
    active: boolean;
};

const TabContent = styled.div<TabButtonProps>`
  display: ${props => (props.active ? 'block' : 'none')};
`;

const TabButton = styled(Button)<TabButtonProps>`
    outline: 0 none;
    font-size:13px;
    outline-offset: 0;
    //box-shadow: 0 0 0 0.5px #0b0c0e;
    background:  ${props => (props?.active ? '#ffffff' : 'transparent')};
    box-shadow:  ${props => (props?.active ? '#0b0c0e' : '#0b0c0e')};
    color: #000000;
  
`;





export default ContactListing