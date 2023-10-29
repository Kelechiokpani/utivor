
import Image from "next/image";
interface PortfolioCardProps {
  icon: string;
}

export default function PortfolioCard(props: PortfolioCardProps) {
  const { icon } = props;

  return (
    <div className={`col-12 md:col-12 lg:col-4 p-0 lg:pb-5 mt-4 lg:mt-0`}>
      <div className="h-[200px] p-2">
        <div className="flex justify-center align-content-center items-center p-3 h-full">
          <div
            className="h-auto item mb-3"
            style={{
              borderRadius: "10px",
            }}
          >
            <Image
              src={icon}
              alt="KreativeRock Digital Logo"
              className="mr-0"
              width={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
