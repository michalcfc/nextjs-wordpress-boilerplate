// components
import {
  Box,
  Flex,
  Grid,
  Heading,
  Img,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import { SectionWrapper } from '../components';

// utils
import { SPACING } from '@/utils/styles/spacing';
import { FONT_SIZES } from '@/utils/styles/fontSizes';

const QuoteSection = () => (
  <SectionWrapper>
    <Box
      bg="yellow"
      rounded="2xl"
    >
      <Grid
        height="100%"
        gap={SPACING.lg}
        gridTemplateColumns={{ base: 'unset', lg: 'repeat(12, 1fr)' }}
      >
        <Box
          roundedTopLeft="2xl"
          roundedBottomLeft="2xl"
          gridColumn={{ base: 'span 12', lg: 'span 6' }}
        >
          <Box
            height="540px"
            overflow="hidden"
            position="relative"
            borderRadius={{ base: '1rem 1rem 0 0', lg: '1rem 0 0 1rem' }}
          >
            <Image
              fill
              alt=""
              objectFit="cover"
              objectPosition="top center"
              src="/img/about.webp"
            />

          </Box>
        </Box>
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          p={SPACING['2xl']}
          gridColumn={{ base: 'span 12', lg: '7/13' }}
        >
          <Box>
            <Heading
              size="lg"
              color="black"
            >
              Sitemark
            </Heading>
            <Text
              mt={SPACING.md}
              fontSize={FONT_SIZES.xl}
              fontStyle="italic"
            >
              “Euismod massa porttitor ut ultricies quis luctus ut. Ut amet,
              mauris, duis lectus condimentum. Orci, blandit nisi elementum
              sagittis. Sapien lorem velit purus sed sit eros eget.”
            </Text>
          </Box>
          <Box mt={5}>
            <Img
              mb={2}
              src="/img/sign.png"
              alt="Robert Fox"
            />
            <Text fontWeight="bold">Robert Fox</Text>
            <Text fontSize="xl">Head of Human Resources</Text>
          </Box>
        </Flex>
      </Grid>
    </Box>
  </SectionWrapper>
);

export default QuoteSection;
