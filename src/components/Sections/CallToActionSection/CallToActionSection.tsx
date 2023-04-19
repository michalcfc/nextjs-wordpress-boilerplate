// components
import {
  Box,
  Button,
  Grid,
  Heading,
  Img,
  Text,
} from '@chakra-ui/react';
import { SectionWrapper } from '../components';

// utils
import { SPACING } from '@/utils/styles/spacing';

const CallToActionSection = () => (
  <SectionWrapper
    isBackground
    customWidth="8xl"
  >
    <Grid
      gap={SPACING.lg}
      alignItems="center"
      gridTemplateColumns={['1fr', 'repeat(12, 1fr)']}
    >
      <Box
        gridColumn={['1/7']}
        border="1px solid #47474794"
        borderRadius="md"
      >
        <Img
          backgroundSize="cover"
          src="/img/callToAction.webp"
          alt="About us"
        />
      </Box>
      <Box gridColumn={['8/13']}>
        <Heading
          size="2xl"
          mb={SPACING.md}
          color="white"
        >
          This is a designer
          <Text
            color="yellow"
            fontStyle="italic"
          >
            movement
          </Text>
        </Heading>
        <Text
          color="muted"
          fontSize="xl"
          mt={SPACING.md}
        >
          As a graphic designer, add motion to your skillset. Animate whatever
          you create and tell your story in a magical way with Artboard Studio.
        </Text>
        <Button
          bg="yellow"
          mt={SPACING.md}
        >
          Let`s talk
        </Button>
      </Box>
    </Grid>
    <Box
      left="0"
      bottom="0"
      zIndex="10"
      width="100%"
      height="170px"
      position="absolute"
      transform="matrix(1,0,0,-1,0,0)"
      background="linear-gradient(180deg,#232323 49.77%,rgba(35,35,35,0))"
    />
  </SectionWrapper>
);

export default CallToActionSection;
