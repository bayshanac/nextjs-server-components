import { PropsWithChildren } from "react";

function Body({ children }: PropsWithChildren<{}>) {
  return <main className="container py-10">{children}</main>;
}

export default Body;
