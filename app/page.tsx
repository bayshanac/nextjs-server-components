import Body from "@/components/Body";
import CourseCard from "@/components/CourseCard";
import Slider from "@/components/Slider";

import { slides } from "@/lib/mocks";

export default function Home() {
  return (
    <>
      <Slider slides={slides} />
      <Body>
        <h2 className="text-3xl font-bold text-primary text-center mt-5">Edukacije</h2>
        <div className="mx-auto my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <CourseCard
            title="WordPress - napravi sajt bez kodiranja"
            description="Kurs WordPress - napravi sajt bez kodiranja upoznaje vas za WordPress
            tehnologijom u tri različita okruženja - Gutenberg, Themify i
            Elementor."
            image="https://homepageacademy.rs/api/uploads/course_images/HPa_WP-778x436.jpeg"
            link="/"
          />
          <CourseCard
            title="Komunikaciona strategija"
            description="Lazar Džamić, naš vodeći marketinški sručnjak koji je radio kao šef brend planiranja za Google-ov kreativni think-tank ZOO, pripremio je kurs “Komunikaciona strategija”. "
            image="https://homepageacademy.rs/api/uploads/course_images/HPaKomunikacionaStrategija-778x436.jpeg"
            link="/"
          />
          <CourseCard
            title="Self Management - upravljanje sobom"
            description="Upravljanje samim sobom je sposobnost da uredite svoje ponašanje, misli i emocije na produktivan način. To znači da efikasnim upravljanjenjem sobom dolazimo do bolje emocionalne inteligencije, razvijamo samosvest i našu dobrobit. "
            image="https://homepageacademy.rs/api/uploads/course_images/HPa_SelfManagement-778x436.jpeg"
            link="/"
          />
        </div>
      </Body>
    </>
  );
}
