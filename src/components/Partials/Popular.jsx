import { useEffect, useState } from "react";
import Topnav from "../Topnav.jsx";
import { useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown.jsx";
import axios from "../../utils/axios.jsx";
import InfiniteScroll from "react-infinite-scroll-component";
import SubCards from "./SubCards.jsx";
import Loading from "./Loading.jsx";

const Trending = () => {
    document.title = "CineNime | Popular"

    const navigate = useNavigate();
    const [category, setCategory] = useState("movie");
    const [popular, setpopular] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);

    const getPopular = async () => {
        try {
            const { data } = await axios.get(`${category}/popular?page=${page}`);
            
            if(data.results.length > 0) {
                setpopular((prev) => [...prev, ...data.results]);
                setPage((prev) => prev+1)
            }
            else{
                setHasMore(false);
            }
        } catch (err) {
            console.log(err);
            setHasMore(false);
        }
    };

    const refreshHandler = async () => {
        if(popular.length === 0) {
            getPopular();
        }
        else{
            setPage(1);
            setpopular([])
            getPopular();
        }
    }

    useEffect(() => {
        refreshHandler();
    }, [category]);

    return popular.length >0 ? (
        <div className="bg-[#222831] min-h-screen">
            <div className=" flex justify-between items-center px-5 py-2">
                <div className="flex gap-1 items-center">
                    <span
                        onClick={() => navigate(-1)}
                        className="cursor-pointer text-4xl text-zinc-200 rounded-full w-10 h-10 flex justify-center items-center hover:text-white"
                    >
                        <i className="ri-arrow-left-s-line"></i>
                    </span>
                    <h1 className="text-xl text-zinc-200 font-bold">Popular</h1>
                </div>
                <Topnav />
                <Dropdown
                    title={"popular"}
                    options={["movie", "tv"]}
                    setCat={(e) => setCategory(e.target.value)}
                />
            </div>
            <hr className="border-zinc-500 " />

            <InfiniteScroll
                dataLength={popular.length}
                next={getPopular}
                hasMore={hasMore}
                loader={<h3 className="text-white">Loading</h3>}
                endMessage={
                    <p style={{ textAlign: "center" }} className="text-white">
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                <SubCards data={popular} title={category} />
            </InfiniteScroll>
        </div>
    ): <Loading/>;
};

export default Trending;
