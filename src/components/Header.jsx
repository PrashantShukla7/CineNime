import React, { useEffect, useState } from "react";
import Topnav from "./Topnav.jsx";
import { Link } from "react-router-dom";

const Header = ({headerData}) => {
    
    return headerData ? (
        <div className="w-full">
            <Topnav />
            <div
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url(https://image.tmdb.org/t/p/original/${
                        headerData.backdrop_path || headerData.profile_path
                    })`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="w-full h-[55vh] text-white p-10 flex flex-col justify-end mt-2 "
            >
                <h2 className="text-5xl font-bold w-[70%]">
                    {headerData.name ||
                        headerData.title ||
                        headerData.original_title ||
                        headerData.original_name}
                </h2>
                <p className="w-[70%] my-3">
                    {headerData.overview && headerData.overview.length > 200
                        ? `${headerData.overview.slice(0, 200)}`
                        : headerData.overview}
                    ...<Link to={`${headerData.media_type}/details/${headerData.id}`} className="text-blue-500">more</Link>
                </p>
                <div>
                    <p>
                        <i className="text-yellow-500 ri-megaphone-fill"></i>{" "}
                        {headerData.release_date
                            ? headerData.release_date
                            : `no information`}
                    </p>
                </div>
                <div className="mt-5">
                    <Link to={`${headerData.media_type}/details/${headerData.id}/trailer`} className="px-4 py-2 bg-blue-800 rounded-md ">
                        Watch Trailer
                    </Link>
                </div>
            </div>
        </div>
    ) : (
        <h1>loading</h1>
    );
};

export default Header;
