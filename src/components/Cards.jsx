import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data, title}) => {
    return (
        <div className="p-5">
            
            <div className="text-white flex gap-5 overflow-x-auto pb-3">
                {data.map((t, i) => (
                    <Link to={t.media_type || title ? `/${t.media_type || title}/details/${t.id}` :""}
                        className="w-52 bg-[#0f101fbd] p-3 flex-shrink-0 rounded-md"
                        key={i}
                    >
                        <img
                            src= {t.poster_path || t.backdrop_path ? `https://image.tmdb.org/t/p/original/${t.poster_path || t.backdrop_path}` : "/no-image.png"}
                           
                            alt="image"
                            className="w-full object-cover"
                        />
                        <h3 className="text-xl font-medium mt-2">
                            {(
                                t.name ||
                                t.title ||
                                t.original_title ||
                                t.original_name
                            ).length > 18
                                ? (
                                      t.name ||
                                      t.title ||
                                      t.original_title ||
                                      t.original_name
                                  ).slice(0, 18)
                                : t.name ||
                                  t.title ||
                                  t.original_title ||
                                  t.original_name}
                        </h3>
                    </Link>
                ))}
            </div>
        </div>
    ) ;
};

export default Cards;
