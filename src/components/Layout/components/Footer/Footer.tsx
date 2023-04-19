// icons
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

// components
import {
  Box,
  Container,
  GridItem,
  Img,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import {
  ListHeader,
  SocialButton,
} from './components';

const Footer = () => (
  <GridItem area="footer">
    <Box
      borderRadius="48px 48px 0px 0px"
      bg={useColorModeValue('black', 'black')}
      color={useColorModeValue('white', 'white')}
    >
      <Container
        as={Stack}
        maxW="6xl"
        py={24}
      >
        <SimpleGrid
          spacing={8}
          columns={{ base: 1, md: 2, lg: 4 }}
        >
          <Stack align="flex-start">
            <Img
              src="/img/logo.png"
              alt="Jachimov.pl"
              mb={3}
            />
            <Text>
              Od przeszło 8 lat aktywnie zajmujemy się postprodukcją materiałów wideo, na miarę
              współczesnego odbiorcy.
            </Text>
          </Stack>

          <Stack
            align="flex-start"
            spacing={3}
          >
            <ListHeader>Firma</ListHeader>
            <Link
              color="lightWhite"
              _hover={{ textDecoration: 'none', color: 'white' }}
              href="/about"
            >
              O nas
            </Link>
            <Link
              color="lightWhite"
              _hover={{ textDecoration: 'none', color: 'white' }}
              href="/offer"
            >
              Oferta
            </Link>
            <Link
              color="lightWhite"
              _hover={{ textDecoration: 'none', color: 'white' }}
              href="/upload"
            >
              Upload
            </Link>
            <Link
              color="lightWhite"
              _hover={{ textDecoration: 'none', color: 'white' }}
              href="/contact"
            >
              Kontakt
            </Link>
          </Stack>

          <Stack
            align="flex-start"
            spacing={3}
          >
            <ListHeader>Lokalnie</ListHeader>
            <Link
              href="/about"
              color="lightWhite"
              _hover={{ textDecoration: 'none', color: 'white' }}
            >
              O nas
            </Link>
            <Link
              href="/offer"
              color="lightWhite"
              _hover={{ textDecoration: 'none', color: 'white' }}
            >
              Oferta
            </Link>
            <Link
              href="/projects"
              color="lightWhite"
              _hover={{ textDecoration: 'none', color: 'white' }}
            >
              Realizacje
            </Link>
          </Stack>

          <Stack
            align="flex-start"
            spacing={3}
          >
            <ListHeader>Kontakt</ListHeader>
            <Link
              href="/contact"
              color="lightWhite"
              _hover={{ textDecoration: 'none', color: 'white' }}
            >
              Tel: 796-573-839
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle="solid"
        borderColor="#2f2f31"
      >
        <Container
          as={Stack}
          maxW="6xl"
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}
        >
          <Text color="lightWhite">© 2022 Jachimov. All rights reserved.</Text>
          <Stack
            direction="row"
            spacing={6}
          >
            <SocialButton
              label="Twitter"
              href="https://www.facebook.com/jachimovpl"
            >
              <FaTwitter />
            </SocialButton>
            <SocialButton
              label="YouTube"
              href="https://www.facebook.com/jachimovpl"
            >
              <FaYoutube />
            </SocialButton>
            <SocialButton
              label="Instagram"
              href="https://www.facebook.com/jachimovpl"
            >
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  </GridItem>
);

export default Footer;
