"use client";

import Logo from "@/components/home/Logo";
import { Button } from "@/components/ui/button";
import { links } from "@/lib/links";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="bg-muted/65 flex h-full flex-col px-8 py-12">
      <Logo />
      <div className="mt-20 flex flex-col gap-6 px-6">
        {links.map((link) => (
          <Button
            key={link.label}
            asChild
            variant={pathname === link.href ? "default" : "ghost"}
            size="lg"
            className="text-lg"
          >
            <Link href={link.href} className="flex items-center gap-2">
              {link.icon}
              <span className="capitalize">{link.label}</span>
            </Link>
          </Button>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
