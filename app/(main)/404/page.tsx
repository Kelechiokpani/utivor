"use client"
import Error from "../../../public/utivor/rocket.png"
import Image from "next/image";
import SimpleLayout from "../layout";
export default function Custom404() {
    return (
        <SimpleLayout showFooter={false} showNavBar={true}>
            <div>
                <div className="flex ">
                    <div className="w-12 sm:w-6 px-4 py-8 md:px-6 lg:px-8">
                        <div className="border-left-2 border-pink-500">
                            <span className="bg-white text-pink-500 font-bold text-2xl inline-block px-3">404</span>
                        </div>
                        <div className="mt-6 mb-5 font-bold text-6xl text-900">Page Not Found</div>
                        <p className="text-700 text-3xl mt-0 mb-6">Sorry, we could not find the page.</p>
                        <div>
                            <a href='/'  className=" text-black mr-4 border-indigo-500 hover:border-orange-400 border-round font-bold border-3 px-4 py-2">
                                <i className="pi pi-arrow-left"></i> Go Back
                            </a>
                        </div>
                    </div>
                    <div className="w-6 hidden sm:block mt-8">
                        <Image src={Error} alt="Error"   className='mt-6'/>
                    </div>
                </div>

            </div>
        </SimpleLayout>


    )
}