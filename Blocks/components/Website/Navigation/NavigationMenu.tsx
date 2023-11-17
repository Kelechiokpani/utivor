"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';




const NavigationMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
         <Container>
             <>
                 <Link href="/">
                     {/*<Image*/}
                     {/*    src={Logo}*/}
                     {/*    alt="Logo"*/}
                     {/*    height="50"*/}
                     {/*    className="mr-0 lg:ml-6"*/}
                     {/*/>*/}
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
                     <Link href="/about">About</Link>
                 </NavItem>
                 <NavItem>
                     <Link href="/404">Work</Link>
                 </NavItem>
                 <NavItem>
                     <Link href="/services">Services</Link>
                 </NavItem>
                 <NavItem>
                     <Link href="/blogs">Blog</Link>
                 </NavItem>
                 <NavItem>
                     <Link href="/404">Product</Link>
                 </NavItem>
                 <NavItem>
                     <Link href="/404">CONTACT</Link>
                 </NavItem>
             </NavCenter>
         </Container>
    );
};



 const ContactDiv = styled.div`
  position:relative;
   background-image: linear-gradient(to right, #6C74D8, #201E1E);
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
  background-color: #ffffff;
  box-shadow: 0px 4px 8px 0px rgba(63, 76, 176, 0.24);
  top: 0;
  padding: 5px;
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
    background-color: #3F4CB0;
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
  padding-right:4rem;

  @media (max-width: 768px) {
    display: ${(props) => (props.open ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 6.7rem;
    left: 0;
    background-color: #ffffff;
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
  font-size: 14px;
  font-family: Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;
   
  a{
    color:#000000;
    font-weight:600;
    text-decoration: none;
    &:hover {
      //background: #3F4CB099;
      padding: 8px;
      border:2px solid #3F4CB099;
      border-radius:8px
    }
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
  //background:rgba(154, 151, 147, 0.55);
  background-color: #ffffff;
  border-radius: 5px;
  top: 100%;
  left: 0;
  width: 18.5rem;
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
    background: #3F4CB0;
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
