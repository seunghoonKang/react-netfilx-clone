import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "../../api/axios";
const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  let query = useQuery();
  const searchTerm = query.get("q");

  useEffect(() => {
    if (searchTerm) {
      fetchSearchMovie(searchTerm);
    }
  }, [searchTerm]);

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const request = await axios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      );
      console.log(request);
      setSearchResults(request.data.results);
    } catch (e) {
      console.log("에러", e);
    }
  };

  return <div>SearchPage</div>;
};

export default SearchPage;
