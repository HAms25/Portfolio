import { Button } from "@/common/components/ui/Button";
import { SocialIcons } from "../../common/index";
import TechStackIcons from "@/common/components/TechStackIcons";
import { Download, Mail } from 'lucide-react';

const Home = () => {

  const handleDownloadCV = () => {
    window.open('file:///C:/Users/USUARIO/Downloads/Hilari_CV.pdf', '_blank');
  }

  const handleContactEmail = () => {
    window.location.href = 'anguie_147@hotmail.com';
  }

  return (
    <>
      <section className="p-5 flex gap-4 mx-auto">
        <SocialIcons />
        <div className="w-[95%] h-full py-32 flex items-center justify-center gap-28">
          <div>
            <h2 className="text-[1.7rem] font-medium">Hola, soy</h2>
            <h1 className="bg-gradient-to-bl from-indigo-500 from-10% via-sky-600 via-40% to-emerald-300 to-90% bg-clip-text text-transparent font-bold text-[4.5rem]">
              Hilari Martinez
            </h1>
            <p className="text-[2.3rem]">Desarrolladora Front-end</p>
            <div className="flex gap-4 py-5">
              <Button
                onClick={handleDownloadCV}
                className="flex items-center gap-2 bg-sky-500 hover:bg-sky-400 px-6 py-3 rounded-lg transition-all text-white"
                variant="outline"
              >
                <Download /> Descargar CV
              </Button>
              <Button
                onClick={handleContactEmail}
                className="flex items-center gap-2 border border-green-500 hover:bg-green-500 px-6 py-3 rounded-lg transition-all"
              >
                <Mail /> Contáctame
              </Button>
            </div>
          </div>
          <figure>
            <img
              src="https://res.cloudinary.com/dovqxavyy/image/upload/v1713823850/hila_el81tb.png"
              alt=""
              className="w-80 h-80 rounded-3xl"
            />
          </figure>
        </div>
      </section>
      <TechStackIcons />
    </>
  );
};

export default Home;
