"use client"
import HeroImg from "../../../../public/utivor/pexels1.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import {Header_Span, Header_Span_Description} from "../../../ReusedComponent/Text_Typography";
import {CustomButton} from "../../../ReusedComponent/Styled_Button";
import Loading from "../../../ReusedComponent/Bounce_Loader";

const Our_Work_Section = () => {
    const router = useRouter();

    const NewRoute = () => {
        router.push("/register");
    };

    return (
        <div style={{backgroundColor:"rgba(0,0,0,0.68)"}}>
            <Container className="grid w-full  ml-0 text-white lg:p-6 p-29">
                <div className="col-12 md:col-5  p-1  md:block">
                    <Image
                        src={HeroImg}
                        alt="hero-1"
                        className="md:ml-auto block md:h-full w-full h-full"
                    />
                </div>
                <div className="col-12 md:col-7 lg:p-6 p-4 text-center text-left flex align-items-center ">
                    <section>
                        <h2 className='text-header'>Welcome to UTIVOR – Where Imagination Meets Innovation!</h2>
                        <div className='mb-6 mt-6'>
                            <p>
                                At UTIVOR, we're not just a company; we're a gateway to a world of endless possibilities. Our passion for excellence and commitment to pushing the boundaries of what's possible drive everything we do.
                                With a team of creative visionaries and technical wizards, we craft solutions that are not only innovative but also user-centric. Whether you're an individual, a small business, or a large enterprise, we have something extraordinary to offer you.
                            </p>
                            <p>
                                With a team of creative visionaries and technical wizards, we craft solutions that are not only innovative but also user-centric. Whether you're an individual, a small business, or a large enterprise, we have something extraordinary to offer you.
                            </p>
                        </div>

                        <CustomButton
                            label={`ABOUT US`}
                            className="btn px-6 mt-4"
                            icon="add"
                            onClick={NewRoute}
                        />
                    </section>
                </div>


            </Container>
            <Container className="grid w-full  ml-0 text-white lg:p-6 p-29">
                <div className="col-12 md:col-7 lg:p-6 p-4 text-center text-left flex align-items-center ">
                    <section>
                        <h2 className='text-header'>Welcome to UTIVOR – Where Imagination Meets Innovation!</h2>
                        <div className='mb-6 mt-6'>
                            <p>
                                At UTIVOR, we're not just a company; we're a gateway to a world of endless possibilities. Our passion for excellence and commitment to pushing the boundaries of what's possible drive everything we do.
                                With a team of creative visionaries and technical wizards, we craft solutions that are not only innovative but also user-centric. Whether you're an individual, a small business, or a large enterprise, we have something extraordinary to offer you.
                            </p>
                            <p>
                                With a team of creative visionaries and technical wizards, we craft solutions that are not only innovative but also user-centric. Whether you're an individual, a small business, or a large enterprise, we have something extraordinary to offer you.
                            </p>
                        </div>

                        <CustomButton
                            label={`ABOUT US`}
                            className="btn px-6 mt-4"
                            icon="add"
                            onClick={NewRoute}
                        />
                    </section>
                </div>

                <div className="col-12 md:col-5  p-1  md:block">
                    <Image
                        src={HeroImg}
                        alt="hero-1"
                        className="md:ml-auto block md:h-full w-full h-full"
                    />
                </div>
            </Container>
            <Container className="grid w-full  ml-0 text-white lg:p-6 p-29">
                <div className="col-12 md:col-5  p-1  md:block">
                    <Image
                        src={HeroImg}
                        alt="hero-1"
                        className="md:ml-auto block md:h-full w-full h-full"
                    />
                </div>
                <div className="col-12 md:col-7 lg:p-6 p-4 text-center text-left flex align-items-center ">
                    <section>
                        <h2 className='text-header'>Welcome to UTIVOR – Where Imagination Meets Innovation!</h2>
                        <div className='mb-6 mt-6'>
                            <p>
                                At UTIVOR, we're not just a company; we're a gateway to a world of endless possibilities. Our passion for excellence and commitment to pushing the boundaries of what's possible drive everything we do.
                                With a team of creative visionaries and technical wizards, we craft solutions that are not only innovative but also user-centric. Whether you're an individual, a small business, or a large enterprise, we have something extraordinary to offer you.
                            </p>
                            <p>
                                With a team of creative visionaries and technical wizards, we craft solutions that are not only innovative but also user-centric. Whether you're an individual, a small business, or a large enterprise, we have something extraordinary to offer you.
                            </p>
                        </div>

                        <CustomButton
                            label={`ABOUT US`}
                            className="btn px-6 mt-4"
                            icon="add"
                            onClick={NewRoute}
                        />
                    </section>
                </div>


            </Container>
        </div>

    );
};

const Container = styled.div`
  position: relative;
  //height: 45rem;
  border: none;
  background-size: cover;
  color: #000;
  //opacity: 0.6;

  .btn {
    border-radius: 5px;
    background: #3F4CB0;
    box-shadow: 0px 4px 16px 0px rgba(63, 76, 176, 0.30);
    flex-shrink: 0;
  }
  .text-header{
    color:#3F4CB0;
    font-weight:700;
  }
`;

export default Our_Work_Section;
