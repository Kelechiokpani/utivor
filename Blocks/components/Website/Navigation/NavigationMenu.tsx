"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import emailIcon from "../../../../public/image/website/landing_page/more/email.svg"
import phoneIcon from "../../../../public/image/website/landing_page/more/smartphone.svg"
import Logo from "../../../../public/image/logo-dark.svg"
import Image from "next/image";

const phoneNumber = "+234 809 420 0003";
const email = "info@kreativerock.com";

const NavigationMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
     <>

         <ContactDiv className="md:px-4 lg:px-6 relative">
             <div className="py-3 mx-0 p-4 px-0 lg:mx-12 lg:px-8 flex justify-content-center md:justify-content-end gap-6 md:gap-3">
                 <div className="w-auto flex text-xl font-bold">
                     <a href={`tel:+${1234567890}`}>
                         <div className="flex">
                             <Image
                                 src={phoneIcon}
                                 alt="KreativeRock Digital Logo"
                                 style={{ width: "20px", height: "20px" }}
                             />
                             <span className="mt-1 ml-2 text-800 text-xs">
                  {phoneNumber}
                </span>
                         </div>
                     </a>
                 </div>
                 <div className="w-auto flex font-bold">
                     <a href={`mailto:${email}`}>
                         <div className="flex">
                             <Image
                                 src={emailIcon}
                                 alt="KreativeRock Digital Logo"
                                 style={{ width: "20px", height: "20px" }}
                             />
                             <span className="mt-1 ml-2 text-800 text-xs">{email}</span>
                         </div>
                     </a>
                 </div>
             </div>
         </ContactDiv>
         <Container>
             <>
                 <Link href="/">
                     <Image
                         src={Logo}
                         alt="Logo"
                         height="50"
                         className="mr-0 lg:ml-6"
                     />
                 </Link>
             </>
             <MenuIcon onClick={toggleMenu}>
                 <div />
                 <div />
                 <div />
             </MenuIcon>
             <NavCenter open={menuOpen}>
                 <NavItem>
                     <Link href="/">Home</Link>
                 </NavItem>

                 <NavItem>
                     <Link href="/pricing">Pricing</Link>
                 </NavItem>
                 <Dropdown>
                     <NavLink>Services</NavLink>
                     <DropdownContent>
                         <DropdownItem href="/mobiletexting">Mobile texting</DropdownItem>
                         <DropdownItem href="/whatsappcampaign">WhatsApp business</DropdownItem>
                         <DropdownItem href="/sponsoredAds">Sponsored ads</DropdownItem>
                     </DropdownContent>
                 </Dropdown>
             </NavCenter>
             <NavEnd>
                 <ButtonL>
                     <a href="/login">Login</a>
                 </ButtonL>
                 <ButtonR>
                     <a href="/register">Register</a>
                 </ButtonR>
             </NavEnd>
         </Container>
     </>
    );
};



 const ContactDiv = styled.div`
  position:relative;
  background: rgba(229, 252, 244, 0.45);
  box-sizing: border-box;
  border: none;
a{
  text-decoration:none;
}
   
`;

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  //background:linear-gradient(to right, #e7fffb, #ffdaa08c, #e7fffb); 
  background: linear-gradient(
          0deg,
          rgba(255, 255, 255, 0.2),
          rgba(255, 255, 255, 0.2)
  ),
  radial-gradient(
          77.36% 256.97% at 77.36% 57.52%,
          #f9dfc7 0%,
          #bdefe8 20%,
          #f9dfc7 70%
  );
  //position: sticky;
  top: 0;
  padding: 1rem;
`;


const MenuIcon = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 2.25rem;
  height: 1.5rem;
  cursor: pointer;
  z-index: 2;

  div {
    width: 100%;
    height: 0.2rem;
    background-color: #fff;
    border-radius: 0.1rem;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const NavCenter = styled.ul<{ open: boolean }>`
  display: flex;
  list-style: none;
  align-items: start;

  @media (max-width: 768px) {
    display: ${(props) => (props.open ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 6.7rem;
    left: 0;
    background: linear-gradient(to right, #e7fffb, rgba(255, 218, 160, 0.96), #e7fffb);
    //background: linear-gradient(to right, #e7fffb, #ffdaa08c, #e7fffb); 
    width: 92%;
    margin: 0.7rem;
    padding: 1rem;
    text-align: start;
    z-index: 1;
    border-radius: 5px;
  }
`;

const NavEnd = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  margin: 0 1rem;
  color:#ffffff;
  font-size: 16px;
  font-family: Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;
  
  a{
    color:#000000;
    font-weight:600;
    text-decoration: none;
  }
  @media (max-width: 768px) {
    padding:10px
  }
  
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #000000;
  font-weight:600;
  font-size: 16px;
  align-items: start;
  font-family: Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;

  &:hover {
    text-decoration: none;
  }
  
 
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  align-items: start;
  margin: 0 1rem;
  @media (max-width: 768px) {
    padding-top:10px;
    margin-left:1.6rem
  }
`;

const DropdownContent = styled.div`
  position: absolute;
  //background-color: #9a2e2e;
  background:rgba(154, 151, 147, 0.55);
  border-radius: 5px;
  top: 100%;
  left: 0;
  width: 16rem;
  //padding: 10px;
  display: none;
  z-index: 1;

  ${Dropdown}:hover & {
    display: block;
  }

  @media (max-width: 768px) {
    margin-top: 10px;
    padding: 0.5rem;
    position: relative;
  }

`;

const DropdownItem = styled(NavLink)`
  display: block;
  padding: 6px;
  border-radius: 8px;
  margin: 8px;

  &:hover {
    background: #FF79004F;
    padding: 8px
  }
`;

const ButtonR = styled.button`
  width: 124.997px;
  height: 38.2px;
  flex-shrink: 0;
  border-radius: 23.584px;
  border: none;

  background: var(--Primary, #ff7900);
  cursor: pointer;
  a {
    color: #ffffff;
    text-decoration:none;
  }
`;

const ButtonL = styled.button`
  width: 124.997px;
  height: 38.2px;
  flex-shrink: 0;
  border-radius: 23.584px;
  border: 0.786px solid var(--Secondary, #00cca7);
  cursor: pointer;
  margin-right: 10px;

  a {
    color: #000000;
    text-decoration:none;
  }`

export default NavigationMenu;
