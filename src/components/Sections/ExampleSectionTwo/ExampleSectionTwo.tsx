// components
import {
  Box,
  Flex,
  Grid,
  Img,
  Text,
} from '@chakra-ui/react';
import {
  GiShakingHands,
  GiStarsStack,
} from 'react-icons/gi';
import { AiOutlineFileDone } from 'react-icons/ai';
import { MdSlowMotionVideo } from 'react-icons/md';

import {
  SectionCard,
  SectionWrapper,
} from '../components';

// utils
import { SPACING } from '@/utils/styles/spacing';

const ExampleSectionTwo = () => (
  <SectionWrapper
    title="Dlaczego my?"
    customWidth="5xl"
    subtitle="Nasza firma specjalizuje się w profesjonalnym montażu filmów. Wyróżnia nas doświadczenie, bogate portfolio i zadowolenie klientów."
  >
    <Grid
      height={420}
      gap={SPACING.md}
      templateRows="repeat(2, 1fr)"
      gridTemplateColumns={['1fr', '1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
    >
      <SectionCard
        isShadow
        colSpan={[3, 3, 3, 1]}
        rowSpan={1}
        borderWidth={1}
        borderColor="gray"
        textAlign="center"
      >
        <Box
          height={76}
          color="muted"
          position="absolute"
          top={4}
          right={4}
          opacity="0.2"
        >
          <GiStarsStack size="lg" />
        </Box>
        <Flex flexDirection="column">
          <Text
            fontSize="5xl"
            fontWeight="bold"
            textAlign="center"
          >
            5
          </Text>
          <Text
            fontSize="xl"
            fontWeight="bold"
          >
            Years of experience
          </Text>
          <Text color="muted">
            Brand new widgets for blog archives and singles.
          </Text>
        </Flex>
      </SectionCard>

      <SectionCard
        isShadow
        rowEnd={3}
        colSpan={[3, 3, 3, 1]}
        rowStart={2}
        borderWidth={1}
        borderColor="gray"
        textAlign="center"
      >
        <Box
          height={76}
          color="muted"
          position="absolute"
          top={4}
          right={4}
          opacity="0.2"
        >
          <AiOutlineFileDone size="lg" />
        </Box>
        <Flex flexDirection="column">
          <Text
            fontSize="5xl"
            fontWeight="bold"
            textAlign="center"
          >
            24
          </Text>
          <Text
            fontSize="xl"
            fontWeight="bold"
          >
            Projects
          </Text>
          <Text color="muted">
            This option was added to the Custom Carousel Widget
          </Text>
        </Flex>
      </SectionCard>

      <SectionCard
        isShadow
        p="30px 30px 0px 30px"
        colSpan={[3, 3, 3, 1]}
        rowSpan={2}
        borderWidth={1}
        borderColor="gray"
        textAlign="center"
        bg="radial-gradient(at top center, #C8FF624D 0%, #FFFFFF 67%)"
      >
        <Flex
          height="100%"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box
            height={20}
            color="brand"
          >
            <MdSlowMotionVideo size="lg" />
          </Box>
          <Box>
            <Text
              fontSize="2xl"
              fontWeight="bold"
              mb={4}
            >
              Should you trust us?
            </Text>
            <Text color="muted">
              We’re a team of professionals dedicated to providing high quality,
              modern mental and relational.
            </Text>
          </Box>
          <Img src="/img/start.webp" />
        </Flex>
      </SectionCard>

      <SectionCard
        isShadow
        colSpan={1}
        borderColor="gray"
        textAlign="center"
      >
        <Box
          height={76}
          color="muted"
          position="absolute"
          top={4}
          right={4}
          opacity="0.2"
        >
          <GiShakingHands size="lg" />
        </Box>
        <Flex flexDirection="column">
          <Text
            fontSize="5xl"
            fontWeight="bold"
            textAlign="center"
          >
            12
          </Text>
          <Text
            fontSize="xl"
            fontWeight="bold"
          >
            Satisfied Clients
          </Text>
          <Text color="muted">
            We’re constantly reviewing our codebase for performance.
          </Text>
        </Flex>
      </SectionCard>
      <SectionCard
        isShadow
        colStart={3}
        colEnd={4}
        rowStart={2}
        rowEnd={3}
        borderWidth={1}
        borderColor="gray"
        textAlign="center"
      >
        <Box
          height={76}
          color="muted"
          position="absolute"
          top={4}
          right={4}
          opacity="0.2"
        >
          <GiShakingHands size="lg" />
        </Box>
        <Flex flexDirection="column">
          <Text
            fontSize="5xl"
            fontWeight="bold"
            textAlign="center"
          >
            33
          </Text>
          <Text
            fontSize="xl"
            fontWeight="bold"
          >
            Years of experience
          </Text>
          <Text color="muted">
            Custom solutions for organizations, agencies and teams of six or
            more.
          </Text>
        </Flex>
        {/* <Img src="https://assets.elements.envato.com/apps/storefront/individuals-illustration-simple-f78b478fea8155aa3396.svg" /> */}
      </SectionCard>
    </Grid>
  </SectionWrapper>
);

export default ExampleSectionTwo;
