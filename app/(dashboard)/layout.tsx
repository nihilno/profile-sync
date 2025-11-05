import Navbar from "@/components/dashboard/Navbar";
import Sidebar from "@/components/dashboard/Sidebar";
import SineWaveCanvas from "@/components/global/SinewaveCanvas";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid min-h-dvh lg:grid-cols-6">
      <div className="hidden lg:col-span-1 lg:block lg:min-h-dvh">
        <Sidebar />
      </div>
      <div className="relative overflow-hidden lg:col-span-5">
        <Navbar />
        <div className="relative px-4 py-16 sm:px-8 lg:px-16">
          <SineWaveCanvas />
          <div className="relative z-10">{children}</div>
        </div>
      </div>
    </main>
  );
}
