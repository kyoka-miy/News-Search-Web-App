import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 5,
        pl: 2,
        boxShadow: "none",
        background: '#202224'
      }}
    >
      <IconButton type="submit" sx={{ p: "10px", color: "#fff" }}>
        <Search />
      </IconButton>
      <input
        className="search-bar"
        placeholder="Search CCB"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      ></input>
    </Paper>
  );
};

export default SearchBar;