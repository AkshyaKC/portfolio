import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-4 items-center justify-center md:m-4 mb-48">
      <div className="flex flex-col md:w-2/3">
        <h1 className="text-center md:text-left">
          Hi there, I'm Akshya Kumar KC
        </h1>
        <h3 className="text-[#0EA5E9] text-center md:text-left">
          Frontend Developer
        </h3>
        <h2 className="mt-6 text-lg text-justify">
          I specialize in turning concepts into visually stunning and responsive
          websites. From translating wireframes into pixel-perfect interfaces to
          optimizing performance, I'm dedicated to creating seamless and
          immersive web experiences that leave a lasting impression. Let's
          collaborate and bring your digital vision to life!
        </h2>
      </div>
      <div className="md:flex justify-center">
        <Image
          src="/mestich.png"
          width={"200"}
          height={200}
          alt="Akshya"
          // className="w-40 md:w-[200px]"
        />
      </div>
    </div>
  );
};

export default Hero;
