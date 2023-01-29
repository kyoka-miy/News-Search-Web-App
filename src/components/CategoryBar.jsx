import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
import { Link } from "react-router-dom";

const CategoryBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowX: "auto",
        mr: 2,
      }}
    >
      {categories.map((category) => (
        <Link
          className="category-btn"
          onClick={() => {
            setSelectedCategory(category);
          }}
          style={{
            background: category === selectedCategory && "#FC1503",
            color: "#fff",
          }}
          key={category}
          to={`category/${category}`}
        >
          <span>
            {category}
          </span>
        </Link>
      ))}
    </Stack>
  );
};

export default CategoryBar;
