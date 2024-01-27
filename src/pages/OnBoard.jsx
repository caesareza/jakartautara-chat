import LogoJakartaUtaraChat from "/logo-jakarta-utara-info-chat.svg"
import LogoPemkotJakartaUtara from "/logo-pemkot-jakarta-utara.png"
import { Link } from "react-router-dom"
import useWindowSize from "../hooks/windowSize"

export default function OnBoard() {
  const { width } = useWindowSize()

  return (
    <section className="h-full grid lg:place-content-center">
      <div className="flex flex-col justify-center lg:flex-row w-full lg:w-[1200px]">
        <div className="flex items-start justify-center lg:justify-start lg:w-[700px] lg:h-[400px] pt-[90px]">
          <img
            src={LogoJakartaUtaraChat}
            alt="LogoJakartaUtaraChat"
            width={width > 500 ? 136 : 65}
          />
          <div className="font-bold text-[35px] lg:text-[67px] ml-5 -mt-4 lg:ml-10 lg:-mt-8">
            <div>Jakarta</div>
            <div>Utara.</div>
            <div>Info</div>
          </div>
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

          <div className="flex flex-col items-center mt-16">
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
