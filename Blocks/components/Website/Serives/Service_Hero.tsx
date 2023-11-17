import styled from "styled-components";
import Image from "next/image";
import {Card, Card_Services} from "../../../ReusedComponent/Card";
import service1 from "../../../../public/utivor/service1.svg";
import service2 from "../../../../public/utivor/service2.svg";
import service3 from "../../../../public/utivor/service3.svg";
import service4 from "../../../../public/utivor/service4.svg";


const Why_Use_KreativeRock_Items = [
    {
        content: `Creative Brilliance: Our team of creative minds is ready to breathe life into your ideas. Whether it's web design, branding, content 
creation, or any other service, we infuse creativity into every project.`,
        icon: 1,
    },
    {
        content: `Technical Wizardry: We're not just about creativity; we're technically savvy too. Our experts use the latest tools and technologies 
to create seamless, functional, and cutting-edge solutions.`,
        icon: 2,
    },
    {
        content: `Digital Marketing Mastery: In a world driven by data, our digital & marketing services are the key to unlocking the
brand's full potential. From SEO to social media, we've got you covered..`,
        icon: 3,
    },
    {
        content: `Tailored Solutions:  One size doesn't fit all. We understand your unique needs and craft solutions that are as unique as you are. 
No cookie-cutter approaches here!`,
        icon: 4,
    },
    {
        content: "Quality Assurance:  At UTIVOR, quality isn't a buzzword—it's a commitment. We rigorously test and refine our work \n" +
            "to ensure it meets the highest standards.",
        icon: 5
    },
    {
        content: "On-Time Delivery:  We know that time is precious. Our efficient project management ensures that we not only meet but often \n" +
            "exceed deadlines.",
        icon: 6
    }
];




const Service_Hero = ( )=> {
    return (
            <Container className="text-700 lg:text-center justify-content-center lg:p-6 relative">

                <div className="grid w-full  ml-0 text-800 p-2 mt-8">

                    <div className="col-12 md:col-6  text-center text-left flex align-items-center px-4 ">
                        <section>
                            <h5 className='font-bold mb-1'>
                                <span className='pr-2 text-indigo-700'>Unlock</span>
                                <span className='text-black'>the Power of Our</span>
                                <span className='text-black'>Services!</span>
                            </h5>
                            <div className='mb-6 mt-2'>
                                <p>
                                    Welcome to the heart of UTIVOR—our Services Page. Here,
                                    we unveil the magic that can transform your vision
                                    into reality. Our mission is simple: to provide you with exceptional,
                                    tailored services that elevate your projects to new heights.
                                </p>
                            </div>
                        </section>
                    </div>

                    <div className="col-12 md:col-6   p-1  md:block">

                        <div className="grid grid-nogutter p-2">
                            {Why_Use_KreativeRock_Items.map((item,index) => (
                                <Card_Services index={index} key={index} content={item.content} icon={item.icon} />
                            ))}
                        </div>
                    </div>
                </div>

            </Container>

    )
}




const Container = styled.div`
  position:relative;
  //height: 697px;
  flex-shrink: 0;
  background-image: linear-gradient(to right, rgba(224, 236, 248, 0.09), rgba(224, 236, 248, 0.09)), url("/utivor/service/hero.svg");
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

export default Service_Hero