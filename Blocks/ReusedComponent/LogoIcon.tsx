import Image from "next/image";
import Logo from "../../public/image/logo-dark.svg";
import React from "react";
import Link from "next/link";

const  Logo_Import = ( )=>{
    return(
        <Link href='/' className='cursor-pointer'>
            <Image src={Logo} alt='svg' height={100} width={200}  />
        </Link>
    )
}

export default Logo_Import