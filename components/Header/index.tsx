import Link from "next/link";
import { Navigation } from "../Navigation";
import Image from "next/image";
import logo from "../../public/logo_podrska-mladima.png";

function Header() {
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-4">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="http://localhost:3000" className="flex items-center w-80">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              <Image
                src={logo}
                alt="podrska mladima"
                className="self-center"
              />
            </span>
          </Link>
          <Navigation />
        </div>
      </nav>
    </header>
  );
}

export default Header;
