import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { News, Loader } from "./";
import { useGetNewsSearchQuery } from "../services/newsApi";

const SearchFeed = ({ setSelectedCategory }) => {
  const { searchTerm } = useParams();
  setSelectedCategory("");

  const { data, isFetching } = useGetNewsSearchQuery(searchTerm);
  const news = data?.articles;
  if (isFetching) return <Loader />;

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2}>
        Search Results for:
        <span
          style={{
            color: "#F31503",
            marginLeft: "10px",
            display: "inline-block",
          }}
        >
          {searchTerm}
        </span>
      </Typography>
      <News news={news}></News>
    </Box>
  );
};

export default SearchFeed;
