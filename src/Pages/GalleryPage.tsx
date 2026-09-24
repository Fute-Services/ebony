import React, { useState } from "react";


// import gallery9 from "assets/img/ebony/gallery/gallery9.webp"; // background
import gallery21 from "../assets/Gallery/Tower12.png";

import camleft from "../assets/Gallery/Cam13.png";
import camright from "../assets/Gallery/Cam11.png";
import cam from "../assets/Gallery/Cam14.png";
import lobby from "../assets/Gallery/lobby.jpg";
import lobbytypical from "../assets/Gallery/lobbytypical.jpg";
import { useNavigate } from "react-router-dom";

// interface GalleryItem {
//     id: number;
//     title: string;
//     image: string;
// }

// const galleryData: GalleryItem[] = [
//     {
//         id: 1,
//         title: "Exterior View",
//         image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
//     },
//     {
//         id: 2,
//         title: "Lobby Area",
//         image: "https://images.unsplash.com/photo-1600573472591-ee6b68e6cfa2",
//     },
//     {
//         id: 3,
//         title: "Office Space",
//         image: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
//     },
//     {
//         id: 4,
//         title: "Retail Zone",
//         image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
//     },
//     {
//         id: 5,
//         title: "Elevator Lobby",
//         image: "https://images.unsplash.com/photo-1554995207-c18c203602cb",
//     },
//     {
//         id: 6,
//         title: "Parking Area",
//         image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
//     },
// ];


const InteriorImages = [
    { src: lobby, title: 'Reception' },
    { src: lobbytypical, title: 'Lift Lobby' },
    // { src: lobby, title: 'Reception' },
    // { src: lobbytypical, title: 'Lift Lobby' },
];
const ElevationImages = [

    { src: cam, title: 'Elevation' },
    { src: camright, title: 'Elevation' },
    { src: camleft, title: 'Elevation' },
    { src: gallery21, title: 'Elevation' },
];


const GalleryPage: React.FC = () => {

    const navigate = useNavigate();
    const [tab, setTab] = useState<"interior" | "exterior">("interior");
    const images = tab === "interior" ? InteriorImages : ElevationImages;

    const [currentIndex, setCurrentIndex] = useState<number | null>(null);
    const prevImage = () => {
        if (currentIndex === null) return;
        setCurrentIndex((prev) =>
            prev! === 0 ? images.length - 1 : prev! - 1
        );
    };

    const nextImage = () => {
        if (currentIndex === null) return;
        setCurrentIndex((prev) =>
            prev! === images.length - 1 ? 0 : prev! + 1
        );
    };




    return (
        <div className="min-h-screen bg-black/50 px-6 py-10">

            <div className="text-3xl md:text-2xl font-medium text-white mb-10 justify-between flex">
                <div className="w-[15%] "
                    // style={{ borderLeft: '7px solid rgb(186 123 0)'}} to-[rgb(222,160,90)]  &nbsp; | &nbsp; 
                    // style={{ borderLeft: "7px solid rgba(255,255,255,0.7)" }}
                    style={{ borderLeft: '7px solid rgb(186 123 10)' }}

                >

                    <h2 className="py-2 rounded-sm px-3 bg-gradient-to-r from-[rgb(222,160,37)] to-[#f5f5f5]/70">   Gallery</h2>

                </div>
                <div className="flex gap-5">
                    <button onClick={() => setTab("interior")} className={`px-5 py-[1px] rounded-lg  text-[17px] 
                    ${tab === "interior" ? "bg-black text-white " : "bg-white/60 hover:bg-white/40 transition-all duration-300 ease-in-out"}
                    `}>Interior</button>
                    <button onClick={() => setTab("exterior")} className={`px-5 py-[1px] rounded-lg text-[17px] ${tab === "exterior" ? "bg-black text-white" : "bg-white/60 hover:bg-white/40 transition-all duration-300 ease-in-out"}`}> Exterior</button>
                    <button onClick={() => navigate(-1)} className="px-5 py-[1px] rounded-lg bg-white/60 text-[17px] hover:bg-black hover:text-white transition-all duration-300 ease-in-out ">Back</button></div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {images.map((item, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden rounded-2xl cursor-pointer"
                        onClick={() => setCurrentIndex(index)}
                    >
                        <img
                            src={item.src}
                            alt={item.title}
                            loading="lazy"
                            className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                            <p className="text-white font-semibold text-lg">
                                {item.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            {currentIndex !== null && (
                <div
                    className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
                    onClick={() => setCurrentIndex(null)}
                >
                    <div
                        className="relative max-w-4xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={images[currentIndex].src}
                            alt={images[currentIndex].title}
                            className="w-full max-h-[80vh] object-contain rounded-xl"
                        />
                        <p className="text-white text-center mt-4 text-lg">
                            {images[currentIndex].title}
                        </p>

                        {/* Controls */}
                        <button
                            onClick={prevImage}

                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/60 px-3 text-black/60 py-1.5 font-bold hover:bg-white/40 hover:text-white duration-300 transition-all ease-in-out rounded-xl"
                        >
                            ❮
                        </button>

                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/60 px-3 text-black/60 py-1.5 font-bold hover:bg-white/40 hover:text-white duration-300 transition-all ease-in-out rounded-xl"
                        >
                            ❯
                        </button>

                        <button
                            className="absolute -top-10 -right-[9%] text-white text-sm font-bold bg-white/60 hover:bg-white/40 transition-all duration-300 ease-in-out px-2.5 py-1.5 rounded-full "
                            onClick={() => setCurrentIndex(null)}
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GalleryPage;
