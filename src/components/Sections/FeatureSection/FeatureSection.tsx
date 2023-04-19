import React from 'react';
import useSWR from 'swr';
import {
  Grid,
  Heading,
  Text,
} from '@chakra-ui/react';
import { fetcher } from '@/lib/jsonFetcher';

// icons
// components
import { SectionWrapper } from '@/components/Sections/components';
import {
  SectionCard,
  SectionCardIcon,
} from '@/components/common/SectionCard';

// utils
import { SPACING } from '@/utils/styles/spacing';
import { FONT_WEIGHTS } from '@/utils/styles/fontWeights';

// helpers
import {
  getFeatureIcon,
  getIconBg,
  getIconColor,
} from './helpers';

// types
import { DataD } from '@/types/data';

const FeatureSection = () => {
  const { data, error } = useSWR<DataD>('/api/staticdata', fetcher);

  if (error) return <div>Failed to load</div>;

  if (!data) return <div>Loading...</div>;
  return (

    <SectionWrapper
      title="Stunning Features Which"
      markText={"You'll Love!"}
      subtitle="Our themes come with interactive design tools and features that could make you feel like a pro after a few clicks."
    >
      <Grid
        gap={SPACING.xl}
        gridTemplateColumns="repeat(auto-fill, minmax(240px, 1fr))"
      >
        {data.features.map(({ id, name, desc }) => (
          <SectionCard
            key={id}
            isShadow
          >
            <Grid gap={3}>
              <SectionCardIcon
                bg={getIconBg(id)}
                color={getIconColor(id)}
                icon={getFeatureIcon(id)}
              />
              <Heading
                as="h4"
                fontSize="md"
                fontWeight={FONT_WEIGHTS.bold}
              >
                {name}
              </Heading>
              <Text color="muted">{desc}</Text>
            </Grid>
          </SectionCard>
        ))}
      </Grid>
    </SectionWrapper>
  );
};

export default FeatureSection;
