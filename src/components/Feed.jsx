import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Categories from "./Sidebar";
import Videos from "./Videos";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        let fetchedVideos = [];
        const targetVideoCount = 50; // for numbers of video in feed section
        let offset = 0;

        // Fetch videos until we have at least 60
        while (fetchedVideos.length < targetVideoCount) {
          const query = `search?part=snippet&q=${selectedCategory}&maxResults=50&order=date&videoEmbeddable=true&type=video&safeSearch=strict&key=${process.env.REACT_APP_RAPID_API_KEY}&offset=${offset}`;
          const data = await fetchFromAPI(query);
          if (data.items) {
            fetchedVideos = fetchedVideos.concat(data.items);
          }
          offset += 50; // Increment offset for the next request
        }

        // Shuffle the fetched videos
        const shuffledVideos = shuffleArray(fetchedVideos);

        // Set videos to the first 60 shuffled videos
        setVideos(shuffledVideos.slice(0, targetVideoCount));
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, [selectedCategory]);

  // Function to shuffle an array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          borderRadius: 4,
          px: { sx: 0, md: 2 },
        }}
      >
        <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>
        {videos.length > 0 ? (
          <Videos videos={videos} />
        ) : (
          <Typography variant="body1" color="white">
            No videos found.
          </Typography>
        )}
      </Box>
    </Stack>
  );
};

export default Feed;
