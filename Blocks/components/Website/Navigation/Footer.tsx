import {FooterStyle} from "../../../../styles/Styled_component/StyledComponent";

const Footer = ( )=>{
    return(
        <FooterStyle>
            <div className="grid grid-nogutter  px-4 py-8 md:px-4 lg:px-4 border-top-1 surface-border">
                    <div className="col-12 md:col-6 lg:col-6 mt-4 lg:mt-0 lg:pl-4 flex flex-column p-2">
                        <div>
                            <h2 className='text-xl font-bold'>About US</h2>
                            <span className=" block mt-2 mr-2 text-sm line-height-3">
                               We are a complete marketing management company that leverage
                                technology to create cutting-edged, tailored and
                                modern business solutions that drives engagement &
                                helps position brands better for sustained business
                                growth.
                            </span>
                        </div>

                        <div className='mt-4'>
                            <h2 className='text-xl font-bold'>Mission Statement</h2>

                              <p className=' text-md mt-2 text-sm'>Create business solutions that works for
                                  sustained business growth.
                              </p>
                              <p className=' text-md mt-2 text-sm'>Help improve company’s chances of success
                                  through results-oriented strategies</p>
                              <p className=' text-md mt-2 text-sm'>Give back to the society through community
                                  development services.
                              </p>

                        </div>
                    </div>
                <div className="col-12 md:col-6 lg:col-3 mt-3 lg:mt-0 lg:pl-4 flex flex-column p-2">
                    <span className=" text-xl font-bold block">Links</span>
                    <ul className="list-none p-0">
                        <li className='flex flex-row mt-3'>
                            <i className='pi pi-angle-right font-bold'></i>
                            <a href='/mobiletexting' className="hover:text-teal-500 transition-duration-150 cursor-pointer text-sm  block">Mobile texting</a></li>
                        <li className='flex flex-row mt-3'>
                            <i className='pi pi-angle-right font-bold'></i>
                            <a href='/whatsappcampaign' className=" hover:text-teal-500 transition-duration-150 cursor-pointer text-sm  block">Interactive texting</a></li>
                        <li className='flex flex-row mt-3'>
                            <i className='pi pi-angle-right font-bold'></i>
                            <a href='/sponsoredAds' className=" hover:text-teal-500 transition-duration-150 cursor-pointer text-sm  block">Sponsored ads</a></li>
                        <li className='flex flex-row mt-3'>
                            <i className='pi pi-angle-right font-bold'></i>
                            <a href='/pricing' className=" hover:text-teal-500 transition-duration-150 cursor-pointer text-sm  block">pricing</a></li>
                        <li className='flex flex-row mt-3'>
                            <i className='pi pi-angle-right font-bold'></i>
                            <a href='/privacypolicy' className=" hover:text-teal-500 transition-duration-150 cursor-pointer text-sm  block">privacy policy</a></li>
                        <li className='flex flex-row mt-3'>
                            <i className='pi pi-angle-right font-bold'></i>
                            <a href='/termsofuse' className=" hover:text-teal-500 transition-duration-150 cursor-pointer text-sm  block">Terms of use</a></li>
                    </ul>
                </div>
                <div className="col-12  md:col-6 lg:col-3 flex mt-4 lg:mt-0 lg:pl-4 flex-column p-2">
                    <span className=" text-xl font-bold block">Account</span>
                    <ul className="list-none p-0">
                        <li><a className=" hover:text-teal-500 text-sm transition-duration-150 cursor-pointer mt-3 block">No. 77 Ojueleba Road, Surulere, Lagos State, Nigeria</a></li>
                        <li><a className=" hover:text-teal-500 text-sm transition-duration-150 cursor-pointer mt-3 block"> +2348094200003</a></li>
                        <li><a className=" hover:text-teal-500 text-sm transition-duration-150 cursor-pointer mt-3 block"> +2348094200003</a></li>
                        <li><a className=" hover:text-teal-500 text-sm transition-duration-150 cursor-pointer mt-3 block">info@kreativerock.com</a></li>
                        <li><a className=" hover:text-teal-500 text-sm transition-duration-150 cursor-pointer mt-3 block">https://kreativerock.com</a></li>
                    </ul>
                    <div className=" mt-4 flex align-items-center flex-order-0 lg:flex-order-1">
                        <a className="cursor-pointer mr-3 lg:mt-0 block ">
                            <i className="pi pi-facebook surface-section p-1 text-lg text-teal-600  text-sm border-circle "></i>
                        </a>
                        <a className="cursor-pointer mr-3 lg:mt-0 block ">
                            <i className="pi pi-twitter surface-section p-1  text-lg text-teal-600 text-sm border-circle "></i>
                        </a>
                        <a className="cursor-pointer mr-3 lg:mt-0 block ">
                            <i className="pi pi-youtube surface-section p-1  text-lg text-teal-600 text-sm border-circle "></i>
                        </a>
                        <a className="cursor-pointer lg:mt-0 block ">
                            <i className="pi pi-google surface-section  text-lg text-teal-600 p-1 text-sm border-circle "></i>
                        </a>
                    </div>
                </div>

            </div>

            <div className="Footer_bottom py-2 lg:py-2 md:px-6 lg:px-8 flex flex-column lg:flex-row justify-content-center  text-center align-items-center">
                <ul className="list-none p-2 mb-0 flex flex-column md:flex-row flex-order-1 lg:flex-order-0 mt-4 lg:mt-0">
                    <li className="mr-4 mt-3 lg:mt-0">
                        <a  className="cursor-pointer text-0 text-md">© Copyright KreativeRock. All Rights Reserved</a>
                    </li>

                </ul>
            </div>
        </FooterStyle>
    )
}


export default Footer