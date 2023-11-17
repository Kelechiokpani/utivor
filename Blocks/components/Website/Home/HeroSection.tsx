"use client"
import styled from "styled-components";
import {useRouter} from "next/navigation";
import {Button} from "primereact/button";


const HeroSection = () => {

  const router = useRouter();

  const NewRoute = () => {
    router.push("/register");
    console.log("clicked")
  };


  return (
    <Container id="hero"
      className="flex flex-column justify-content-center text-center pt-4 px-2 lg:px-8 ">
          <div className="mx-4 md:mx-8 mt-0 md:mt-4 md:pt-6 text-center mb-8">
            <h5 className="text-5xl font-bold text-white mb-2">
                Discover boundless possibilities with us
            </h5>
              <h5 className="text-5xl mt-0 font-bold text-purple-600 ">
                  "where your dreams meet innovation".
              </h5>
              <Button onClick={NewRoute} className='btn px-7 py-3 mt-2'> LETS TALK</Button>
      </div>

    </Container>
  );
};

export default HeroSection;

const Container = styled.div`
  height: 697px;
  flex-shrink: 0;
  background-image: linear-gradient(to right, rgba(32, 30, 30, 0.86), rgba(32, 30, 30, 0.86)), url("/utivor/hero.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat, no-repeat;
  fill: rgba(217, 217, 217, 0.13);

  .btn {
    border-radius: 5px;
    background: #3F4CB0;
    box-shadow: 0px 4px 16px 0px rgba(63, 76, 176, 0.30);

    flex-shrink: 0;
  }
`;

