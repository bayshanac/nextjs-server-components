import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

function CourseCard({ title, description, image, link }: CourseCardProps) {
  return (
    <Card className="grid grid-rows-[auto_1fr_auto]">
      <CardHeader>
        <Image src={image} alt={title} width={778} height={436} />
      </CardHeader>
      <CardContent className="grid grid-rows-[minmax(65px,_auto)_1fr]">
        <CardTitle className="text-primary hover:text-primary/80 mb-2"><Link href={link}>{title}</Link></CardTitle>
        <CardDescription className="mb-2">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Link
          className="w-full text-center rounded-md bg-primary hover:bg-primary/80 px-4 py-3 text-white text-sm"
          href={link}
        >
          Pogledaj
        </Link>
      </CardFooter>
    </Card>
  );
}

export default CourseCard;
