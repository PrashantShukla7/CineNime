import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadperson, removeperson } from "../store/actions/PeopleActions.jsx";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "./Partials/Loading.jsx";
import Dropdown from "./Partials/Dropdown.jsx";
import Topnav from "./Topnav.jsx";
import Cards from "./Cards.jsx";

const PeopleDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useDispatch();
    const { info } = useSelector((state) => state.person);
    const [category, setCategory] = useState("movie");

    useEffect(() => {
        dispatch(asyncLoadperson(id));
        return () => dispatch(removeperson());
    }, [id, category]);

    if (!info) {
        return <Loading />;
    }


    document.title = `CineNime | ${info.detail.name}`

    return (
        <div className="bg-[#222831] min-h-screen w-full overflow-x-hidden">
            <nav className="flex h-[10vh] px-10 items-center">
                <span
                    onClick={() => navigate(-1)}
                    className="cursor-pointer text-4xl text-zinc-200 rounded-full w-10 h-10 flex justify-center items-center hover:text-white"
                >
                    <i className="ri-arrow-left-s-line"></i>
                </span>
                <Topnav />
            </nav>
            <hr className="mb-5 bg-zinc-600 border-none h-[1px] " />
            <div className="px-[10%] flex md:flex-row gap-x-10 w-screen">
                <div className="flex-shrink-0 w-[20%]">
                    <img
                        className="w-[15vw] object-cover shadow-[0px_2px_8px_8px_rgba(0,0,0,0.3)]"
                        src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
                        alt={info.detail.name}
                    />

                    <div className="flex gap-x-5 mt-5 ">
                        {info.external_ids.wikidata_id && (
                            <a
                                href={`https://www.wikidata.org/wiki/${info.external_ids.wikidata_id}`}
                            >
                                <i className=" text-2xl text-zinc-200 hover:text-white ri-global-line "></i>
                            </a>
                        )}

                        {info.external_ids.facebook_id && (
                            <a
                                href={`https://www.facebook.com/${info.external_ids.facebook_id}/`}
                            >
                                <i className=" text-2xl text-zinc-200 hover:text-white ri-facebook-box-fill"></i>
                            </a>
                        )}

                        {info.external_ids.instagram_id && (
                            <a
                                href={`https://www.instagram.com/${info.external_ids.instagram_id}/`}
                            >
                                <i className=" text-2xl text-zinc-200 hover:text-white ri-instagram-fill "></i>
                            </a>
                        )}
                    </div>
                    <h1 className="text-zinc-300 text-lg mt-3 font-semibold">
                        Known For
                    </h1>
                    <p className="text-zinc-300 text-md">
                        {info.detail.known_for_department}
                    </p>

                    <h1 className="text-zinc-300 text-lg mt-3 font-semibold">
                        Gender
                    </h1>
                    <p className="text-zinc-300 text-md">
                        {info.detail.gender === 2 ? "Male" : "Female"}
                    </p>

                    <h1 className="text-zinc-300 text-lg mt-3 font-semibold">
                        Birthday
                    </h1>
                    <p className="text-zinc-300 text-md">
                        {info.detail.birthday}
                    </p>

                    <h1 className="text-zinc-300 text-lg mt-3 font-semibold">
                        Place of Birth
                    </h1>
                    <p className="text-zinc-300 text-md">
                        {info.detail.place_of_birth}
                    </p>
                </div>
                <div className="flex-grow w-full md:w-[80%]">
                    <h1 className="text-5xl text-zinc-300 font-bold">
                        {info.detail.name}
                    </h1>
                    <h1 className="text-zinc-300 font-bold text-2xl my-3">
                        Biography
                    </h1>
                    <p className="text-zinc-400">{info.detail.biography}</p>

                    <div className="w-full overflow-hidden">
                        <div className="flex justify-between items-center">
                            <h1 className="text-zinc-300 font-bold text-2xl my-3">
                                Movies & TV Shows
                            </h1>
                            <Dropdown
                                title={"category"}
                                options={["tv", "movie"]}
                                func={(e) => setCategory(e.target.value)}
                            />
                        </div>
                        {info[`${category}Credits`].crew.length > 0 ? (
                            <div className="w-full overflow-x-auto">
                                <Cards
                                    data={info[`${category}Credits`].crew}
                                    title={category}
                                />
                            </div>
                        ) : (
                            <h3 className="text-zinc-300 text-2xl text-center">
                                No Data here
                            </h3>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PeopleDetails;
