import { useEffect } from "react";
import {
    Link,
    Outlet,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadMovie, removeMovie } from "../store/actions/MovieActions";
import Loading from "./Partials/Loading";
import Cards from "./Cards";

const MovieDetails = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncLoadMovie(id));
        return () => dispatch(removeMovie());
    }, [id]);

    const info = useSelector((state) => state.movie.info);

    if (info)
        document.title = `CineNime | ${
            info.detail.name ||
            info.detail.title ||
            info.detail.original_title ||
            info.detail.original_name
        }`;

    return info ? (
        <div
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(https://image.tmdb.org/t/p/original/${
                    info.detail.backdrop_path || info.detail.profile_path
                })`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="w-screen relative min-h-screen"
        >
            <nav className="flex h-[10vh] p-10 gap-x-5">
                <span
                    onClick={() => navigate(-1)}
                    className="cursor-pointer text-4xl text-zinc-200 rounded-full w-10 h-10 flex justify-center items-center hover:text-white"
                >
                    <i className="ri-arrow-left-s-line"></i>
                </span>
                <a href={info.detail.homepage}>
                    <i className=" text-2xl text-white ri-external-link-fill"></i>
                </a>
                <a
                    href={`https://www.wikidata.org/wiki/${info.external_ids.wikidata_id}`}
                >
                    <i className=" text-2xl text-white ri-global-line "></i>
                </a>
                <a
                    className="text-xl text-white font-semibold"
                    href={`https://www.imdb.com/title/${info.external_ids.imdb_id}`}
                >
                    IMDb
                </a>
            </nav>

            <div className="flex ml-[10%] gap-10 mt-10">
                <div className="flex-shrink-0">
                    <img
                        className="w-[15vw] object-cover"
                        src={`https://image.tmdb.org/t/p/original/${
                            info.detail.poster_path || info.detail.backdrop_path
                        }`}
                        alt=""
                    />

                    <div>
                        {info.watchProviders &&
                            info.watchProviders.flatrate && (
                                <div className="text-white flex items-center gap-3 mt-3">
                                    <p>Stream</p>
                                    {info.watchProviders.flatrate.map(
                                        (d, i) => (
                                            <img
                                                key={i}
                                                title={d.provider_name}
                                                src={`https://image.tmdb.org/t/p/original/${d.logo_path}`}
                                                alt=""
                                                className="w-[5vh] h-[5vh] rounded"
                                            />
                                        )
                                    )}
                                </div>
                            )}

                        {info.watchProviders && info.watchProviders.rent && (
                            <div className="text-white flex items-center gap-3 mt-3">
                                <p>Rent</p>
                                {info.watchProviders.rent.map((d, i) => (
                                    <img
                                        key={i}
                                        title={d.provider_name}
                                        src={`https://image.tmdb.org/t/p/original/${d.logo_path}`}
                                        alt=""
                                        className="w-[5vh] h-[5vh] rounded"
                                    />
                                ))}
                            </div>
                        )}
                        {info.watchProviders && info.watchProviders.buy && (
                            <div className="text-white flex items-center gap-3 mt-3">
                                <p>Buy</p>
                                {info.watchProviders.buy.map((d, i) => (
                                    <img
                                        key={i}
                                        title={d.provider_name}
                                        src={`https://image.tmdb.org/t/p/original/${d.logo_path}`}
                                        alt=""
                                        className="w-[5vh] h-[5vh] rounded"
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="content">
                    <h1 className="text-5xl text-white font-bold">
                        {info.detail.name ||
                            info.detail.title ||
                            info.detail.original_title ||
                            info.detail.original_name}
                    </h1>
                    <p className="text-xl text-zinc-300 my-3">
                        {info.detail.tagline}
                    </p>
                    <div className="text-white flex items-center gap-3">
                        {info.detail.vote_average && (
                            <div className="text-white w-[6vh] h-[6vh] rounded-full bg-yellow-600 flex justify-center items-center font-semibold ">
                                {(info.detail.vote_average * 10).toFixed()}{" "}
                                <sup>%</sup>
                            </div>
                        )}
                        <p>{info.detail.release_date}</p>
                        <p>
                            {info.detail.genres.map((e) => e.name).join(", ")}
                        </p>
                    </div>
                    <h2 className="text-xl text-white font-semibold mt-3">
                        Overview
                    </h2>
                    <p className="w-[85%] text-zinc-300 text-md mt-2 mb-7">
                        {info.detail.overview}
                    </p>
                    <Link
                        to={`${pathname}/trailer`}
                        className="text-white px-4 py-2 bg-[#6556CD] rounded-md"
                    >
                        <i className="ri-play-large-fill"></i>Play Trailer
                    </Link>
                </div>
            </div>

            <hr className="my-5 bg-zinc-600 border-none h-[1px]" />
            <div>
                <h1 className="text-3xl text-white font-bold px-7">
                    Recommendations
                </h1>
                <Cards data={info.recommendations} />
            </div>

            <Outlet />
        </div>
    ) : (
        <Loading />
    );
};

export default MovieDetails;
