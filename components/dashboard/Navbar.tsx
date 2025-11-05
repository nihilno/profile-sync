import LinksDropdown from "@/components/dashboard/LinksDropdown";
import { UserButton } from "@clerk/nextjs";

function Navbar() {
  return (
    <nav className="bg-muted/65 flex min-h-[130px] items-center justify-between px-4 py-12 sm:px-16">
      <div className="">
        <LinksDropdown />
      </div>

      <div className="translate-y-1 scale-130">
        <UserButton />
      </div>
    </nav>
  );
}

export default Navbar;
