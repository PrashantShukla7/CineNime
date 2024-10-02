import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Trending from "../components/Partials/Trending";
import Popular from "../components/Partials/Popular";
import Movie from "../components/Partials/Movie";
import Tvshows from "../components/Partials/Tvshows";
import People from "../components/Partials/People";
import MovieDetails from "../components/MovieDetails";
import TvDetails from "../components/TvDetails";
import PeopleDetails from "../components/PeopleDetails";
import Trailer from "../components/Partials/Trailer";
import AboutPage from "../components/Partials/AboutPage";
import Contact from "../components/Partials/Contact";

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="/movie/details/:id" element={<MovieDetails />}>
              <Route path="/movie/details/:id/trailer" element={<Trailer />} />
            </Route>
            <Route path="/tv" element={<Tvshows />} />
            <Route path="/tv/details/:id" element={<TvDetails />} >
              <Route path="/tv/details/:id/trailer" element ={<Trailer />} />
            </Route>
            <Route path="/people" element={<People />} />
            <Route path="/people/details/:id" element={<PeopleDetails />} />
            <Route path="/person/details/:id" element={<PeopleDetails />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
};

export default Routing;
