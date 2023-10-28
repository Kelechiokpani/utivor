import styled from "styled-components";


export const Hero_section = styled.div`
  background-size:cover;
  background: linear-gradient(to right,#E7FFFB, #FFDAA08C, #E7FFFB);
`;
export const Container = styled.div`
  background: #F5F8FCCB;
  color: #000;
  padding-bottom: 60px;
  padding-top: 10px;
  //font-family: Lora;

  .Enquiry_text_header{
    color: #FFFDFB;
    font-weight: 700;
    font-size: 20px;
    position: absolute;
    top: 10%;
    left: 35%;
    transform: translate(-50%, -50%);
  }
  .Enquiry_text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #FFFDFB;
    font-size: 65px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.631px;
  }
  //Form_Input Style
  .PhoneInputInput {
    padding: 15px;
    border-radius: 10px;
    border-color: rgba(0, 0, 0, 0.12);
  }
  
  .feature_cards{
    border-radius: 16px;
    background: var(--white-900, #FFF);
    box-shadow: 0px 1px 2px 0px rgba(85, 105, 135, 0.10);
    width: 32%;
    //height: 258px;
    margin:6px;
  }
  
  @media (max-width: 480px) {
    .feature_cards{
      width: 100%;
      max-width: 350px;

    }
  }

  @media (max-width: 1024px) {
    .feature_cards{
      width: 100%;
      max-width: 350px;

    }
  }
  
`


export const FooterStyle = styled.div`
  background: rgba(11, 16, 15, 0.95);
  //background:#00A386;
  color: #ffffff;
  font-family: Lora;
  h2, ul, li, a{
    color:#ffffff
  }

  .Footer_bottom {
    background: #00CCA7;
  }
  a{
    text-decoration:none;
  }
`

export const Navigation_Style = styled.div`
  background-size:cover;

  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    //transform: translate(-50%, -50%);
  }
`;