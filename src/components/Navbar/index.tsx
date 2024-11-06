import { NavLinks } from "..";
import { ThemeToggle } from "@/common";

export default function Navbar() {
  return (
      <header className="sticky top-0 w-full backdrop-blur-md hidden md:block">
        <nav className=" flex justify-center items-center p-4 gap-14 xl:gap-[22rem]">
        <span className="font-bold text-[2rem]">@hilasaa</span>
        <NavLinks className="gap-6" />
        <ThemeToggle />
        </nav>
      </header>
  );
}