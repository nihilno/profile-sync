import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";

export default function HomePage() {
  return (
    <section className="flex min-h-dvh flex-col items-baseline px-92">
      <Header />
      <Hero />
    </section>
  );
}
