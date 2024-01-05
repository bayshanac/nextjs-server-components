import Link from "next/link";
import { Navigation } from "../Navigation";

function Header() {
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="http://localhost:3000" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Podrska mladima
            </span>
          </Link>
          <Navigation />
        </div>
      </nav>
    </header>
  );
}

export default Header;
