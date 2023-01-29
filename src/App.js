import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Navbar, Feed, SearchFeed, CategoryDetail } from "./components";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#fff" }}>
        <Navbar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Feed
                setSelectedCategory={setSelectedCategory}
              />
            }
          />
          <Route
            path="/category/:selectedCategory"
            element={<CategoryDetail />}
          />
          <Route
            path="/search/:searchTerm"
            element={
              <SearchFeed
                setSelectedCategory={setSelectedCategory}
              />
            }
          />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
