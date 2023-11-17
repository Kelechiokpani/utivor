"use client"
import styled from "styled-components";
import service1 from "../../../../public/utivor/about/top/one.svg"
import service2 from "../../../../public/utivor/about/top/two.svg"
import service3 from "../../../../public/utivor/about/top/three.svg"
import {useRouter} from "next/navigation";
import {Card, Card_About} from "../../../ReusedComponent/Card";
import s1 from "../../../../public/utivor/about/center/one.svg"
import s2 from "../../../../public/utivor/about/center/two.svg"
import s3 from "../../../../public/utivor/about/center/three.svg"
import s4 from "../../../../public/utivor/about/center/four.svg"
import s5 from "../../../../public/utivor/about/center/five.svg"
import Image from "next/image";


const About = [
  {
    title: "Why Not Other Agencies",
    content: `At UTIVOR, we're not just a company; we're a gateway to a world of endless possibilities. Our passion for excellence and commitment to pushing the boundaries of what's possible drive everything we do..`,
    icon: service1,
  },
  {
    title: "What We Provide",
    content: `With a team of creative visionaries and technical wizards, we craft solutions that are not only innovative but also user-centric. Whether you're an individual, a small business, or a large enterprise, we have something extraordinary to offer you..`,
    icon: service2,
  },
  {
    title: "End-to-End Solutions",
    content: `From idea to execution, we provide comprehensive solutions that cover every aspect of your project..`,
    icon: service3,
  },
];

const About_Two = [
  {
    number:"1",
    title:"Innovation Unleashed:",
    content:" We're not afraid to dream big, and we've got the skills to bring those dreams to life. Our innovative solutions\n" +
        "are designed to transform your challenges into opportunities",
    icon :s1,
  },
  {
    number:"2",
    title:"Unparalleled Expertise:",
    content:"Our team of experts is well-versed in the latest trends and technologies. We stay ahead of the curve\n" +
        "so you can, too",
    icon :s2,
  },
  {
    number:"3",
    title:"Client-Centric Approach",
    content:"Your success is our success. We work closely with you to understand your unique needs and tailor 0ur \n" +
        "solutions to meet them.",
    icon :s3,
  },
  {
    number:"4",
    title:"Quality Assurance:",
    content:"We're committed to delivering nothing but the best. Our rigorous quality control processes ensure that every \n" +
        "project is a masterpiece.",
    icon :s4,
  },
  {
    number:"5",
    title:"Timely Delivery: ",
    content:"We understand the value of your time. With our efficient project management, we ensure that your projects are \n" +
        "delivered on time.",
    icon :s5,
  },


]


const About_Hero = () => {

  const router = useRouter();

  const NewRoute = () => {
    router.push("/register");
  };


  return (
    <Container className="text-700 lg:text-center justify-content-center lg:p-8 relative">
      <div className="p-2 lg:px-8 uppercase">
            <h5 className='text-indigo-700 font-bold mb-0'>Welcome to UTIVOR – Where Imagination</h5>
            <h5 className='text-indigo-700 font-bold mt-0'> Meets Innovation!</h5>
      </div>

        <div className="grid p-2 relative">
          {About.map((item,index) => (
              <Card_About index={index} key={index} title={item.title} content={item.content} icon={item.icon} />
          ))}
        </div>

      {/* section 2*/}
          <div>
            <div className="grid w-full  ml-0 text-800 p-2 mt-8">

              <div className="col-12 md:col-5  text-center text-left flex align-items-center ">
                <section>
                  <h5 className='font-bold mb-1'>
                    <span className='pr-2 text-indigo-700'>WE</span>
                    <span className='text-black'>WORK IN A</span>
                  </h5>
                  <h5 className='text-black font-bold mb-2 mt-0'>VERY UNIQUE AND</h5>
                  <h5 className='text-indigo-700 font-bold mt-0'>IN DIFFERENT WAY !</h5>

                  <div className='mb-6 mt-6'>
                    <p>
                      At UTIVOR, we're not just a company; we're a gateway to a world of endless possibilities. Our passion for excellence and commitment to pushing the boundaries of what's possible drive everything we do.
                      With a team of creative visionaries and technical wizards, we craft solutions that are not only innovative but also user-centric. Whether you're an individual, a small business, or a large enterprise, we have something extraordinary to offer you.
                    </p>
                  </div>
                </section>
              </div>

              <div className="col-12 md:col-6 lg:ml-5  p-1  md:block">
                {About_Two.map((item,index) => (
                    <div key={item.number}>
                      <ul className="list-none p-0 m-0">
                        <li className="py-3 border-bottom-2 border-indigo-500 flex md:align-items-start md:justify-content-between flex-column md:flex-row gap-4">
                          <div className="flex align-items-start mr-0 lg:mr-5">
                            <div className="border-circle w-2rem h-1rem m-1  p-3 bg-indigo-600 text-white font-bold flex align-items-center justify-content-center">{item.number}</div>
                            <div>
                              <h5 className='mt-2 text-start '>
                                <span className='pr-1 text-indigo-700 font-bold text-sm'>{item.title}</span>
                                <span className='text-black text-sm text-start'>{item.content}.</span>
                              </h5>
                            </div>
                          </div>
                          <Image src={item?.icon} className="mr-3 w-3rem h-3rem" alt="avatar-f-1" />
                        </li>
                      </ul>
                    </div>
                ))}


              </div>
            </div>

            <div className="p-2 lg:px-8 text-center mt-3">
              <p className='text-black mb-0'>Whether you're looking to revamp your online presence, build a cutting-edge app, or optimize your business processes, UTIVOR is the partner you've been searching for. Explore our website to see how we can turn your ideas into reality and take your journey to new heights.
                Let's transform the ordinary into the extraordinary together. Your success is just a click away. Get started today!</p>
            </div>
          </div>


    </Container>
  );
};




const Container = styled.div`
  position:relative;
  //height: 697px;
  flex-shrink: 0;
  background-image: linear-gradient(to right, rgba(224, 236, 248, 0.09), rgba(224, 236, 248, 0.09)), url("/utivor/about/hero.svg");
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



export default About_Hero;
