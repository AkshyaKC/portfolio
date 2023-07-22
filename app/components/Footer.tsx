import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10 md:flex-row md:justify-between">
      <p>© Copyright 2023 by Akshya Kumar KC</p>
      <ul className="flex gap-2">
        <li>
          <Link href={"https://github.com/AkshyaKC"}>
            <Image src="/github.png" width={"20"} height={"20"} alt="ak" />
          </Link>
        </li>
        <li>
          <Link href={"https://www.linkedin.com/in/akshya-kumar-kc-2ab404170/"}>
            <Image src="/linkedin.png" width={"20"} height={"20"} alt="ak" />
          </Link>
        </li>
        <li>
          <Link href={"https://twitter.com/AkshyaKKC"}>
            <Image src="/twitter.png" width={"20"} height={"20"} alt="ak" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
