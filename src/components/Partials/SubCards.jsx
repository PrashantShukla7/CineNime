import React from "react";
import { Link } from "react-router-dom";

const SubCards = ({ data, title }) => {
    return (
        <div className="p-10 flex flex-wrap gap-5 justify-center">
            {data.map((t, i) => (
                <Link to={`/${t.media_type || title}/details/${t.id}`}
                    key={i}
                    className="relative text-zinc-200 p-3 bg-[#191e24] rounded-md w-[35vh] hover:scale-105 duration-300 shadow-md shadow-zinc-700"
                >
                    <img
                        src={`https://image.tmdb.org/t/p/original/${
                            t.profile_path || t.poster_path || t.backdrop_path
                        }`}
                        alt=""
                        className="rounded w-full object-cover"
                    />
                    <h3 className="text-xl font-semibold mt-2">
                        {t.name ||
                            t.title ||
                            t.original_title ||
                            t.original_name}
                    </h3>

                    {t.vote_average && (
                        <div className="absolute bottom-[20%] right-[-5%]  w-[6vh] h-[6vh] rounded-full bg-yellow-600 flex justify-center items-center font-semibold ">
                            {(t.vote_average * 10).toFixed()} <sup>%</sup>
                        </div>
                    )}
                </Link>
            ))}
        </div>
    );
};

export default SubCards;
