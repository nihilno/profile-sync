import { ModeToggle } from "@/components/dashboard/ModeToggle";
import Logo from "@/components/home/Logo";

function Header() {
  return (
    <header className="flex w-full items-center justify-between px-4 py-12 sm:px-8">
      <div>
        <Logo />
      </div>
      <div className="scale-110">
        <ModeToggle />
      </div>
    </header>
  );
}

export default Header;
