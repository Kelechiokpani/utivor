import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


export const CustomButton = ({ label, onClick, className, icon, style }: any) => {
  return (
    <StyledButton className={`custom-button ${className}`} onClick={onClick}>
      {icon === "check" && <IconWrapper>{label}</IconWrapper>}
      {icon === "add" && <IconWrapper>{label}</IconWrapper>}
    </StyledButton>
  );
};

CustomButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  icon: PropTypes.oneOf(["check", "add"]),
  style: PropTypes.object,
};

const StyledButton = styled.button`
  cursor: pointer;
  flex-shrink: 0;
  border-radius: 37px;
  background: #ff7900;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
  border: none;
  color: white;
  width: 200px;
  height: 46px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: normal;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;

  .icon {
    margin-right: 4px;
    font-size: 1.6rem;
  }
`;

// export const CustomBtn = ({ label, onClick, className, icon }: any)=>{
//
//     return (
//         <StyledBtn className={`custom-button ${className}`} onClick={onClick}>
//             {icon === 'check' && (
//                 <IconWrapper>
//                     {label}
//                 </IconWrapper>
//             )}
//             {icon === 'add' && (
//                 <IconWrapper>
//                     {label}
//                 </IconWrapper>
//             )}
//         </StyledBtn>
//     );
//
// }
//
// const StyledBtn = styled.button`
//      cursor: pointer;
//      flex-shrink: 0;
//       border-radius: 8px;
//       background: #FF7900;
//       position:relative;
//       box-shadow: 0px 1px 2px 0px rgba(42, 51, 66, 0.03), 0px 1px 3px 0px rgba(42, 51, 66, 0.06);
//       gap: 8px;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       width: 255px;
//       height: 56px;
//       border: none;
//       color: white;
//       transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
//       font-style: normal;
//       font-weight: 500;
//       font-family: Lora;
//       font-size: 16px;
//       line-height: normal;
//         @media (max-width: 768px) {
//             font-size: 14px;
//             padding: 8px 16px;
//         }
// `;
