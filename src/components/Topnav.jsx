import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../utils/axios.jsx";

const Topnav = () => {
    const [query, setQuery] = useState("");
    const [searches, setSearches] = useState([]);

    const getSearches = async () => {
        try {
            const response = await axios.get(`search/multi?query=${query}`);
            setSearches(response.data.results);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getSearches();
    }, [query]);

    return (
        <div className="w-full h-[10%] relative flex items-center justify-start">
            <div className="w-full ml-[20%]">
                <i className="ri-search-line text-[#EEEEEE] text-lg"></i>
                <input
                    onChange={(e) => setQuery(e.target.value)}
                    value={query}
                    type="text"
                    placeholder="Search anything"
                    className="w-[40%] p-3 mx-3 text-lg outline-none bg-transparent focus:border-b-[1.5px] border-zinc-500 text-white"
                />
                {query.length > 0 && (
                    <i
                        onClick={() => setQuery("")}
                        className="cursor-pointer ri-close-large-fill text-[#EEEEEE] text-lg ml-10"
                    ></i>
                )}
            </div>
            <div className="z-[100] w-[40%] max-h-[50vh] bg-zinc-200 absolute right-[40%] top-[90%] overflow-y-auto overflow-x-hidden">
                {searches.map((s, i) => (
                    <Link
                        key={i}
                        to={`/${s.media_type}/details/${s.id}`}
                        className="inline-block w-[100%] p-5 flex justify-start items-center hover:bg-zinc-300"
                    >
                        <img
                            src={ s.backdrop_path || s.profile_path
                             ? `https://image.tmdb.org/t/p/original${
                                s.backdrop_path || s.profile_path
                            }`  : `/no-image.png`}
                            alt=""
                            className="w-20 h-20 object-cover mr-2"
                        />
                        <p className="text-lg">
                            {s.name ||
                                s.title ||
                                s.original_title ||
                                s.original_name}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Topnav;
