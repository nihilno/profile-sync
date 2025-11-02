import LogoImage from "@/public/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="mx-auto">
      <Image src={LogoImage} alt="logo" />
    </Link>
  );
}

export default Logo;
