import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { PropsWithChildren } from "react";

function PagesLayout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default PagesLayout;
