import { useState } from 'react';
import masterplan from '../assets/masterplanimage.jpg'
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router-dom';
import { IoIosCloseCircleOutline } from "react-icons/io";



export default function MasterPlanPage() {
    const [hoverId, setHoverId] = useState<number | null>(null);
    const [zoom, setZoom] = useState(false);
    const navigate = useNavigate();

    const amenities = [
        {
            id: 1, title: 'Entry', polygon: '475,624,475,636,510,635,508,623',
        },
        {
            id: 2, title: 'Exit', polygon: '1248,600,1248,612,1283,611,1281,599',
        },
        { id: 3, title: "Ramp", polygon: "418,335,643,335,634,346,624,353,613,359,596,367,534,369,477,370,417,370" }
        , { id: 3, title: "Ramp", polygon: "1145,285,1145,326,1172,382,1194,434,1211,483,1211,524,1242,524,1241,477,1219,424,1192,351,1173,312,1160,296" }
        , { id: 4, title: "Lift", polygon: "649,394,677,392,677,420,649,419" },
        { id: 4, title: "Lift", polygon: "650,422,678,420,678,448,650,447" },

        { id: 4, title: "Lift", polygon: "650,449,678,449,678,464,650,464" },
        { id: 4, title: "Lift", polygon: "1111,333,1139,331,1139,359,1111,358" },
        { id: 4, title: "Lift", polygon: "1111,364,1139,362,1139,390,1111,389" },
        { id: 4, title: "Lift", polygon: "1112,393,1140,391,1140,419,1112,418" },
        { id: 4, title: "Lift", polygon: "1111,422,1139,420,1139,448,1111,447" },
        { id: 5, title: "Lobby", polygon: "678,391,723,391,723,485,678,485" },
        { id: 5, title: "Lobby", polygon: "1039,330,1109,330,1111,517,1037,517" },
    ]

    const uniqueAmenities = Array.from(
        new Map(amenities.map(e => [e.id, e])).values()
    );


    return (
        <div className="h-screen w-full flex flex-col md:flex-row items-center justify-center overflow-hidden">
            <div className="flex flex-col gap-3 p-3 md:w-[20%] w-full mt-[22%] md:mt-0">
                {/* Master Plan button */}
                <div className='justify-center items-center flex'>
                    <button className="py-3 rounded-sm w-[90%] text-lg bg-gradient-to-r border-l-4 border-l-orange-700/70 from-[rgb(222,160,37)] to-[#f5f5f5]/90 text-gray-800 font-semibold">
                        Master Plan
                    </button></div>

                {/* Amenities buttons */}
                {uniqueAmenities.map((e) => (
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
                            {e.title}
                        </button>
                    </div>
                ))}
            </div>


            <div className="flex p-2 justify-center items-center w-full md:w-[80%] h-screen relative">

                <div className='absolute md:-top-[40%] md:w-[20%] lg:-top-[20%] lg:w-[10%] w-full -bottom-2  right-2  lg:right-5 gap-3 justify-center p-2 items-center flex flex-col'>
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
                <svg viewBox="0 0 1500 844" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid meet">
                    <image href={masterplan} width="1500" height="844" preserveAspectRatio="xMidYMid meet" />





                    {amenities.map((unit) => (
                        <Tooltip
                            title={unit.title}
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
                    className='absolute text-black p-1 rounded-full right-3 top-10 bg-white'
                     onClick={() => setZoom(false)}><IoIosCloseCircleOutline size={20}/></button>
                    <img src={masterplan} alt="Master Plan" className="max-w-full max-h-full object-contain" />
                </div>
            )}

        </div>

    );
}