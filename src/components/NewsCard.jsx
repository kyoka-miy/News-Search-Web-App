import React from "react";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";

const NewsCard = ({
  news: {
    title,
    description,
    url,
    urlToImage,
    sourceName,
  },
}) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <a href={url}>
        <CardMedia
          image={urlToImage}
          alt={title}
          sx={{
            width: {
              xs: "100%",
              sm: "358px",
              md: "320px",
            },
            height: 180,
          }}
        ></CardMedia>
      </a>
      <CardContent sx={{ height: "138px" }}>
        <a href={url}>
          <Typography variant="subtitle1" fontWeight="bold" color="#000">
            {title.slice(0, 60)}
          </Typography>
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {sourceName}
          </Typography>
          <Typography variant="subtitle2" color="#000">
            {description}...
          </Typography>
        </a>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
