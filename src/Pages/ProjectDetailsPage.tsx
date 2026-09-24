import bgImage from '../assets/Gallery/Cam14.png';
import { FaLeaf } from "react-icons/fa";

export default function projectDetailsPage() {
    const towerFeatures = [
        { label: "Number Of Floors", value: "2 Basement + G + 16 Floors" },
        { label: "Plot Size", value: "Approx. 42,000 Sq. Ft." },
        { label: "Retail Stores", value: "G + 1" },
        { label: "Office Space Size", value: "411 Sq. Ft. – 490 Sq. Ft." },
        { label: "Floor to Floor Height", value: "Ground: 4.5m, Other Floors: 4m" },
        { label: "Windows", value: "Powder coated aluminium windows" },
        { label: "Elevators", value: "4 High-speed elevators" },
        { label: "Entrance Hall", value: "Spacious, well-designed large lobby" },
        { label: "Lift Lobbies", value: "Finished with tiles" },
        { label: "Security", value: "Common security at entrance lobby" },
        { label: "Fire Fighting", value: "Underground & overhead tank as per CFO norms" },
        { label: "Sprinklers", value: "Provided on all floors as per CFO norms" },
    ];


    return (
        <div className="w-screen relative h-screen justify-center items-center flex "
            style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='absolute inset-0 bg-white/10'></div>
            <div className='bg-gray-500/90 p-2 absolute z-10 rounded-sm h-[93%] shadow-lg
             flex max-w-6xl justify-center items-center gap-4'>
                <div className='w-[60%] flex '>
                    <img src={bgImage} alt="Project" className='w-full h-full rounded-sm shadow-md object-cover' />

                </div>
                <div className="w-[40%] h-auto max-h-[500px] overflow-y-auto custom-scroll-glass">
                    <h2 className="text-xl font-bold mb-6 text-center text-white ml-10">
                        TOWER FEATURES
                    </h2>

                    <div className="space-y-4 ml-10 ">
                        {towerFeatures.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col justify-between gap-4  pb-2"
                            >
                                <span className="text-white/80 text-[17px] font-bold">
                                    {item.label}
                                </span>
                                <span className="text-white text-left flex gap-2 items-center">
                                   <span className='text-[rgb(197,144,30)] text-xl'><FaLeaf /></span> {item.value}
                                </span>
                            </div>
                        ))}
                    </div>


                    <div

                        className="flex flex-col justify-between gap-4 border-b border-white/20 pb-2"
                    >
                          <h2 className="text-xl font-bold mb-2 text-center text-white ml-10">
                        INTERNAL FEATURES
                    </h2>
                        <span className="text-white text-left ml-10 items-center gap-2 flex">
                         <span className='text-[rgb(197,144,30)] text-xl'><FaLeaf /></span>   Thoughtfully designed washrooms with premium fittings
                        </span>
                        <span className='text-white text-left ml-10 items-center gap-2 flex'><span className='text-[rgb(197,144,30)] text-xl'><FaLeaf /></span>
                        Fully Air-Conditioned Shops.</span>

                         <span className='text-white text-left ml-10 items-center gap-2 flex'><span className='text-[rgb(197,144,30)] text-xl'><FaLeaf /></span>
                        Offices with floor tiles Thoughtfully designed washrooms with premium fittings. </span>

                    </div>
                  
                </div>
            </div>
        </div>
    );
}