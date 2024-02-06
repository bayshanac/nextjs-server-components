
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo_podrska-mladima.png";
import { cn } from "@/lib/utils";

type LogoSizes = 60 | 80;

interface LogoLinkProps {
  size?: LogoSizes;
}

function LogoLink({size = 80}: LogoLinkProps) {
  return (
    <Link href="/" className={cn("items-center", {
      "w-60": size === 60,
      "w-80": size === 80
    })}>
    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
      <Image
        src={logo}
        alt="podrska mladima"
        className="self-center"
      />
    </span>
  </Link>
  )
}

export default LogoLink