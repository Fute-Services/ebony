import { Tooltip } from "@mui/material";
import { towerData } from "../../Data/TowerData";
import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Header from '../../components/Header'
import Navbar from "../../components/Navbar";

export default function FloorPlanPage() {
    const navigate=useNavigate();
    const [hoverId,setHoverId]=useState<number | null>(null);
    const [zoom,setZoom]=useState(false);

    const {id}=useParams<{id:string}>();

    const floorData=id?towerData.find((floor)=>floor.id === Number(id)):towerData[0]

    if (!floorData) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-[#5d5c61] text-center p-6">
                <div className="bg-white text-black font-semibold px-6 py-3 rounded-lg shadow-md mb-4">
                    Floor data not found.
                </div>
                <button
                    onClick={() => navigate(-1)}
                    className="px-5 py-2 rounded-lg border border-white/70 text-white hover:bg-white hover:text-[#5d5c61] transition"
                >
                    Go Back
                </button>
            </div>
        );
    }

   const uniqUnits = useMemo(() => {
  if (!floorData?.units) return [];
  return Array.from(
    new Map(floorData.units.map(e => [e.id, e])).values()
  );
}, [floorData]);



    return (
        <>
         <div className="h-screen w-full flex flex-col md:flex-row items-center justify-center overflow-hidden">
            <Header/>
            <div className="flex flex-col gap-3 p-3 md:w-[20%] w-full mt-[22%] md:mt-0">
                {/* Master Plan button */}
                <div className='justify-center items-center flex'>
                    <button className="py-3 rounded-sm w-[90%] text-lg bg-gradient-to-r border-l-4 border-l-orange-700/70 from-[rgb(222,160,37)] to-[#f5f5f5]/90 text-gray-800 font-semibold">
                        {floorData.unitname}
                    </button></div>

                {/* Amenities buttons */}
                {uniqUnits.map((e) => (
                    <div
                        key={e.id} // key should be on outer div
                        className="flex flex-col items-center justify-center "
                    >
                        <button
                            onMouseEnter={() => setHoverId(e.id)}
                            onMouseLeave={() => setHoverId(null)}
                            onClick={() => setHoverId(e.id)}
                            className={`w-[90%] text-[15px] py-2 rounded-lg  transition-colors ${hoverId === e.id ? "bg-[rgb(224,168,57)] text-white border-2" : "text-black border-2 border-b-[rgb(99,100,102,0.5)] "}`}
                        >
                            {e.name}
                        </button>
                    </div>
                ))}
            </div>


            <div className="flex p-2 justify-center items-center w-full md:w-[80%] m-10 lg:m-20 h-screen relative">

                <div className='absolute md:-top-[50%] md:w-[20%] lg:-top-[45%] lg:w-[10%] w-[40%] -bottom-14 -right-2  lg:-right-10 gap-3 justify-center p-2 items-center flex flex-col'>
                    <button
                        onClick={() => navigate(-1)}
                        className="bg-[rgb(224,168,57)] text-[15px] transition-all duration-300 ease-in-out w-full py-1.5 hover:bg-black/60 text-white rounded-md">
                        Go Back
                    </button>

                    <button
                        onClick={() => setZoom(!zoom)}
                        className="bg-[rgb(224,168,57)] text-[15px]  transition-all duration-300 ease-in-out w-full py-1.5 hover:bg-black/60 text-white rounded-md">Zoom Image</button>

                </div>
                {/* SVG MASTER PLAN */}
              <svg viewBox="0 0 3000 1688" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid meet">
                    <image href={floorData.unitImage} width="3000" height="1688" preserveAspectRatio="xMidYMid meet" />





                    {floorData?.units.map((unit) => (
                        <Tooltip
                            title={unit.tooltipTitle}
                            arrow
                            placement="top"

                        >
                            <g>

                                <polygon
                                    // points="340,153,408,154,408,177,428,179,430,222,449,224,449,253,450,275,377,274,378,243,333,244,333,198,339,198"
                                    // fill="rgba(255,112,67,0.5)"
                                    key={unit.id}
                                    points={unit.polygon}
                                    fill={hoverId === unit.id ? "rgba(217, 168, 23, 0.7)" : "transparent"}
                                    style={{ cursor: "pointer" }}
                                    onMouseEnter={() => setHoverId(unit.id)}
                                    onMouseLeave={() => setHoverId(null)}




                                />
                            </g>
                        </Tooltip>
                    ))}


                </svg>

            </div>

            {zoom && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                >
                    <button
                    className='absolute text-black p-1 rounded-full right-3 top-4 bg-white'
                     onClick={() => setZoom(false)}><IoIosCloseCircleOutline size={20}/></button>
                    <img src={floorData.unitImage} alt="Master Plan" className="max-w-full max-h-full object-contain" />
                </div>
            )}

        </div>

        <Navbar/>

        </>
    )
}
