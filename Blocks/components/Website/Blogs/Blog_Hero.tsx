import styled from "styled-components";
import pics from "../../../../public/utivor/blog/blog-3.jpg"
import Ava from "../../../../public/utivor/blog/avatar3.png"
import {Avatar} from "primereact/avatar";
import Image from "next/image";

const Blogs = [
    {
        id:1,
        title:"crime",
        content:"How to conduct usability study for design\n" +
            "and post-launch phase.How to conduct usability study for design\n" +
            "and post-launch phase.How to conduct usability study for design\n" +
            "and post-launch phase.s",
        avatar:Ava,
        image:pics,
        writer:"Emmanuel",
        time:"Apr 5, 2021"
    },
    {
        id:2,
        title:"crime",
        content:"How to conduct usability study for design\n" +
            "and post-launch phase. How to conduct usability study for design\n" +
            "and post-launch phase.How to conduct usability study for design\n" +
            "and post-launch phase.",
        avatar:Ava,
        image:pics,
        writer:"Emmanuel",
        time:"Apr 5, 2021"
    },
    {
        id:2,
        title:"crime",
        content:"How to conduct usability study for design\n" +
            "and post-launch phase.How to conduct usability study for design\n" +
            "and post-launch phase.How to conduct usability study for design\n" +
            "and post-launch phase.",
        avatar:Ava,
        image:pics,
        writer:"Emmanuel",
        time:"Apr 5, 2021"
    }



]

const Blog_Hero = ( )=> {
    return (

        <Container className="text-700 lg:text-center justify-content-center lg:p-8 relative">

            <div className="p-2 lg:px-8 text-center mt-3">
                <p className='text-black mb-0'>In an ever-evolving digital landscape, where innovation reigns supreme and technology shapes our world, you've found your compass to navigate the vast terrain of the tech universe. Welcome to UTIVOR, where we bridge the gap between technology and you.

                    Here, we unravel the complexities of bits and bytes, delve into the realms of artificial intelligence, explore the potential of cutting-edge gadgets, and embrace the future of tech with open arms. Our mission is simple: to be your trusted guide, providing insights, news, and analysis that empower you to harness the full potential of the digital age. !</p>
            </div>

            <div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
                <div className="font-bold text-5xl text-900 mb-5 text-center">Featured Articles</div>
                <div className="grid nogutter">
                    {Blogs.map((item,index) => (
                        <div className="col-12 lg:col-4 p-3" key={item.id}>
                            <div className="shadow-2 border-round h-full surface-card">
                                <Image src={item.image} alt="blog-1" className="block w-full  border-round-top" />
                                <div className="p-4">
                                    <span className="block font-medium text-blue-600 mb-3">{item.title}</span>
                                    <div className=" text-700 font-medium mb-3 line-height-3 ">{item.content}</div>
                                    <div className="flex">
                                        <Image src={item.avatar} alt="blog-1" className="block  w-2rem h-2rem m-1  border-round-top" />
                                        <div className="ml-2">
                                            <div className="text-sm font-bold text-900 mb-1">{item.writer}</div>
                                            <div className="text-sm flex align-items-center text-700">
                                                <i className="pi pi-calendar mr-1 text-sm"></i>
                                                <span>{item.time}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </Container>
        )
}



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
export default Blog_Hero