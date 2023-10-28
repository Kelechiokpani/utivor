import styled from "styled-components";

const ColoredBox = ({ label, className }: any) => {
  return (
    <Container className={`text-900 text-md lg:text-center ${className}`}>
      {label}
    </Container>
  );
};

const Container = styled.div`
  display: inline-block;
  width: auto;
  padding: 18px 32px;
  background: #effffc;
  border: none;
  border-radius: 4px;
  height: 42px;
  line-height: 1rem;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.14);
  background-size: cover;
  color: #000;
  //opacity: 0.6;
`;

export default ColoredBox;
