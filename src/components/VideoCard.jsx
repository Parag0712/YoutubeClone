import React from 'react';
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { demoChannelTitle, demoChannelUrl, demoProfilePicture, demoThumbnailUrl, demoVideoUrl } from '../utils/constants';

const StyledCard = styled(Card)({
  backgroundColor: "#1e1e1e",
  color: "white",
  borderRadius: "12px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  },
  overflow: 'hidden'
});

const StyledCardMedia = styled(CardMedia)({
  height: 0,
  paddingTop: "56.25%", // 16:9 aspect ratio
});

const StyledCardContent = styled(CardContent)({
  padding: "16px",
  "& a": {
    textDecoration: "none",
  },
});

const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
  <StyledCard>
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
      <StyledCardMedia
        image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        alt={snippet?.title}
      />
    </Link>
    <StyledCardContent>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography variant="subtitle1" fontWeight="bold" noWrap style={{ color: 'white' }}>
          {snippet?.title || "Demo Video Title"}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
        </Typography>
      </Link>
    </StyledCardContent>
  </StyledCard>
);

export default VideoCard;
