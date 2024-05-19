import { Stack, Box } from "@mui/material";
import { ChannelCard, Loader, VideoCard } from "./";

const VideoSideCard = ({ videos, direction }) => {
    if (!videos?.length) return <Loader />;

    return (
        <Stack 
            direction={direction || "row"}  
            flexWrap="wrap" 
            justifyContent="start" 
            alignItems="start" 
            gap={2}
            sx={{ maxWidth: '100%', width: '100%' }} // Ensure Stack covers its parent container and sets a max width
        >
            {videos.map((item, idx) => (
                <Box key={idx} sx={{ maxWidth: '100%' }}> {/* Ensure each Box also respects max width */}
                    <VideoCard video={item} />
                </Box>
            ))}
        </Stack>
    );
}

export default VideoSideCard;
