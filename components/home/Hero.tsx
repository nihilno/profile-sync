import { Button } from "@/components/ui/button";
import { cards } from "@/lib/links";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative -mt-10 flex flex-1 flex-col items-center justify-center">
      <div className="relative z-10 w-full max-w-7xl">
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-5xl font-black tracking-tighter md:text-7xl">
            jobs <span className="text-primary">tracking</span> app
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed lg:mx-0">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
            quibusdam maiores corporis! Laudantium tenetur quibusdam deserunt
            ullam perspiciatis suscipit mollitia.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Button variant="outline" size="xl">
              <Link href="/add-job">See Demo →</Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {cards.map(({ Icon, title, desc }, i) => (
            <div
              key={i}
              className="glass-card group"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="p-6 text-center">
                <Icon className="text-primary mx-auto mb-4 h-12 w-12 transition group-hover:scale-110" />
                <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
                <p className="text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
