"use client"


import {Button} from "primereact/button";
import Image from "next/image";
import Hero from "../../public/image/progress.png"

const InProgress = ( )=>{
    return(
        <div>

            <div className="surface-section px-4 py-8 md:px-6 lg:px-8 mt-8">
                <div className="flex flex-column lg:flex-row justify-content-center align-items-center gap-7">
                    <div className="text-center lg:text-right">
                        <div className="mt-6 mb-3 font-bold text-4xl text-900">Site Under Maintenance ?</div>
                        <p className="text-700 text-2xl mt-0 mb-6">Sorry, We are working hard to improve this page. Please check back later.</p>
                        <Button type="button"  className="p-button-outlined" style={{background:"transparent"}}>
                            <a href='/home' className='text-orange-600'>Go back to home page</a>
                        </Button>
                    </div>
                    <div>
                        <Image src={Hero} alt="Image" className="w-full md:w-40rem" />
                    </div>
                </div>
            </div>

        </div>
    )
}


export default InProgress