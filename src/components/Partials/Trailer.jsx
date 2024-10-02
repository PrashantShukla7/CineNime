import React from "react";
import ReactPlayer from "react-player/youtube";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Trailer = () => {
    const Navigate = useNavigate();
    const { pathname } = useLocation();
    const category = pathname.includes("movie") ? "movie" : "tv";
    const video = useSelector((state) => state[category].info.videos);

    return (
        <div className="absolute top-0 left-0 w-screen h-screen bg-[#000000ba] z-[100] flex items-center justify-center">
            <Link
                to={Navigate(-1)}
                className="text-white text-2xl ri-close-large-fill absolute right-[5%] top-[5%]"
            ></Link>
            {video ? (
                <ReactPlayer
                controls
                    url={`https://www.youtube.com/watch?v=${video.key}`}
                    width={1000}
                    height={600}
                ></ReactPlayer>
            ) : <img className="w-[60%]" src="/404img.jpg" alt="Not Found"></img>}
        </div>
    );
};

export default Trailer;
