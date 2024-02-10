
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo_podrska-mladima.png";
import { cn } from "@/lib/utils";

type LogoSizes = 60 | 72;

interface LogoLinkProps {
  size?: LogoSizes;
  className?: string;
}

function LogoLink({className, size = 72}: LogoLinkProps) {
  return (
    <Link href="/" className={cn(className, "items-center", {
      "w-60": size === 60,
      "w-80": size === 72
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