// components
import {
  Box,
  Img,
} from '@chakra-ui/react';
import { ProjectPreviewButtons } from '../ProjectPreviewButtons';

// types
import { ProjectPreviewImgD } from './ProjectPreviewImg.d';

const ProjectPreviewImg = ({
  img,
  slug,
  name,
  setPreviewModalOpen,
}: ProjectPreviewImgD) => (
  <Box
    height="240px"
    position="relative"
    overflow="hidden"
    borderRadius="xl"
    __css={{ '&>img': { borderRadius: '1rem' } }}
    _groupHover={{
      _after: {
        content: '""',
        inset: 0,
        position: 'absolute',
        bg: 'rgba(0, 0, 0, 0.1)',
      },
    }}
  >
    <Img
      src={img}
      alt={name}
      width="100%"
      height="100%"
      objectFit="cover"
      position="relative"
      backgroundSize="cover"
      transition="transform .3s ease-out"
      _hover={{
        borderRadius: 'xl',
      }}
      _groupHover={{
        transform: 'scale(1.1)',
        transition: 'all .5s ease',
      }}
    />
    <ProjectPreviewButtons
      slug={slug}
      setPreviewModalOpen={setPreviewModalOpen}
    />
  </Box>
);

export default ProjectPreviewImg;
