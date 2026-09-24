import React from "react";
import Go_BackButton from "../components/Go_BackButton";

const Project_Status: React.FC = () => {
  return (
    <>
    <Go_BackButton/>
    <div style={{ width: "100%", height: "100vh" }} className="bg-black">
      <iframe
       src="https://player.vimeo.com/video/1185851559?h=7230bb9553&autoplay=1&muted=1"
        style={{ width: "100%", height: "100%", border: "none" }}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Vimeo Video Player"
      ></iframe>
    </div>
    </>
  );
};

export default Project_Status;