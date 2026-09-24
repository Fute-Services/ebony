import { RiArrowGoBackLine } from "react-icons/ri";
import {Link} from "react-router-dom";

export default function HomePage() {
  return (
    <>
    <iframe

            src="https://futeservices.com/25-26/V2/Ebony_VR_06/index.html"
            style={{ width: "100%", height: "100vh", border: "none" }}
            title="IndiaBulls"
        />

          {/* Overlay Buttons */}
                <div className="absolute bottom-10 right-6 z-30 pointer-events-auto">
                    <Link to="https://hiranandanifortunecity.com/"> <button  className="bg-white/70 text-gray-800/90 hover:text-black text-[18px] w-16 h-16 font-bold rounded-full hover:bg-white transition-all duration-300 flex items-center justify-center">
                       <RiArrowGoBackLine size={20} />
                    </button></Link>
                </div>
    </>
  );
}