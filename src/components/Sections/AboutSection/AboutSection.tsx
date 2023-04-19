import Image from 'next/image';

// components
import {
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { SectionWrapper } from '../components';

const AboutSection = () => (
  <SectionWrapper>
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={14}
    >
      <Image
        width={520}
        height={420}
        alt="About us"
        src="/img/about.png"
      />
      <Stack
        flexDirection="column"
        spacing={8}
      >
        <div>
          <Text
            rounded="md"
            fontSize="sm"
            fontWeight={600}
            position="relative"
            alignSelf="flex-start"
            textTransform="uppercase"
            _after={{
              content: "''",
              right: '0',
              left: '-7px',
              zIndex: '-1',
              opacity: '1',
              bottom: '2px',
              width: '22px',
              height: '22px',
              marginLeft: '0',
              borderRadius: '50%',
              position: 'absolute',
              background: '#d4f843',
              transition: 'all .3s ease',
            }}
          >
            O nas
          </Text>
          <Heading>Dlaczego warto nam zaufać?</Heading>
        </div>
        <Text
          color="muted"
          fontSize="lg"
        >
          W Jachimov wierzymy, że podstawą owocnej współpracy jest budowa relacji partnerskich. Dlatego do
          każdego klienta podchodzimy indywidualnie, wysłuchujemy jego pomysłów, tak by miał on możliwość
          uczestniczenia na każdym etapie produkcji.
        </Text>
        <Text
          color="muted"
          fontSize="lg"
        >
          Dla naszego zespołu żaden gatunek filmowy nie jest obcy. Dzięki temu śmiało możemy powiedzieć, że
          nie znamy takiego słowa, jak ograniczenia.
        </Text>
        <Text
          color="muted"
          fontSize="lg"
        >
          Niezależnie od tego, czy zajmujemy się montażem programów
          telewizyjnych, reklam, trailerów, czy kompilacji, a nawet prezentacji chętnie wykorzystujemy swoje
          nieszablonowe myślenie.
        </Text>
        <Text
          color="muted"
          fontSize="lg"
        >
          Za sprawą naszego indywidualnego podejścia do klienta, a zwłaszcza procesu
          postprodukcji tworzymy materiały, które na dobre zapadają w pamięć.
        </Text>
      </Stack>
    </SimpleGrid>
  </SectionWrapper>
);

export default AboutSection;
