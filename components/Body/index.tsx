import { PropsWithChildren } from "react";

interface BodyProps {
  subheader?: React.ReactNode;
}

function Body({ subheader, children }: PropsWithChildren<BodyProps>) {
  return (
    <div className="mt-[6.5rem]">
      {subheader && <div className="w-100">{subheader}</div>}
      <main className="container py-16 min-h-[calc(100vh_-_18rem)]">{children}</main>
    </div>
  );
}

export default Body;
