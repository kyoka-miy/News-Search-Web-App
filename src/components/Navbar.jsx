import React from "react";
import { Stack, AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import { SearchBar, CategoryBar } from "./";

const Navbar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <AppBar
      position="static"
      elevation={0}
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Toolbar sx={{ flexWrap: 'wrap', justifyContent: "space-between"}}>
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <span className="logo">C</span>
          <span className="logo">C</span>
          <span className="logo">B</span>
        </Link>

        <Stack
          direction={{ sm: "column", md: "row" }}
          alignItems="center"
          px={2}
          py={1}
          sx={{ justifyContent: "space-between" }}
          overflow='auto'
        >
          <CategoryBar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <SearchBar />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
