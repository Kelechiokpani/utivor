import {FooterStyle} from "../../../../styles/Styled_component/StyledComponent";


const Footer = ( )=>{
    return(
        <FooterStyle>
            <div className="flex p-4 flex-col items-center justify-content-between w-full">
                <p className="text-sm text-white mt-3">LET’S HELP YOU MAKE THAT MAJOR INNOVATION!</p>
                <div className="lg:px-8 uppercase">
                    <div className="border-500  border-2 border-round font-bold  p-3 px-3 gap-2 flex text-sm  text-center" >
                        LET’S TALK
                        <svg width="26" height="20" viewBox="0 0 56 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M55.0607 13.0607C55.6465 12.4749 55.6465 11.5251 55.0607 10.9393L45.5147 1.3934C44.9289 0.807611 43.9792 0.807611 43.3934 1.3934C42.8076 1.97919 42.8076 2.92893 43.3934 3.51472L51.8787 12L43.3934 20.4853C42.8076 21.0711 42.8076 22.0208 43.3934 22.6066C43.9792 23.1924 44.9289 23.1924 45.5147 22.6066L55.0607 13.0607ZM0 13.5H54V10.5H0V13.5Z" fill="white"/>
                        </svg>
                    </div>
                </div>

            </div>



            <div className="Footer_bottom  py-2 lg:py-2 md:px-6 lg:px-8 flex flex-column lg:flex-row justify-content-center  text-center align-items-center">
                <ul className="list-none p-2 mb-0 flex flex-column md:flex-row flex-order-1 lg:flex-order-0 mt-4 lg:mt-0">
                    <li className="mr-4 mt-3 lg:mt-0">
                        <a  className="cursor-pointer text-0 text-sm">© Copyright UTIVOR Limited 2023 All Rights Reserved</a>
                    </li>

                </ul>
            </div>
        </FooterStyle>
    )
}


export default Footer