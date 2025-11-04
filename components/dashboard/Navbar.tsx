import LinksDropdown from "@/components/dashboard/LinksDropdown";
import { ModeToggle } from "@/components/dashboard/ModeToggle";
import { UserButton } from "@clerk/nextjs";

function Navbar() {
  return (
    <nav className="bg-muted/65 flex items-center justify-between px-4 py-12 sm:px-16">
      <div>
        <LinksDropdown />
      </div>
      <div className="flex items-center gap-6">
        <div className="scale-110">
          <ModeToggle />
        </div>
        <div className="translate-y-1 scale-130">
          <UserButton />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
