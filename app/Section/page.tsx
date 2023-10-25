import Image from "next/image";
import HeaderPicture from "../../public/Images/bg.jpg";

const Section = () => {
  return (
    <Image className="w-screen h-64" src={HeaderPicture} alt="header_picture" />
  );
};

export default Section;
