import {
  Heading,
  Link,
  ListItem,
  OrderedList,
} from '@chakra-ui/react';

const UploadInfo = () => (
  <div>
    <Heading
      fontSize={24}
      mb={3}
    >
      Ważne informacje:
    </Heading>
    <OrderedList spacing={4}>
      <ListItem>
        Przed wysyłką materiału skontaktuj się z nami.
        Materiały są przechowywane w chmurze tylko przez 24h,
        dlatego musimy mieć możliwość pobrania w określonym czasie 🙂
      </ListItem>
      <ListItem>
        Jeżeli wysyłasz duży materiał (ponad 15 gb), warto podzielić
        go na paczki np. przy użyciu programu winrar/7zip i wysyłać je pojedyńczo.
        Materiał dociera do nas tylko wtedy gdy załaduje się w 100%,
        dlatego jeżeli stabilność łącza zostanie zakłócona
        w trakcie wysyłania, to trzeba będzie całość wrzucać
        ponownie.
      </ListItem>
      <ListItem>
        Jeżeli masz problemy z wysyłką, skorzystaj z chmury Google/Dropbox lub innej, a
        następnie
        {' '}
        <Link
          target="_blank"
          href="/contact"
        >
          napisz do nas
        </Link>
        .
      </ListItem>
    </OrderedList>
  </div>
);

export default UploadInfo;
