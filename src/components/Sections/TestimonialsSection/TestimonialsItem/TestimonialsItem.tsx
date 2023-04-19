// icons
import { FaQuoteRight } from 'react-icons/fa';

// components
import {
  Box,
  Flex,
  Grid,
  Heading,
  Img,
  Text,
} from '@chakra-ui/react';
import { SectionCard } from '@/components/Sections/components';

// types
import { TestimonialsItemD } from './TestimonialsItem.d';

const TestimonialsItem = ({
  img,
  name,
  title,
  text,
  company,
}: TestimonialsItemD) => (
  <SectionCard
    variant="dark"
    isShadow
  >
    <Grid
      gap={3}
      height="full"
      justifyContent="space-between"
    >
      <Box
        top={4}
        right={4}
        height={8}
        position="absolute"
        color="brand"
      >
        <FaQuoteRight size="lg" />
      </Box>
      <Heading
        size="md"
        color="white"
      >
        {title}
      </Heading>
      <Text
        mb={3}
        fontSize="lg"
        fontStyle="italic"
        color="lightWhite"
      >
        {`"${text}"`}
      </Text>
      <Flex
        alignItems="center"
        marginTop="auto"
      >
        <Box
          bg="brand"
          boxShadow="md"
          width={14}
          height={14}
          mr={3}
          rounded="full"
        >
          <Img
            p={1}
            alt={name}
            width={14}
            height={14}
            src={`${img}`}
            rounded="full"
          />
        </Box>
        <Flex
          flexDirection="column"
          color="lightWhite"
        >
          <Text fontWeight="bold">{name}</Text>
          <Text fontSize="sm">{company}</Text>
        </Flex>
      </Flex>
    </Grid>
  </SectionCard>
);

export default TestimonialsItem;
