import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="py-10 bg-primary">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white">
            <Link href="/" className="block text-white mb-4">
              <span className="sr-only">
                Coca-Cola podrška mladima #NaučiPrimeniKreni
              </span>
              <Image
                src="https://coca-colapodrskamladima.com/wp-content/themes/coca_cola_youth_wp_theme/dist/images/mladi_ma.png"
                alt="Coca-Cola podrška mladima #NaučiPrimeniKreni"
                width={369}
                height={84}
              />
            </Link>
            <p className="text-sm">
              © 2024 Coca-Cola HBC | All Rights Reserved
            </p>
          </div>
          <div>
            <Image
              src="https://coca-colapodrskamladima.com/wp-content/themes/coca_cola_youth_wp_theme/dist/images/coca-cola-hbc.svg"
              alt="Coca-Cola HBC Srbija"
              width={195}
              height={46}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
