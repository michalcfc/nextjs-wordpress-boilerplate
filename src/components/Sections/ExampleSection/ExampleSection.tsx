import useSWR from 'swr';

// icons
import {
  FiArrowRight,
  FiCheck,
} from 'react-icons/fi';

// components
import {
  Box,
  Button,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { SectionWrapper } from '../components';

// types
import { Feature } from '@/components/Sections/ExampleSection/components';

// data
import { fetcher } from '@/utils/jsonFetcher';

// types
import { DataD } from '@/types/data';

const ExampleSection = () => {
  const { data, error } = useSWR<DataD>('/api/staticdata', fetcher);

  if (error) return <div>Failed to load</div>;

  if (!data) return <div>Loading...</div>;

  return (
    <SectionWrapper
      title="Dlaczego my?"
      subtitle="Nasza firma specjalizuje się w profesjonalnym montażu filmów. Wyróżnia nas doświadczenie, bogate portfolio i zadowolenie klientów."
    >
      <SimpleGrid
        spacing={14}
        columns={{ base: 1, lg: 2 }}
      >
        <Stack
          spacing={8}
          flexDirection="column"
        >
          <div>
            <Heading>Montaż filmu z Twojego materiału</Heading>
          </div>
          <Text
            color="muted"
            fontSize="lg"
          >
            Wszystkie projekty realizowane są w zgodzie z wymaganiami klientów i z zachowaniem ustalonych
            terminów.
          </Text>
          <List spacing={3}>
            <ListItem fontSize="lg">
              <ListIcon as={FiCheck} />
              Indywidualne podejście
            </ListItem>
            <ListItem fontSize="lg">
              <ListIcon as={FiCheck} />
              Doświadczenie
            </ListItem>
            <ListItem fontSize="lg">
              <ListIcon as={FiCheck} />
              Profesjonalizm
            </ListItem>
            <ListItem fontSize="lg">
              <ListIcon as={FiCheck} />
              Współpraca
            </ListItem>
          </List>
          <div>
            <Button
              as="a"
              size="lg"
              p="2rem"
              fontSize="md"
              rounded="full"
              href="/contact"
              variant="brandPrimary"
              rightIcon={<FiArrowRight />}
              _hover={{ bg: 'black', color: 'white', textDecoration: 'none' }}
            >
              Zacznijmy współpracę
            </Button>
          </div>
        </Stack>
        <Flex
          flexWrap={{ base: 'wrap', lg: 'nowrap' }}
          flexDirection={{ base: 'column', lg: 'row' }}
        >
          <VStack spacing={4}>
            {data.about.map(
              ({ id, name, desc }) => id % 2 === 0 && (
                <Feature
                  key={id}
                  id={id}
                  name={name}
                  desc={desc}
                />
              ),
            )}
          </VStack>
          <VStack
            mt={10}
            spacing={4}
          >
            {data.about?.map(
              ({ id, name, desc }) => id % 2 === 1 && (
                <Feature
                  key={id}
                  id={id}
                  name={name}
                  desc={desc}
                />
              ),
            )}
          </VStack>
        </Flex>
      </SimpleGrid>
      <Box
        left="0"
        top="0"
        zIndex="-1"
        width="100%"
        height="100%"
        position="absolute"
        bgRepeat="no-repeat"
        bgImage="url(/img/lines.jpg)"
      />
    </SectionWrapper>
  );
};

export default ExampleSection;
