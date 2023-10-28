import styled from "styled-components";

export const ContactDiv = styled.div<{ $isLandingPage?: boolean }>`
  position:relative;
  background: rgba(229, 252, 244, 0.45);
  box-sizing: border-box;
  border: none;
`;

export const NavigationMenu = styled.nav<{ $isLandingPage?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  color: #111827;
  font-weight: 700;

  background: ${(props) =>
    props.$isLandingPage
        ? "linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2) ), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #f9dfc7 0%, #bdefe8 20%, #f9dfc7 70%)"
        : "linear-gradient(to right, #e7fffb, #ffdaa08c, #e7fffb);"};

  @media (max-width: 768px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    flex-direction: column;
    align-items: flex-start;
  }

  @media (min-width: 992px) {
    padding-left: 8rem;
    padding-right: 8rem;
  }
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const NavLinks = styled.ul<{ $mobileMenuOpen?: boolean }>`
  list-style: none;
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    position:absolute;
    //margin-top: 20px;
    //padding-top: 40px;
    background: linear-gradient(to right, #e7fffb, #ffdaa08c, #e7fffb);
    color: #000000;
    display: ${(props) => (props.$mobileMenuOpen ? "flex" : "none")};
    flex-direction: column;
    width: 100%;
    top:3rem;
    left:-1rem;
    //right:0.3rem;
    margin:1rem;
    overflow: hidden;
    // max-height: ${(props) => (props.$mobileMenuOpen ? "200px" : "0")}; 
    transition: max-height 3.3s ease-in; 
  }
`;

export const NavLink = styled.li`
  width: 5rem;
  font-size:14px;
  position: relative;
  cursor: pointer;
  text-align: center;
  font-family:Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;

  a{
    text-decoration:none;
    color:#000000;
  }
  @media (max-width: 768px) {
    text-align: left;
    width: 100%;
    margin-top: -10px;
    padding: 20px;
  }
`;

export const CaretSpan = styled.span`
  font-size: 9px;
`;

export const Dropdown = styled.ul<{ $dropdownOpen?: boolean }>`
  width: 18rem;
  list-style: none;
  position: absolute;
  top: 150%;
  left: 0;
  background-color: #fff;
  border-radius:10px;
  display: ${(props) => (props.$dropdownOpen ? "block" : "none")};
  z-index: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileDropdown = styled.ul<{ $dropdownOpen?: boolean }>`
  display: none;
  list-style: none;

  @media (max-width: 768px) {
    display: ${(props) => (props.$dropdownOpen ? "block" : "none")};
  }
`;

export const DropdownItem = styled.li`
  cursor: pointer;
  text-align: start;
  font-size: 14px;
  font-weight: 500;
  padding: 8px 15px;

  a{
    text-decoration:none;
    color:#000000;
  }
  &:hover {
    background-color: rgba(191, 255, 220, 0.58);
  }

  @media (max-width: 768px) {
    padding-left: 2rem;
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 24px;
  margin-left: auto;
  margin-top: -40px;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const ButtonContainer = styled.div<{ $mobileMenuOpen?: boolean }>`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    //position:absolute;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #222222;
    display: ${(props) => (props.$mobileMenuOpen ? "flex" : "none")};
    padding: 30px;
    //margin-top:11.3rem
  }
`;

export const LoginButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  display: block;
`;

export const SignUpButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  display: block;
`;
