import { PropsWithChildren } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LogoLink from "@/components/LogoLink";
import { cn } from "@/lib/utils";

type AuthCardSize = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

interface AuthCardProps {
  title?: string;
  description?: string;
  buttonLabel: string;
  onSubmit: () => void;
  footer?: React.ReactNode;
  size?: AuthCardSize;
  className?: string;
}

function AuthCard({
  title,
  description,
  buttonLabel,
  onSubmit,
  footer,
  size = "lg",
  className,
  children,
}: PropsWithChildren<AuthCardProps>) {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
      <div
        className={cn(className, "w-full m-auto bg-white", {
          "lg:max-w-sm": size === "sm",
          "lg:max-w-md": size === "md",
          "lg:max-w-lg": size === "lg",
          "lg:max-w-xl": size === "xl",
          "lg:max-w-2xl": size === "2xl",
          "lg:max-w-3xl": size === "3xl",
        })}
      >
        <Card>
          <CardHeader className="space-y-2 flex items-center">
            <LogoLink size={60} />
            {title ? (
              <CardTitle className="text-2xl text-center">{title}</CardTitle>
            ) : null}
            {description ? (
              <CardDescription className="text-center">
                {description}
              </CardDescription>
            ) : null}
          </CardHeader>
          <CardContent className="grid gap-4">{children}</CardContent>
          <CardFooter className="flex flex-col">
            <Button onClick={onSubmit} className="w-full">
              {buttonLabel}
            </Button>
            {footer ?? null}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default AuthCard;
