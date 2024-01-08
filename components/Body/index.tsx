import { PropsWithChildren } from "react";

function Body({ children }: PropsWithChildren<{}>) {
  return <main className="bg-gray-200 py-10">{children}</main>;
}

export default Body;
