// icons
import { BsEye } from 'react-icons/bs';
import { RxExternalLink } from 'react-icons/rx';

// components
import {
  Button,
  Grid,
  VStack,
} from '@chakra-ui/react';

// types
import { ProjectPreviewButtonsD } from './ProjectPreviewButtons.d';

const ProjectPreviewButtons = ({
  slug,
  setPreviewModalOpen,
}: ProjectPreviewButtonsD) => (
  <Grid
    inset={0}
    position="absolute"
    placeItems="center"
  >
    <VStack>
      <Button
        opacity={0}
        bg="white"
        color="black"
        width={180}
        leftIcon={<BsEye />}
        onClick={setPreviewModalOpen}
        _groupHover={{ opacity: 1, zIndex: 1 }}
      >
        Szybki podgląd
      </Button>

      <Button
        as="a"
        bg="white"
        width={180}
        opacity={0}
        color="black"
        leftIcon={<RxExternalLink />}
        href={`/project/${slug}`}
        _hover={{
          bg: 'gray.200',
          textDecoration: 'none',
        }}
        _groupHover={{ opacity: 1, zIndex: 1 }}
      >
        Szczegóły
      </Button>
    </VStack>
  </Grid>
);

export default ProjectPreviewButtons;
