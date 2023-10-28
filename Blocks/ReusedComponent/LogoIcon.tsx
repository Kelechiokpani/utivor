import Image from "next/image";
import Logo from "../../public/image/logo-dark.svg";
import React from "react";

const  Logo_Import = ( )=>{
    return(
        <div>
            <Image src={Logo} alt='svg' height={100} width={200}  />
        </div>
    )
}

export default Logo_Import