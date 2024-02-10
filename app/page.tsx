import Header from "@/components/Header";
import Body from "@/components/Body";
import Footer from "@/components/Footer";
import Slider from "@/components/Slider";
import CourseCard from "@/components/CourseCard";

import { slides } from "@/lib/mocks";

export default function Home() {
  return (
    <>
      <Header />
      <Body subheader={<Slider slides={slides} />}>
        <div className="w-100 mb-16">
          <h2 className="text-3xl font-bold text-primary text-center mb-5">
            OVLADAJ POSLOVNIM VEŠTINAMA
          </h2>
          <p className="mb-3 text-center text-gray-400 w-2/3 mx-auto">
            Čeka te šest modula koji će ti pomoći da stekneš praktična znanja za
            razvoj dalje karijere. Edukuj se iz oblasti pregovaranja,
            organizovanja vremena, upravljanja projektima. Osnaži se iz oblasti
            prodaje i nauči kako da upravljaš finansijama. Započni edukaciju!
          </p>
          <div className="mx-auto my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <CourseCard
              title="WordPress - napravi sajt bez kodiranja"
              description="Kurs WordPress - napravi sajt bez kodiranja upoznaje vas za WordPress
            tehnologijom u tri različita okruženja - Gutenberg, Themify i
            Elementor."
              image="https://coca-colapodrskamladima.com/wp-content/uploads/2021/10/vestine-prodaje-.jpg"
              link="/"
            />
            <CourseCard
              title="Komunikaciona strategija"
              description="Lazar Džamić, naš vodeći marketinški sručnjak koji je radio kao šef brend planiranja za Google-ov kreativni think-tank ZOO, pripremio je kurs “Komunikaciona strategija”. "
              image="https://coca-colapodrskamladima.com/wp-content/uploads/2021/10/organizovanje-vremena.jpg"
              link="/"
            />
            <CourseCard
              title="Self Management - upravljanje sobom"
              description="Upravljanje samim sobom je sposobnost da uredite svoje ponašanje, misli i emocije na produktivan način. To znači da efikasnim upravljanjenjem sobom dolazimo do bolje emocionalne inteligencije, razvijamo samosvest i našu dobrobit. "
              image="https://coca-colapodrskamladima.com/wp-content/uploads/2021/10/vestine-pregovaranja.jpg"
              link="/"
            />
          </div>
        </div>

        <div className="w-100 mb-16">
          <h2 className="text-3xl font-bold text-primary text-center mb-5">
            POČNI OD SEBE
          </h2>
          <p className="mb-3 text-center text-gray-400 w-2/3 mx-auto">
            Želiš da razbiješ na razgovoru za posao? Saznaj više o umrežavanju,
            kako napisati biografiju, ali i o vrstama komunikacije i tehnikama
            aktivnog slušanja, kao i važnosti ličnog razvoja.
          </p>
          <div className="mx-auto my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <CourseCard
              title="Komunikacija"
              description="Kurs WordPress - napravi sajt bez kodiranja upoznaje vas za WordPress
            tehnologijom u tri različita okruženja - Gutenberg, Themify i
            Elementor."
              image="https://coca-colapodrskamladima.com/wp-content/uploads/2021/10/komunikacija.jpg"
              link="/"
            />
            <CourseCard
              title="Lični razvoj i razumevanje sopstvene ličnosti"
              description="Lazar Džamić, naš vodeći marketinški sručnjak koji je radio kao šef brend planiranja za Google-ov kreativni think-tank ZOO, pripremio je kurs “Komunikaciona strategija”. "
              image="https://coca-colapodrskamladima.com/wp-content/uploads/2021/10/licni-razvoj-i-razumevanje.jpg"
              link="/"
            />
            <CourseCard
              title="Interakcija i umrežavanje"
              description="Upravljanje samim sobom je sposobnost da uredite svoje ponašanje, misli i emocije na produktivan način. To znači da efikasnim upravljanjenjem sobom dolazimo do bolje emocionalne inteligencije, razvijamo samosvest i našu dobrobit. "
              image="https://coca-colapodrskamladima.com/wp-content/uploads/2021/10/interakcija-i-umrezavanje.jpg"
              link="/"
            />
          </div>
        </div>
      </Body>
      <Footer />
    </>
  );
}
