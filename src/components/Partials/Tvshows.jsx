import { useEffect, useState } from "react";
import Topnav from "../Topnav";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";
import axios from "../../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";
import SubCards from "./SubCards";
import Loading from "./Loading";

const Trending = () => {
    document.title = "CineNime | TV Shows"

    const navigate = useNavigate();
    const [category, setCategory] = useState("popular");
    const [tv, setTv] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);

    const gettv = async () => {
        try {
            const { data } = await axios.get(`/tv/${category}?page=${page}`);
            
            if(data.results.length > 0) {
                setTv((prev) => [...prev, ...data.results]);
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
        if(tv.length === 0) {
            gettv();
        }
        else{
            setPage(1);
            setTv([])
            gettv();
        }
    }

    useEffect(() => {
        refreshHandler();
    }, [category]);

    return tv.length >0 ? (
        <div className="bg-[#222831] min-h-screen">
            <div className=" flex justify-between items-center px-5 py-2">
                <div className="flex gap-1 items-center">
                    <span
                        onClick={() => navigate(-1)}
                        className="cursor-pointer text-4xl text-zinc-200 rounded-full w-10 h-10 flex justify-center items-center hover:text-white"
                    >
                        <i className="ri-arrow-left-s-line"></i>
                    </span>
                    <h1 className="text-xl text-zinc-200 whitespace-nowrap font-bold">TV Shows</h1>
                </div>
                <Topnav />
                <Dropdown
                    title={"tv"}
                    options={['airing_today', 'on_the_air', 'popular', 'top_rated']}
                    func={(e) => setCategory(e.target.value)}
                />
            </div>
            <hr className="border-zinc-500 " />

            <InfiniteScroll
                dataLength={tv.length}
                next={gettv}
                hasMore={hasMore}
                loader={<h3 className="text-white">Loading</h3>}
                endMessage={
                    <p style={{ textAlign: "center" }} className="text-white">
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                <SubCards data={tv} title={"tv"} />
            </InfiniteScroll>
        </div>
    ): <Loading/>;
};

export default Trending;
