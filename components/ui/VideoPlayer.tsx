"use client";
import React, { useEffect, useRef} from "react";



const Videoplayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [videoRef]);

  return (
    <div>
      <div
        style={{
          width: "60%",
          margin: "2vh auto 0",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
        }}
        className="hidden lg:block"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          ref={videoRef}
          style={{ width: "100%", borderRadius: "12px" }}
        >
          <source src="/videotronOplab.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Videoplayer;