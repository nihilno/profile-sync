import Navbar from "@/components/dashboard/Navbar";
import Sidebar from "@/components/dashboard/Sidebar";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid lg:grid-cols-6">
      <div className="hidden lg:col-span-1 lg:block lg:min-h-dvh">
        <Sidebar />
      </div>
      <div className="lg:col-span-5">
        <Navbar />
        <div className="px-4 py-16 sm:px-8 lg:px-16">{children}</div>
      </div>
    </main>
  );
}

export default layout;
