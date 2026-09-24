import { useNavigate } from 'react-router-dom';
import bgImage from '../../assets/Tower/towerImage.jpg';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';
import { IoReturnUpBackOutline } from "react-icons/io5";
import { towerData } from '../../Data/TowerData';

// import bgImage1 from '../../assets/ebony/gallery1/Cam14.png';

export default function TowerPage() {
    const navigate = useNavigate();
    const [hoverId, setHoverId] = useState<number | null>(null);



    return (
        <>
            <div className="relative w-full  
           h-screen  "
            // style={{backgroundImage:`url(${bgImage1})`,}}
            >
               
                {/* Back Button */}
                <div
                    onClick={() => navigate(-1)}
                    className="fixed bottom-[3%]  left-3 p-2 bg-black/50
                     w-[55px] h-[55px] flex items-center justify-center rounded-full z-[4000] cursor-pointer hover:bg-black/70 transition"
                >
                    <IoReturnUpBackOutline size={40} color="white" />
                </div>

                <div className="mx-auto flex justify-center items-center ">
                    <svg
                        viewBox="0 0 4000 1773"
                        className="w-full h-auto"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <image
                            href={bgImage}
                            width="4000"
                            height="1773"
                            preserveAspectRatio="xMidYMid meet"
                        />

                        {towerData.map((unit) => (
                            <Tooltip
                                key={unit.id}
                                title={unit.title}
                                arrow
                                placement="right">
                                <g>

                                    <polygon
                                        key={unit.id}
                                        points={unit.polygon}
                                        fill={hoverId === unit.id ? "rgba(217,168,23,0.7)" : "transparent"}
                                        onMouseEnter={() => setHoverId(unit.id)}
                                        onMouseLeave={() => setHoverId(null)}
                                        onClick={() => navigate(`/ebony_towerfloorplan/${unit.id}`)}
                                        style={{ cursor: "pointer" }}
                                    /></g>
                            </Tooltip>))}
                    </svg>
                </div>
            </div>







        </>
    );
}