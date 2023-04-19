import {
  Box,
  Button,
  Heading,
  Text,
} from '@chakra-ui/react';
import { FiArrowRight } from 'react-icons/fi';
import { SectionWrapper } from '@/components/Sections/components';

const ContactSection = () => (
  <SectionWrapper
    mb={0}
    pb={40}
    textAlign="center"
    backgroundImage="linear-gradient(0deg, #C8FF624D 0%, #FFFFFF00 60%)"
  >
    <Box
      top={0}
      left={0}
      width="full"
      height="full"
      position="absolute"
      backgroundSize="cover"
      backgroundImage="/img/bg.webp"
      backgroundPosition="bottom center"
    />
    <Heading fontSize={{ base: '4xl', lg: '6xl' }}>Masz projekt w głowie?</Heading>
    <Heading fontSize={{ base: '3xl', lg: '5xl' }}>Zróbmy coś razem.</Heading>
    <Text
      mt={6}
      fontSize={{ base: 'xl', lg: '2xl' }}
      color="muted"
    >
      Jesteśmy gotowi Ci pomóc. Wystarczy wysłać wiadomość.
    </Text>
    <Button
      as="a"
      mt={10}
      href="/contact"
      p="1.4rem"
      size="lg"
      fontSize="md"
      borderRadius="full"
      rightIcon={<FiArrowRight />}
      variant="brandPrimary"
      colorScheme="brand"
      _hover={{
        bg: 'black',
        color: 'white',
        textDecoration: 'none',
      }}
    >
      Napisz do nas
    </Button>
  </SectionWrapper>
);

export default ContactSection;
