import useSWR from 'swr';
import { Grid } from '@chakra-ui/react';
import { fetcher } from '@/lib/jsonFetcher';

// components
import { PartnersItem } from './PartnersItem';
import { SectionWrapper } from '../components';

// types
import { DataD } from '@/types/data';

const PartnersSection = () => {
  const { data, error } = useSWR<DataD>('/api/staticdata', fetcher);

  if (error) return <div>Failed to load</div>;

  if (!data) return <div>Loading...</div>;

  return (

    <SectionWrapper
      title="Nasi partnerzy"
      subtitle="Współpraca z naszymi partnerami to nie tylko profesjonalne relacje biznesowe, ale również przyjaźń i wzajemne wsparcie. Dzięki temu nasze projekty są zawsze zrealizowane w przyjaznej atmosferze, co również wpływa na ich wysoką jakość."
    >
      <Grid
        placeItems="center"
        borderBottom="1px solid #e9e9e9"
        borderLeft="1px solid #e9e9e9"
        gridTemplateColumns={{
          base: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(6, 1fr)',
        }}
      >
        {data.partners.map(({ id, img, name }) => (
          <PartnersItem
            key={id}
            id={id}
            img={img}
            name={name}
          />
        ))}
      </Grid>
    </SectionWrapper>
  );
};

export default PartnersSection;
