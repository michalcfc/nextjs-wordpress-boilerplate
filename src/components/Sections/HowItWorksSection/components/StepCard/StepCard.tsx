import { Stack } from '@chakra-ui/react';
import { StepCardD } from '@/components/Sections/HowItWorksSection/components/StepCard/StepCard.d';

const StepCard = ({ id, children }: StepCardD) => (
  <Stack
    px={6}
    pb={6}
    pt={12}
    rounded="lg"
    width="100%"
    boxShadow="md"
    bg="white"
    position="relative"
    borderColor="muted"
    top={{ base: 0, lg: id % 2 ? '30px' : '0' }}
    zIndex={1}
    _before={{
      content: `"0${id}"`,
      top: -4,
      right: 2,
      color: 'gray.200',
      fontSize: '6xl',
      rounded: 'lg',
      padding: '2px 8px',
      fontWeight: 'bold',
      position: 'absolute',
    }}
  >
    {children}
  </Stack>
);

export default StepCard;
