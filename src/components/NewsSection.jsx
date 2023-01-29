import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import { NewsCard } from "./";
import { Link } from "react-router-dom";

const NewsSection = ({ news, direction, category}) => {
  return (
    <Stack mb={5}>
      <Link to={category && `/category/${category}`}>
        <Typography variant="h5" fontWeight="bold" mb={2}>
          <span
            style={{
              color: "#4a4a4a",
            }}
            className={'section'}
          >
            {category}
          </span>
        </Typography>
      </Link>
      <Stack
        direction={direction || "row"}
        flexWrap="wrap"
        justifyContent="start"
        gap={3}
      >
        {news.map((item, idx) => (
          <Box key={idx}>
            <NewsCard news={item} />
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default NewsSection;
