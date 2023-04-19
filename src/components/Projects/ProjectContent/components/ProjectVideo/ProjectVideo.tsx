import {
  AspectRatio,
  Box,
  Container,
} from '@chakra-ui/react';

// types
import { ProjectVideoD } from './ProjectVideo.d';

const ProjectVideo = ({ title, videoUri, client }: ProjectVideoD) => (
  <Box
    pb={14}
    pt={32}
    zIndex={1}
    bg="black"
    overflow="hidden"
    position="relative"
    borderRadius="0px 0px 3rem 3rem"
  >
    <Container maxW="7xl">
      <AspectRatio
        ratio={2}
        overflow="hidden"
        borderRadius="1rem"
      >
        <iframe
          width="860"
          height="100%"
          src={`${videoUri}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </AspectRatio>
    </Container>
  </Box>
);

export default ProjectVideo;
