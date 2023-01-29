import React from "react";
import { Stack, Box } from "@mui/material";
import { NewsCard } from "./";

const News = ({ news, direction }) => {
  if (!news?.length) return "Loading...";
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {news.map((item, idx) => (
        <Box key={idx}>
          <NewsCard news={item} />
        </Box>
      ))}
    </Stack>
  );
};

export default News;
