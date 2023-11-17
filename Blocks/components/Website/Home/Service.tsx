"use client"
import styled from "styled-components";
import service1 from "../../../../public/utivor/service1.svg"
import service2 from "../../../../public/utivor/service2.svg"
import service3 from "../../../../public/utivor/service3.svg"
import service4 from "../../../../public/utivor/service4.svg"
import {Button} from "primereact/button";
import {useRouter} from "next/navigation";
import {Card} from "../../../ReusedComponent/Card";



const Why_Use_KreativeRock_Items = [
  {
    title: "Web Design & Development",
    content: `Whether you need a stunning website, a powerful e-commerce platform, or a custom web application, we've got you covered..`,
    icon: service1,
  },
  {
    title: "Digital Marketing",
    content: `Our digital marketing services, including SEO, SEM, social media management, and more, will boost your online presence and drive results.`,
    icon: service2,
  },
  {
    title: "Experience Design",
    content: `High performance UX design for websites, apps, and eCommerce experiences..`,
    icon: service3,
  },
  {
    title: "Consulting Services",
    content: `Tap into our expertise with our consulting services, where we help you navigate the complex world of tech and digital strategy.`,
    icon: service4,
  },
];



const Utivor_Service = () => {

  const router = useRouter();

  const NewRoute = () => {
    router.push("/register");
  };

  return (
    <Container className="text-700 lg:text-center justify-content-center lg:p-8">
          <div className="p-2 lg:px-8 uppercase">
                <h3 className='text-indigo-500 font-bold'>Services</h3>
          </div>
              <div className="grid grid-nogutter p-2">
                {Why_Use_KreativeRock_Items.map((item,index) => (
                  <Card index={index} key={index} title={item.title} content={item.content} icon={item.icon} />
                ))}
              </div>
          <div className="p-2 lg:px-8 uppercase">
             <Button onClick={NewRoute} className='btn px-7 py-3 mt-2  bg-indigo-500'> SERVICES</Button>
          </div>

    </Container>
  );
};



const Container = styled.div`
  background: #000000;
  color: #000;
  padding-bottom: 10px;
  padding-top: 10px;
  line-height: 164%;
`;



export default Utivor_Service;
