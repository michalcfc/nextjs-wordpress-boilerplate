import {
  AspectRatio,
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

// types
import { ProjectPreviewModalD } from './ProjectPreviewModal.d';

const ProjectPreviewModal = ({
  isOpen,
  onClose,
  name,
  slug,
}: ProjectPreviewModalD) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
  >
    <ModalOverlay />
    <ModalContent maxW="52rem">
      <ModalHeader>{name}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Box
          zIndex={1}
          overflow="hidden"
          borderRadius="1rem"
        >
          <AspectRatio
            maxW="52rem"
            ratio={2}
          >
            <iframe
              width="860"
              height="320"
              src="https://www.youtube.com/embed/UCV_qXW2DQ0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </AspectRatio>
        </Box>
      </ModalBody>

      <ModalFooter>
        <Button
          mr={3}
          variant="outline"
          onClick={onClose}
        >
          Zamknij
        </Button>
        <Button
          as="a"
          variant="brandPrimary"
          href={`/project/${slug}`}
          _hover={{ bg: 'black', color: 'white', textDecoration: 'none' }}
        >
          Więcej szczegółów
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

export default ProjectPreviewModal;
