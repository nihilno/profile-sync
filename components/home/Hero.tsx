import { Button } from "@/components/ui/button";
import LandingImg from "@/public/assets/main.svg";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="mx-auto -mt-10 grid w-full flex-1 items-center justify-between px-4 sm:px-8 lg:grid-cols-[1fr_400px]">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold capitalize md:text-[68px]">
          job <span className="text-primary">tracking</span> app
        </h1>
        <p className="mt-4 max-w-md leading-loose">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          voluptate animi inventore nostrum amet quas maxime esse sed tempore
          laborum placeat debitis soluta quos, omnis, magni similique blanditiis
          officiis adipisci.
        </p>
        <Button asChild className="mt-4" size="xl">
          <Link href="/add-job">Get Started</Link>
        </Button>
      </div>
      <Image src={LandingImg} alt="landing" className="hidden lg:block" />
    </div>
  );
}

export default Hero;
