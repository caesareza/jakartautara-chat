import LogoJakartaUtaraChat from "/logo-jakarta-utara-info-chat.svg"
import LogoPemkotJakartaUtara from "/logo-pemkot-jakarta-utara.png"
import { Link } from "react-router-dom"

export default function OnBoard() {
  return (
    <section className="h-full grid lg:place-content-center">
      <div className="flex flex-col justify-center lg:flex-row w-full lg:w-[1200px]">
        <div className="lg:w-[700px] lg:h-[400px] flex items-start pt-16">
          <img
            src={LogoJakartaUtaraChat}
            alt="LogoJakartaUtaraChat"
            width={136}
            className="mt-5 mr-10 ml-16"
          />
          <h1 className="font-bold lg:text-[67px] lg:w-[200px] lg:leading-[89px]">
            Jakarta Utara. Info
          </h1>
        </div>
        <div className="lg:w-[700px] lg:h-[400px] text-center mt-auto lg:border-l pt-24">
          <div className="flex flex-col space-y-3 lg:px-36">
            <Link
              to="/masuk"
              className="bg-blue-500 text-white font-bold rounded py-2"
            >
              Masuk
            </Link>
            <Link to="/daftar" className="border  font-bold rounded py-2">
              Daftar
            </Link>
          </div>

          <div className="flex flex-col items-center mt-20">
            <div className="text-sm mb-3">Didukung Oleh</div>
            <img
              src={LogoPemkotJakartaUtara}
              alt="LogoPemkotJakartaUtara"
              width={150}
              className="text-center"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
