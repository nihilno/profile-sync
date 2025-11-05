import Logo from "@/components/home/Logo";

function Header() {
  return (
    <header className="flex w-full items-center justify-between py-12">
      <div>
        <Logo />
      </div>
    </header>
  );
}

export default Header;
